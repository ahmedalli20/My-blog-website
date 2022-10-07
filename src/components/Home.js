import React from 'react';

import BlogList from './BlogList';




const Home = ({blogs}) => {
  
    

    return (
        <div>
              <BlogList blogs={blogs} title="All Blogs"/>  
              

        </div>


    );
};

export default Home;