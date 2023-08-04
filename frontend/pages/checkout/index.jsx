import React, { useEffect, useState } from 'react'
import { ReactDOM } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import axios from 'axios';
import { useSession } from 'next-auth/react';

const stripePromise = loadStripe(process.env.stripe_public_key);

const createCheckoutSession = async (cart, email) => {
  const stripe = await stripePromise;

  // Call the backend to create a checkout session
  const checkoutSession = await axios.post('/api/create-checkout-session', {
    items: cart,
    email: email
  });

  //Redirect user to checkout page
  const result = await stripe.redirectToCheckout({
    sessionId: checkoutSession.data.id
  });

  if (result.error) alert(`Error: ${result.error.message}`);
};

const Checkout = ({ cart, clearCart }) => {

  const { data: session } = useSession();
  const [subtotal, setSubtotal] = useState(0)
  const [form, setForm] = useState({ name: "", email: "", address: "", phone: "" })

  useEffect(() => {
    let myTotal = 0
    for (let index = 0; index < cart.length; index++) {
      const element = cart[index];
      myTotal = myTotal + cart[index][1]
    }
    setSubtotal(myTotal)

  }, [])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log({ ...form, [e.target.name]: e.target.value })
  }

  const handleEmpty = () => {
    clearCart();
    setSubtotal(0);
    localStorage.removeItem("cart");
    alert('Your Cart is now empty')
  }

  const handleCheckout = async () => {
    await createCheckoutSession(cart, session.user.email);
  };


  return (
    <div className='container px-5 py-24 mx-auto'>
      <section className="text-black body-font relative">
      <div className="container px-5 py-24 mx-auto min-h-screen">
        <div className="flex flex-col w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">Checkout</h1>
          <h2 className='text-2xl font-medium'>Cart</h2>
          <div className="cart">{cart.length ? `Your cart details are as follows:` : `Your cart is empty!`}</div>
          <ul className='list-decimal px-8'>

            {cart.map((item) => {
              return <li key={item.id}>
                Product {item[0]} with a price of ${item[1]}
              </li>
            })}
          </ul>
          <div className="font-bold">
            Subtotal: {subtotal}
          </div>
          <div className="p-2 w-full">
              <button onClick={handleEmpty} className="flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded text-lg">Empty Cart</button>
          </div>

        </div>
        <div className=" ">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <button role='link' onClick={handleCheckout} className="flex text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Pay Now</button>
            </div>

          </div>



        </div>
      </div>
    </section>
    </div>
  )
}

export default Checkout