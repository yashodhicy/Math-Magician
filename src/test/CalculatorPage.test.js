import { render } from '@testing-library/react';
import CalculatorPage from '../Calculator';

describe('Should render as expected', () => {
  it('should work as expected', () => {
    const result = render(<CalculatorPage />);
    expect(result).toMatchSnapshot();
  });
});
