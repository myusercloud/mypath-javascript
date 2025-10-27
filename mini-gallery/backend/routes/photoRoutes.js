import express from "express";
import multer from "multer";
import path from "path";
import { getPhotos, addPhoto, updatePhoto, deletePhoto } from "../controllers/photoController.js";

const router = express.Router();

// ✅ Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(process.cwd(), "uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname.replace(/\s+/g, "_");
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

// ✅ Routes
router.get("/", getPhotos);
router.post("/", upload.single("image"), addPhoto);     // be consistent: 'file' or 'image'
router.put("/:id", upload.single("image"), updatePhoto);
router.delete("/:id", deletePhoto);

export default router;
