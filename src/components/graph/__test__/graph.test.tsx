import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { useGraph } from '../use-graph';
import { ReactFlowProvider } from 'reactflow';
import Graph from '../graph';

jest.mock('../use-graph');

describe('Graph Component', () => {
  const MOCK_NODES = [
    {
      id: 'character',
      position: { x: 240, y: 50 },
      data: { label: 'Han Solo' },
    },
    {
      data: { label: 'Return of the Jedi' },
      id: 'film-node-3',
      position: { x: 0, y: 200 },
    },
  ];

  const MOCK_EDGES = [
    { id: 'film-edge-3', source: 'character', target: 'film-node-3' },
    {
      id: 'film-edge-2',
      source: 'character',
      target: 'film-node-2',
    },
  ];

  it('renders the ReactFlow components', () => {
    (useGraph as jest.Mock).mockReturnValue({
      nodes: MOCK_NODES,
      edges: MOCK_EDGES,
    });

    const { asFragment } = render(
      <ReactFlowProvider>
        <Graph characterId={1} />
      </ReactFlowProvider>,
    );

    // Checks if ReactFlow component is present
    const reactFlowWrapper = screen.getByTestId('rf__wrapper');
    expect(reactFlowWrapper).toBeInTheDocument();

    // Checks if Controls are present
    const controls = screen.getByTestId('rf__controls');
    expect(controls).toBeInTheDocument();

    // Checks if Background is present
    const background = screen.getByTestId('rf__background');
    expect(background).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
