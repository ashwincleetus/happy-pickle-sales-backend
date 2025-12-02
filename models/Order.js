const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name:String,
    phone:String,
    address:String,
    item:String,
    quantity:Number,
    price:Number,
    date:{
        type:Date,
        default: () => new Date(Date.now() + (5.5 * 60 * 60 * 1000))
    }

});

module.exports = mongoose.model("Order",
orderSchema);