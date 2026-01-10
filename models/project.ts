import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  portfolio_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Portfolio",
    required: [true, "portfolio_id is required in project"],
  },
  project_name: {
    type: String,
    required: true,
    min: [3, "min of 3 characters is needed on project_name"],
  },
  project_description: {
    type: String,
    required: [true, "service_description is required on service."],
    min: [16, "min of 16 characters is needed on service description"],
  },
  url_preview: {
    type: String,
  },
  github_repo_link: {
    type: String,
  },
});

const tagSchema = new mongoose.Schema({
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: [true, "project_id is required in project tags schema"],
  },
  tag_name: {
    type: String,
    required: [true, "tag_name is required in tagSchema"],
    min: [3, "min of 3 characters is needed on tag_name"],
  },
});

const pictureSchema = new mongoose.Schema({
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: [true, "project_id is required in project pictures schema"],
  },
  secure_url: {
    type: String,
    required: [true, "tag_name is required in tagSchema"],
    unique: [true, "secure_url must be unique."],
  },
});

const featureSchema = new mongoose.Schema({
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: [true, "project_id is required in project pictures schema"],
  },
  feature_name: {
    type: String,
    required: [true, "feature_name is required in featureSchema"],
  },
});

export const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);
export const Tag = mongoose.models.Tag || mongoose.model("Tag", tagSchema);
export const ProjectPicture =
  mongoose.models.ProjectPicture ||
  mongoose.model("ProjectPicture", pictureSchema);
export const Feature =
  mongoose.models.Feature || mongoose.model("Feature", featureSchema);
