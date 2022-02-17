const express = require("express");
const NoteServices = require("./services");
const route = express.Router();


route.post('/notes', async(req, res) => {
    const {title, body} = req.body;
    const notes = await new NoteServices().addNotes({title, body});
    res.json(notes)
});

route.get('/notes', async (req, res) => {
    const notes = await new NoteServices().getNotes();
    res.json(notes);
});

route.get('/notes/:id', async (req, res) => {
    const noteId = req.params.id;
    const getNoteById = await new NoteServices().getNoteById(noteId);
    res.json(getNoteById);
});

route.put('/notes/:id', async (req, res) => {
    const {title, body} = req.body;
    const noteId = req.params.id;
    const editNoteById = await new NoteServices().editNoteById(noteId, {title, body});
    res.json(editNoteById);
});

route.delete('/notes/:id', async (req, res) => {
    const noteId = req.params.id;
    const deleteNoteById = await new NoteServices().deleteNoteById(noteId);
    res.json(deleteNoteById);
});

module.exports = route;

