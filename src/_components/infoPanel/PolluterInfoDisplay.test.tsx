import { render } from '@testing-library/react';
import * as React from 'react';
import PolluterInfoDisplay, { IPolluterInfoDisplayProps } from './PolluterInfoDisplay';
import { EOwnership, IPolluter } from '../../model/Polluter';

let props: IPolluterInfoDisplayProps;

beforeEach(() => {
  props = {
    selectedPolluter: {
      rank: 1,
      name: 'Test1',
      annualCeoPay: 25,
      ceo: 'Michael Buble',
      environmentalDisaster: 'Too many records',
      fossilFuelProduction: ' Lots of gas',
      futureProjects: 'Hopefully not',
      globalEmissions: 'Lots',
      globalEmissions1965to2017: 'Emissions for days',
      hq: 'London',
      investmentInRenewables: 'Unknown',
      ownership: EOwnership.StateAndShareholders,
      projectedEmissions2018to2030: 'Even more',
      projectedIncreaseInProduction2018to2030: '8 albums',
      revenue: '$2bn',
    } as IPolluter,
  };
});

describe('snapshots', () => {
  it('should look sensible', () => {
    const { container } = render(<PolluterInfoDisplay {...props} />);
    expect(container.firstChild).toMatchSnapshot('State');
  });
});
