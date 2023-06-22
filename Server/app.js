require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const Port = process.env.Port || 4000
const ExpenseRoutes = require("../Routes/Expense")
const ConnectDB = require("../Connection/conn")


app.use(express.json())
app.use(cors())

app.use("/api/Expense",ExpenseRoutes)

app.get("/",async(req,res)=>{
    
    res.json({
       name:"Expense Tracker",
       msg:"let me see you can do it or not"
    })
   })

   app.get("/Show",async(req,res)=>{
    try{
        const ShowExpense = await ExpenseModel.find({Email:req.body.Email})
        res.json({
            data:ShowExpense,
            name:"Expense Tracker Added",
            msg:"let me see you can do it or not"
         })

    }
    catch(e){
       console.log(e)
       res.status(201).json({
        Success:false,
        msg:"Expense Tracker Added failed"
       })
    }
    
   })


app.listen(Port,()=>{
    ConnectDB()
    console.log("Server Running...")
})


//https://expense-tracker-backend-five.vercel.app/
