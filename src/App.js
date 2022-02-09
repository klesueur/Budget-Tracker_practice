import React from 'react';
import bootstrap from 'bootstrap';
import Budget from './components/Budget';
import Remaining from './components/Remaining';

const App = () => {
  return (
    <div>
      <h3> Astro Money Manager </h3>
      <div> 
        <Budget /> 
        <Remaining />
      </div>
    </div>
  )
};

export default App;