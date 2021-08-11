import './calculator.css';
import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="grid-container">
        <div type="button" className="item1 display">0</div>
        <button type="button" className="item2 singleBtn">AC</button>
        <button type="button" className="item3 singleBtn">+/-</button>
        <button type="button" className="item4 singleBtn">%</button>
        <button type="button" className="item5 specialBtn">÷</button>
        <button type="button" className="item6 singleBtn">7</button>
        <button type="button" className="item7 singleBtn">8</button>
        <button type="button" className="item8 singleBtn">9</button>
        <button type="button" className="item9 specialBtn">x</button>
        <button type="button" className="item10 singleBtn">4</button>
        <button type="button" className="item11 singleBtn">5</button>
        <button type="button" className="item12 singleBtn">6</button>
        <button type="button" className="item13 specialBtn">-</button>
        <button type="button" className="item14 singleBtn">1</button>
        <button type="button" className="item15 singleBtn">2</button>
        <button type="button" className="item16 singleBtn">3</button>
        <button type="button" className="item17 specialBtn">+</button>
        <button type="button" className="item18 singleBtn">0</button>
        <button type="button" className="item19 singleBtn">.</button>
        <button type="button" className="item20 specialBtn">=</button>
      </div>
    );
  }
}

export default Calculator;
