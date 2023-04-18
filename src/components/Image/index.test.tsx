import { render } from '@testing-library/react';
import Image from './index';

describe('Image', () => {
  it('has the proper src and alt values', () => {
    const { getByRole } = render(<Image src="/test/1" alt="Test" />);
    const image = getByRole('img');

    expect(image.getAttribute('src')).toBe('/test/1');
    expect(image.getAttribute('alt')).toBe('Test');
  });
});
