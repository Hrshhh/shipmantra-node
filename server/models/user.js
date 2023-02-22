import mongoose from "mongoose";
const {Schema} = mongoose

const userSchema = new Schema({
    businessName:{
        type: String,
        required: "Business Name is required"
    },
    contactName:{
        type: String,
        required: "Contact Name is required"
    },
    phoneNumber:{
        type: Number,
        required: "Business Name is required",
        unique: true

    },
    email:{
        type: String,
        required: "Email Id is required",
        unique: true
    },
    websiteName:{
        type: String
    }

},{timestamps: true})

export default mongoose.model('b2b_queries', userSchema)
