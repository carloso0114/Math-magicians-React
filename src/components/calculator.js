import './calculator.css';
import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: null, next: null, operation: null });

  const clickHandler = (e) => {
    const result = calculate(state, e.target.innerHTML);
    setState((state) => ({ ...state, ...result }));
  };

  let display = 0;
  if (state.total) {
    display = state.total;
  }
  if (state.next) {
    display = state.next;
  }
  return (
    <div className="displayFlex">
      <h1>Let&apos;s do some math!</h1>
      <div className="grid-container">
        <div className="item1 display">{display}</div>
        <button type="button" className="item2 singleBtn" onClick={clickHandler}>AC</button>
        <button type="button" className="item3 singleBtn" onClick={clickHandler}>+/-</button>
        <button type="button" className="item4 singleBtn" onClick={clickHandler}>%</button>
        <button type="button" className="item5 specialBtn" onClick={clickHandler}>÷</button>
        <button type="button" className="item6 singleBtn" onClick={clickHandler}>7</button>
        <button type="button" className="item7 singleBtn" onClick={clickHandler}>8</button>
        <button type="button" className="item8 singleBtn" onClick={clickHandler}>9</button>
        <button type="button" className="item9 specialBtn" onClick={clickHandler}>x</button>
        <button type="button" className="item10 singleBtn" onClick={clickHandler}>4</button>
        <button type="button" className="item11 singleBtn" onClick={clickHandler}>5</button>
        <button type="button" className="item12 singleBtn" onClick={clickHandler}>6</button>
        <button type="button" className="item13 specialBtn" onClick={clickHandler}>-</button>
        <button type="button" className="item14 singleBtn" onClick={clickHandler}>1</button>
        <button type="button" className="item15 singleBtn" onClick={clickHandler}>2</button>
        <button type="button" className="item16 singleBtn" onClick={clickHandler}>3</button>
        <button type="button" className="item17 specialBtn" onClick={clickHandler}>+</button>
        <button type="button" className="item18 singleBtn" onClick={clickHandler}>0</button>
        <button type="button" className="item19 singleBtn" onClick={clickHandler}>.</button>
        <button type="button" className="item20 specialBtn" onClick={clickHandler}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
