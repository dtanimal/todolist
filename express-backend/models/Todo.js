const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const today = new Date();
const dt = today.toDateString();

const TodoSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  dateCreated: { type: String, default: true },
  dateCompleted: { type: String, default: dt },
  // _id: { type: String, required: true },
});

//Export model
module.exports = mongoose.model("Todo", TodoSchema);
