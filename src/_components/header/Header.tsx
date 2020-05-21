import React from 'react';
import './header.scss';
import { IPolluter } from '../../model/Polluter';
import PollutersMenu from './PollutersMenu';

export interface IHeaderProps {
  polluters: IPolluter[];
  onPolluterMouseOver: (polluter: IPolluter) => void;
  onPolluterMouseOut: () => void;
  onPolluterSelected: (polluter: IPolluter) => void;
}

const Header = (props: IHeaderProps) => (
  <div className="Header">
    <div className="logo" />
    <h1 className="title">
      Top 20 Global Polluters
    </h1>
    <PollutersMenu
      polluters={props.polluters}
      onNothingHovered={props.onPolluterMouseOut}
      onHovered={props.onPolluterMouseOver}
      onSelected={props.onPolluterSelected}
    />
  </div>
);

export default Header;
