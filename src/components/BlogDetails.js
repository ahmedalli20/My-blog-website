import React from 'react';
  import { useParams, useNavigate, } from 'react-router-dom';
//  import BlogList from './BlogList';


const BlogDetails = ({blogs , fetcher}) => {
    // console.log(blogs);
       
        const { title } = useParams();
         const navigate = useNavigate();
        //  console.log(id)
     
        const blogDetails = blogs.filter((post) => post.title === title).map((blog) =>          
        <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div className='body'>{blog.body}</div>
            <a href={`CreateBlogs/edit/${blog.id}`}><button>Edit Details</button></a>
            <button onClick={()=>handleDelete(blog)} >Delete</button> 
        </div>
    )
       
  
 
    const handleDelete = (blog) => {
      fetch(`https://calm-newt-belt.cyclic.app/blogs/${blog.id}`, {
           method: 'DELETE'
      }).then(() => {
          console.log(blog.id)
           navigate('/Home');
           fetcher()
          })
  }
    return (
        < div className='details'>

         {blogDetails}
            
         </div>

        
    );
};

export default BlogDetails;