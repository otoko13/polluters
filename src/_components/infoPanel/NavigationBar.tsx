import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

export interface INavigationBarProps {
  onClose: () => void;
  onNextClick: () => void;
  onPreviousClick: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const NavigationBar = (props: INavigationBarProps) => (
  <>
    <IconButton onClick={props.onPreviousClick} className="previous-icon" disabled={props.isFirst} title="See previous">
      <NavigateBefore />
    </IconButton>
    <IconButton onClick={props.onNextClick} className="next-icon" disabled={props.isLast} title="See next">
      <NavigateNext />
    </IconButton>
    <IconButton onClick={props.onClose} className="close-icon" title="Close">
      <CloseIcon />
    </IconButton>
  </>
);

export default NavigationBar;
