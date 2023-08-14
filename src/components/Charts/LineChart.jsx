import React from 'react';
import { chartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, LineSeries, Tooltip, ChartComponent } from '@syncfusion/ej2-react-charts';

import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
    id='line-chart'
    height='420px'
    primaryXAxis={LinePrimaryXAxis}
    primaryYAxis={LinePrimaryYAxis}
    chartArea={{border: {width: 0 }}}
    tooltip={{enable: true }}
    background={currentMode === 'dark' ? '#3337E' : '#fff'}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip ]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart
