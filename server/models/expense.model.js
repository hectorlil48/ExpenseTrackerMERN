import { model, Schema } from "mongoose";
const ExpenseSchema = new Schema(
  {
    description: {
      type: String,
      required: [true, "Description is required!"],
      minlength: [3, "Description must be at least 3 characters long!"],
      maxlength: [255, "Description must be less than 255 characters long!"],
    },
    amount: {
      type: Number,
      required: [true, "Amount is required!"],
      min: [2, "Amount must be at least 2 minutes long!"],
    },
    type: {
      type: String,
      enum: ["income", "expense"],
    },
  },
  { timestamps: true }
);
const Expense = model("Expense", ExpenseSchema);
export default Expense;
