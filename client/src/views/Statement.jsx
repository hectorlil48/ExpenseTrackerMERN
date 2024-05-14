import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Statement = (props) => {
  const { transactions, setTransations } = props;
  const deleteTransation = (transactionId) => {
    console.log(transactionId);
    axios
      .delete(`http://localhost:8000/api/expense/${transactionId}`)
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div className="custom-container mt-4">
      <h2 className="border-bottom border-secondary border-5 text-secondary">
        History
      </h2>

      <table className="table text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.description}</td>
              <td>{new Date(transaction.createdAt).toLocaleDateString()}</td>
              <td
                className={`${
                  transaction.type === "income" ? "text-success" : "text-danger"
                }`}
              >
                ${transaction.amount.toFixed(2)}
              </td>
              <td>
                <button className="btn btn-primary">
                  <Link
                    className="text-white text-decoration-none"
                    to={`/expense/${transaction._id}/edit`}
                  >
                    Edit
                  </Link>
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTransation(transaction._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Statement;
