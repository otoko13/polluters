import React from 'react';
import './worldMap.scss';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

import mapJson from '../../resources/world-110m.json';
import { IPolluter } from '../../model/Polluter';
import MapMarker from '../mapMarker/MapMarker';

export interface IWorldMapProps {
  polluters: IPolluter[];
  selectedPolluter: IPolluter | undefined;
  hoveredPolluters: IPolluter[];
  onPolluterSelected: (polluter: IPolluter) => void;
  onPolluterHovered: (polluter: IPolluter) => void;
  onPolluterUnhovered: (polluter: IPolluter) => void;
}

const WorldMap = (props: IWorldMapProps) => {
  function shouldUnhighlightPolluter(polluter: IPolluter) {
    return (props.hoveredPolluters.length > 0 && !isHovered(polluter)) ||
      (props.selectedPolluter && props.selectedPolluter.rank !== polluter.rank);
  }

  function isHovered(polluter: IPolluter) {
    return props.hoveredPolluters.findIndex(p => p.rank === polluter.rank) > -1;
  }

  return (
    <div className="WorldMap">
      <ComposableMap height={462}>
        <ZoomableGroup zoom={1} center={[60, 0]}>
          <Geographies geography={mapJson}>
            {
              ({ geographies }): JSX.Element[] => geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
            }
          </Geographies>
          {props.polluters.sort((p1, p2) => (p1.rank < p2.rank ? 1 : -1)).map(polluter => (
            <MapMarker
              key={polluter.rank}
              polluter={polluter}
              onHovered={() => props.onPolluterHovered(polluter)}
              onUnhovered={() => props.onPolluterUnhovered(polluter)}
              onSelected={() => props.onPolluterSelected(polluter)}
              isHovered={isHovered(polluter)}
              isSelected={props.selectedPolluter && props.selectedPolluter.rank === polluter.rank}
              isUnhighlighted={shouldUnhighlightPolluter(polluter)}
            />
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
