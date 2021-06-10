import mongoose from "mongoose";

const houseHoldSchema = new mongoose.Schema({
  workName: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
});

export const HouseHold = mongoose.model("houseHold", houseHoldSchema);
