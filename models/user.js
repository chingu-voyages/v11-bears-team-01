const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  hashed_password: {
    type: String,
    required: true
  },
  date: {
    //not needed, a nice to have
    type: Date,
    default: Date.now
  }
});

UserSchema.virtual("password")
  .set(function(password) {
    this._password = password;
    this.salt = uuidv1();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

// Adding methods to the userSchema

UserSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function(password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  }
};

module.exports = mongoose.model("User", UserSchema);
