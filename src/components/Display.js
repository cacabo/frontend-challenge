import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { StickyContainer, Sticky } from 'react-sticky'

import Nav from './Nav'
import Courses from './Courses'
import Cart from './Cart'
import Receipt from './Receipt'

import { connect } from 'react-redux';

class Display extends Component {
  render() {
    if (this.props.checkout) {
      return (
        <>
          <Nav />
          <Receipt />
        </>
      );
    } else {
      return (
        <>
          <Nav />
          <StickyContainer>
          <div style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '0 calc(1rem + 10%)',
          }}>
            <Container>
              <Row>
                <Col sm={9}>
                  <Courses />
                </Col>
                <Col sm={3}>

                    <Sticky>
                      {({style}) => <div style={style}><Cart /></div>}
                    </Sticky>

                </Col>
              </Row>
            </Container>
          </div>
          </StickyContainer>
        </>
      );
    }

  }
}

const mapStateToProps = state => ({
  posts: state.posts.cartItems,
  checkout: state.posts.checkout
});


export default connect(mapStateToProps, null)(Display);
