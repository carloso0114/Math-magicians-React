/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
import './calculator.css';
import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOp: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = (e) => {
    let { total, next, operation } = calculate(this.state.currentOp, e.target.innerHTML);
    if (total === undefined) {
      total = this.state.currentOp.total;
    }
    if (next === undefined) {
      next = this.state.currentOp.next;
    }
    if (operation === undefined) {
      operation = this.state.currentOp.operation;
    }
    this.setState({
      currentOp: {
        total,
        next,
        operation,
      },
    });
  };

  render() {
    let display = 0;
    if (this.state.currentOp.total) {
      display = this.state.currentOp.total;
    }
    if (this.state.currentOp.next) {
      display = this.state.currentOp.next;
    }
    return (
      <div className="grid-container">
        <div className="item1 display">{ display }</div>
        <button type="button" className="item2 singleBtn" onClick={this.clickHandler}>AC</button>
        <button type="button" className="item3 singleBtn" onClick={this.clickHandler}>+/-</button>
        <button type="button" className="item4 singleBtn" onClick={this.clickHandler}>%</button>
        <button type="button" className="item5 specialBtn" onClick={this.clickHandler}>÷</button>
        <button type="button" className="item6 singleBtn" onClick={this.clickHandler}>7</button>
        <button type="button" className="item7 singleBtn" onClick={this.clickHandler}>8</button>
        <button type="button" className="item8 singleBtn" onClick={this.clickHandler}>9</button>
        <button type="button" className="item9 specialBtn" onClick={this.clickHandler}>x</button>
        <button type="button" className="item10 singleBtn" onClick={this.clickHandler}>4</button>
        <button type="button" className="item11 singleBtn" onClick={this.clickHandler}>5</button>
        <button type="button" className="item12 singleBtn" onClick={this.clickHandler}>6</button>
        <button type="button" className="item13 specialBtn" onClick={this.clickHandler}>-</button>
        <button type="button" className="item14 singleBtn" onClick={this.clickHandler}>1</button>
        <button type="button" className="item15 singleBtn" onClick={this.clickHandler}>2</button>
        <button type="button" className="item16 singleBtn" onClick={this.clickHandler}>3</button>
        <button type="button" className="item17 specialBtn" onClick={this.clickHandler}>+</button>
        <button type="button" className="item18 singleBtn" onClick={this.clickHandler}>0</button>
        <button type="button" className="item19 singleBtn" onClick={this.clickHandler}>.</button>
        <button type="button" className="item20 specialBtn" onClick={this.clickHandler}>=</button>
      </div>
    );
  }
}

export default Calculator;
