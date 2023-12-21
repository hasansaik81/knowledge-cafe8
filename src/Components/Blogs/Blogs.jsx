import React, { useEffect, useState } from 'react';


import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {

   
    const[blogs,setBlogs]=useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div className="w-full md:w-2/3 mt-10">
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};





export default Blogs;