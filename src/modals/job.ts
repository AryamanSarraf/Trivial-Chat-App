import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    ocupation:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    contactNumber:{
        type: String,
        required: true
    },
})

export const Jobs = mongoose.model("job", jobSchema);
