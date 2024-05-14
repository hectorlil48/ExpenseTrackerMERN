import Expense from "../models/expense.model.js";

// create new
async function createExpense(req, res) {
  try {
    const newExpense = await Expense.create(req.body);
    res.json(newExpense);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// Get all
async function getAllExpenses(req, res) {
  try {
    const allExpenses = await Expense.find(); // here is our query to find Users
    res.json(allExpenses);
  } catch (error) {
    console.log(error);
    res.status(400).json(error); // here is our error response
  }
}

// Get One
async function getOneExpense(req, res) {
  try {
    const foundExpense = await Expense.findById(req.params.id);
    res.json(foundExpense);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// Update
async function updateOneExpense(req, res) {
  const options = {
    new: true,
    runValidators: true,
  };
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      req.params.id,
      req.body,
      options
    );
    res.json(updatedExpense);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

// Delete
async function deleteOneExpense(req, res) {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
    res.json(deletedExpense);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

export {
  createExpense,
  getAllExpenses,
  getOneExpense,
  updateOneExpense,
  deleteOneExpense,
};
