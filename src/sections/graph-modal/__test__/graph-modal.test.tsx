import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import mockRouter from 'next-router-mock';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

import GraphModal from '../graph-modal';
import { GRAPH_MODAL_TEST_ID, MODAL_OVERLAY_TEST_ID } from '../constants';

describe('GraphModal', () => {
  const MOCK_FUNCTION = jest.fn();
  const MOCK_PROPS = {
    characterId: 1,
    handleCloseModal: MOCK_FUNCTION,
  };

  const renderGraphModal = () =>
    render(
      <RouterContext.Provider value={mockRouter}>
        <GraphModal {...MOCK_PROPS} />
      </RouterContext.Provider>,
    );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the modal correctly', () => {
    const { asFragment } = renderGraphModal();

    const modalOverlay = screen.getByTestId(MODAL_OVERLAY_TEST_ID);
    const graphModal = screen.getByTestId(GRAPH_MODAL_TEST_ID);
    const link = screen.getByText(
      /click here to see full information on a separate page/i,
    );

    expect(modalOverlay).toBeInTheDocument();
    expect(graphModal).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      `/character/${MOCK_PROPS.characterId}`,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('calls handleCloseModal when clicking the overlay', () => {
    renderGraphModal();

    const modalOverlay = screen.getByTestId(MODAL_OVERLAY_TEST_ID);
    fireEvent.click(modalOverlay);

    expect(MOCK_FUNCTION).toHaveBeenCalledTimes(1);
  });
});
