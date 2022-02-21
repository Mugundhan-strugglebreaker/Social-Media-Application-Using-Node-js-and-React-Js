const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")

//update a user
router.put("/:id", async (req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){

        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password,salt);
            }catch(err){
                return res.status(500).json(err)
            }
        }
        try{
            const user =  await User.findByIdAndUpdate(req.params.id, {
                $set : req.body 
            });
            res.status(200).json("Account Updated Successfully");

        }catch(err){
            res.status(500).json(err)
        }

    }else{
        res.status(403).json("You can update only your account");
    }
})

//delete a user
router.delete("/:id", async (req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account Deleted Successfully");
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("You can delete only your account");
    }
})
//get a user
router.get("/",async (req,res)=>{
    const userId = req.query.userId;
    const username = req.query.username;
    try{
        const user =userId ? await User.findById(userId) :await User.findOne({username : username});
        const {password , updatedAt  , ...other} = user._doc
        res.status(200).json(other);

    }catch(err){
        res.status(500).json(err)
    }
})

//follow a user
router.put("/follow/:id", async (req,res)=>{
   
    if(req.body.userId !== req.params.id){
        
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            
            if(!user.followers.includes(req.body.userId)){
                
                await user.updateOne({ $push : {followers :req.body.userId}});
                await currentUser.updateOne({ $push : {followings : req.params.id}});
                res.status(200).json("User has been followed")


            }else{
                res.status(403).json("You already follow this user");
            }

        }catch(err){
            res.status(500).json(err)
        }

    }else{
        res.status(403).json("You cannot follow yourself");
    }
})

//unfollow a user
router.put("/unfollow/:id", async (req,res)=>{
   
    if(req.body.userId !== req.params.id){
        
        try{
            const user = await User.findById(req.params.id);
            const currentUser = await User.findById(req.body.userId);
            
            if(user.followers.includes(req.body.userId)){
                
                await user.updateOne({ $pull : {followers :req.body.userId}});
                await currentUser.updateOne({ $pull : {followings : req.params.id}});
                res.status(200).json("User has been Unfollowed")


            }else{
                res.status(403).json("You dont follow this user");
            }

        }catch(err){
            res.status(500).json(err)
        }

    }else{
        res.status(403).json("You cannot unfollow yourself");
    }
})


module.exports = router


