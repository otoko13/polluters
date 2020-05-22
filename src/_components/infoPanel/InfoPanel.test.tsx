import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import InfoPanel, { IInfoPanelProps } from './InfoPanel';
import { IPolluter, EOwnership } from '../../model/Polluter';

let props: IInfoPanelProps;

beforeEach(() => {
  props = {
    isFirst: false,
    isLast: false,
    onClose: jest.fn(),
    onNextClick: jest.fn(),
    onPreviousClick: jest.fn(),
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
    allFossilFuelData: [],
    onRankClicked: jest.fn(),
  };
});

describe('snapshot', () => {
  it('should look sensible', () => {
    const { container } = render(<InfoPanel {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('closing', () => {
  it('should call props.onClose when clicking the close icon', () => {
    const { getByTitle } = render(<InfoPanel {...props} />);
    fireEvent.click(getByTitle('Close'));
    expect(props.onClose).toHaveBeenCalled();
  });
});

describe('navigation', () => {
  it('should disable previous button if isFirst is true', () => {
    const { getByTitle } = render(<InfoPanel {...props} isFirst />);
    const previousButton = getByTitle('See previous');
    fireEvent.click(previousButton);
    expect(previousButton.hasAttribute('disabled')).toBeTruthy();
    expect(props.onPreviousClick).not.toHaveBeenCalled();
  });

  it('should disable next button if isLast is true', () => {
    const { getByTitle } = render(<InfoPanel {...props} isLast />);
    const nextButton = getByTitle('See next');
    fireEvent.click(nextButton);
    expect(nextButton.hasAttribute('disabled')).toBeTruthy();
    expect(props.onNextClick).not.toHaveBeenCalled();
  });

  it('should call onPreviousClick when previous button is clicked', () => {
    const { getByTitle } = render(<InfoPanel {...props} />);
    const previousButton = getByTitle('See previous');
    fireEvent.click(previousButton);
    expect(props.onPreviousClick).toHaveBeenCalled();
  });

  it('should call onNextClick when next button is clicked', () => {
    const { getByTitle } = render(<InfoPanel {...props} />);
    const nextButton = getByTitle('See next');
    fireEvent.click(nextButton);
    expect(props.onNextClick).toHaveBeenCalled();
  });
});
