import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import PollutersMenu, { IPollutersMenuProps } from './PollutersMenu';
import { IPolluter } from '../../model/Polluter';

let props: IPollutersMenuProps;

beforeEach(() => {
  props = {
      onHovered: jest.fn(),
      onNothingHovered: jest.fn(),
      onSelected: jest.fn(),
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
        const { container } = render(<PollutersMenu {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});

describe('hovering', () => {
  it('should fire props.onHovered when a polluter is hovered', () => {
      const { getAllByRole, getByLabelText } = render(<PollutersMenu {...props} />);
      fireEvent.click(getByLabelText('See ranking'));
      fireEvent.mouseOver(getAllByRole('menuitem')[1]);
      expect(props.onHovered).toHaveBeenCalledWith(props.polluters[1]);
  });

  it('should fire props.onNothingHovered when a polluter is moused out of', () => {
      const { getAllByRole, getByLabelText } = render(<PollutersMenu {...props} />);
      fireEvent.click(getByLabelText('See ranking'));
      fireEvent.mouseOut(getAllByRole('menuitem')[1]);
      expect(props.onNothingHovered).toHaveBeenCalled();
  });
});

describe('selecting', () => {
  it('should fire props.onSelected when a polluter is clicked', () => {
      const { getAllByRole, getByLabelText } = render(<PollutersMenu {...props} />);
      fireEvent.click(getByLabelText('See ranking'));
      fireEvent.click(getAllByRole('menuitem')[1]);
      expect(props.onSelected).toHaveBeenCalledWith(props.polluters[1]);
  });
});