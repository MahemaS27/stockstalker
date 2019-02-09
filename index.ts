const path = require('path');
const express = require("express");

const app = express();
const port = process.env.PORT || 8080;

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

app.get("/api/orders", (req,res) => {
  alpaca.getOrders({}).then(orders => {
    res.send(orders)
  })
});

app.delete('/api/orders/:id', (req, res) => {
  alpaca.cancelOrder(req.params.id).then(res.send({deleted: true}))
});

app.post("/api/orders/create/:symbol/:qty", (req, res) => {
  console.log("create order", req.params)
  alpaca.createOrder({
    symbol: req.params.symbol,
    qty: req.params.qty,
    side: 'buy',
    type: 'market',
    time_in_force: 'day'
  }).then(order => res.send(order))
});

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => console.log("Listening on port " + port + "!"));