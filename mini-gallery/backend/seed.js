import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";
import Photo from "./models/photo.js";

dotenv.config();

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/mini_gallery";

mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Generate fake data
const generatePhotos = (count = 100) => {
  const photos = [];
  for (let i = 0; i < count; i++) {
    photos.push({
      title: faker.lorem.words(3),
      description: faker.lorem.sentence(),
      imageUrl: faker.image.urlLoremFlickr({ category: "tech" }), // you can replace 'nature' with 'city', 'tech', etc.
    });
  }
  return photos;
};

const seedDatabase = async () => {
  try {
    await Photo.deleteMany(); // Clear old data
    const fakePhotos = generatePhotos(100);
    await Photo.insertMany(fakePhotos);
    console.log(`🌱 Seeded ${fakePhotos.length} photos successfully!`);
  } catch (error) {
    console.error("❌ Error seeding data:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
