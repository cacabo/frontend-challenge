import { CHECKOUT } from './types';


export const checkout = () => dispatch => {
  dispatch({
    type: CHECKOUT,
    payload: true,
  });
}
