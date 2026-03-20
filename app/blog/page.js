import React from 'react';
import BlogList from './BlogList';

export const metadata = {
  title: 'Blog | Our Latest Updates',
  description: 'Read our latest blogs and updates.',
};

export default async function BlogPage() {
  let blogs = [];
  
  try {
    const res = await fetch('https://pizza-adminblog.vercel.app/api/blogs', { 
      cache: 'no-store' // Fetches fresh data on every request
    });
    
    if (res.ok) {
      const data = await res.json();
      // Adjust according to standard API structures:
      blogs = Array.isArray(data) ? data : (data.blogs || data.data || []);
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return <BlogList blogs={blogs} />;
}
