require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const receipt = async (req, res) => {
  try {
    const sessionId = req.body.sessionId;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const paymentIntent = await stripe.paymentIntents.retrieve(
      session.payment_intent
    );
    const paymentMethod = await stripe.paymentMethods.retrieve(
      paymentIntent.payment_method
    );

    res.status(200).json({ message:"payment successfull",
      paymentIntent,
      paymentMethod,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error retrieving payment receipt" });
  }
};
module.exports = receipt;
