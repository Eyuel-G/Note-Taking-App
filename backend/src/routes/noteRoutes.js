import express from "express"

const router = express.Router()

import { getAllNotes, getNoteById, createANote, updateANote, deleteANote } from '../controllers/notesControllers.js'


router.get('/', getAllNotes)
router.get('/:id', getNoteById)
router.post('/', createANote)
router.put('/:id', updateANote)
router.delete('/:id', deleteANote) 

export default router