require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const Port = process.env.Port || 4000
const ExpenseRoutes = require("../Routes/Expense")
const ConnectDB = require("../Connection/conn")
const ExpenseModel = require("../Model/ExpenseModel")


app.use(express.json())
app.use(cors())

app.use("/api/Expense",ExpenseRoutes)

app.get("/",async(req,res)=>{
    const showfuction = await ExpenseModel.find({})
    res.json({
       name:"Expense Tracker",
       msg:"let me see you can do it or not",
       data:showfuction
    })
   })
   

app.listen(Port,()=>{
    ConnectDB()
    console.log("Server Running...")
})


//https://expense-tracker-backend-five.vercel.app/
