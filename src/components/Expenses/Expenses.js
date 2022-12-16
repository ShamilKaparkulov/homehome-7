
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import {useState} from "react"

function Expenses({expenses}) {
  const [selectedYear, setSelectedYear]= useState('All')
  const selectChangeHandler= ({target: {value}})=>{
    setSelectedYear(value)
  }
  // const getCurrentExpenses= () =>{
  //   if(selectedYear === "All"){
  //     return expenses
  //   }
  //   return expenses.filter((expense))
  // }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={selectedYear} 
        onChangeSelectedYear={selectChangeHandler}
      />
      <ExpensesList expenses={expenses} />
    </Card>
  );
}

export default Expenses;
