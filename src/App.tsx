import React from 'react';
import './App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import WorldMap from './_components/worldMap/WorldMap';
import Header from './_components/header/Header';
import Polluter, { IPolluter } from './model/Polluter';
import InfoPanel from './_components/infoPanel/InfoPanel';
import PollutersUtil from './util/polluters.util';

export interface IAppProps {
  polluters: Polluter[];
}

const App = (props: IAppProps) => {
  const [hoveredPolluters, setHoveredPolluters] = React.useState<IPolluter[]>([]);
  const [selectedPolluter, setSelectedPolluter] = React.useState<IPolluter>();
  const maxRank = React.useMemo(() => Math.max(...props.polluters.map(p => p.rank)), [props.polluters]);
  const minRank = React.useMemo(() => Math.min(...props.polluters.map(p => p.rank)), [props.polluters]);
  const allFossilFuelData = React.useMemo(() => PollutersUtil.getAllFossilFuelData(props.polluters), [props.polluters]);

  function handleUnhovered(polluter: IPolluter) {
    const withoutPolluter = hoveredPolluters.filter(p => p.rank !== polluter.rank);
    setHoveredPolluters(withoutPolluter);
  }

  function handleHovered(polluter: IPolluter) {
    setHoveredPolluters([{ ...polluter }]);
  }

  function handleNextClick() {
    if (!selectedPolluter || selectedPolluter.rank === maxRank) {
      return;
    }
    const nextPolluter = props.polluters.find(p => p.rank === selectedPolluter.rank + 1);
    if (nextPolluter) {
      setSelectedPolluter({ ...nextPolluter });
    }
  }

  function handlePreviousClick() {
    if (!selectedPolluter || selectedPolluter.rank === minRank) {
      return;
    }
    const prevPolluter = props.polluters.find(p => p.rank === selectedPolluter.rank - 1);
    if (prevPolluter) {
      setSelectedPolluter({ ...prevPolluter });
    }
  }

  function handleRankClicked(rank: number) {
    const newSelectedPolluter = props.polluters.find(p => p.rank === rank);
    if (newSelectedPolluter) {
      setSelectedPolluter({ ...newSelectedPolluter });
    }
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
      <InfoPanel
        selectedPolluter={selectedPolluter}
        onNextClick={handleNextClick}
        onPreviousClick={handlePreviousClick}
        onClose={() => setSelectedPolluter(undefined)}
        isFirst={!!selectedPolluter && selectedPolluter.rank === minRank}
        isLast={!!selectedPolluter && selectedPolluter.rank === maxRank}
        allFossilFuelData={allFossilFuelData}
        onRankClicked={handleRankClicked}
      />
    </div>
  );
};

export default App;
