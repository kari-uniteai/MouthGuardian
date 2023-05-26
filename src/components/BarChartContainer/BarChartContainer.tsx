import React from 'react'
import BarChart from '../BarChart/BarChart';

type Props = {}

const BarChartContainer = (props: Props) => {
    const expectedValues = [12,12,12];
    const actualizedValues = [11,8,3];
  return (
    <div>
      <BarChart
        expectedValues={expectedValues}
        actualizedValues={actualizedValues}
      />
    </div>
  )
}

export default BarChartContainer;