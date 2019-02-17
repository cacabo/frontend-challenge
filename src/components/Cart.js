import React, { Component } from 'react'
import { connect } from 'react-redux';
import { checkout } from '../actions/checkout'
import { Button } from 'react-bootstrap'

class Cart extends Component {

  toggleCheckout = () => {

    this.props.checkout();
  }

  render() {
    // Also this probably shouldn't be called "posts"
    const { posts, showError } = this.props
    const arePosts = !posts || posts.length > 0
    
    return (
      <div class={`p-3 text-center border ${arePosts ? 'border-info' : 'border-dark'} rounded`}>
        <h2>Course Cart</h2>
        {arePosts && (<h3>You cart is currently empty!</h3>)}
        {showError && (<h4 class="text-danger"> You can only add 7 courses!</h4>)}
        {posts.map((item) => <h3 class="text-center">{item}</h3>)}
        {arePosts && (<Button variant="outline-primary" onClick={this.toggleCheckout}>Checkout</Button>)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.cartItems,
  showError: state.posts.showError
});

export default connect(mapStateToProps, { checkout })(Cart);
