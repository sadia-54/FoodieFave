// api

import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    })
    try{
        await food.save();
        res.json({
            success: true,
            message: "Food item added successfully"
        })
    }catch(error){
        return res.status(400).json({success: false, message: error.message})
    }
}

export {addFood}