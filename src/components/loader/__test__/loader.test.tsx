import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Loader from '../loader';

describe('Loader', () => {
  it('renders the Rings spinner with correct styles', () => {
    const { asFragment } = render(<Loader />);

    const loaderElement = document.querySelector(
      '[data-testid="rings-loading"]',
    );
    expect(loaderElement).toBeInTheDocument();

    // Checks if the element has inline styles with correct values
    expect(loaderElement).toHaveStyle({
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
