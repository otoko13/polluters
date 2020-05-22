import React from 'react';
import Drawer from '@material-ui/core/Drawer';

import Divider from '@material-ui/core/Divider';
import { IPolluter } from '../../model/Polluter';
import './infoPanel.scss';
import PolluterInfoDisplay from './PolluterInfoDisplay';
import { IFossilFuelData } from '../../util/polluters.util';
import NavigationBar from './NavigationBar';

export interface IInfoPanelProps {
  selectedPolluter: IPolluter | undefined;
  onClose: () => void;
  onNextClick: () => void;
  onPreviousClick: () => void;
  isFirst: boolean;
  isLast: boolean;
  allFossilFuelData: IFossilFuelData[];
  onRankClicked: (rank: number) => void;
}

// TODO: split the navigation icons out into its own component

const InfoPanel = (props: IInfoPanelProps) => (
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
                <NavigationBar
                  isFirst={props.isFirst}
                  isLast={props.isLast}
                  onClose={props.onClose}
                  onNextClick={props.onNextClick}
                  onPreviousClick={props.onPreviousClick}
                />
              </div>
            </div>
            <Divider />
            <div className="content">
              <PolluterInfoDisplay
                onRankClicked={props.onRankClicked}
                selectedPolluter={props.selectedPolluter}
                allFossilFuelData={props.allFossilFuelData}
              />
            </div>
          </div>
        )
      }
    </Drawer>
  </div>
);

export default InfoPanel;
