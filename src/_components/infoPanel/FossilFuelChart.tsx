import React from 'react';
import './fossilFuelChart.scss';
import Tooltip from '@material-ui/core/Tooltip';
import { IFossilFuelData } from '../../util/polluters.util';

export interface IFossilFuelChartProps {
  allFossilFuelData: IFossilFuelData[];
  rankToHighlight: number;
}

const BAR_WIDTH = 30;

const FossilFuelChart = (props: IFossilFuelChartProps) => {
  const maxBarrels = React.useMemo(
    () => Math.max(...props.allFossilFuelData.map(f => f.millionsOfBarrelsPerDay)),
    [props.allFossilFuelData],
  );

  function calculateHeight(f: IFossilFuelData) {
    return (f.millionsOfBarrelsPerDay / maxBarrels) * 100;
  }

  function getBars() {
    const sortedData = [...props.allFossilFuelData].sort((f1, f2) => (f1.rank > f2.rank ? 1 : -1));
    return sortedData.map(f => (
      <Tooltip
        placement="bottom"
        classes={{ tooltipPlacementBottom: 'fossil-fuel-chart-tooltip' }}
        title={`${f.rank}. ${f.name} - ${f.millionsOfBarrelsPerDay}m barrels of oil equivalent per day`}
        key={f.rank}
      >
        <div
          className="bar-container"
          style={{ height: `${calculateHeight(f)}%`, width: BAR_WIDTH }}
        >
          <div
            className={`bar ${props.rankToHighlight === f.rank ? 'highlighted' : ''}`}
          />
        </div>

      </Tooltip>
    ));
  }

  return (
    <div className="FossilFuelChart">
      <div className="bars-container">
        { getBars() }
      </div>
    </div>
  );
};

export default FossilFuelChart;
