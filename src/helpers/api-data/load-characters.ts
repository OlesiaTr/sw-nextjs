import { getCharacters } from '@/data'
import { Dispatch, SetStateAction } from 'react'
import { Character } from '../types'
import { toast } from 'react-toastify'
import { logger } from '../logger'

interface LoadCharactersParams {
  pageUrl: number
  setLoading: Dispatch<SetStateAction<boolean>>
  setCharactersList: Dispatch<SetStateAction<Character[]>>
  setPage: Dispatch<SetStateAction<number>>
}

export const loadCharacters = async ({
  pageUrl,
  setLoading,
  setCharactersList,
  setPage,
}: LoadCharactersParams) => {
  setLoading(true)
  try {
    const data = await getCharacters(pageUrl)

    setCharactersList((prevCharacters) => {
      const newList = data.results.filter(
        (character: Character) =>
          !prevCharacters.find(
            (existingCharacter) => existingCharacter.name === character.name
          )
      )

      return [...prevCharacters, ...newList]
    })

    if (data.next) {
      setPage((prevPage) => prevPage + 1)
    }
  } catch (error) {
    toast.error('Something went wrong during fetching characters data.', {
      autoClose: 4000,
    })
    logger(error)
  } finally {
    setLoading(false)
  }
}
