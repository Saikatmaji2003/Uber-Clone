const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors")
const express=require("express");
const app=express();

const userRoutes=require("./routes/user.routes")
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const connectToDB=require("./db/db");
connectToDB(); 

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use("/users",userRoutes);
module.exports=app;