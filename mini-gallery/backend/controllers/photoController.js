import Photo from "../models/photo.js";
import fs from 'fs';

//get all photos

export const getPhotos = async (req, res) => {
    try {
        const photos = await Photo.find().sort({createdAt: -1});
        res.status(200).json(photos);
    } catch (error) {
        res.status(500).json({
        message: error.message,
        "status": "Failed to get photos"
        });
    }
};

//add photo
export const addPhoto = async (req, res) => {
    try {

        if(!req.body.title || !req.body.description || !req.file) {
            return res.status(400).json({status: "misiing required fields"});
        }

        const {title, description} = req.body;
        const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
        const photo = await Photo.create({title, description, imageUrl});
        res.status(201).json({
            message: "Photo added successfully",
            photo
        });
    } catch(error) {
        res.status(500).json({
            message: error.message,
            "status": "Failed to add photo"
        });
    };
};

//update photo
export const updatePhoto = async (res, req) => {
    try {
        const {id} = req.params;
        const {title, description } = req.body;
        const updateData = {title, description};

        if(req.file) {
            const newImage = `/uploads/${req.file.filename}`;
            updateData.imageUrl = newImage;
        }

        const updated = await Photo.findByIdAndUpdate(id, updateData, {new: true});
        res.json(updated);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

//delete photo
export const deletePhoto = async (req, res) => {
    try{
        const {id} = req.params;
        const photo = await Photo.findById(id);
        if(!photo) {
            return res.status(404).json({message: "Photo not found"});
        }
        const filePath = `.${photo.imageUrl}`;
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
        await photo.deleteOne();
        res.json({message: "Photo deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};