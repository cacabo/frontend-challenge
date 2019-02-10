import React, { Component } from 'react'
import { connect } from 'react-redux';
import { checkout } from '../actions/checkout'
import { Button } from 'react-bootstrap'

class Cart extends Component {

  toggleCheckout = () => {

    this.props.checkout();
  }

  render() {
    if (this.props.posts.length === 0) {
      return (
        <div class="p-3 text-center border border-dark rounded">

          <h2>Course Cart</h2>
          <h3>You cart is currently empty!</h3>
          {this.props.showError ? <h4 class="text-danger"> You can only add 7 courses!</h4> : <p></p>}
          {this.props.posts !== undefined && this.props.posts.length > 0 ? <Button variant="outline-primary" onClick={this.toggleCheckout}>Checkout</Button> : <p></p>}

        </div>
      )
    } else {
      return (
        <div class="p-3 text-center border border-info rounded">

          <h2>Course Cart</h2>
          {this.props.posts.map((item) => <h3 class="text-center">{item}</h3>)}
          {this.props.showError ? <h4 class="text-danger"> You can only add 7 courses!</h4> : <p></p>}
          <Button variant="outline-primary" onClick={this.toggleCheckout}>Checkout</Button>

        </div>
      )
    }

  }
}

const mapStateToProps = state => ({
  posts: state.posts.cartItems,
  showError: state.posts.showError
});

export default connect(mapStateToProps, { checkout })(Cart);
