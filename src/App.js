import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux'
import { Container, Col, Row } from 'react-bootstrap'
import { StickyContainer, Sticky } from 'react-sticky'

import Nav from './components/Nav'
import Courses from './components/Courses'
import Cart from './components/Cart'
import Display from './components/Display'

import store from './store'

class App extends Component {
  render() {

    return (
      <Provider store={store}>
      <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
  integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
  crossorigin="anonymous"
/>
        <Display />
      </Provider>
    );
  }
}

export default App
