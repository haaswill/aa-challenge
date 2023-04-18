// TODO: Add tests
import { render, fireEvent } from '@testing-library/react';
import SideBar from './index';
import { getMatchMediaMock } from '@/__mocks__';

describe('SideBar', () => {
  const testid = 'sidebar';

  beforeAll(() => {
    getMatchMediaMock();
  });

  it('should display content when it is open', () => {
    const { getByTestId } = render(
      <SideBar isOpen={true} onClickCloseButton={() => {}}>
        <p>Content</p>
      </SideBar>
    );

    expect(getByTestId(testid)).toHaveClass('open');
  });

  it('should not display content when it is closed', () => {
    const { getByTestId } = render(
      <SideBar isOpen={false} onClickCloseButton={() => {}}>
        <p>Content</p>
      </SideBar>
    );

    expect(getByTestId(testid)).not.toHaveClass('open');
  });

  it('calls the onClick function when clicked', () => {
    getMatchMediaMock(true);
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <SideBar isOpen={true} onClickCloseButton={handleClick}>
        <p>Content</p>
      </SideBar>
    );

    fireEvent.click(getByTestId('close-button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
