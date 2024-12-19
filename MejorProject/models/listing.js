const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://media.istockphoto.com/id/472909442/photo/backwaters-of-kerala.jpg?s=1024x1024&w=is&k=20&c=qk78ulZiULc2kzRzfROMm1878rOKb4wYhM2GsQ_dH-8=",
    set: (v) =>
      v === " "
        ? "https://media.istockphoto.com/id/472909442/photo/backwaters-of-kerala.jpg?s=1024x1024&w=is&k=20&c=qk78ulZiULc2kzRzfROMm1878rOKb4wYhM2GsQ_dH-8="
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
