import { render } from '@testing-library/react';
import Spinner from './index';

describe('Spinner', () => {
  it('should render with proper role', () => {
    const { getByRole } = render(<Spinner />);

    expect(getByRole('status')).toBeInTheDocument();
  });
});
