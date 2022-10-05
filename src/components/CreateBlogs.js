import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateBlogs = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');

    const history = useHistory();
  

    const handleSubmit = (e) => {
        e.preventDefault();
         const blog = { title, body, author };

        fetch('http://localhost:3004/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
          
            history.push('/');
        })
    }

    return ( 
        <div className='createblogs'>
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>

                <input 
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                />
            <button>Add Blog</button>
             {/* <button>Adding Blog</button>  */}
            </form>
        </div>
     );
}
 
export default CreateBlogs;