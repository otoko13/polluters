import React from 'react';
import './worldMap.scss';
import { ComposableMap, Geographies, Geography, ZoomableGroup, Marker } from 'react-simple-maps';

import mapJson from '../../resources/world-110m.json';
import Polluter from '../../model/Polluter';
import MapMarker from '../mapMarker/MapMarker';

export interface IWorldMapProps {
  polluters: Polluter[];
  selectedPolluter?: Polluter;
}

function WorldMap(props: IWorldMapProps): JSX.Element {
  return (
    <div className="WorldMap">
      <ComposableMap height={462}>
        <ZoomableGroup zoom={1} center={[60, 0]}>
          <Geographies geography={mapJson}>
            {
              ({ geographies }): JSX.Element[] => geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
            }
          </Geographies>
          {props.polluters.map(polluter => <MapMarker key={polluter.rank} polluter={polluter} isSelected={false} />)}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default WorldMap;
