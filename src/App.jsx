import './App.scss';

import React from 'react';
import { AddTransaction, AughPage, Dashboard, ExpenseCategories } from './pages/index';
import { Header } from './components';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




const transactions = [
  { id: 1, category: 'Food', amount: 50.75, description: 'Groceries', date: '2024-10-10' },
  { id: 2, category: 'Transport', amount: 20.0, description: 'Bus fare', date: '2024-10-11' },
  { id: 3, category: 'Salary', amount: 1500.0, description: 'October salary', date: '2024-10-01' }
];

const categories = [
  {
    id: 1,
    name: "Food",
    type: "expense"
  },
  {
    id: 2,
    name: "Transport",
    type: "expense"
  },
  {
    id: 3,
    name: "Salary",
    type: "income"
  },
  {
    id: 4,
    name: "Entertainment",
    type: "expense"
  },
  {
    id: 5,
    name: "Movies",
    type: "expense"
  },
  {
    id: 6,
    name: "Sports",
    type: "expense"
  }
]

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/' element={<AughPage />} />

          <Route path='/dashbord' element={< Dashboard
            balance={1429.25}
            income={1500.00}
            expenses={70.75}
            transactions={transactions} />}
          />
          <Route path='/add' element={<AddTransaction transactions={transactions} />} />
          <Route path='/expensecategories' element={<ExpenseCategories />} />

        </Routes>

      </div>
    </Router>
  );
};

export default App;