import { CHANGE_CLASS, CHECKOUT, SHOW_ERROR } from '../actions/types';

const initialState = {
  cartItems: [],
  checkout: false,
  showError: false
}

export default function(state = initialState, action) {

  switch(action.type) {
    case CHANGE_CLASS:
      return {
         ...state,
         cartItems: action.payload
      }
    case CHECKOUT:
      return {
        ...state,
        checkout: true,
      }
    case SHOW_ERROR:
      return {
        ...state,
        showError: action.payload
      }
    default:
      return state;
  }
}
