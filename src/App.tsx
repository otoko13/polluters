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
  const [hoveredPolluters, setHoveredPolluters] = React.useState<IPolluter[]>([]);
  const [selectedPolluter, setSelectedPolluter] = React.useState<IPolluter>();

  function handleUnhovered(polluter: IPolluter) {
    const withoutPolluter = hoveredPolluters.filter(p => p.rank !== polluter.rank);
    setHoveredPolluters(withoutPolluter);
  }

  function handleHovered(polluter: IPolluter) {
    setHoveredPolluters([{ ...polluter }]);
  }

  return (
    <div className="App">
      <CssBaseline />
      <div className="header-container">
        <Header
          onPolluterMouseOver={polluter => setHoveredPolluters([{ ...polluter }])}
          onPolluterMouseOut={() => setHoveredPolluters([])}
          onPolluterSelected={polluter => setSelectedPolluter({ ...polluter })}
          polluters={props.polluters}
        />
      </div>
      <div className="map-container">
        <WorldMap
          hoveredPolluters={hoveredPolluters}
          selectedPolluter={selectedPolluter}
          onPolluterHovered={handleHovered}
          onPolluterUnhovered={handleUnhovered}
          onPolluterSelected={polluter => setSelectedPolluter({ ...polluter })}
          onPolluterUnSelected={() => setSelectedPolluter(undefined)}
          polluters={props.polluters}
        />
      </div>
    </div>
  );
};

export default App;
