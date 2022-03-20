const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{

    res.send("Welcome from user");
});
router.get('/new',(req,res)=>{

    res.send("Welcome from new user");
});



module.exports=router;