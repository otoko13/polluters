import React from 'react';
import { IPolluter, EOwnership } from '../../model/Polluter';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CloudIcon from '@material-ui/icons/Cloud';
import PersonIcon from '@material-ui/icons/Person';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalGasStationIcon from '@material-ui/icons/LocalGasStation';
import NextWeekIcon from '@material-ui/icons/NextWeek';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PropertyDisplay from './PropertyDisplay';
import './polluterInfoDisplay.scss';
import OwnershipDisplay from './OwnershipDisplay';

export interface IPolluterInfoDisplayProps {
  selectedPolluter: IPolluter;
}

const neutralIconColor = 'grey';
const badIconColor = '#c45a68';
const goodIconColor = '#489c61';

const PolluterInfoDisplay = ({ selectedPolluter }: IPolluterInfoDisplayProps) =>
  (
    <div className="PolluterInfoDisplay">
      <PropertyDisplay title={"HQ"} icon={<LocationOnIcon fontSize="large" style={{color: neutralIconColor}} />}>
        {selectedPolluter.hq}
      </PropertyDisplay>

      <PropertyDisplay title={"Ownership"} icon={<AssignmentIcon fontSize="large" style={{color: neutralIconColor}} />}>
          <OwnershipDisplay ownership={selectedPolluter.ownership} />
      </PropertyDisplay>

      <PropertyDisplay title={"CEO"} icon={<PersonIcon fontSize="large" style={{color: neutralIconColor}} />}>
        {selectedPolluter.ceo} (annual pay: {selectedPolluter.annualCeoPay ? `$${selectedPolluter.annualCeoPay}m` : 'undisclosed'})
      </PropertyDisplay>

      <PropertyDisplay title={"Fossil fuel production"} icon={<LocalGasStationIcon fontSize="large" style={{color: badIconColor}} />}>
        {selectedPolluter.fossilFuelProduction}
      </PropertyDisplay>

      <PropertyDisplay title={"Projected increase in production 2018-2030"} icon={<TrendingUpIcon fontSize="large" style={{color: badIconColor}} />}>
        {selectedPolluter.projectedIncreaseInProduction2018to2030}
      </PropertyDisplay>

      <PropertyDisplay title={"Global emissions 1965-2017"} icon={<CloudIcon fontSize="large" style={{color: badIconColor}} />}>
        {selectedPolluter.globalEmissions1965to2017}
      </PropertyDisplay>

      <PropertyDisplay title={"Projected emissions 2018-2030"} icon={<TrendingUpIcon fontSize="large" style={{color: badIconColor}} />}>
        {selectedPolluter.projectedIncreaseInProduction2018to2030}
      </PropertyDisplay>

      <PropertyDisplay title={"Future projects"} icon={<NextWeekIcon fontSize="large" style={{color: badIconColor}} />}>
        {selectedPolluter.futureProjects}
      </PropertyDisplay>
    </div>
  );

export default PolluterInfoDisplay;
