import { CHANGE_CLASS, SHOW_ERROR } from './types';


export const updateCart = (cartList) => dispatch => {
  dispatch({
    type: CHANGE_CLASS,
    payload: cartList
  });
}

export const showError = (newValue) => dispatch => {
  dispatch({
    type: SHOW_ERROR,
    payload: newValue
  });
}
