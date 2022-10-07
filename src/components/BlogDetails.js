import React from 'react';
  import { useParams, useNavigate } from 'react-router-dom';
 import BlogList from './BlogList';


const BlogDetails = ({blogs}) => {
    console.log(blogs);

        const { id } = useParams();
         const navigate = useNavigate();


        //  blogs.filter(blog => (
//          return blog.id === id
        // ))

 
    const handleClick = () => {
        fetch(`http://localhost:3004/blogs/${blogs.id}` ,{
            method: 'DELETE'
        }).then(() => {
             navigate('/Home');
        })
    }
    return (
        <div>

        <h2>{blogs.title}</h2>
        <p>Written by {blogs.author}</p>
        <div>{blogs.body}</div>
        <button onClick={handleClick}>Delete</button>   

        </div>

        
    );
};

export default BlogDetails;