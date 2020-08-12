import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import '../../styles/_colors.scss';
import './ProgressChart.scss';

const data = [
  { name: 'mar 1', Recovered: 300, Infected: 456 },
  { name: 'mar 2', Recovered: 145, Infected: 230 },
  { name: 'mar 3', Recovered: 100, Infected: 345 },
  { name: 'mar 4', Recovered: 8, Infected: 450 },
  { name: 'mar 5', Recovered: 100, Infected: 321 },
  { name: 'mar 6', Recovered: 9, Infected: 235 },
  { name: 'mar 7', Recovered: 53, Infected: 267 },
  { name: 'mar 8', Recovered: 252, Infected: 378 },
  { name: 'mar 9', Recovered: 79, Infected: 210 },
  { name: 'mar 10', Recovered: 294, Infected: 23 },
  { name: 'mar 11', Recovered: 294, Infected: 23 },
  { name: 'mar 12', Recovered: 43, Infected: 45 },
  { name: 'mar 13', Recovered: 74, Infected: 90 },
  { name: 'mar 14', Recovered: 71, Infected: 130 },
  { name: 'mar 15', Recovered: 117, Infected: 11 },
  { name: 'mar 16', Recovered: 186, Infected: 107 },
  { name: 'mar 17', Recovered: 16, Infected: 926 },
  { name: 'mar 18', Recovered: 125, Infected: 653 },
  { name: 'mar 19', Recovered: 222, Infected: 366 },
  { name: 'mar 20', Recovered: 372, Infected: 486 },
  { name: 'mar 21', Recovered: 182, Infected: 512 },
  { name: 'mar 22', Recovered: 164, Infected: 302 },
  { name: 'mar 23', Recovered: 316, Infected: 425 },
  { name: 'mar 24', Recovered: 131, Infected: 467 },
  { name: 'mar 25', Recovered: 291, Infected: 190 },
  { name: 'mar 26', Recovered: 47, Infected: 194 },
  { name: 'mar 27', Recovered: 415, Infected: 371 },
  { name: 'mar 28', Recovered: 182, Infected: 376 },
  { name: 'mar 29', Recovered: 93, Infected: 295 },
  { name: 'mar 30', Recovered: 99, Infected: 322 },
  { name: 'mar 31', Recovered: 52, Infected: 246 },
  { name: 'apr 1', Recovered: 154, Infected: 33 },
  { name: 'apr 2', Recovered: 154, Infected: 33 },
  { name: 'apr 3', Recovered: 205, Infected: 354 },
  { name: 'apr 4', Recovered: 70, Infected: 258 },
  { name: 'apr 5', Recovered: 25, Infected: 359 },
  { name: 'apr 6', Recovered: 59, Infected: 192 },
  { name: 'apr 7', Recovered: 63, Infected: 464 },
  { name: 'apr 8', Recovered: 91, Infected: 2 },
  { name: 'apr 9', Recovered: 66, Infected: 154 },
  { name: 'apr 10', Recovered: 50, Infected: 186 },
  { name: 'apr 11', Recovered: 294, Infected: 23 },
  { name: 'apr 12', Recovered: 43, Infected: 45 },
  { name: 'apr 13', Recovered: 74, Infected: 90 },
  { name: 'apr 14', Recovered: 71, Infected: 130 },
  { name: 'apr 15', Recovered: 117, Infected: 11 },
  { name: 'apr 16', Recovered: 186, Infected: 107 },
  { name: 'apr 17', Recovered: 16, Infected: 926 },
  { name: 'apr 18', Recovered: 125, Infected: 653 },
  { name: 'apr 19', Recovered: 222, Infected: 366 },
  { name: 'apr 20', Recovered: 372, Infected: 486 },
  { name: 'apr 21', Recovered: 182, Infected: 512 },
  { name: 'apr 22', Recovered: 164, Infected: 302 },
  { name: 'apr 23', Recovered: 316, Infected: 425 },
  { name: 'apr 24', Recovered: 131, Infected: 467 },
  { name: 'apr 25', Recovered: 291, Infected: 190 },
  { name: 'apr 26', Recovered: 47, Infected: 194 },
  { name: 'apr 27', Recovered: 415, Infected: 371 },
  { name: 'apr 28', Recovered: 182, Infected: 376 },
  { name: 'apr 29', Recovered: 93, Infected: 295 },
  { name: 'apr 30', Recovered: 99, Infected: 322 },
  { name: 'may 1', Recovered: 300, Infected: 456 },
  { name: 'may 2', Recovered: 145, Infected: 230 },
  { name: 'may 3', Recovered: 100, Infected: 345 },
  { name: 'may 4', Recovered: 8, Infected: 450 },
  { name: 'may 5', Recovered: 100, Infected: 321 },
  { name: 'may 6', Recovered: 9, Infected: 235 },
  { name: 'may 7', Recovered: 53, Infected: 267 },
  { name: 'may 8', Recovered: 252, Infected: 378 },
  { name: 'may 9', Recovered: 79, Infected: 210 },
  { name: 'may 10', Recovered: 294, Infected: 23 },
  { name: 'may 11', Recovered: 294, Infected: 23 },
  { name: 'may 12', Recovered: 43, Infected: 45 },
  { name: 'may 13', Recovered: 74, Infected: 90 },
  { name: 'may 14', Recovered: 71, Infected: 130 },
  { name: 'may 15', Recovered: 117, Infected: 11 },
  { name: 'may 16', Recovered: 186, Infected: 107 },
  { name: 'may 17', Recovered: 16, Infected: 926 },
  { name: 'may 18', Recovered: 125, Infected: 653 },
  { name: 'may 19', Recovered: 222, Infected: 366 },
  { name: 'may 20', Recovered: 372, Infected: 486 },
  { name: 'may 21', Recovered: 182, Infected: 512 },
  { name: 'may 22', Recovered: 164, Infected: 302 },
  { name: 'may 23', Recovered: 316, Infected: 425 },
  { name: 'may 24', Recovered: 131, Infected: 467 },
  { name: 'may 25', Recovered: 291, Infected: 190 },
  { name: 'may 26', Recovered: 47, Infected: 194 },
  { name: 'may 27', Recovered: 415, Infected: 371 },
  { name: 'may 28', Recovered: 182, Infected: 376 },
  { name: 'may 29', Recovered: 93, Infected: 295 },
  { name: 'may 30', Recovered: 99, Infected: 322 },
  { name: 'may 31', Recovered: 52, Infected: 246 },
  { name: 'jun 1', Recovered: 154, Infected: 33 },
  { name: 'jun 2', Recovered: 154, Infected: 33 },
  { name: 'jun 3', Recovered: 205, Infected: 354 },
  { name: 'jun 4', Recovered: 70, Infected: 258 },
  { name: 'jun 5', Recovered: 25, Infected: 359 },
  { name: 'jun 6', Recovered: 59, Infected: 192 },
  { name: 'jun 7', Recovered: 63, Infected: 464 },
  { name: 'jun 8', Recovered: 91, Infected: 2 },
  { name: 'jun 9', Recovered: 66, Infected: 154 },
  { name: 'jun 10', Recovered: 50, Infected: 186 },
  { name: 'jun 11', Recovered: 294, Infected: 23 },
  { name: 'jun 12', Recovered: 43, Infected: 45 },
  { name: 'jun 13', Recovered: 74, Infected: 90 },
  { name: 'jun 14', Recovered: 71, Infected: 130 },
  { name: 'jun 15', Recovered: 117, Infected: 11 },
  { name: 'jun 16', Recovered: 186, Infected: 107 },
  { name: 'jun 17', Recovered: 16, Infected: 926 },
  { name: 'jun 18', Recovered: 125, Infected: 653 },
  { name: 'jun 19', Recovered: 222, Infected: 366 },
  { name: 'jun 20', Recovered: 372, Infected: 486 },
  { name: 'jun 21', Recovered: 182, Infected: 512 },
  { name: 'jun 22', Recovered: 164, Infected: 302 },
  { name: 'jun 23', Recovered: 316, Infected: 425 },
  { name: 'jun 24', Recovered: 131, Infected: 467 },
  { name: 'jun 25', Recovered: 291, Infected: 190 },
  { name: 'jun 26', Recovered: 47, Infected: 194 },
  { name: 'jun 27', Recovered: 415, Infected: 371 },
  { name: 'jun 28', Recovered: 182, Infected: 376 },
  { name: 'jun 29', Recovered: 93, Infected: 295 },
  { name: 'jun 30', Recovered: 99, Infected: 322 },
  { name: 'jul 1', Recovered: 300, Infected: 456 },
  { name: 'jul 2', Recovered: 145, Infected: 230 },
  { name: 'jul 3', Recovered: 100, Infected: 345 },
  { name: 'jul 4', Recovered: 8, Infected: 450 },
  { name: 'jul 5', Recovered: 100, Infected: 321 },
  { name: 'jul 6', Recovered: 9, Infected: 235 },
  { name: 'jul 7', Recovered: 53, Infected: 267 },
  { name: 'jul 8', Recovered: 252, Infected: 378 },
  { name: 'jul 9', Recovered: 79, Infected: 210 },
  { name: 'jul 10', Recovered: 294, Infected: 23 },
  { name: 'jul 11', Recovered: 294, Infected: 23 },
  { name: 'jul 12', Recovered: 43, Infected: 45 },
  { name: 'jul 13', Recovered: 74, Infected: 90 },
  { name: 'jul 14', Recovered: 71, Infected: 130 },
  { name: 'jul 15', Recovered: 117, Infected: 11 },
  { name: 'jul 16', Recovered: 186, Infected: 107 },
  { name: 'jul 17', Recovered: 16, Infected: 926 },
  { name: 'jul 18', Recovered: 125, Infected: 653 },
  { name: 'jul 19', Recovered: 222, Infected: 366 },
  { name: 'jul 20', Recovered: 372, Infected: 486 },
  { name: 'jul 21', Recovered: 182, Infected: 512 },
  { name: 'jul 22', Recovered: 164, Infected: 302 },
  { name: 'jul 23', Recovered: 316, Infected: 425 },
  { name: 'jul 24', Recovered: 131, Infected: 467 },
  { name: 'jul 25', Recovered: 291, Infected: 190 },
  { name: 'jul 26', Recovered: 47, Infected: 194 },
  { name: 'jul 27', Recovered: 415, Infected: 371 },
  { name: 'jul 28', Recovered: 182, Infected: 376 },
  { name: 'jul 29', Recovered: 93, Infected: 295 },
  { name: 'jul 30', Recovered: 99, Infected: 322 },
  { name: 'jul 31', Recovered: 52, Infected: 246 },
  { name: 'aug 1', Recovered: 300, Infected: 456 },
  { name: 'aug 2', Recovered: 145, Infected: 230 },
  { name: 'aug 3', Recovered: 100, Infected: 345 },
  { name: 'aug 4', Recovered: 8, Infected: 450 },
  { name: 'aug 5', Recovered: 100, Infected: 321 },
  { name: 'aug 6', Recovered: 9, Infected: 235 },
  { name: 'aug 7', Recovered: 53, Infected: 267 },
  { name: 'aug 8', Recovered: 252, Infected: 378 },
  { name: 'aug 9', Recovered: 79, Infected: 210 },
  { name: 'aug 10', Recovered: 294, Infected: 23 },
  { name: 'aug 11', Recovered: 294, Infected: 23 },
];

