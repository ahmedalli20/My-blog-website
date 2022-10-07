import React, { useState, useEffect } from 'react';
import BlogDetails from './BlogDetails';
import BlogList from './BlogList';




const Home = () => {
  
    const[blogs, setBlogs] = useState([]);

    const fetcher = () =>{
        fetch("http://localhost:3004/blogs")
        .then((response) => response.json())
        .then((data) => {
            //  console.log(data)
          setBlogs(data);
            });
    }

    useEffect(() => {
        fetcher()
        
        }, []);


    return (
        <div>
              <BlogList blogs={blogs} title="All Blogs"/>  


        </div>


    );
};

export default Home;