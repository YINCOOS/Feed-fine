import createStripe from 'stripe-client';
import {host} from '../../utils/env';

const stripe = createStripe(
  'pk_test_51MkzTsFhvcqDyj5rmBF60ymsShzEVt7lZm6EmPFh6GpWKjKNDgPFUtpEKbheIXQ21i4TNPFFvnkdfbYqDn4XqGBN00JXdeCMUO',
);


export const cardTokenRequest  = async (card) => {
  try {
    const token = await stripe.createToken(card);
    return token;
  } catch (e) {
    console.log(e);
  }
}

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      amount,
      name,
    }),
    method: 'POST',
  }).then(res => {
    if(res.status > 200){
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};