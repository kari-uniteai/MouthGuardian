import React from 'react'
import BarChart from '../BarChart/BarChart';
import classes from './BarChartContainer.module.css';

type Props = {}

const BarChartContainer = (props: Props) => {
    const expectedValues = [12,12,12];
    const actualizedValues = [11,8,3];
  return (
    <div>
        <header className={classes.barContainerHeader}>Usage trends</header>
        <header className={classes.barContainerSubHeader}>Last 3 months</header>
        <BarChart
            expectedValues={expectedValues}
            actualizedValues={actualizedValues}
        />
    </div>
  )
}

export default BarChartContainer;