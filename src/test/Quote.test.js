import { render } from '@testing-library/react';
import Quote from '../Quote';

describe('Should render as expected', () => {
  it('should work as expected', () => {
    const result = render(<Quote />);
    expect(result).toMatchSnapshot();
  });
});
