import React from 'react';
import './App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import WorldMap from './_components/worldMap/WorldMap';
import Header from './_components/header/Header';
import Polluter, { IPolluter } from './model/Polluter';

export interface IAppProps {
  polluters: Polluter[];
}

const App = (props: IAppProps) => {
  const [hoveredPolluter, setHoveredPolluter] = React.useState<IPolluter>();
  const [selectedPolluter, setSelectedPolluter] = React.useState<IPolluter>();

  return (
    <div className="App">
      <CssBaseline />
      <div className="header-container">
        <Header
          onPolluterMouseOver={polluter => setHoveredPolluter({ ...polluter })}
          onPolluterMouseOut={() => setHoveredPolluter(undefined)}
          onPolluterSelected={polluter => setSelectedPolluter({ ...polluter })}
          polluters={props.polluters}
        />
      </div>
      <div className="map-container">
        <WorldMap
          hoveredPolluter={hoveredPolluter}
          selectedPolluter={selectedPolluter}
          onPolluterHovered={polluter => setHoveredPolluter({ ...polluter })}
          onPolluterUnhovered={() => setHoveredPolluter(undefined)}
          onPolluterSelected={polluter => setSelectedPolluter({ ...polluter })}
          polluters={props.polluters}
        />
      </div>
    </div>
  );
};

export default App;
