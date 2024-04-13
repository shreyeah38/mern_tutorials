const mongoose = require('mongoose');
// mongoose.connect("mongodddb://localhost:27-17/ecommerce")
const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String
});

module.exports = mongoose.model("products",productSchema);