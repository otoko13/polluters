import { fireEvent, render } from '@testing-library/react';
import * as React from 'react';
import OwnershipDisplay from './OwnershipDisplay';
import { EOwnership } from '../../model/Polluter';

describe('snapshots', () => {
  it('should look sensible for state', () => {
    const { container } = render(<OwnershipDisplay ownership={EOwnership.State} />);
    expect(container.firstChild).toMatchSnapshot('State');
  });

  it('should look sensible for shareholders', () => {
    const { container } = render(<OwnershipDisplay ownership={EOwnership.Shareholders} />);
    expect(container.firstChild).toMatchSnapshot('Shareholders');
  });

  it('should look sensible for state and shareholders', () => {
    const { container } = render(<OwnershipDisplay ownership={EOwnership.StateAndShareholders} />);
    expect(container.firstChild).toMatchSnapshot('State and shareholders');
  });
});