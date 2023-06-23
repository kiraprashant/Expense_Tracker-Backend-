const ExpenseModel = require("../Model/ExpenseModel")



const AddExpense = async(req,res) =>{
    try{
        const AddExpense = await ExpenseModel(req.body).save()
        res.json({
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

}

const ShowExpense = async(req,res) =>{
    try{
        const ShowExpense = await ExpenseModel.find({Email:req.body.Email})
        res.json({
            data:ShowExpense,
            name:"Expense Tracker Full Data",
            msg:"List of All Data"
         })

    }
    catch(e){
       console.log(e)
       res.status(201).json({
        Success:false,
        msg:"Expense Tracker Added failed"
       })
    }


}






module.exports = {AddExpense,ShowExpense}