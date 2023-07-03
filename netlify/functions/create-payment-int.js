// THIS IS SERVERLESS FUNCTIONS
// the name of the function will be the name of the route
require("dotenv").config();
const stripe = require("stripe")(process.env.SECRETSTRIPE);

exports.handler = async (event) => {
  try {
    const { amount } = JSON.parse(event.body);
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    return {
      statusCode: 200,
      body: JSON.stringify({ paymentIntent }),
    };
  } catch (err) {
    console.log( err );
    return {
      statusCode: 400,
      body: JSON.stringify({ err }),
    };
  }
};
