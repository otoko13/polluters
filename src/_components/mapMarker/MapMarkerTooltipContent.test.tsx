import { render } from '@testing-library/react';
import * as React from 'react';
import MapMarkerTooltipContent, { IMapMarkerTooltipContentProps } from './MapMarkerTooltipContent';
import { IPolluter } from '../../model/Polluter';

let props: IMapMarkerTooltipContentProps;

beforeEach(() => {
  props = {
    polluter: {
      name: 'Some company',
      rank: 1,
      globalEmissions: '500 tonnes',
    } as IPolluter,
  };
});

describe('snapshots', () => {
  it('should look sensible', () => {
    const { container } = render(<svg><MapMarkerTooltipContent {...props} /></svg>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
