import type { FC } from 'react';
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  ReactFlowProvider,
} from 'reactflow';

import 'reactflow/dist/style.css';

import { useGraph } from './use-graph';

interface Props {
  characterId: number;
}

const Graph: FC<Props> = ({ characterId }) => {
  const { nodes, edges } = useGraph(characterId);

  return (
    <div className="container mx-auto h-[60vh] w-full">
      <ReactFlowProvider>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Controls />
          <Background variant={BackgroundVariant.Dots} gap={24} size={2} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default Graph;
