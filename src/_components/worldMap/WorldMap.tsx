import React from 'react';
import './worldMap.scss';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Position, Point } from 'react-simple-maps';

import mapJson from '../../data/world-110m.json';
import { IPolluter } from '../../model/Polluter';
import MapMarker from '../mapMarker/MapMarker';

export interface IWorldMapProps {
  polluters: IPolluter[];
  selectedPolluter: IPolluter | undefined;
  hoveredPolluters: IPolluter[];
  onPolluterSelected: (polluter: IPolluter) => void;
  onPolluterHovered: (polluter: IPolluter) => void;
  onPolluterUnhovered: (polluter: IPolluter) => void;
  onPolluterUnSelected: () => void;
}

const WorldMap = (props: IWorldMapProps) => {
  const [zoomLevel, setZoomLevel] = React.useState(1);
  const [center, setCenter] = React.useState<Point>([60, 0]);

  React.useEffect(() => {
    if (props.selectedPolluter) {
      setCenter([props.selectedPolluter.longitude + 60, 0]);
    }
  }, [props.selectedPolluter]);

  function shouldUnhighlightPolluter(polluter: IPolluter) {
    return (props.hoveredPolluters.length > 0 && !isHovered(polluter)) ||
      (props.selectedPolluter && props.selectedPolluter.rank !== polluter.rank);
  }

  function isHovered(polluter: IPolluter) {
    return props.hoveredPolluters.findIndex(p => p.rank === polluter.rank) > -1;
  }

  function handleZoom(position: Position) {
    setZoomLevel(position.zoom);
    setCenter([position.x, position.y]);
  }

  const sortedPolluters = [...props.polluters].sort((p1, p2) => {
    if (isHovered(p1) || (props.selectedPolluter && props.selectedPolluter.rank === p1.rank)) {
      return 1;
    }
    return p1.rank < p2.rank ? 1 : -1;
  });

  return (
    <div className="WorldMap">
      <ComposableMap height={462}>
        <ZoomableGroup center={center} zoom={zoomLevel} onMoveEnd={handleZoom}>
          <Geographies geography={mapJson}>
            {
              ({ geographies }): JSX.Element[] => geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
            }
          </Geographies>
          {
            sortedPolluters.map(polluter => (
              <MapMarker
                key={polluter.rank}
                zoomLevel={zoomLevel}
                polluter={polluter}
                onHovered={() => props.onPolluterHovered(polluter)}
                onUnhovered={() => props.onPolluterUnhovered(polluter)}
                onSelected={() => props.onPolluterSelected(polluter)}
                isHovered={isHovered(polluter)}
                isSelected={props.selectedPolluter && props.selectedPolluter.rank === polluter.rank}
                isUnhighlighted={shouldUnhighlightPolluter(polluter)}
              />
            ))
          }
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default WorldMap;
