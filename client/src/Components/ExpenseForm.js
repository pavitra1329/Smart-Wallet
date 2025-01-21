// src/Components/ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ onExpenseAdded }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount && date) {
      const newExpense = { id: Date.now(), name, amount: parseFloat(amount), date: new Date(date) };
      onExpenseAdded(newExpense);
      setName('');
      setAmount('');
      setDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Expense Name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount (₹)"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        type="submit"
        className="w-full bg-purple-500 text-white py-3 rounded-lg shadow-lg hover:bg-purple-600 transition duration-300"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
