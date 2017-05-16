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
      <h3>It's time for tea!</h3>
    </div>  
    )
  }
}

export default Hello
