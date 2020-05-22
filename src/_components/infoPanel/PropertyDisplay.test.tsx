import { render } from '@testing-library/react';
import * as React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import PropertyDisplay, { IPropertyDisplayProps } from './PropertyDisplay';

let props: IPropertyDisplayProps;

beforeEach(() => {
  props = {
    icon: <HomeIcon />,
    title: 'Home',
  };
});

describe('snapshots', () => {
  it('should look sensible', () => {
    const { container } = render(<PropertyDisplay {...props} />);
    expect(container.firstChild).toMatchSnapshot('State');
  });
});
