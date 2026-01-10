import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "user_id is required"],
  },
  portfolio_type: {
    type: String,
    required: [true, "portfolio type is required"],
    min: 2,
  },
});

export default mongoose.models.Portfolio ||
  mongoose.model("Portfolio", portfolioSchema);
