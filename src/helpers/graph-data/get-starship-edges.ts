import { Film, Starship } from './types'

export const getStarshipEdges = (starships: Starship[], films: Film[]) => {
  const starshipIdSet = new Set(starships.map((starship) => starship.id))

  const edges = films.flatMap((film) =>
    film.starships
      .filter((starshipId) => starshipIdSet.has(starshipId))
      .map((starshipId) => ({
        id: `starship-edge-${film.id}-${starshipId}`,
        source: `film-node-${film.id}`,
        target: `starship-node-${starshipId}`,
      }))
  )

  return edges
}
