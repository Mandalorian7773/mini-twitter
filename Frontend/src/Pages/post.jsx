import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './post.css';



function Post() {
  const [newNote, setNewNote] = useState({ content: '', author: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/notes", newNote);
      setNewNote({ content: '', author: '' });
      navigate('/'); 
    } catch (error) {
      console.error('Error creating note:', error);
    }
  };

  return (
    <>
    <div className='postContainer'>
      <h1>Create New Note</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <label>Content:</label>
          <input
            value={newNote.content}
            onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            value={newNote.author}
            onChange={(e) => setNewNote({ ...newNote, author: e.target.value })}
            required
          />
        </div>
        <button type="submit">Post Note</button>
      </form>
    </div>

    </>
  );
}

export default Post;