// bring in React and Component from React
//this imports react methods and the component class from the react library
import React, {Component} from 'react';

// define our Hello component that we are creating
class Hello extends Component {
  // what should the component render?
  render () {
    // make sure to return some UI
    return (
    <div>	
      <h1>Hello {this.props.name}</h1>
      <h2>Your age is {this.props.age}</h2>
      <h3>my animals are {this.props.animals}</h3>
    </div>  
    )
  }
}

export default Hello
