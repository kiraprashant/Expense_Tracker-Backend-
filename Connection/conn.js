const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require("mongoose")

// const url = "mongodb+srv://prashantnair1999:wlKbBukyFw0Eb638@prashantapi.saxl0go.mongodb.net/ExpenseTracker?retryWrites=true&w=majority"

//const url = "mongodb://prashantnair1999:wlKbBukyFw0Eb638@ac-0gfh2lb-shard-00-00.saxl0go.mongodb.net:27017,ac-0gfh2lb-shard-00-01.saxl0go.mongodb.net:27017,ac-0gfh2lb-shard-00-02.saxl0go.mongodb.net:27017/ExpenseTracker?ssl=true&replicaSet=atlas-12jx0r-shard-0&authSource=admin&retryWrites=true&w=majority"

//const url = "mongodb://vercel-admin-user:17sd6WCryK4RgA6n@ac-0gfh2lb-shard-00-00.saxl0go.mongodb.net:27017,ac-0gfh2lb-shard-00-01.saxl0go.mongodb.net:27017,ac-0gfh2lb-shard-00-02.saxl0go.mongodb.net:27017/ExpenseTracker?ssl=true&replicaSet=atlas-12jx0r-shard-0&authSource=admin&retryWrites=true&w=majority"

const url = process.env.MongoDB_URL
const connectDB = () =>{
    console.log("database")
    mongoose.connect(url).then(()=>{
        console.log("connceted")
        }).catch((e)=>{
        console.log(e)    
        console.log("not connected",e)
        })
}


module.exports = connectDB


// Username Atlas Prashant
// password u7ziHcklaYHG7uwM 

//vercel
//userName = "vercel-admin-user "
// "password" = 17sd6WCryK4RgA6n
