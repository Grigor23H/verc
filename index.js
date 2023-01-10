import express  from "express"
import fs from "fs"


const app=express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.get("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync('data.json'))
       res.send(data)
})
app.post('/',(req,res)=>{
const data2 =req.body

fs.writeFileSync("data.json", JSON.stringify(data2))
})
app.listen(3000)