const mongoose = require("mongoose");

const database = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://pallakmanojsharma:pallak29@cluster0.nxsqblh.mongodb.net/user");
        console.log("Database connected...");
    } catch (error) {
        console.log(error);
    }
}
module.exports=database;