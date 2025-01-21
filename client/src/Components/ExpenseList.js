// src/Components/ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Expense List</h2>
      <table className="min-w-full table-auto">
        <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
          <tr>
            <th className="py-2 px-4 text-left">Expense</th>
            <th className="py-2 px-4 text-left">Amount (₹)</th>
            <th className="py-2 px-4 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((expense) => (
              <tr key={expense.id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{expense.name}</td>
                <td className="py-2 px-4">{expense.amount.toFixed(2)} ₹</td>
                <td className="py-2 px-4">{expense.date.toLocaleDateString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="py-4 text-center text-gray-500">No expenses recorded</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
