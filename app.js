// Creating a Deep thought API based on a resource tech
const express = require("express");
const mongoose = require("mongoose");
const path =require("path");
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const Tech = require("./models/tech");

require('dotenv').config();

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

const app = express();

app.engine("ejs",ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/api/techs",async(req,res)=>{
    const techs = await Tech.find({});
    res.render("tech/index",{techs});
})

app.get("/api/techs/new",(req,res)=>{
    res.render("tech/new");
})

app.post("/api/techs",async(req,res)=>{
    const tech = new Tech(req.body);
    await tech.save();
    res.redirect(`/api/techs/${tech._id}`);
})

app.get("/api/techs/:id",async(req,res)=>{
    const {id}=req.params;
    const tech = await Tech.findById(id);
    res.render("tech/show",{tech});
})

app.get("/api/techs/:id/edit",async(req,res)=>{
    const {id}=req.params;
    const tech = await Tech.findById(id);
    res.render("tech/edit",{tech});
})

app.put("/api/techs/:id",async(req,res)=>{
    const {id} = req.params;
    const tech = await Tech.findByIdAndUpdate(id,{techStack: req.body.techStack});
    res.redirect(`/api/techs/${tech._id}`)
})

app.delete("/api/techs/:id",async(req,res)=>{
    const {id} = req.params;
    await Tech.findByIdAndDelete(id);
    res.redirect("/api/techs");
})

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log("API listening on port 3000");
});
