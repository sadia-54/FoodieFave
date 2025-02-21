import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import {StoreContext} from '../context/StoreContext';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const PaymentModal = ({isOpen, onClose}) => {

    const [searchParams, setSearchParams] = useSearchParams()

    const orderId = searchParams.get("orderId")

    const {url} = useContext(StoreContext)

    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");
    const [amount, setAmount] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        setMessage("")

    // Basic validation
    if(cardNumber.length !== 16 || expiry.length !== 5 || cvv.length !== 3){
        setMessage("Invalid card details!")
        setLoading(false)
        return
    }

    // Simulate a payment request
    try {
        const response = await axios.post(url+"/api/payments/payment", 
            {cardNumber,
             expiry, 
             cvv, 
             amount
            })

            setMessage(response.data.message)
            setLoading(false)

            if(response.status === 200){
                setMessage(response.data.message || "Payment successful!");
                setLoading(false);
                setTimeout(()=>{
                    onClose()
                }, 5000)
            } else {
               setMessage("Payment failed. Please try again.");
               setLoading(false);
            }
    } catch (error) {   
        console.log(error)
        setMessage("Error during payment. Please try again.");
        setLoading(false);
    }
}

    if (!isOpen) return null;

  return (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <h2 className="text-xl font-semibold mb-4 text-center text-[tomato]">Dummy Payment</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Card Number (16 digits)"
                        maxLength="16"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            placeholder="MM/YY"
                            maxLength="5"
                            value={expiry}
                            onChange={(e) => setExpiry(e.target.value)}
                            className="w-1/2 border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            placeholder="CVV (3 digits)"
                            maxLength="3"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            className="w-1/2 border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <input
                        type="number"
                        placeholder="Amount ($)"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-[tomato] text-white py-2 rounded-md hover:bg-red-500 transition"
                        disabled={loading}
                    >
                        {loading ? "Processing..." : "Pay"}
                    </button>
                </div>
                {message && <p className="text-center mt-3 text-gray-700">{message}</p>}
                <button
                    onClick={onClose}
                    className="w-full mt-3 text-red-600 hover:underline"
                >
                    Close
                </button>
            </div>
        </div>
  )
}

export default PaymentModal