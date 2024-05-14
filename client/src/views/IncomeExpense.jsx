import { useEffect, useState } from "react";
import axios from "axios";

const IncomeExpense = (props) => {
  const { transactions, setTransations } = props;
  const totalIncome = transactions.reduce((acc, curr) => {
    return curr.type === "income" ? acc + curr.amount : acc;
  }, 0);

  const totalExpense = transactions.reduce((acc, curr) => {
    return curr.type === "expense" ? acc + curr.amount : acc;
  }, 0);

  const totalBalance = totalIncome - totalExpense;

  return (
    <div className="custom-container">
      <h1 className="text-primary">Expense Tracker</h1>
      <p className="fs-4 no-margin-bottom">Your Balance</p>
      <p className="fs-4">${totalBalance.toFixed(2)}</p>
      <div className="d-flex text-center bg-white p-4">
        <div className="flex-fill">
          <p className="fw-bold">INCOME</p>
          <p className="no-margin-bottom income">${totalIncome.toFixed(2)}</p>
        </div>
        <div className="flex-fill">
          <p className="fw-bold">EXPENSES</p>
          <p className="no-margin-bottom expense">${totalExpense.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
