const router = require("express").Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")

//update a user
router.put("/:id", async (req,res)=>{
    if(req.body.userId === req.params.id || req.user.isAdmin){

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
//get a user
//follow a user
//unfollow a user


module.exports = router


