import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import { IPolluter } from '../../model/Polluter';
import './infoPanel.scss';
import PolluterInfoDisplay from './PolluterInfoDisplay';
import Divider from '@material-ui/core/Divider';

export interface IInfoPanelProps {
  selectedPolluter: IPolluter | undefined;
  onClose: () => void;
  onNextClick: () => void;
  onPreviousClick: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const InfoPanel = (props: IInfoPanelProps) => {
  return (
    <div className="InfoPanel">
      <Drawer
        className="drawer"
        variant="persistent"
        anchor="right"
        classes={{ paper: 'main-container' }}
        open={!!props.selectedPolluter}
      >
        {
          props.selectedPolluter && (
            <div className="info-container">
              <div className="header">
                <div className="title">
                  <div className="rank">{props.selectedPolluter.rank}.</div>
                  <div className="name">{props.selectedPolluter.name}</div>
                </div>
                <div className="icons">
                  <IconButton onClick={props.onPreviousClick} className="previous-icon" disabled={props.isFirst}>
                    <NavigateBefore />
                  </IconButton>
                  <IconButton onClick={props.onNextClick} className="next-icon" disabled={props.isLast}>
                    <NavigateNext />
                  </IconButton>
                  <IconButton onClick={props.onClose} className="close-icon">
                    <CloseIcon />
                  </IconButton>
                </div>
              </div>
              <Divider />
              <div className="content">
                <PolluterInfoDisplay selectedPolluter={props.selectedPolluter} />
              </div>
            </div>
          )
        }
      </Drawer>
    </div>
  );
};

export default InfoPanel;
