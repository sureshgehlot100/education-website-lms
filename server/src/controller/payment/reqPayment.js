require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const reqPayment = async (req, res) => {
  try {
    const lineItems = req.body.data.map((cart_item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: cart_item.name,
          images: [cart_item.image],
          // image:cart_item.image use when single image load
          description: cart_item.description,
        },
        unit_amount: cart_item.price * 100,
      },
      quantity: cart_item.quantity,
    }));
    const customer = await stripe.customers.create({
      name: "Suresh Gehlot ",
      email: req.body.email,
      address: {
        line1: "651,Lato Ka vas",
        line2: "Dadai",
        city: "Jaipur",
        state: "Rajasthan",
        postal_code: "306603",
        country: "IN",
      },
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `http://localhost:3000/PaymentSuccess?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: "http://localhost:3000/PaymentFailed",
      customer: customer.id,
      payment_intent_data: {
        setup_future_usage: "off_session",
        application_fee_amount: req.body.amount,
      },
    });
    res.status(200).json({ message: "done", session: session.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};
module.exports = reqPayment;
