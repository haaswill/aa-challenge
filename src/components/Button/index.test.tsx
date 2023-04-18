import { render, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(<Button label="Test" onClick={handleClick} />);
    fireEvent.click(getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
