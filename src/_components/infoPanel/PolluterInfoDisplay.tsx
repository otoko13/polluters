import React from 'react';
import { IPolluter, EOwnership } from '../../model/Polluter';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PropertyDisplay from './PropertyDisplay';
import './polluterInfoDisplay.scss';
import OwnershipDisplay from './OwnershipDisplay';

export interface IPolluterInfoDisplayProps {
  selectedPolluter: IPolluter;
}

const iconColor = 'grey';

const PolluterInfoDisplay = ({ selectedPolluter }: IPolluterInfoDisplayProps) =>
  (
    <div className="PolluterInfoDisplay">
      <PropertyDisplay title={"HQ"} icon={<LocationOnIcon fontSize="large" style={{color: iconColor}} />}>
        {selectedPolluter.hq}
      </PropertyDisplay>

      <PropertyDisplay title={"Ownership"} icon={<AssignmentIcon fontSize="large" style={{color: iconColor}} />}>
          <OwnershipDisplay ownership={selectedPolluter.ownership} />
      </PropertyDisplay>

      <PropertyDisplay title={"CEO"} icon={<PersonIcon fontSize="large" style={{color: iconColor}} />}>
        {selectedPolluter.ceo} (annual pay: {selectedPolluter.annualCeoPay ? `$${selectedPolluter.annualCeoPay}m` : 'undisclosed'})
      </PropertyDisplay>
    </div>
  );

export default PolluterInfoDisplay;
