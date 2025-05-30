import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './notes.css';

function Notes() {
    const [notes, setNotes] = useState([]);

    const fetchNotes = async () => {
        try {
            const response = await axios.get('http://localhost:4000/notes');
            setNotes(response.data.data || []);
        } catch (error) {
            console.error("Error fetching notes:", error);
            setNotes([]); 
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const handleLike = async (id) => {
        try {
            await axios.patch(`http://localhost:4000/notes/${id}/like`);
            await fetchNotes(); 
        } catch (error) {
            console.error("Error liking note:", error);
        }
    };

    const handleUnlike = async (id) => {
        try {
            await axios.patch(`http://localhost:4000/notes/${id}/unlike`);
            await fetchNotes();
        } catch (error) {
            console.error("Error unliking note:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:4000/notes/${id}`);
            await fetchNotes();
        } catch (error) {
            console.error("Error deleting note:", error);
        }
    };

    return (
        <div className="notesContainer">
            <h1>Notes</h1>
            <ul className="notesList">
                {Array.isArray(notes) && notes.map(note => (
                    <li className="note" key={note._id}>
                        <p className="author"><strong>Author:</strong> {note.author}</p>
                        <p className="content"><strong>Content:</strong> {note.content}</p>
                        <p className="like"><strong>Likes:</strong> {note.likes}</p>
                        <p className="created"><strong>Created:</strong> {new Date(note.createdAt).toLocaleString()}</p>
                        <button className="deleteButton" onClick={() => handleDelete(note._id)}>Delete</button>
                        <button className="likeButton" onClick={() => handleLike(note._id)}>Like</button>
                        <button className="unlikeButton" onClick={() => handleUnlike(note._id)}>Unlike</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Notes;

