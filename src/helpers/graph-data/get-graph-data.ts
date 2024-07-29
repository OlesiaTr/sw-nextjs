import { getCharacterNode } from './get-character-node'
import { getFilmEdges } from './get-film-edges'
import { getFilmNodes } from './get-film-nodes'
import { getStarshipEdges } from './get-starship-edges'
import { getStarshipNodes } from './get-starship-nodes'
import { Character, Film, Starship } from '../types'

export const getGraphData = (
  character: Character,
  filmsList: Film[],
  starships: Starship[]
) => {
  const { films } = character

  const characterNode = getCharacterNode(character, films)

  const filmsNodes = getFilmNodes(filmsList)
  const filmsEdges = getFilmEdges(filmsList)

  const starshipsNodes = getStarshipNodes(starships, films)
  const starshipsEdges = getStarshipEdges(starships, filmsList)

  const overallNodes = [characterNode, ...filmsNodes, ...starshipsNodes]
  const overallEdges = [...filmsEdges, ...starshipsEdges]

  return { overallNodes, overallEdges }
}
