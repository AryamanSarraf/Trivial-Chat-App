import mongoose from "mongoose";

const quarantinePatientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  requirenment: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

export const quarantinePatient = mongoose.model(
  "quarantinePatient",
  quarantinePatientSchema
);
