import express from "express";
import Product from "../models/ProductModel.js"
import asyncHandler from "express-async-handler";

const router = express.Router();

// @description Fetch all Products
// @route       GET /api/products
// @access       Public

router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
}));

// @description Fetch Single Product
// @route       GET /api/product/:id
// @access       Public

router.get('/:id', asyncHandler(async (req, res) => {
    const {id} = req.params;
    const product = await Product.findById(id);
    if(product) {
        res.json(product);
    } else {
        res.status(404);
        throw new Error(`Product Not Found`);
    }
}));


export default router;