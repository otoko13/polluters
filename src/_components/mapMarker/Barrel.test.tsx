import { render } from '@testing-library/react';
import * as React from 'react';
import Barrel, { IBarrelProps, EHighlightStatus } from './Barrel';

let props: IBarrelProps;

beforeEach(() => {
  props = {
    magnification: 1,
    rank: 1,
    status: EHighlightStatus.Neutral,
  };
});

describe('snapshots', () => {
  it('should look sensible', () => {
    const { container } = render(<svg><Barrel {...props} /></svg>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
