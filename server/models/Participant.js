import mongoose from "mongoose";
const participantSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        profileImage: {
            type: String,
            default: "",
        },

        dateOfBirth: {
            type: Date,
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other", "Prefer not to say"],
        },

        address: {
            street: {
                type: String,
                trim: true,
            },
            city: {
                type: String,
                trim: true,
            },
            state: {
                type: String,
                trim: true,
            },
            country: {
                type: String,
                trim: true,
                default: "India",
            },
            pincode: {
                type: String,
                trim: true,
            },
        },

        bio: {
            type: String,
            maxlength: 300,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);


const Participant = mongoose.model("Participant", participantSchema);

export default Participant;