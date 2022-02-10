import React from 'react';
//import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';

const App = () => {
  return (
    <div className='container'>
      <h3 className='row mt-3'> Astro Money Manager </h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget />
        </div>
        <div className='col-sm'>
          <Remaining />
        </div>
        <div className='col-sm'>
          <ExpenseTotal />
        </div>
      </div>
    </div>
  )
};

export default App;