# Ecommerce Web Application

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Description

The Ecommerce Web Application is a modern online store built using [Next.js](https://nextjs.org/), for server-side rendering and static site generation. The application allows users to browse and purchase various products securely through integrated payment processing using the [Stripe API](https://stripe.com/). For user authentication, the application leverages [Next Auth](https://next-auth.js.org/) to provide a seamless and secure login experience.

## Technologies Used

- [Next.js](https://nextjs.org/): A React framework for building server-side rendered and statically generated web applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for styling components and UI elements.
- [Strapi](https://strapi.io/): A headless CMS for managing and storing product data, serving as the backend for the application.
- [Stripe API](https://stripe.com/): Integrated for secure and reliable payment processing during checkout.
- [Next Auth](https://next-auth.js.org/): A library for handling authentication in Next.js applications, providing features like social logins, JWT support, and more.

## Features

1. Display a list of products with details such as title, description, category, size, and price.

2. Show detailed information about a specific product, including its attributes.

3. Allow users to add products to the cart, view selected items, and proceed to checkout.

4. Implement secure payment processing through Stripe API during the checkout process.

5. Provide a user-friendly and secure authentication system using Next Auth, allowing users to sign in using various social logins or email.

## Getting Started

To run the Ecommerce Web Application locally, follow these steps:

1. Clone the repository:
```bash
   git clone https://github.com/BurhanH12/Ecom-WebApp.git
```

2. Install the dependencies.
```bash
   npm install
```

4. Run the development server.
```bash
   npm run dev ( For the Front-End )
   npm run serve ( For Strapi Back-End )
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

The Ecommerce Web Application allows users to:

1. **Log-In / Sign Up:** Users can authenticate using Google or other options provided by Next Auth.

2. **Browse Products:** Users can browse through various products available on the platform.

3. **Add Products:** Authenticated users can add their products to the store, providing details such as title, description, category, size, and price, image etc.

4. **Add to Cart:** Users can add multiple products to their cart for purchase.

5. **Checkout & Payment:** When ready, users can proceed to checkout and make secure payments using the Stripe payment method.

## Contributing

Contributions to the Ecommerce Web Application are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE). Remember to update the placeholders like `Project Name`, `Description`, `Features`, `Installation`, `Usage` `Contributing`, and `License` with the relevant information for your project. You can also add more sections or customize the formatting as needed.
