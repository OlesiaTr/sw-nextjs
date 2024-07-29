import { NODE_X } from '@/constants'
import { calculateXPosition } from './get-film-nodes'
import { Starship } from '../types'

const calculateXOffset = (filmsCount: number, starshipsCount: number) =>
  ((filmsCount / starshipsCount) * NODE_X) / 2 - NODE_X / 2

export const getStarshipNodes = (starships: Starship[], films: number[]) => {
  const filmsCount = films.length
  const starshipsCount = starships.length
  const positionFactor = filmsCount / starshipsCount
  const offset = calculateXOffset(filmsCount, starshipsCount)

  return starships.map((starship, index) => {
    const { id, name } = starship
    return {
      id: `starship-node-${id}`,
      position: {
        x: calculateXPosition(index, NODE_X, positionFactor, offset),
        y: 400,
      },
      data: { label: name },
    }
  })
}
