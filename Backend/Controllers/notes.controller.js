import Note from '../Models/note.model.js';

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find(); 
        res.status(200).json({
            success: true,
            data: notes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to retrieve notes',
            error: error.message,
        });
    }
};

export const createNote = async (req, res) => {
    try {
        const { content, author, likes } = req.body;

        if (!content || !author) {
            return res.status(400).json({
                success: false,
                message: 'Content and author are required',
            });
        }

        const newNote = new Note({
            content,
            author,
            likes: 0,
        });

        const savedNote = await newNote.save();
        res.status(201).json({
            success: true,
            message: 'Note created successfully',
            data: savedNote,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to create note',
            error: error.message,
        });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedNote = await Note.findByIdAndDelete(id);

        if (!deletedNote) {
            return res.status(404).json({
                success: false,
                message: 'Note not found',
            });
        }

        res.status(200).json({
            success: true,
            message: 'Note deleted successfully',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete note',
            error: error.message,
        });
    }
};

export const likeNote = async (req, res) => {
        try {
            const { id } = req.params;
    
         
            const updatedNote = await Note.findByIdAndUpdate(
                id,
                { $inc: { likes: 1 } },
             
            );
    
            res.status(200).json({ message: "Note liked", data: updatedNote });
        } catch (error) {
            console.error("Error liking note:", error);
            res.status(500).json({ message: "Server error" });
        }
    };


    export const unlikeNote = async (req, res) => {
            try {
                const { id } = req.params;
        
                
                const updatedNote = await Note.findByIdAndUpdate(
                    id,
                    { $inc: { likes: -1 } },
                  
                );
              
                if (updatedNote.likes < 0) {
                    updatedNote.likes = 0;
                    await updatedNote.save();
                }
        
                res.status(200).json({ message: "Note unliked", data: updatedNote });
            } catch (error) {
                console.error("Error unliking note:", error);
                res.status(500).json({ message: "Server error" });
            }
        };
    
