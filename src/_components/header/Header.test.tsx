import { render } from '@testing-library/react';
import * as React from 'react';
import Header, { IHeaderProps } from './Header';
import { IPolluter } from '../../model/Polluter';

let props: IHeaderProps;

beforeEach(() => {
  props = {
      onPolluterMouseOut: jest.fn(),
      onPolluterMouseOver: jest.fn(),
      onPolluterSelected: jest.fn(),
      polluters: [
        {
          rank: 1,
          name: 'Test1',
        } as IPolluter,
        {
          rank: 2,
          name: 'Test2',
        } as IPolluter,
      ],
  };
});

describe('snapshot', () => {
    it('should look sensible', () => {
        const { container } = render(<Header {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});