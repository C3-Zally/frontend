import React from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import './DonutChart.scss';

const data = [
  { name: 'Recovery', value: 287650 },
  { name: 'Confirmed', value: 387650 },
];

const DonutChart = ({ type }) => {
  const COLORS = [type === 'isRecovery' ? '#28d7a6' : '#554b86', '#CCC'];
  return (
    <section className='DonutChart__wrapper'>
      <div className='DonutChart__info'>
        <span>{((data[0].value / data[1].value) * 100).toFixed(1)}%</span>
        <span>of total cases</span>
      </div>
      <ResponsiveContainer width={150} height={150}>
        <PieChart>
          <Pie
            data={data}
            cx='50%'
            cy='50%'
            innerRadius={45}
            outerRadius={50}
            stroke='transparent'
            paddingAngle={5}
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {type === 'isRecovery' ? <h4>Recovery Rate</h4> : <h4>Fatality Rate</h4>}
    </section>
  );
};

DonutChart.propTypes = {
  type: PropTypes.string,
};

export default DonutChart;
