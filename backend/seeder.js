import mongoose from "mongoose";
import users from "./data/users.js";
import products from "./data/product.js";
import User from "./models/UserModel.js";
import Product from "./models/ProductModel.js";
import Order from "./models/OrderModel.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const insertData = async () => {
    try {
       await  Order.deleteMany();
       await Product.deleteMany();
       await User.deleteMany();

       const insertedUsers = await User.insertMany(users);
       const adminId = insertedUsers[0]._id;

       const sampleProducts = products.map((product) => {
           return ({user: adminId, ...product});
       }) 
       await Product.insertMany(sampleProducts);
       console.log("data imported successfully ");
       process.exit();
    //    await Order.insertMany()
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

const deleteData = async () => {
    try {
        await  Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("data deleted successfully ");
        process.exit();
     } catch(error) {
         console.log(error);
         process.exit(1);
     }
}

if(process.argv[2] === '-d') {
    deleteData();
} else if(process.argv[2] === '-i') {
    insertData();
}



