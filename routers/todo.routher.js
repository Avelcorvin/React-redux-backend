const express = require('express')
const schema = require('../models/todolist.models')
const router = express.Router()

/**
 * 1 Создаем модель на основание Schema(схема)
 * 
 */

router.post("/find", async (req,res)=>{
    try {
        const data = await schema.find({name:"data"})
        console.log(data)
        // res.status(200).json({message:"Все ок",data})

    } catch (error) {
        console.log("error")        
}
})

router.post("/addtodo", async (req,res)=>{
    try {
            await schema(req.body).save()
            res.status(200).json('Все сохранено')
        } catch (error) {
            console.log("error")        
    }
})

router.put("/addtodo", async (req,res)=>{
    try {
            await model('todos',Schema)(req.body).save()
    
        } catch (error) {
            console.log("error")        
    }
        res.status(200).json('Все сохранено')
})

router.delete("/addtodo", async (req,res)=>{
    try {
            await model('todos',Schema)(req.body).save()
    
        } catch (error) {
            console.log("error")        
    }
        res.status(200).json('Все сохранено')
})


module.exports = router