import React from 'react';
import './Blog.css'

const Blog = ({blog}) => {
    const {question, answer} = blog;
    
    return (
        <div className='blog flex flex-col gap-3'>
            <h1 className="text-2xl text-green-500">{question}</h1>
            <p>{answer}</p>
        </div>
    );
};

export default Blog;