import React from 'react'

const Success = () => {
  return (
    <div className='container mx-auto px-4'>
        <div className="flex flex-col justify-center items-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-lg mb-8">Thank you for your purchase.</p>
      <div className="flex">
        <a href="/products" className="bg-blue-500 text-white py-3 px-6 rounded mr-4">
          Keep Shopping
        </a>
        {/* Add other buttons or links if needed */}
      </div>
    </div>
    </div>
  )
}

export default Success