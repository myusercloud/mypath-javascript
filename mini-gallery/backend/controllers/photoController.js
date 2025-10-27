import Photo from "../models/photo.js";
import fs from "fs";
import path from "path";
import mongoose from "mongoose";

// ✅ Get all photos
export const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().sort({ createdAt: -1 });
    res.status(200).json(photos);
  } catch (error) {
    console.error("❌ GET Error:", error);
    res.status(500).json({ message: "Failed to get photos", error: error.message });
  }
};

// ✅ Add photo
export const addPhoto = async (req, res) => {
  try {
    if (!req.body.title || !req.body.description || !req.file) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const { title, description } = req.body;
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    const photo = await Photo.create({ title, description, imageUrl });
    res.status(201).json({ message: "✅ Photo added successfully", photo });
  } catch (error) {
    console.error("❌ POST Error:", error);
    res.status(500).json({ message: "Failed to add photo", error: error.message });
  }
};

// ✅ Update photo
export const updatePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid photo ID" });
    }

    const { title, description } = req.body;
    const photo = await Photo.findById(id);
    if (!photo) return res.status(404).json({ message: "Photo not found" });

    // Delete old file if a new one is uploaded
    if (req.file) {
      const oldFileName = photo.imageUrl.split("/uploads/")[1];
      const oldFilePath = path.join("uploads", oldFileName);
      if (fs.existsSync(oldFilePath)) fs.unlinkSync(oldFilePath);

      photo.imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }

    if (title) photo.title = title;
    if (description) photo.description = description;

    const updated = await photo.save();

    res.json({ message: "✅ Photo updated successfully", photo: updated });
  } catch (error) {
    console.error("❌ PUT Error:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete photo
export const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid photo ID" });
    }

    const photo = await Photo.findById(id);
    if (!photo) return res.status(404).json({ message: "Photo not found" });

    const fileName = photo.imageUrl?.split("/uploads/")[1];
    if (fileName) {
      const filePath = path.join("uploads", fileName);
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    }

    await photo.deleteOne();
    res.json({ message: "✅ Photo deleted successfully" });
  } catch (error) {
    console.error("❌ DELETE Error:", error);
    res.status(500).json({ message: error.message });
  }
};
