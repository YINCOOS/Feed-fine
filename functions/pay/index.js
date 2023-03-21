module.exports.payRequest = (request, response, stripeClient) => {
  const body = JSON.parse(request.body);
  const {token, amount} = body;
  stripeClient.paymentIntents
    .create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
      payment_method_data: {
        type: 'card',
        card: {
          token,
        },
      },
      confirm: true,
    })
    .then(paymentIntent => {
      response.json(paymentIntent);
    })
    .catch(e => {
        console.log("What went wrong?", e)
      response.status(400);
      return response.send(e);
    });
};
