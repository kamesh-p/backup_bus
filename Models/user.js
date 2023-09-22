const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    firstname: {
      type: String,
    },

    lastname: {
      type: String,
    },

    mobile: {
      type: Number,
    },

    email: {
      type: String,

      require: true,

      unique: true,
    },

    password: {
      type: String,
    },
  },

  {
    collection: "users",
  }
);

module.exports = mongoose.model("user", userSchema);
