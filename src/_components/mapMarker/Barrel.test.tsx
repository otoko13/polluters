import { render } from '@testing-library/react';
import * as React from 'react';
import HomeIcon from '@material-ui/icons/Home';
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
    const { container } = render(<Barrel {...props} />);
    expect(container.firstChild).toMatchSnapshot('State');
  });
});
