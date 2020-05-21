import React from 'react';

import { Marker } from 'react-simple-maps';
import Tooltip from '@material-ui/core/Tooltip';
import { IPolluter } from '../../model/Polluter';
import Barrel, { EHighlightStatus } from './Barrel';
import MapMarkerTooltipContent from './MapMarkerTooltipContent';

export interface IMapMarkerProps {
  polluter: IPolluter;
  isSelected?: boolean;
  isHovered?: boolean;
  isUnhighlighted?: boolean;
  onHovered: () => void;
  onUnhovered: () => void;
  onSelected: () => void;
}

const MapMarker = (props: IMapMarkerProps) => {
  function getHighlightStatus() {
    if (props.isHovered || props.isSelected) {
      return EHighlightStatus.Highlighted;
    }
    if (props.isUnhighlighted) {
      return EHighlightStatus.unhighlighted;
    }
    return EHighlightStatus.Neutral;
  }

  return (
    <Tooltip
      title={<MapMarkerTooltipContent polluter={props.polluter} />}
      key={props.polluter.rank}
      onOpen={props.onHovered}
      onClose={props.onUnhovered}
      enterDelay={10}
    >
      <svg>
        <Marker
          key={props.polluter.rank}
          coordinates={[props.polluter.longitude, props.polluter.latitude]}
          onClick={props.onSelected}
        >
          <Barrel rank={props.polluter.rank} status={getHighlightStatus()} />
        </Marker>
      </svg>
    </Tooltip>
  );
};

export default MapMarker;
