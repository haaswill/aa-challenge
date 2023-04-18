import { render, fireEvent } from '@testing-library/react';
import Tabs, { ITab } from './index';

describe('Tabs', () => {
  let tabs: ITab[];

  beforeAll(() => {
    tabs = [
      {
        id: 1,
        content: <p>Tab 1</p>,
        title: 'Tab 1',
      },
      {
        id: 2,
        content: <p>Tab 2</p>,
        title: 'Tab 2',
      },
    ];
  });

  it('should have the proper role and render the first tab', () => {
    const { getByRole, getByTestId } = render(<Tabs tabs={tabs} />);

    expect(getByRole('tablist')).toBeInTheDocument();
    expect(getByTestId('tabs-content-0')).toHaveTextContent('Tab 1');
  });

  it('should change class when clicking on another tab', () => {
    const { getAllByRole, getByTestId } = render(<Tabs tabs={tabs} />);

    fireEvent.click(getAllByRole('tab')[1]);

    expect(getByTestId('tabs-content-0')).not.toHaveClass('active');
    expect(getByTestId('tabs-content-1')).toHaveClass('active');
  });
});
