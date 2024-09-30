import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PaymentSuccess() {
  const navigate = useNavigate();
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    const sessionId = new URLSearchParams(window.location.search).get('session_id');
    axios.post('http://localhost:5500/payment/receipt', {
      sessionId,
    })
      .then((response) => {
        const receipt = {
          paymentMethod: response.data.paymentMethod.card.brand,
          paymentAmount: response.data.paymentIntent.amount / 100,
          paymentDate: response.data.paymentIntent.created,
          transactionId: response.data.paymentIntent.id,
        };
        setReceipt(receipt);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 9000);
    return () => clearTimeout(timer);
  }, [navigate]);

  if (!receipt) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
        <h1 className="text-2xl font-bold mb-4">Payment Successful!</h1>
        <p className="text-lg mb-6">Thank you for your payment.</p>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-lg font-bold mb-4">Payment Receipt</h2>
          <div className="text-lg">
            <p className="mb-4">Payment Method: {receipt.paymentMethod}</p>
            <p className="mb-4">Payment Amount: Rs. {receipt.paymentAmount}</p>
            <p className="mb-4">Payment Date: {new Date(receipt.paymentDate * 1000).toLocaleDateString()}</p>
            <p>Transaction ID: {receipt.transactionId}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;