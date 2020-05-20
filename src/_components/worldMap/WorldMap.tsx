import React from 'react';
import './worldMap.scss';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

import mapJson from '../../resources/world-110m.json';

function WorldMap(): JSX.Element {
  return (
    <div className="WorldMap">
      <ComposableMap height={462}>
        <ZoomableGroup zoom={1} center={[60, 0]}>
          <Geographies geography={mapJson}>
            {
              ({ geographies }): JSX.Element[] => geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} />)
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}

export default WorldMap;
