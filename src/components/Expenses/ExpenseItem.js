import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// import { useState } from 'react';

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">
            <span style={{ fontSize: "21px", marginRight: "3px" }}>₹</span>
            {props.amount}
          </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
