import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset, valueFormatter } from '../dataset/weather';
import { AlignHorizontalCenter, Padding } from '@mui/icons-material';

const chartSetting = {
  xAxis: [
    {
      label: 'rainfall (mm)',
    },
  ],
  width: 350,
  height: 200,
  padding: 6,
};

export default function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}