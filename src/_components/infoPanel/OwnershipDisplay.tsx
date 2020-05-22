import React from 'react';
import { EOwnership } from '../../model/Polluter';
import GavelIcon from '@material-ui/icons/Gavel';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import './ownershipDisplay.scss';

export interface IOwnershipDisplayProps {
  ownership: EOwnership;
}

const iconColor = 'grey';

function getOwnershipText(status: EOwnership) {
  switch (status) {
    case EOwnership.Shareholders:
      return 'Shareholders';
    case EOwnership.State:
      return 'State';
    case EOwnership.StateAndShareholders:
      return 'State and shareholders';
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
  }
}

const OwnershipDisplay = ({ ownership }: IOwnershipDisplayProps) =>
  (
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
