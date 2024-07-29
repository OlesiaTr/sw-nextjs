import { Dispatch, SetStateAction } from 'react'
import { Character } from '../types'
import { toast } from 'react-toastify'
import { logger } from '../logger'
import { getCharacter } from '@/data'

interface LoadCharacterParams {
  setLoading: Dispatch<SetStateAction<boolean>>
  setCharacter: Dispatch<SetStateAction<Character | undefined>>
  characterId: number
}

export const loadCharacter = async ({
  setLoading,
  setCharacter,
  characterId,
}: LoadCharacterParams) => {
  setLoading(true)
  try {
    const data = await getCharacter(characterId)

    setCharacter(data)
  } catch (error) {
    toast.error('Something went wrong during fetching character data.', {
      autoClose: 4000,
    })
    logger(error)
  } finally {
    setLoading(false)
  }
}
