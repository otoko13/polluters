import React from 'react';
import './worldMap.scss';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

import mapJson from '../../resources/world-110m.json';
import Polluter, { IPolluter } from '../../model/Polluter';
import MapMarker from '../mapMarker/MapMarker';

export interface IWorldMapProps {
  polluters: IPolluter[];
  selectedPolluter?: IPolluter;
}

const WorldMap = (props: IWorldMapProps) => {
  const [hoveredPolluter, setHoveredPolluter] = React.useState<IPolluter>();
  const [selectedPolluter, setSelectedPolluter] = React.useState<IPolluter>();

  function shouldUnhighlightPolluter(polluter: IPolluter) {
    return (hoveredPolluter && hoveredPolluter.rank !== polluter.rank) ||
      (selectedPolluter && selectedPolluter.rank !== polluter.rank);
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
          {props.polluters.map(polluter => (
            <MapMarker
              key={polluter.rank}
              polluter={polluter}
              onHovered={() => setHoveredPolluter({ ...polluter })}
              onUnhovered={() => setHoveredPolluter(undefined)}
              onSelected={() => setSelectedPolluter({ ...polluter })}
              isHovered={hoveredPolluter && hoveredPolluter.rank === polluter.rank}
              isSelected={selectedPolluter && selectedPolluter.rank === polluter.rank}
              isUnhighlighted={shouldUnhighlightPolluter(polluter)}
            />
          ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
