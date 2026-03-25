import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import { formatBlogDate, getBlogIdentifier, normalizeBlogHtml } from '../blogHelpers';

async function fetchBlogs() {
  try {
    const res = await fetch('https://pizza-adminblog.onrender.com/api/blogs', {
      cache: 'force-cache',
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : data.blogs || data.data || [];
  } catch (error) {
    console.error('Error fetching blog details:', error);
    return [];
  }
}

function findBlogById(blogs, blogId) {
  return blogs.find((blog, index) => getBlogIdentifier(blog, index) === blogId);
}

export const dynamicParams = true;

export async function generateStaticParams() {
  const blogs = await fetchBlogs();
  const seen = new Set();

  return blogs
    .map((blog, index) => getBlogIdentifier(blog, index))
    .filter((blogId) => {
      if (!blogId || seen.has(blogId)) {
        return false;
      }
      seen.add(blogId);
      return true;
    })
    .map((blogId) => ({ blogId }));
}

export async function generateMetadata({ params }) {
  const blogs = await fetchBlogs();
  const blog = findBlogById(blogs, params.blogId);

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
  const blogs = await fetchBlogs();
  
  if (!blogs || blogs.length === 0) {
    notFound();
  }
  
  const blog = findBlogById(blogs, params.blogId);

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
              <div className="relative w-full max-h-[520px] overflow-hidden bg-gray-100">
                <img
                  src={blog.imageUrl}
                  alt={blog.title || 'Blog image'}
                  className="w-full h-full object-cover"
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