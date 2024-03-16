const express = require('express');
const studentModel = require('../Model/studentModel');
const router = express.Router();


router.use(express.json());

router.get('/',async(req,res)=>{try
    {
    const data = await studentModel.find()
    res.send(data);}
    catch(error){
        console.log(error)
    
}
})

//route to read data
//add
router.post('/add',async(req,res)=>{
    try{
        var item = req.body;
        await studentModel(item).save()
        res.send("DATA ADDED")
    }catch(error){
        console.log(error)
    }
})

//update
router.put('/upd/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const item = req.body;
        await studentModel.findByIdAndUpdate(id,item); 
        res.send("DATA UPDATED")
    }catch(error){
        console.log(error)
    }
})


//dele

router.delete('/dele/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const item = req.body;
        await studentModel.findByIdAndDelete(id); 
        res.send("DATA DELETED")
    }catch(error){
        console.log(error)
    }
})


    




//export
module.exports = router;
