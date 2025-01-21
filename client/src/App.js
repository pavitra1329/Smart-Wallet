import React, { useState } from 'react';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import IncomeForm from './Components/IncomeForm';
import Dashboard from './Components/Dashboard';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [income, setIncome] = useState(0); // Track total income

  // Calculate total expenses
  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  // Calculate remaining balance (Income - Total Expenses)
  const remainingBalance = income - totalExpenses;

  const handleExpenseAdded = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleIncomeAdded = (incomeAmount) => {
    setIncome(incomeAmount); // Update the income
  };

  return (
    <div className="bg-purple-50 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-center text-black mb-6">Smart Wallet</h1>
        
        {/* Dashboard Section */}
        <Dashboard expenses={expenses} income={income} remainingBalance={remainingBalance} />

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          
          {/* Left Side - Income Input and Total Income */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Add Your Income</h2>
            <IncomeForm onIncomeAdded={handleIncomeAdded} />

            <div className="mt-6">
              <h3 className="text-xl font-semibold">Total Income</h3>
              <div className="text-4xl font-extrabold text-green-500">₹ {income.toFixed(2)}</div>
            </div>
          </div>

          {/* Right Side - Expense Form and List */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Add a New Expense</h2>
            <ExpenseForm onExpenseAdded={handleExpenseAdded} />

            <ExpenseList expenses={expenses} />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default App;
