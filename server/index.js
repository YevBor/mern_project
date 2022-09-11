const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users.js');
const cors = require("cors");

app.use(express.json());
app.use(cors());


app.get("/getUsers", (req,res)=>{
    UserModel.find({}, (err, result)=>{
        if(err) {
            res.json(err);
        }else{
            res.json(result);
        }

    })
})

app.post("/createUser", async (req, res)=>{
    const user = req.body
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);

})



mongoose.connect("mongodb+srv://yev:jeka123@cluster0.xjeyifn.mongodb.net/mern_db?retryWrites=true&w=majority")
app.listen(3001, () =>{
    console.log("server runs")
});