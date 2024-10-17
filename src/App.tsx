import './App.scss';

import React from 'react';

import { AughPage } from './pages/Auth page/Augh';
import { Header } from './components';
import { Dashboard } from './pages/Dashboard page/Dashbord';

const transactions = [
  { id: 1, category: 'Food', amount: 50.75, description: 'Groceries', date: '2024-10-10' },
  { id: 2, category: 'Transport', amount: 20.0, description: 'Bus fare', date: '2024-10-11' },
  { id: 3, category: 'Salary', amount: 1500.0, description: 'October salary', date: '2024-10-01' }
];

const App: React.FC = () => {
  return (
    <>
      <Header />
      {/* <AughPage /> */}
      <Dashboard
        balance={1429.25}
        income={1500.00}
        expenses={70.75}
        transactions={transactions}
      />

    </>
  );
};

export default App;