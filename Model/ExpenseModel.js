const mongoose = require("mongoose")
const moment = require("moment")



const currentDate = moment().format("DD-MM-YY HH:mm:ss'");

const ExpenseSchema = mongoose.Schema({
    Email:{
        type:String,
        required:[true , "Email is Required"]
    },
    Category:{
        type:String,
        required:[true , "Title is Required"]
    },
    AddNotes:{
        type:String,
        required:[true , "Description is Required"]
    },
    Amount:{
        type:Number,
        required:[true, "Money is Required"]
    },
    Type:{
        type:String,
        default:"Spent"
    },
    Created_At:{
        type:String,
        default:currentDate
    }

})

const ExpenseModel = mongoose.model("Expense",ExpenseSchema)

module.exports = ExpenseModel