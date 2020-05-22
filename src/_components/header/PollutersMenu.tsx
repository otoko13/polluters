import React from 'react';

import { Menu, Button, MenuItem } from '@material-ui/core';
import { IPolluter } from '../../model/Polluter';
import './pollutersMenu.scss';

export interface IPollutersMenuProps {
  polluters: IPolluter[];
  onSelected: (polluter: IPolluter) => void;
  onHovered: (polluter: IPolluter) => void;
  onNothingHovered: () => void;
}

const PollutersMenu = (props: IPollutersMenuProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuAnchorRef = React.useRef<HTMLDivElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuOpen(true);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  function handleSelected(polluter: IPolluter) {
    setMenuOpen(false);
    props.onSelected(polluter);
  }

  function getMenuItems() {
    return props.polluters
      .sort((p1, p2) => (p1.rank > p2.rank ? 1 : -1))
      .map(p => (
        <MenuItem
          key={p.rank}
          onClick={() => handleSelected(p)}
          onMouseOver={() => props.onHovered(p)}
          onMouseOut={() => props.onNothingHovered()}
          onFocus={() => props.onHovered(p)}
          onBlur={() => props.onNothingHovered()}
        >
          {p.rank}. {p.name}
        </MenuItem>
      ));
  }

  return (
    <div className="PollutersMenu">
      <Button 
        variant="contained" 
        aria-controls="polluters-menu" 
        aria-haspopup="true"
        aria-label="See ranking"
        onClick={handleClick}
      >
        See Ranking
      </Button>
      <div className="anchor" ref={menuAnchorRef} />
      <Menu
        id="polluters-menu"
        anchorEl={menuAnchorRef.current}
        keepMounted
        open={menuOpen}
        onClose={handleClose}
      >
        {getMenuItems()}
      </Menu>
    </div>
  );
};

export default PollutersMenu;
