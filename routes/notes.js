const express=require('express');
const router=express.Router();


router.get('/',(req,res)=>{
   let obj={
    title:'Title'
   }
    res.json(obj);
});

module.exports=router;


