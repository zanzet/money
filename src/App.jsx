import './App.scss';

import React from 'react';
import { AddExpense, AddIncome, AughPage, Dashboard, ExpenseCategories, Page404 } from './pages/index';
import { Header } from './components';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from './context/AuthContext';

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
              user ? (<Dashboard/>) : (<Navigate to="/" />)
            }
          />
          <Route path='/income' element={<AddIncome/>} />
          <Route path='/expense' element={<AddExpense />} />

          <Route path='/expensecategories' element={<ExpenseCategories />} />
          <Route path='*' element={<Page404 />} />

        </Routes>

      </div>
    </Router>
  )
};

export default App;