const ProgressChart = () => {
  const [isInfected, setIsInfected] = useState(false);
  const [isRecovered, setIsRecovered] = useState(true);

  const Button = ({ name, bar, otherBar }) => {
    return (
      <button
        onClick={() => {
          if (isRecovered && isInfected) {
            bar(false);
          } else if (otherBar) {
            bar(true);
          }
        }}
      >
        {name}
      </button>
    );
  };

  return (
    <>
      <ul className='menu'>
        <li>
          <Button name='Recovered' bar={setIsRecovered} otherBar={isInfected} />
        </li>
        <li>
          <Button name='Infected' bar={setIsInfected} otherBar={isRecovered} />
        </li>
      </ul>
      <section className='progress-chart'>
        <ResponsiveContainer width='100%' height={400}>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 15,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey='name' />
            <YAxis width={30} tickSize={6} />
            <Tooltip />
            <Legend
              verticalAlign='bottom'
              wrapperStyle={{ lineHeight: '40px' }}
            />
            <ReferenceLine y={0} stroke='var(--base-color' />
            <Brush dataKey='name' height={20} stroke='var(--base-color-grey)' />
            {isInfected && <Bar dataKey='Infected' fill='var(--purple)' />}
            {isRecovered && <Bar dataKey='Recovered' fill='var(--green)' />}
          </BarChart>
        </ResponsiveContainer>
      </section>
    </>
  );
};

export default ProgressChart;
