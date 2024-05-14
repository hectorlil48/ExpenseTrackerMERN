import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Home from "../components/Home";

const AddTransactionForm = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTransaction = {
      description,
      amount: parseFloat(amount), // Convert amount to a number
      type,
    };
    axios
      .post("http://localhost:8000/api/expense", newTransaction)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setDescription("");
        setAmount("");
        setType("expense");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data.errors);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <>
      <div className="custom-container mt-4">
        <h2 className="border-bottom border-secondary border-5 text-secondary">
          Add Transaction
        </h2>
        <form className="d-flex flex-column" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="amount" className="form-label">
              Amount
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            {errors.amount && (
              <p className="text-danger">{errors.amount.message}</p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Type
            </label>
            <select
              className="form-select"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </select>
          </div>
          <button className="btn btn-primary">Add Transaction</button>
        </form>
      </div>
    </>
  );
};

export default AddTransactionForm;
