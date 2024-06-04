const { Schema, model } = require("mongoose");

const quotes_schema = new Schema(
  {
    quoteText: {
      type: String,
      required: true,
    },
    authorName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Quote = model("quote", quotes_schema);

module.exports = Quote;
