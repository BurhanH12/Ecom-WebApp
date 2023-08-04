const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

// Using Express
const app = require('express')();

// Use body-parser to retrieve the raw body as a buffer
const bodyParser = require('body-parser');

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

app.post('/api/webhook', bodyParser.raw({type: 'application/json'}), (request, response) => {
    const payload = request.body;
    const sig = request.headers['stripe-signature'];
  
    let event;
  
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      return response.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event based on its type
  switch (event.type) {
    case 'checkout.session.completed':
      // Retrieve and process the completed checkout session using the event data
      const sessionId = event.data.object.id;
      console.log("The checkout session was successful");
      // E.g., mark the order as paid in your database or trigger further actions
      break;

      case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      console.log("The Payment was successful");
      break;


    // Add other event handling cases as needed
    default:
      // Unsupported event type
      console.log(`Unhandled event type ${event.type}`);
      break;
  }

    // Return a 200 response to acknowledge receipt of the event
    response.status(200).send();

  });

  // app.listen(3000, () => console.log('Running on port 3000'));
  app.listen(4242, () => console.log('Running on port 4242'));