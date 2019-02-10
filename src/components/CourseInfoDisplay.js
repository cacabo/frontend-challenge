import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart, showError } from '../actions/postActions'
import {Button} from 'react-bootstrap'

class CourseInfoDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courseAdded: false,
      showDescription: false,
      buttonText: 'Add to Cart',
      credits: '',
    };
  }

  componentDidMount() {
    var url = 'https://api.pennlabs.org/registrar/search?q=' + this.props.dept + '-' + this.props.number;
    fetch(url)
      .then(response => response.json())
      .then(
        data => {
          if (data.courses.length !== 0) {
            this.setState(state => ({credits: data.courses[0].credits}))
          }
        }
      );
  }

  toggleShow = () => {
    this.setState(state => ({ showDescription: !state.showDescription }));
  }

  toggleCourse = () => {
    var newCourseAdded = !this.state.courseAdded;

    if (newCourseAdded && this.props.posts.length < 7) {
      this.setState(state => ({ courseAdded: newCourseAdded, buttonText: 'Remove from Cart'}));
      var newList = this.props.posts.concat(this.props.dept + ' ' + this.props.number);
      this.props.updateCart(newList);
    } else if (!newCourseAdded) {
      if (this.props.posts.length - 1 < 7) {
      }
      this.setState(state => ({ courseAdded: newCourseAdded, buttonText: 'Add to Cart'}));
      var newList = this.props.posts;
      var index = newList.indexOf(this.props.dept + this.props.number);
      newList = newList.filter(item => item !== this.props.dept + ' ' + this.props.number)
      this.props.updateCart(newList);
      this.props.showError(false);
    } else {
      this.props.showError(true);
    }
  }

  render() {
    if (this.state.showDescription) {
      if (this.state.buttonText === 'Remove from Cart') {
        return (
          <div class="p-3 border border-info rounded">
            <h3 onClick={this.toggleShow} style={{cursor:'pointer'}} class="text-info">{this.props.dept} {this.props.number} - {this.props.title}</h3>

            <div><p style={{'font-size':'130%'}}>{this.props.description}</p></div>
            {this.state.credits === '' ? <p></p> : <div><p style={{'font-size':'130%'}}>{this.state.credits}</p></div>}
            <div><p style={{'font-size':'130%'}}><b>Prerequisite Courses:</b></p></div>
            {(this.props.prereqs !== undefined ? this.props.prereqs.map((item) => <p style={{'font-size':'130%'}}>{item}</p>) : <p style={{'font-size':'130%'}}>None</p>)}
            <div><Button variant="outline-primary" onClick={this.toggleCourse}>{this.state.buttonText}</Button></div>
          </div>
        )
      } else {
        return (
          <div class="p-3 border border-dark rounded">
            <h3 onClick={this.toggleShow} style={{cursor:'pointer'}}>{this.props.dept} {this.props.number} - {this.props.title}</h3>

            <div><p style={{'font-size':'130%'}}>{this.props.description}</p></div>
            {this.state.credits === '' ? <p></p> : <div><p style={{'font-size':'130%'}}>{this.state.credits}</p></div>}
            <div><p style={{'font-size':'130%'}}><b>Prerequisite Courses:</b></p></div>
            {(this.props.prereqs !== undefined ? this.props.prereqs.map((item) => <p style={{'font-size':'130%'}}>{item}</p>) : <p style={{'font-size':'130%'}}>None</p>)}
            <div><Button variant="outline-primary" onClick={this.toggleCourse}>{this.state.buttonText}</Button></div>
          </div>
        )
      }

    } else {
      if (this.state.buttonText === 'Remove from Cart') {
        return (
          <div class="p-3 border border-info rounded">
            <h3 onClick={this.toggleShow} style={{cursor:'pointer'}} class="text-info">{this.props.dept} {this.props.number} - {this.props.title}</h3>

            <div><Button variant="outline-primary" onClick={this.toggleCourse}>{this.state.buttonText}</Button></div>
          </div>
        )
      } else {
        return (
          <div class="p-3 border border-dark rounded">
            <h3 onClick={this.toggleShow} style={{cursor:'pointer'}}>{this.props.dept} {this.props.number} - {this.props.title}</h3>

            <div><Button variant="outline-primary" onClick={this.toggleCourse}>{this.state.buttonText}</Button></div>
          </div>
        )
      }

    }

  }
}

const mapStateToProps = state => ({
  posts: state.posts.cartItems
});


export default connect(mapStateToProps, { updateCart, showError })(CourseInfoDisplay);
