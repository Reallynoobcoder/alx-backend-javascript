const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.post('/login', (request, response) => {
  const userName = request.body.userName;
  response.send(`Welcome ${userName}`);
});

app.get('/available_payments', (request, response) => {
  response.send(
    JSON.stringify({
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    })
  );
});

app.get('/cart/:id(\\d+)', (request, response) => {
  response.send(`Payment methods for cart ${request.params.id}`);
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
