import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTransactionForm from "./views/AddTransactionForm";
import UpdateTransactionForm from "./views/UpdateTransaction";
import Home from "./components/Home";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="root d-flex flex-column align-items-center p-4">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<AddTransactionForm />} />
          <Route path="/expense/:id/edit" element={<UpdateTransactionForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
