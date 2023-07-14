import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

const PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/slist', (req, res) =>{
    res.json(
            [
                {id: 1, sitem: 's1'},
                {id: 2, sitem: 's2'},
                {id: 3, sitem: 's3'},
                {id: 4, sitem: 's4'},
                {id: 5, sitem: 's5'},
                {id: 6, sitem: 's6'},
                {id: 7, sitem: 's7'},
                {id: 8, sitem: 's8'},
                {id: 9, sitem: 's9'},
                {id: 10, sitem: 's10'},
            ]
        )
})
const sNamesData = [
    {id: 1, sname: 's name1', sdesc: 's name1 description'},
    {id: 2, sname: 's name2', sdesc: 's name2 description'},
    {id: 3, sname: 's name3', sdesc: 's name3 description'},
    {id: 4, sname: 's name4', sdesc: 's name4 description'},
    {id: 5, sname: 's name5', sdesc: 's name5 description'},
    {id: 6, sname: 's name6', sdesc: 's name6 description'},
    {id: 7, sname: 's name7', sdesc: 's name7 description'},
    {id: 8, sname: 's name8', sdesc: 's name8 description'},
    {id: 9, sname: 's name9', sdesc: 's name9 description'},
    {id: 10, sname: 's name10', sdesc: 's name10 description'}
]
app.get('/snames', (req, res) =>{ res.json(sNamesData) })
app.get('/sname/:id', (req, res) =>{
    const currentId = req.params.id; //console.log('currentId: ', currentId)
    const result = sNamesData.filter(o => o.id == currentId); //console.log('result: ', result)
     res.json(result) 
    })
/* ----------------- list Avatar --------------------- */   
const listAvatars = [
    {id: 1, name: 'Avatar1', gender: 'M', img: 'img_avatar_m.png'},
    {id: 2, name: 'Avatar2', gender: 'M', img: 'img_avatar_m.png'},
    {id: 3, name: 'Avatar3', gender: 'F', img: 'img_avatar_f.png'},
    {id: 4, name: 'Avatar4', gender: 'M', img: 'img_avatar_m.png'},
    {id: 5, name: 'Avatar5', gender: 'M', img: 'img_avatar_m.png'},
    {id: 6, name: 'Avatar6', gender: 'F', img: 'img_avatar_f.png'},
    {id: 7, name: 'Avatar7', gender: 'M', img: 'img_avatar_m.png'},
    {id: 8, name: 'Avatar8', gender: 'M', img: 'img_avatar_m.png'},
    {id: 9, name: 'Avatar9', gender: 'F', img: 'img_avatar_f.png'},
    {id: 10, name: 'Avatar10', gender: 'M', img: 'img_avatar_m.png'},
]
app.get('/avatars', (req, res) =>{ res.json(listAvatars) })

app.listen(PORT, (req, res) => { console.log(`Server stated at ${PORT}`)})
