const projects = require("../../models/project/project-model.js");
const router = require("express").Router();

router.post("/create",(req,res)=>{

    res.send("Project created");

})

router.get("/",(req,res)=>{

})

router.post("/member",(req,res)=>{

})

module.exports = router;