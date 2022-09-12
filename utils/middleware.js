const consoleData =(req,res,next)=>{
    console.log('Method'+ req.method);
    console.log('Path:'+ req.path);
    console.log('Body:', req.body);
   
next(); 
};
const unknownEndpoint = (req,res)=>{
    res.status(404).send({error: 'Unknown endpoint'})
};

module.exports={consoleData, unknownEndpoint}