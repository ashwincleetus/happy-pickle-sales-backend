const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

router.post("/add", async(req,res)=>{
    try{
        const newOrder = new Order(req.body);
        await newOrder.save();
        res.json({ success: true, message: "Order places successfully"});
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

router.get("/all", async (req,res)=>{
    try{
        const orders = await Order.find().sort({date: -1});
        res.json(orders);
    } catch (err){
        res.status(500).json({ error: err.message });
    }

});

module.exports = router;