import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
},{ timestamps: true });

// Create a model from the schema
const User = mongoose.model('User', userSchema);
//to use anywhere in the project
export default User;
