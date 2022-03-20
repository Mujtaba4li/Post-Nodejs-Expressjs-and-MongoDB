const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Get method
router.get("/", async (req, res) => {
  try {
    const getPosts = await Post.find();
    res.json(getPosts);
  } catch (err) {
    res.json({ message: err });
  }
  // res.send("Welcome to psots")
});

// Post method
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }

  // before async method
  // post.save().then(data => {
  //     res.json(data);
  //   })
  //   .catch(err => {
  //     res.json({ message: err});
  //   });

  // console.log(req.body.title);
  // console.log(req.body.description);
});


// Get Specific post
router.get('/:postID',async (req,res)=>{
    // console.log(req.params.postID)
    try{

        const postbyID=await Post.findById(req.params.postID);
        res.json(postbyID)
    }catch(err){
        res.json({message:err});
    }
})


//Delelte post request
router.delete('/:postId',async(req,res)=>{
    try{
       const deletePost=await Post.remove({_id:req.params.postId});
        res.json(deletePost);
    }
    catch(err){
        res.json({message:err});
    }
});

//Update post request
router.patch('/:postId',async(req,res)=>{
    try{
        const updatePost=await Post.updateOne({_id:req.params.postId},{$set:{title:req.body.title}});
        res.json(updatePost);
    }catch(err){
        res.json({message:err});
    }
})
module.exports = router;
