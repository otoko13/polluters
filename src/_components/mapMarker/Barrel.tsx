import React from 'react';
import { ReactComponent as BarrelSvg } from '../../resources/barrel.svg';
import './barrel.scss';

export enum EHighlightStatus {
  Highlighted,
  unhighlighted,
  Neutral,
}

export interface IBarrelProps {
  rank: number;
  status: EHighlightStatus;
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
    <g className={`Barrel ${getHighlightClass()}`}>
      <BarrelSvg />
    </g>
  );
};

export default Barrel;
