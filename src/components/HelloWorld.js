import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '..css/HelloWorld.css';


class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello'};
  }
  frenchify(){
  
    this.frenchify = this.frenchify.bind(this);
  }

  render() {
    return (
      <div className="HelloWorld">
      {this.state.greeting} {this.props.name}!
      <br/>
      <button onClick={this.frenchify}>Frenchify!></button>
      </div>
    );
  }
}

export default HelloWorld;
