const router = require("express").Router()
const Post = require("../models/Post")

//Creating a post
router.post("/",async (req,res)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
    }catch(err){
        res.status(500).json(err)
    }
})
//Updating a post
router.put("/:id",async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({ $set : req.body});
            res.status(200).json("Post updated Succesfully")
        }else{
            res.status(403).json("You can update only your post")
        }

    }catch(err){
        res.status(500).json(err)
    }
})
//Deleting a Post
router.delete("/:id",async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post deleted Succesfully")
        }else{
            res.status(403).json("You can delete only your post")
        }

    }catch(err){
        res.status(500).json(err)
    }
})

module.exports = router