// TODO: Add tests
import { render, fireEvent } from '@testing-library/react';
import ImageList from './index';
import { getImageMock } from '@/__mocks__';

describe('ImageList', () => {
  it('calls the onClick function when clicked', () => {
    const handleClick = jest.fn();

    const { getAllByRole } = render(
      <ImageList
        images={[1, 2, 3].map((id) => getImageMock({ id }))}
        selectedImageId="1"
        onClick={handleClick}
      />
    );

    const listItems = getAllByRole('listitem');

    expect(listItems).toHaveLength(3);

    fireEvent.click(listItems[0]);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
