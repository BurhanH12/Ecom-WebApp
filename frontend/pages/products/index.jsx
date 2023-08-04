import axios from 'axios';
import Link from 'next/link';
import React from 'react'

const Products = (props) => {
  return (
    <div className='container mx-auto px-4'>
      <section className="text-gray-600 body-font">
  <div className="container px-5 md:py-24 mx-auto">
    <div className="flex flex-wrap w-full md:mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - Xoltan {props.name}</h1>
        <div className="h-1 w-40 bg-indigo-500 rounded"></div>
      </div>
    </div>
    <div className="flex flex-wrap -m-4">
      {props.products.data.map((item)=> {
        return (
          <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <img
                className="h-96 rounded mb-8 m-auto"
                src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.url}`}
                alt={item.attributes.slug}
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                {item.attributes.category}
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                {item.attributes.title}
              </h2>
              <p className="leading-relaxed text-base">
                ${item.attributes.price}
              </p>
              <Link href={`/product/${item.attributes.slug}`}>
                <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
    </div>
  )
}

const API_URL = 'http://localhost:1337' || 'http://127.0.0.1:1337'

export async function getServerSideProps(context) {
  let headers = {Authorization: `Bearer 69b33a3f85d6aede7f23307bcb504415bb83e0148783a0c9c32becebfb85cea6319abf420252ff802ed554d63d8129e614f2f299ba5d97695ab12d02fc7a8960e63ecef789e3dc2d0093cb15e3dfc573c38ffddf81e91d5b66001e132e6b0fedbf2c570292e6fb61d9e4a106f86aedda6f8e77265f07395734d3bf642dfb081a`}
  let response = await axios.get("http://127.0.0.1:1337/api/products?populate=*", {headers:headers})
  let products = response.data; 
  // console.log(products);
  return {
    props: {products: products},
  }
}


export default Products