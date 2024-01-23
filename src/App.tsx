import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import ExpenseList from "./Components/ExpenseList";
import ExpenseListFilter from "./Components/ExpenseListFilter";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 20, category: "Entertainment" },
    { id: 3, description: "ccc", amount: 30, category: "Groceries" },
    { id: 4, description: "ddd", amount: 40, category: "Utilities" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  let showExpenseList = true;
  if (!expenses.length) {
    showExpenseList = false;
  }
  return (
    <div>
      <Form
        onSubmitExpense={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />
      <ExpenseListFilter
        onSelectcategory={(category) => setSelectedCategory(category)}
      />
      {showExpenseList && (
        <ExpenseList
          expenses={
            selectedCategory
              ? expenses.filter((e) => e.category === selectedCategory)
              : expenses
          }
          onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
        />
      )}
    </div>
  );
}

export default App;
