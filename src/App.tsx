import React from 'react';
import './App.scss';
import CssBaseline from '@material-ui/core/CssBaseline';
import WorldMap from './_components/worldMap/WorldMap';
import Header from './_components/header/Header';
import Polluter from './model/Polluter';

export interface IAppProps {
  polluters: Polluter[];
}

function App(props: IAppProps): JSX.Element {
  return (
    <div className="App">
      <CssBaseline />
      <div className="header-container">
        <Header />
      </div>
      <div className="map-container">
        <WorldMap polluters={props.polluters} />
      </div>
    </div>
  );
}

export default App;
