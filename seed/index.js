const  techs  = require("./techStacksList");
const Tech = require("../models/tech");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sainithin:gubba12345@dtapi.ouecaaf.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DTAPI is connected to Database");
  })
  .catch(() => {
    console.log("Error in connecting database");
  });

Tech.insertMany(techs)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
