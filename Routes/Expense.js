const express = require("express")
const Router = express.Router()
const {AddExpense,ShowExpense} = require("../Controller/Expense")



Router.route("/Add").post(AddExpense)
Router.route("/Show").post(ShowExpense)



module.exports = Router