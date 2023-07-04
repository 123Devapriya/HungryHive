global.foodData = require("./db")(function call(err, data, CatData) {
  if (err) console.log(err);
  global.foodData = data;
  global.foodCategory = CatData;
});

const express = require("express");
const app = express();
const port = 5000;
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

app.post("/api/auth/create-checkout-session", async (req, res) => {
  const { amount, email } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      shipping_address_collection: {
        allowed_countries: ["US", "CA","IN"], 
      },
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Ordered from HungryHive",
            },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/failure",
      customer_email: email,
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.use("/api/auth", require("./Routes/Auth"));
app.use("/api/displaydata", require("./Routes/DisplayData"));
app.listen(port, () => {
  console.log(`Backend running on  http://localhost:${port}`);
});
