'use client';

import { CharacterList } from '@/sections/character-list';
import { useHomePage } from './hooks';
import { Loader } from '@/components/loader';
import { GraphModal } from '@/sections/graph-modal';

export default function Home() {
  const {
    loading,
    charactersList,
    handleOnCharacterClick,
    characterId,
    isOpenModal,
    handleCloseModal,
  } = useHomePage();

  return (
    <main>
      {loading && <Loader />}

      <h1 className="my-6 text-center text-4xl font-black uppercase text-accent">
        StarWars Characters List
      </h1>

      <CharacterList list={charactersList} onClick={handleOnCharacterClick} />

      {isOpenModal && (
        <GraphModal
          characterId={characterId}
          handleCloseModal={handleCloseModal}
        />
      )}
    </main>
  );
}
