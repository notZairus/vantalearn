import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      trim: true,
      index: true,
      required: [true, "email is required."],
    },
    firstName: {
      type: String,
      required: [true, "first name is required."],
      minlength: 3,
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "last name is required."],
      minlength: 3,
      trim: true,
    },
    middleName: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required."],
      minlength: 8,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(this.password, salt);
  this.password = hashed;
});

userSchema.methods.comparePassword = function (plainPassword: string) {
  return bcrypt.compareSync(plainPassword, this.password);
};

userSchema.methods.getFullName = function () {
  if (!this.middleName) {
    return `${this.firstName} ${this.lastName}`;
  }

  return `${this.firstName} ${this.middleName} ${this.lastName}`;
};

export default mongoose.models.User || mongoose.model("User", userSchema);
