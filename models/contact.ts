import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  portfolio_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Portfolio",
    required: [true, "portfolio_id is required on contact"],
  },
  email: {
    type: String,
    required: [true, "email is required on contact."],
  },
  facebook: {
    type: String,
  },
  instagram: {
    type: String,
  },
  github: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
});

export const Contact =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);
