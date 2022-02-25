const router = require("express").Router()
const Conversation = require("../models/Conversation");

//new conversation
router.post("/", async (req,res)=>{
    const newConversation = new Conversation({
        members : [req.body.senderId,req.body.receiverId],
    });
    try{
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    }catch(err){
        res.status(500).json(err)
    }
})

//get conversation a user


module.exports = router