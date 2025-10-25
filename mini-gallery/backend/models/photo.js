import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String},
    imageUrl: {type: String, required: true},
}, {timestamps: true});