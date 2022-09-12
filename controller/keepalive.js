const router = require('express').Router(); 

router
    .get('/', (req,res)=>{
        res.status(200).json({message: "im live : get"})
    })
    .post('/', (req,res)=>{
        res.status(200).json({message: "im live: post"})
    })




    module.exports= router