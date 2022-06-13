import React from 'react';
import TheChart from './TheChart';

function ChartContainer({ tableData }) {
  // const allCandidates = tableData.map((candidate) => {
  //   let addedDate = new Date(candidate.since);
  //   // dayAdded: day of the month candidate was added
  //   let dayAdded = addedDate.getDate(addedDate);
  //   let today = new Date();
  //   let daysOld = Math.floor((today - addedDate) / (1000 * 60 * 60 * 24));

  //   console.log('addedDate', addedDate);
  //   console.log('dayAdded', dayAdded);
  //   console.log('today', today);
  //   console.log('daysOld', daysOld);
  //   return daysOld;
  // });
  // const newCandidates = allCandidates.filter((candidate) => candidate <= 5);
  let wk1 = [];
  let wk2 = [];
  let wk3 = [];
  let wk4 = [];

  for (let i = 0; i < tableData.length; i++) {
    let addDate = new Date(tableData[i].since);
    let dayAdded = addDate.getDate(addDate);
    let today = new Date();
    let daysOld = Math.floor((today - addDate) / (1000 * 60 * 60 * 24));
    if (daysOld <= 7) {
      wk1.push(tableData[i]);
    } else if (daysOld > 7 && daysOld <= 14) {
      wk2.push(tableData[i]);
    } else if (daysOld > 14 && daysOld <= 21) {
      wk3.push(tableData[i]);
    } else if (daysOld > 21) {
      wk4.push(tableData[i]);
    }
  }

  // console.log('allCandidates', allCandidates);
  // console.log('newCandidates', newCandidates);

  const data = {
    labels: ['wk 1', 'wk 2', 'wk 3', 'wk 4'],
    datasets: [
      {
        label: '',
        // data: [33, 53, 85, 41, 44, 65],
        data: [wk1.length, wk2.length, wk3.length, wk4.length],
        fill: true,
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderColor: 'rgba(0,0,0,1)',
      },
    ],
  };

  return (
    <div>
      <TheChart chartData={data} />
    </div>
  );
}

export default ChartContainer;
