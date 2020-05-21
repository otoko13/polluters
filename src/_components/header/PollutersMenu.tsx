import React from 'react';

import { Menu, Button, MenuItem } from '@material-ui/core';
import { IPolluter } from '../../model/Polluter';

export interface IPollutersMenuProps {
  polluters: IPolluter[];
  onSelected: (polluter: IPolluter) => void;
  onHovered: (polluter: IPolluter) => void;
  onNothingHovered: () => void;
}

const PollutersMenu = (props: IPollutersMenuProps) => {
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setMenuAnchor(null);
  };

  function getMenuItems() {
    return props.polluters
      .sort((p1, p2) => (p1.rank > p2.rank ? 1 : -1))
      .map(p => (
        <MenuItem
          key={p.rank}
          onClick={() => props.onSelected(p)}
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
    <div className="PolluterMenu">
      <Button aria-controls="polluters-menu" aria-haspopup="true" onClick={handleClick}>
        See Ranking
      </Button>
      <Menu
        id="polluters-menu"
        anchorEl={menuAnchor}
        keepMounted
        open={Boolean(menuAnchor)}
        onClose={handleClose}
      >
        {getMenuItems()}
      </Menu>
    </div>
  );
};

export default PollutersMenu;
