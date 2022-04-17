import React from 'react';
import './Blog.css'

const Blog = ({blog}) => {
    const {question, answer} = blog;
    return (
        <div className='blog'>
            <h1 className="text-2xl text-green-500">Q. {question}</h1>
            <p>{answer}</p>
        </div>
    );
};

export default Blog;