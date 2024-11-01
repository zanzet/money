import './App.scss';

import React from 'react';
import { AddTransaction, AughPage, Dashboard, ExpenseCategories, Page404 } from './pages/index';
import { Header } from './components';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from './context/AuthContext';


const transactions = [
  { id: 1, category: 'Food', amount: 50.75, description: 'Groceries', date: '2024-10-10' },
  { id: 2, category: 'Transport', amount: 20.0, description: 'Bus fare', date: '2024-10-11' },
  { id: 3, category: 'Salary', amount: 1500.0, description: 'October salary', date: '2024-10-01' }
];

const App = () => {
  const { user } = useAuth()

  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>

          <Route path='/' element={<AughPage />} />
          <Route
            path='/dashboard'
            element={
              user ? (
                <Dashboard
                  balance={1429.25}
                  income={1500.00}
                  expenses={70.75}
                  transactions={transactions}
                />
              ) : (
                <Navigate to='/' />
              )
            }
          />
            <Route path='/add' element={<AddTransaction transactions={transactions} />} />
            <Route path='/expensecategories' element={<ExpenseCategories />} />
            <Route path='*' element={<Page404 />} />

        </Routes>

      </div>
    </Router>
  )
};

export default App;