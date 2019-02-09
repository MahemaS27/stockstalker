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

let port = process.env.PORT;

app.get("/", (req, res) =>
  res.send("yo")
);

app.listen(port, () => console.log("Listening on port " + port + "!"));
