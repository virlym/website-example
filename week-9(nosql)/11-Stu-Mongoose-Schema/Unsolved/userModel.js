const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  // CODE HERE
  username:{
    type: String,
    trim: true,
    required: "A username is required"
  },
  password: {
    type: String,
    trim: true,
    required: "A password is required",
    validate: [({ length }) => length >= 6, "password should be at least 6 characters."]
  },
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  userCreated: {
    type: Date,
    default: Date.now
  }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;
