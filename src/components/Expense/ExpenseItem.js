import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ui/Card";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
    const [title,setTitle]=useState(props.title);
    console.log('my initial state')

    const clickHandler=()=>{
        setTitle('Updated')
        console.log(title)
    }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <div><button onClick={clickHandler}>Click Me</button></div>
    </Card>
  );
};

export default ExpenseItem;
