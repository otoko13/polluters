import React from 'react';
import './header.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { IPolluter } from '../../model/Polluter';
import PollutersMenu from './PollutersMenu';

export interface IHeaderProps {
  polluters: IPolluter[];
  onPolluterMouseOver: (polluter: IPolluter) => void;
  onPolluterMouseOut: () => void;
  onPolluterSelected: (polluter: IPolluter) => void;
}

const Header = (props: IHeaderProps) => (
  <Paper className="Header">
    <div className="logo" />
    <h1 className="title">
      Top 20 Global Polluters
    </h1>
    <div className="menu-container">
      <Button
        variant="contained"
        aria-label="See ranking"
      >
        Compare polluters
      </Button>
      <PollutersMenu
        polluters={props.polluters}
        onNothingHovered={props.onPolluterMouseOut}
        onHovered={props.onPolluterMouseOver}
        onSelected={props.onPolluterSelected}
      />
    </div>
  </Paper>
);

export default Header;
