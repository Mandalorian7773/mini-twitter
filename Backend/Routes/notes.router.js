
import express from 'express';
import {getAllNotes, createNote, deleteNote, likeNote, unlikeNote} from '../Controllers/notes.controller.js';

const router = express.Router();

router.get('/', getAllNotes);

router.post('/', createNote);

router.delete('/:id', deleteNote);

router.patch('/:id/like', likeNote);

router.patch('/:id/unlike', unlikeNote);

export default router;


