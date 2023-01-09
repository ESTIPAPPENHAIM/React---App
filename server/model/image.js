const { Schema, model} = require("mongoose");

const imageSchema = new Schema({

    title:{
      type: String,
      required: [true, "Title is required"]
    },

    url:{
        type: String,
        required: [true, "Url is required"]
      },
});

module.exports = model("image", imageSchema);
