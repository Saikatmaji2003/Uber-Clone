const dotenv=require("dotenv");
dotenv.config();
const cors=require("cors")
const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");

const userRoutes=require("./routes/user.routes")
const captainRoutes=require("./routes/captain.routes");
const mapsRoutes=require("./routes/maps.routes");
const rideRoutes=require("./routes/ride.routes");

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const connectToDB=require("./db/db");
connectToDB(); 

app.use(cors());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use("/users",userRoutes);
app.use("/captains",captainRoutes);
app.use("/maps",mapsRoutes);
app.use("/rides",rideRoutes);

module.exports=app;