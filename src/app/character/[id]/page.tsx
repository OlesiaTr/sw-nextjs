'use client';

import type { FC } from 'react';
import Link from 'next/link';
import { Graph } from '@/components/graph';
import { useParams } from 'next/navigation';
import { useCharacterPage } from './hooks';
import { Loader } from '@/components/loader';
import { CharacterFullInfo } from '@/components/character-full-info';

const CharacterPage: FC = () => {
  const { id } = useParams();

  if (!id) return null;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, character } = useCharacterPage(Number(id));

  if (loading) return <Loader />;

  return (
    <main className="p-6">
      <div className="mb-6 flex items-center justify-between rounded-lg bg-white p-6 shadow-lg">
        <Link href="/" className="font-semibold">
          Back to Home
        </Link>
        <h2 className="text-3xl font-bold text-accent">{character?.name}</h2>
      </div>

      {character && <CharacterFullInfo character={character} />}

      <Graph characterId={Number(id)} />
    </main>
  );
};

export default CharacterPage;
