import React from 'react';
import './worldMap.scss';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Position } from 'react-simple-maps';

import mapJson from '../../resources/world-110m.json';
import { IPolluter } from '../../model/Polluter';
import MapMarker from '../mapMarker/MapMarker';
import InfoPanel from '../infoPanel/InfoPanel';

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
  const maxRank = React.useMemo(() => Math.max(...props.polluters.map(p => p.rank)), [props.polluters]);
  const minRank = React.useMemo(() => Math.min(...props.polluters.map(p => p.rank)), [props.polluters]);

  function shouldUnhighlightPolluter(polluter: IPolluter) {
    return (props.hoveredPolluters.length > 0 && !isHovered(polluter)) ||
      (props.selectedPolluter && props.selectedPolluter.rank !== polluter.rank);
  }

  function isHovered(polluter: IPolluter) {
    return props.hoveredPolluters.findIndex(p => p.rank === polluter.rank) > -1;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleZoom(position: Position) {
    setZoomLevel(position.zoom);
  }

  function handleNextClick() {
    if (!props.selectedPolluter || props.selectedPolluter.rank === maxRank) {
      return;
    }
    const nextPolluter = props.polluters.find(p => p.rank === (props.selectedPolluter as IPolluter).rank + 1);
    if (nextPolluter) {
      props.onPolluterSelected(nextPolluter);
    }
  }

  function handlePreviousClick() {
    if (!props.selectedPolluter || props.selectedPolluter.rank === minRank) {
      return;
    }
    const prevPolluter = props.polluters.find(p => p.rank === (props.selectedPolluter as IPolluter).rank - 1);
    if (prevPolluter) {
      props.onPolluterSelected(prevPolluter);
    }
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
        <ZoomableGroup center={[60, 0]} onMoveEnd={handleZoom}>
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
      <InfoPanel
        selectedPolluter={props.selectedPolluter}
        onNextClick={handleNextClick}
        onPreviousClick={handlePreviousClick}
        onClose={props.onPolluterUnSelected}
        isFirst={!!props.selectedPolluter && props.selectedPolluter.rank === minRank}
        isLast={!!props.selectedPolluter && props.selectedPolluter.rank === maxRank}
      />
    </div>
  );
};

export default WorldMap;
