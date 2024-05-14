import { Router } from "express";
import {
  createExpense,
  getAllExpenses,
  getOneExpense,
  updateOneExpense,
  deleteOneExpense,
} from "../controllers/expense.controller.js";

const router = Router();

router.route("/expense").get(getAllExpenses).post(createExpense);

router
  .route("/expense/:id")
  .get(getOneExpense)
  .put(updateOneExpense)
  .delete(deleteOneExpense);

export default router;
