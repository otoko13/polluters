import React from 'react';

import { IPolluter } from '../../model/Polluter';
import './mapMarkerTooltipContent.scss';

export interface IMapMarkerTooltipContentProps {
  polluter: IPolluter;
}

const MapMarkerTooltipContent = (props: IMapMarkerTooltipContentProps) => (
  <div className="MapMarkerTooltipContent">
    <div className="title">
      <div className="rank">
        {props.polluter.rank}.
      </div>
      <div className="name">
        {props.polluter.name}
      </div>
    </div>
    <div className="global-emissions">
      <b>Global emissions 1965-2017:</b> {props.polluter.globalEmissions}
    </div>
    <div className="instruction">
      Click the barrel to see more...
    </div>
  </div>
);

export default MapMarkerTooltipContent;
