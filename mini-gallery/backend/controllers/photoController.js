import Photo from "../models/photo.js";
import fs from "fs";
import path from "path";

// ✅ Get all photos
export const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find().sort({ createdAt: -1 });
    res.status(200).json(photos);
  } catch (error) {
    console.error("❌ GET Error:", error);
    res.status(500).json({
      message: "Failed to get photos",
      error: error.message,
    });
  }
};

// ✅ Add photo
export const addPhoto = async (req, res) => {
  try {
    // Validate
    if (!req.body.title || !req.body.description || !req.file) {
      return res
        .status(400)
        .json({ status: "missing required fields", body: req.body });
    }

    const { title, description } = req.body;

    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    const photo = await Photo.create({ title, description, imageUrl });

    res.status(201).json({
      message: "✅ Photo added successfully",
      photo,
    });
  } catch (error) {
    console.error("❌ POST Error:", error);
    res.status(500).json({
      message: "Failed to add photo",
      error: error.message,
    });
  }
};

// ✅ Update photo
export const updatePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updateData = { title, description };

    if (req.file) {
      updateData.imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }

    const updated = await Photo.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Photo not found" });
    }

    res.json({
      message: "✅ Photo updated successfully",
      photo: updated,
    });
  } catch (error) {
    console.error("❌ PUT Error:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete photo
export const deletePhoto = async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await Photo.findById(id);

    if (!photo) {
      return res.status(404).json({ message: "Photo not found" });
    }

    // Extract the actual file name if imageUrl is full URL
    const fileName = photo.imageUrl.split("/uploads/")[1];
    const filePath = path.join("uploads", fileName);

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await photo.deleteOne();

    res.json({ message: "✅ Photo deleted successfully" });
  } catch (error) {
    console.error("❌ DELETE Error:", error);
    res.status(500).json({ message: error.message });
  }
};
