import React from 'react';
import BlogList from './BlogList';

export const metadata = {
  title: {
    absolute: 'Pizza Mamma Mia Blog | Recipes, Tips & Italian Food',
  },
  description: 'Explore Pizza Mamma Mia\'s blog for authentic Italian recipes, pizza tips, ingredient guides, and delicious inspiration for food lovers and home cooks.',
};

export default function BlogPage() {
  return <BlogList />;
}
