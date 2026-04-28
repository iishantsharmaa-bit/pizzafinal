import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import { formatBlogDate, normalizeBlogHtml } from '../blogHelpers';

function normalizeTitle(value = '') {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[\-_]+/g, ' ')
    .replace(/[æÆ]/g, 'ae')
    .replace(/[øØ]/g, 'o')
    .replace(/[åÅ]/g, 'a')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/[^a-z0-9\s'".]/g, '')
    .trim();
}

async function fetchBlogByTitle(title) {
  try {
    const encodedTitle = encodeURIComponent(String(title || '').trim());
    if (!encodedTitle) {
      return null;
    }

    const res = await fetch(`https://pizza-adminblog.onrender.com/api/blogs/by-title/${encodedTitle}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching blog details:', error);
    return null;
  }
}

async function fetchBlogs() {
  try {
    const res = await fetch('https://pizza-adminblog.onrender.com/api/blogs', {
      cache: 'no-store',
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : data.blogs || data.data || [];
  } catch (error) {
    console.error('Error fetching blogs fallback list:', error);
    return [];
  }
}

function findBlogByFlexibleTitle(blogs, requestedTitle) {
  const normalizedRequested = normalizeTitle(requestedTitle);
  return blogs.find((blog) => normalizeTitle(blog?.title) === normalizedRequested) || null;
}

async function resolveBlogByRouteTitle(routeTitle) {
  // Decode percent-encoding, then convert hyphens → spaces (slug format)
  const decodedTitle = decodeURIComponent(routeTitle || '').replace(/-/g, ' ');
  if (!decodedTitle.trim()) {
    return null;
  }

  const byTitleBlog = await fetchBlogByTitle(decodedTitle);
  if (byTitleBlog) {
    return byTitleBlog;
  }

  // Fallback for legacy/dirty titles where API exact-match can miss.
  const blogs = await fetchBlogs();
  if (!blogs.length) {
    return null;
  }

  return findBlogByFlexibleTitle(blogs, decodedTitle);
}

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function generateMetadata({ params }) {
  const { blogId } = await params;
  const blog = await resolveBlogByRouteTitle(blogId || '');

  if (!blog) {
    return {
      title: 'Blog Not Found | Pizza Mamma Mia',
      description: 'The blog you are looking for could not be found.',
    };
  }

  return {
    title: `${blog.title} | Pizza Mamma Mia Blog`,
    description: blog.content ? String(blog.content).replace(/<[^>]*>/g, ' ').slice(0, 155) : 'Read the latest Pizza Mamma Mia blog article.',
  };
}

export default async function BlogDetailPage({ params }) {
  const { blogId } = await params;
  const blog = await resolveBlogByRouteTitle(blogId || '');

  if (!blog) {
    notFound();
  }

  const formattedDate = formatBlogDate(blog.createdAt);
  const blogHtml = normalizeBlogHtml(blog.content || '');

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Header />

      <main className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 mb-6"
          >
            <span aria-hidden="true">&larr;</span>
            Back to all blogs
          </Link>

          <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {blog.imageUrl && (
              <div className="w-full bg-gray-100 aspect-video sm:aspect-auto">
                <Image
                  src={blog.imageUrl}
                  alt={blog.title || 'Blog image'}
                  width={900}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                  quality={75}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 900px"
                />
              </div>
            )}

            <div className="p-6 sm:p-10">
              <p className="text-sm text-gray-500 mb-3">{formattedDate}</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-8 capitalize">{blog.title}</h1>

              <div
                className="blog-content text-gray-800"
                dangerouslySetInnerHTML={{ __html: blogHtml }}
              />
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}