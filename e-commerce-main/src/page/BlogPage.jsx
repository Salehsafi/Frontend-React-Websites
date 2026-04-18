import React from 'react';
import './BlogPage.css';

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "The Art of Minimalism in Ecommerce",
      excerpt: "Discover why less is more when it comes to online shopping experiences.",
      date: "Oct 24, 2023",
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Top 10 Accessories for 2024",
      excerpt: "Stay ahead of the curve with our curated list of must-have items.",
      date: "Nov 12, 2023",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Sustainability in Fashion",
      excerpt: "How we're working to make our products more environmentally friendly.",
      date: "Dec 05, 2023",
      image: "https://images.unsplash.com/photo-1581404917879-53e19259fddd?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="blog_page">
      <div className="container">
        <h1>Our Blog</h1>
        <div className="blog_grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog_card">
              <div className="blog_img">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog_info">
                <span className="date">{blog.date}</span>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <button className="read_more">Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
