import { render, fireEvent } from '@testing-library/react';
import ImageListItem from './index';
import { getImageMock } from '@/__mocks__';

describe('ImageListItem', () => {
  it('should render with proper role', () => {
    const { getByRole } = render(
      <ImageListItem
        image={getImageMock({})}
        selected={false}
        onClick={() => {}}
      />
    );

    expect(getByRole('listitem')).toBeInTheDocument();
  });

  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();

    const { getByRole } = render(
      <ImageListItem
        image={getImageMock({})}
        selected={false}
        onClick={handleClick}
      />
    );
    fireEvent.click(getByRole('listitem'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
