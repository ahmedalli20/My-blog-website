import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            
            <div className='navbar'>
            <h1>My Blog App</h1>
                <Link to="/">Home</Link>
                <Link to="/createBlogs">Create Blog</Link>
            </div>
        </nav>
     );
}

export default Navbar;