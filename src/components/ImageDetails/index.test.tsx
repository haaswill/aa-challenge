import { render, fireEvent } from '@testing-library/react';
import ImageDetails from './index';
import { getImageMock } from '@/__mocks__';

describe('ImageDetails', () => {
  it('calls onClick functions when clicked', () => {
    const handleOnClickDelete = jest.fn();
    const handleOnClickFavorite = jest.fn();

    const { getByTestId } = render(
      <ImageDetails
        image={getImageMock({})}
        onClickDelete={handleOnClickDelete}
        onClickFavorite={handleOnClickFavorite}
      />
    );
    fireEvent.click(getByTestId('favorited'));
    fireEvent.click(getByTestId('delete'));

    expect(handleOnClickDelete).toHaveBeenCalledTimes(1);
    expect(handleOnClickFavorite).toHaveBeenCalledTimes(1);
  });

  it('should render the correct props', () => {
    const handleOnClickDelete = jest.fn();
    const handleOnClickFavorite = jest.fn();

    const { getByRole } = render(
      <ImageDetails
        image={getImageMock({})}
        onClickDelete={handleOnClickDelete}
        onClickFavorite={handleOnClickFavorite}
      />
    );
    const image = getByRole('img');

    expect(image.getAttribute('src')).toBe('test/test.jpg');
    expect(image.getAttribute('alt')).toBe('Test Description');
  });
});
