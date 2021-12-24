import React, { Component } from 'react'
import './Counter.css'

import {connect} from 'react-redux'
class Counter extends Component {

    addOne = () => {
      this.props.dispatch({ type: 'ADD_ONE' });
    }
  
    minusOne = () => {
      this.props.dispatch({ type: 'MINUS_ONE' });
    }
  
    render() {
      return (
        <div className="App" >
          <header className="App__header">
            <h1>Num: {this.props.number}</h1>
            <div className='App__buttons'>
              <button onClick={this.minusOne} type="button" >-</button>
              <button onClick={this.addOne} type="button" >+</button>
            </div>
          </header>
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      number: state.number
    };
  }
  
  export default connect(mapStateToProps)(Counter);
