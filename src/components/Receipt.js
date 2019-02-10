import React, { Component } from 'react'
import { connect } from 'react-redux';
import { checkout } from '../actions/checkout'
import { Button } from 'react-bootstrap'

class Receipt extends Component {

  toggleCheckout = () => {

    this.props.checkout();
  }

  render() {
    return (
      <div class="text-center">

        <h3>Thanks for using Penn Course Cart! You registered for:</h3>
        {this.props.posts !== undefined && this.props.posts.length > 0 ? this.props.posts.map((item) => <h4 class="text-center">{item}</h4>) : <h5>You cart is currently empty!</h5>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.cartItems
});

export default connect(mapStateToProps, null)(Receipt);
