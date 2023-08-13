import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

let dummy = [
  {
    id: "e1",
    title: "Oreo",
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    title: "Sandwich",
    amount: 79.49,
    date: new Date(2023, 2, 23),
  },
  {
    id: "e3",
    title: "Soap",
    amount: 29.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Coke",
    amount: 45.99,
    date: new Date(2023, 5, 2),
  },
  {
    id: "e5",
    title: "Kurkure",
    amount: 91.99,
    date: new Date(2023, 1, 30),
  },
  {
    id: "e6",
    title: "Mojito",
    amount: 48.05,
    date: new Date(2023, 9, 17),
  },
  {
    id: "e7",
    title: "Bread Cutlet",
    amount: 56.99,
    date: new Date(2023, 10, 12),
  }
];

export default function App() {
  const [expenses, setExpenses] = useState(dummy);

  const handleAddExpense = (expense) => {
    setExpenses((preExpense) => {
      return [expense, ...preExpense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses items={expenses} />
    </div>
  );
}
