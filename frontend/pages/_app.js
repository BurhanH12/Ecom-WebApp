import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { useEffect, useState } from 'react'


export default function App({ session, Component, pageProps}) {
  
useEffect(() => {
  console.log("I am a useEffect");
}, [])

const [cart, setCart] = useState([])
const [reloadKey, setReloadKey] = useState(1)

const addToCart = (item, qty, price) => {
  let newCart = cart
  for (let index = 0; index < qty; index++) {
    newCart.push([item, price])
  } 
  console.log(newCart);
  setCart(newCart) 
  setReloadKey(Math.random())
} 

const removeFromCart = (item, qty) => {
  let newCart = cart
  let index = newCart.indexOf(item)
  newCart.splice(index) 
  setCart(newCart) 
} 

const clearCart = (item) => {
  setCart([]) 
} 


  
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Navbar key={reloadKey} cart={cart}/>
        <Component cart={cart} removeFromCart = {removeFromCart} addToCart = {addToCart} clearCart = {clearCart} {...pageProps} />
        <Footer />
      </SessionProvider>
    </>
  );
}
