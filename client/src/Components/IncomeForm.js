// src/Components/IncomeForm.js
import React, { useState } from 'react';

const IncomeForm = ({ onIncomeAdded }) => {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      onIncomeAdded(parseFloat(amount)); // Pass the income to the parent component
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter Income (₹)"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-3 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
      >
        Add Income
      </button>
    </form>
  );
};

export default IncomeForm;
