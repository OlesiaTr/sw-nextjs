import type { FC, MouseEventHandler } from 'react';
import Link from 'next/link';

import { Graph } from '@/components/graph';

import { GRAPH_MODAL_TEST_ID, MODAL_OVERLAY_TEST_ID } from './constants';

interface Props {
  characterId: number | null;
  handleCloseModal: MouseEventHandler<HTMLDivElement>;
}

const GraphModal: FC<Props> = ({ characterId, handleCloseModal }) => {
  const CHARACTER_LINK = `/character/${characterId}`;

  return (
    <div
      onClick={handleCloseModal}
      data-testid={MODAL_OVERLAY_TEST_ID}
      className="fixed inset-0 z-30 flex h-screen w-screen items-center justify-center bg-black/45"
    >
      <div
        className="relative h-2/3 w-4/5 max-w-3xl rounded-lg bg-white p-6 shadow-lg"
        data-testid={GRAPH_MODAL_TEST_ID}
      >
        <Link
          className="mb-3 block text-center font-semibold text-accent"
          href={CHARACTER_LINK}
        >
          {' '}
          Click here to see full information on a separate page
        </Link>

        {characterId && <Graph characterId={characterId} />}
      </div>
    </div>
  );
};

export default GraphModal;
