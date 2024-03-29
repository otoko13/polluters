import React from 'react';
import { ReactComponent as BarrelSvg } from '../../images/barrel.svg';
import './barrel.scss';

export enum EHighlightStatus {
  Highlighted,
  unhighlighted,
  Neutral,
}

export interface IBarrelProps {
  rank: number;
  status: EHighlightStatus;
  magnification: number;
}

const Barrel = (props: IBarrelProps) => {
  function getHighlightClass() {
    switch (props.status) {
      case EHighlightStatus.Highlighted:
        return 'highlighted';
      case EHighlightStatus.unhighlighted:
        return 'unhighlighted';
      default:
        return '';
    }
  }

  return (
    <g className={`Barrel ${getHighlightClass()} rank-${props.rank}`}>
      <g style={{ transform: `scale3d(${props.magnification}, ${props.magnification}, ${props.magnification})` }}>
        <g className="barrel-content">
          <BarrelSvg />
        </g>
      </g>
    </g>
  );
};

export default Barrel;
