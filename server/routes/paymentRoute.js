import express from "express";
import paymentModel from "../models/paymentModel.js";
import orderModel from "../models/orderModel.js";
import { v4 as uuidv4 } from "uuid"; 

const paymentRouter = express.Router();

// Dummy Payment Processing Route
paymentRouter.post("/payment", async (req, res) => {
    try {
        console.log(req.body)

        const { cardNumber, expiry, cvv, amount } = req.body;

        // Basic validation
        if (!cardNumber || !expiry || !cvv || !amount ) {
            return res.status(400).json({ message: "All fields are required!" });
        }
        if (cardNumber.length !== 16 || expiry.length !== 5 || cvv.length !== 3) {
            return res.status(400).json({ message: "Invalid card details!" });
        }

        // Generate a fake transaction ID
        const transactionId = uuidv4();

        // Save only necessary details
        const newPayment = new paymentModel({
            amount,
            status: "Success",
            transactionId
        });

        await newPayment.save();

        // const updatedOrder = await orderModel.findByIdAndUpdate(orderId, { payment: true }, {new: true});

        // if(!updatedOrder){
        //     return res.status(400).json({ message: "Order not found!" });
        // }

        res.json({ success: true, message: "Payment Successful!", transactionId });
    } catch (error) {
        console.error("Payment Processing Error:", error);
        res.status(500).json({ success: false, message: "Server Error. Please try again later." });
    }
});

export default paymentRouter;

