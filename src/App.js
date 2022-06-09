import React, { useState } from 'react';
import ChartContainer from './components/ChartContainer';
import { dataOne } from './components/tempData';
import './App.css';

function App() {
  const [tableData, setTableData] = useState(dataOne);
  return (
    <div className="App">
      <ChartContainer tableData={tableData} />
    </div>
  );
}

export default App;
