import mongoose from "mongoose";
const {Schema} = mongoose

const enquirySchema = new Schema({
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

<<<<<<< HEAD:server/models/enquiries.js
export default mongoose.model('b2b_enquiries', enquirySchema)
=======
export default mongoose.model('b2b_queries', userSchema)
>>>>>>> 2b79017b43a7d7591cc026e7cecbccd18e447dce:server/models/user.js
