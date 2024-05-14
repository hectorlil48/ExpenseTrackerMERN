import { useState, useEffect } from "react";
import axios from "axios";
import IncomeExpense from "../views/IncomeExpense";
import Statement from "../views/Statement";

const Home = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/expense")
      .then((res) => {
        console.log(res.data);
        setTransactions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [transactions]);
  return (
    <>
      <IncomeExpense
        transactions={transactions}
        setTransactions={setTransactions}
      />
      <Statement
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </>
  );
};

export default Home;
