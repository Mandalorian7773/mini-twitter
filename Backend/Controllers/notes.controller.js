const express = require('express');
const connection = require('../db/connection');

export const getAllNotes = (req, res) => {
    res.json({
        message: 'Get all notes',
    });
}

export const createNote = (req, res) => {
    res.json({
        message: 'Note creation',
    });
}

export const deleteNote = (req, res) => {
    res.json({
        message: 'Note Deletion',
    });
}




