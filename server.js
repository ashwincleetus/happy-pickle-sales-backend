const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/pickleStore")
.then(()=>console.log("Mongodb Connected"))
.catch(err => console.log(err));

app.get("/", (req,res)=>{
    res.send("pickle store backend running...");
});

app.use("/api/orders", require("./routes/orderRoutes"));

app.listen(5000, ()=> console.log("Server running on port 5000"));