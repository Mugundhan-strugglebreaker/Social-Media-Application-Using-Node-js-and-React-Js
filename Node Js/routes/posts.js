const router = require("express").Router()
const Post = require("../models/Post");
const User = require("../models/User");

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
//Like or Dislike a Post
router.put("/like/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push : { likes : req.body.userId}})
            res.status(200).json("The Post has been liked");
        }else{
            await post.updateOne({$pull : { likes : req.body.userId}})
            res.status(200).json("The Post has been disliked");
        }

    }catch(err){
        res.status(500).json(err)
    }
})

//Get a Post
router.get("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
})
//Get Timeline Posts
router.get("/timeline/all/:userId", async (req,res)=>{
    try{
        const currentUser =  await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId : currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.followings.map( (friendId)=>{
                return Post.find({userId : friendId});
            } )
        );
        res.status(200).json(userPosts.concat(...friendPosts))
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router