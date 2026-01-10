import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
  portfolio_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Portfolio",
    required: [true, "portfolio_id is required"],
  },
  name: {
    type: String,
    required: [true, "name is required on home."],
    min: [6, "it must be full name."],
  },
  address: {
    type: String,
    required: [true, "address is required on home."],
  },
  career: {
    type: String,
    required: [true, "career is required on home."],
  },
  career_description: {
    type: String,
    required: [true, "career_description is required on home."],
  },
});

export default mongoose.models.Home || mongoose.model("Home", homeSchema);
