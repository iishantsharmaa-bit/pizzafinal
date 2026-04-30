'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Header';
import { formatBlogDate, getBlogIdentifier } from './blogHelpers';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('https://pizza-adminblog-2.onrender.com/api/blogs');
        if (!res.ok) {
          console.error('Blog API response not OK:', res.status);
          setLoading(false);
          return;
        }
        const data = await res.json();
        const blogArray = Array.isArray(data) ? data : (data.blogs || data.data || []);
        setBlogs(blogArray);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Include Header just like the Contact page */}
      <Header />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Our Latest Blogs
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Stay up to date with our newest recipes, offers, and stories.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
          ) : !blogs || blogs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
              <svg className="h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900">No blogs yet</h3>
              <p className="mt-2 text-gray-500 text-lg">Check back later for exciting updates and stories.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {blogs.map((blog, index) => {
                const rawTitle = String(blog?.title || getBlogIdentifier(blog, index));
                const blogId = rawTitle.trim().replace(/\s+/g, '-');
                const formattedDate = formatBlogDate(blog.createdAt);
                return (
                  <Link
                    key={blogId}
                    href={`/blog/${blogId}`}
                    className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100 cursor-pointer group"
                  >
                  <div className="relative aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src={blog.imageUrl || '/placeholder.jpg'}
                      alt={blog.title || 'Blog image'}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm">
                      {formattedDate}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 capitalize line-clamp-2">
                      {blog.title}
                    </h2>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-red-600 font-semibold group-hover:text-red-700 transition-colors flex items-center gap-2">
                        Read full article
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  </Link>
              );
            })}
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
