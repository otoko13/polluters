import React from 'react';
import GavelIcon from '@material-ui/icons/Gavel';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { EOwnership } from '../../model/Polluter';
import './ownershipDisplay.scss';

export interface IOwnershipDisplayProps {
  ownership: EOwnership;
}

function getOwnershipText(status: EOwnership) {
  switch (status) {
    case EOwnership.Shareholders:
      return 'Shareholders';
    case EOwnership.State:
      return 'State';
    case EOwnership.StateAndShareholders:
      return 'State and shareholders';
    default:
      return 'Unknown';
  }
}

function getOwnershipIcons(status: EOwnership) {
  switch (status) {
    case EOwnership.Shareholders:
      return <span><PeopleAltIcon /></span>;
    case EOwnership.State:
      return <span><GavelIcon /></span>;
    case EOwnership.StateAndShareholders:
      return <span><GavelIcon /> <PeopleAltIcon /></span>;
    default:
      return undefined;
  }
}

const OwnershipDisplay = ({ ownership }: IOwnershipDisplayProps) => (
  <div className="OwnershipDisplay">
    <div className="icons">
      {getOwnershipIcons(ownership)}
    </div>
    <div className="text">
      {getOwnershipText(ownership)}
    </div>
  </div>
);

export default OwnershipDisplay;
