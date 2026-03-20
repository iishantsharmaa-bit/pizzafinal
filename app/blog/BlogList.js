'use client';

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch('https://pizza-adminblog.vercel.app/api/blogs');
        if (res.ok) {
          const data = await res.json();
          setBlogs(Array.isArray(data) ? data : (data.blogs || data.data || []));
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  // Close modal when clicking outside
  const handleBackdropClick = (e) => {
    if (e.target.id === 'modal-backdrop') {
      setSelectedBlog(null);
    }
  };

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
                let formattedDate = 'Unknown Date';
                if (blog.createdAt) {
                  // Handle both string format and { $date: format }
                  const dateVal = typeof blog.createdAt === 'object' && blog.createdAt.$date 
                    ? blog.createdAt.$date 
                    : blog.createdAt;
                    
                  const dateObj = new Date(dateVal);
                  if (!isNaN(dateObj.getTime())) {
                    formattedDate = dateObj.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    });
                  }
                }

                return (
                  <article 
                    key={index} 
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray-100 cursor-pointer group"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <img
                      src={blog.imageUrl}
                      alt={blog.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm">
                      {formattedDate}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 capitalize line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3 mb-6 flex-grow">
                      {blog.content}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                      <button className="text-red-600 font-semibold group-hover:text-red-700 transition-colors flex items-center gap-2">
                        Read full article
                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          )}
        </div>
      </div>

      {/* Modal / Popup */}
      {selectedBlog && (
        <div 
          id="modal-backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity"
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative animate-fade-in-up">
            {/* Close Button */}
            <button 
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 bg-black/5 hover:bg-black/10 transition-colors rounded-full p-2 z-10"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative h-64 sm:h-80 w-full bg-gray-50 flex items-center justify-center rounded-t-2xl">
              <img
                src={selectedBlog.imageUrl}
                alt={selectedBlog.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10">
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                <span>
                  {(() => {
                    if (!selectedBlog?.createdAt) return 'Unknown Date';
                    const dateVal = typeof selectedBlog.createdAt === 'object' && selectedBlog.createdAt.$date 
                      ? selectedBlog.createdAt.$date 
                      : selectedBlog.createdAt;
                    const dateObj = new Date(dateVal);
                    return isNaN(dateObj.getTime()) ? 'Unknown Date' : dateObj.toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    });
                  })()}
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 capitalize">
                {selectedBlog.title}
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap">
                {selectedBlog.content}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
