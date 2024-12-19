const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));

main()
  .then((res) => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

app.get("/", (req, res) => {
  res.send("Root is working");
});

app.get("/testListing", (req, res) => {
  let sampleListing = new Listing({
    title: "My New Villa",
    description: "By the beach",
    price: 1200,
    location: "Calangute,Goa",
    country: "India",
  });
  sampleListing
    .save()
    .then((res) => {
      console.log("sample was saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.send("Successfull");
});

app.listen(port, () => {
  console.log("Listening to port:3000");
});
