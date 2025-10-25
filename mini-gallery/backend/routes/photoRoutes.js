import express from 'express';
import multer from 'multer';
import path from 'path';
import {getPhotos, addPhoto, updatePhoto, deletePhoto} from '../controllers/photoController.js';

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({storage});

// Routes
router.get('/', getPhotos);
router.post('/', upload.single('image'), addPhoto);
router.put('/:id', upload.single('image'), updatePhoto);
router.delete('/:id', deletePhoto);

export default router;

