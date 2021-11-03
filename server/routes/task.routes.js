const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const Task = require('../models/Task')
const router = Router()
const auth = require('../middleware/auth.middleware')

// /api/tasks/
router.post('/add', auth,
    async (req,res)=>{
        try{

        } catch (e){
            res.status(500).json({message:'Error'})
        }
    })


router.get('/',auth,async(req,res)=>{
    try{
        const tasks = await Task.find({owner: req.user.userId})
        res.json(tasks)
    } catch (e){
        res.status(500).json({message:'Error'})
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const task = await Task.findById(req.params.id)
        res.json(task)
    } catch (e){
        res.status(500).json({message:'Error'})
    }
})

module.exports = router
