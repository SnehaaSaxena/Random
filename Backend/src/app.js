const express=require('express');
const multer=require("multer");
const uploadFile=require("./services/storage.services");

const postModel=require("./models/post_model");

const app=express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() }) // middleware to accept images

app.post("/create_post", upload.single('image'), async (req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const result= await uploadFile(req.file.buffer);
    const post=postModel.create({
        image:req.file.url,
        caption:req.body.caption
    });

    return res.status(201).json({
        message:"Posts created successfully",
        post
    });
});

app.get("/posts", async (req,res)=>{
    const posts= await postModel.find();
    return res.status(200).json({
        message:"Fetched successfully",
        posts
    });
});

module.exports=app;