import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import ExpenseList from "./Components/ExpenseList";
import ExpenseListFilter from "./Components/ExpenseListFilter";
import { Expense } from "./Components/ExpenseList/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
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
