const mongoose = require('mongoose');
// mongoose.connect("mongodddb://localhost:27-17/ecommerce")
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

module.exports = mongoose.model("users",userSchema);