import React from 'react';
import TheChart from './TheChart';

function ChartContainer({ tableData }) {
  const allCandidates = tableData.map((candidate) => {
    let addedDate = new Date(candidate.since);
    let today = new Date();
    let days = Math.floor((today - addedDate) / (1000 * 60 * 60 * 24));
    return days;
  });
  const newCandidates = allCandidates.filter((candidate) => candidate <= 5);

  console.log('allCandidates', allCandidates);
  console.log('newCandidates', newCandidates);

  const data = {
    labels: ['Wk 1', 'Wk 2', 'Wk 3', 'Wk 4'],
    datasets: [
      {
        label: '',
        // data: [33, 53, 85, 41, 44, 65],
        data: newCandidates,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
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
