import { render, fireEvent } from '@testing-library/react';
import { BsX } from 'react-icons/bs';
import IconButton from './index';

describe('IconButton', () => {
  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <IconButton label="Test" onClick={handleClick} icon={<BsX />} />
    );
    fireEvent.click(getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
