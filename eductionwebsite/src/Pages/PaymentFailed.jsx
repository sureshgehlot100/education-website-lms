import React from 'react'
import { Link } from 'react-router-dom'

function PaymentFailed() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
        <h1 className="text-2xl font-bold mb-4">Payment Failed</h1>
        <p className="text-lg mb-6">Unfortunately, your payment was not successful.</p>
        <p className="text-lg mb-6">Please try again or contact our support team for assistance.</p>
        <Link to="/Cart">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Try Again
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PaymentFailed