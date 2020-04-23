/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe('pk_test_NhzBum0nm37FjIbUvtJg5o2900VjL5PA2D');
export const bookTour = async tourId => {
  try {
    // get the checkout session from the api
    const session = await axios({
      method: 'GET',
      url: `/api/v1/booking/checkout-session/${tourId}`
    });
    // create checkout form + charge the credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    showAlert('error', err);
  }
};
