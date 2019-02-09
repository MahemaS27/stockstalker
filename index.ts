require('dotenv').config()

const Alpaca = require('@alpacahq/alpaca-trade-api')

const alpaca = new Alpaca({
  keyId: process.env.ALPACA_KEY,
  secretKey: process.env.ALPACA_SECRET,
  paper: true,
})

alpaca.getAccount().then((account) => {
    console.log('Current Account:', account)
  })

  const express = require("express");
const app = express();

const port = process.env.PORT || 8080;

app.get("/", (req, res) =>
  res.send("yo")
);

app.get("/api/orders", (req,res) => {
  let allOrders = [];
  alpaca.getOrders({}).then(orders => {
    res.send(orders)
  })
});

app.listen(port, () => console.log("Listening on port " + port + "!"));
