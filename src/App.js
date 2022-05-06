import Expenses from "./components/Expense/Expenses";
import ExpenseForm from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    {
      title: "Manish",
      amount: 8588.98,
      date: new Date(2021, 5, 12),
    },
    {
      title: "Ankit",
      amount: 3438.8,
      date: new Date(2022, 5, 12),
    },
    {
      title: "Vyom",
      amount: 3212.12,
      date: new Date(2025, 5, 12),
    },
  ];
  return (
    <div>
      <ExpenseForm></ExpenseForm>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
