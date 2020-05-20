import React from 'react';

import { Marker } from 'react-simple-maps';
import Polluter from '../../model/Polluter';

export interface IMapMarkerProps {
  polluter: Polluter;
  isSelected: boolean;
}

function MapMarker(props: IMapMarkerProps): JSX.Element {
  return (
    <Marker
      key={props.polluter.rank}
      coordinates={[props.polluter.longitude, props.polluter.latitude]}
      onClick={() => alert(props.polluter.rank)}
    >
      <text textAnchor="middle" fill="#F53">
        {props.polluter.name}
      </text>
    </Marker>
  );
}

export default MapMarker;
