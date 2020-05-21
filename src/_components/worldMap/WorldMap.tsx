import React from 'react';
import './worldMap.scss';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

import mapJson from '../../resources/world-110m.json';
import { IPolluter } from '../../model/Polluter';
import MapMarker from '../mapMarker/MapMarker';

export interface IWorldMapProps {
  polluters: IPolluter[];
  selectedPolluter: IPolluter | undefined;
  hoveredPolluter: IPolluter | undefined;
  onPolluterSelected: (polluter: IPolluter) => void;
  onPolluterHovered: (polluter: IPolluter) => void;
  onPolluterUnhovered: () => void;
}

const WorldMap = (props: IWorldMapProps) => {
  function shouldUnhighlightPolluter(polluter: IPolluter) {
    return (props.hoveredPolluter && props.hoveredPolluter.rank !== polluter.rank) ||
      (props.selectedPolluter && props.selectedPolluter.rank !== polluter.rank);
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
              onUnhovered={() => props.onPolluterUnhovered()}
              onSelected={() => props.onPolluterSelected(polluter)}
              isHovered={props.hoveredPolluter && props.hoveredPolluter.rank === polluter.rank}
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
