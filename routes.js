const express=require('express')
const router=express.Router()
const poll=require('./User/Usercontroller')
const radio=require('./User/Radiocontroller')


router.post('/addpoll',poll.addpoll)
router.post('/viewpoll',poll.viewpoll)


router.post('/radiovalue/:id',radio.radiovalue)
router.post('/viewoption/:id',radio.viewoption)

module.exports =router// expot routes to index page
