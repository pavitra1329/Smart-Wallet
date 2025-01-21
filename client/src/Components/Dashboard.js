// src/Components/Dashboard.js
import React from 'react';

const Dashboard = ({ expenses, income, remainingBalance }) => {
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
      {/* Expense Overview */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Total Expenses</h2>
        <div className="flex justify-center items-center text-4xl font-extrabold text-red-500">
          ₹ {totalExpenses.toFixed(2)}
        </div>
      </div>

      {/* Income Overview
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Total Income</h2>
        <div className="flex justify-center items-center text-4xl font-extrabold text-green-500">
          ₹ {income.toFixed(2)}
        </div>
      </div> */}

      {/* Remaining Balance */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Remaining Balance</h2>
        <div className="flex justify-center items-center text-4xl font-extrabold text-blue-500">
          ₹ {remainingBalance.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
