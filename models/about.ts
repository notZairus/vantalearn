import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  portfolio_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Portfolio",
    required: [true, "portfolio_id is required on about"],
  },
  self_description: {
    type: String,
    required: [true, "self_description is required on about."],
  },
});

const serviceSchema = new mongoose.Schema({
  about_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "About",
    required: [true, "about_id is required on about"],
  },
  service_name: {
    type: String,
    min: [3, "min of 3 characters is needed on service name"],
    required: [true, "service_name is required on service."],
  },
  service_description: {
    type: String,
    required: [true, "service_description is required on service."],
    min: [16, "min of 16 characters is needed on service description"],
  },
});

const skillSchema = new mongoose.Schema({
  about_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "About",
    required: [true, "about_id is required on about"],
  },
  skill_name: {
    type: String,
    min: [3, "min of 3 characters is needed on skill name"],
    required: [true, "skill_name is required on skill."],
  },
  skill_description: {
    type: String,
  },
});

export const About =
  mongoose.models.About || mongoose.model("About", aboutSchema);
export const Service =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);
export const Skill =
  mongoose.models.Skill || mongoose.model("Skill", skillSchema);
