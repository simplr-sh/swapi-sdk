import { API_BASE_URL } from '../constants'

/**
 * Get all starships
 *
 * File: https://github.com/simplr-sh/sw-api/blob/main/public/api/starships/all.json
 */
export async function getStarships() {
  const response = await fetch(`${API_BASE_URL}/starships/all.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch starships')
  }
  return response.json() as Promise<Array<Starship>>
}

/**
 * Get a starship by id
 * @param id The id of the starship
 *
 * Example File: https://github.com/simplr-sh/sw-api/blob/main/public/api/starships/9.json
 */
export async function getStarshipById(id: number) {
  const response = await fetch(`${API_BASE_URL}/starships/${id}.json`)
  if (!response.ok) {
    throw new Error(
      'Failed to fetch starship, ensure the ID is correct & exists'
    )
  }
  return response.json() as Promise<Starship>
}

/**
 * Get the schema for a starship
 *
 * File: https://github.com/simplr-sh/sw-api/blob/main/public/api/starships/schema.json
 */
export async function getStarshipSchema() {
  const response = await fetch(`${API_BASE_URL}/starships/schema.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch starship schema')
  }
  return response.json() as Promise<StarshipSchema>
}

/**
 * Search for starships by name
 * @param query The search query
 */
export async function searchStarships(query: string) {
  const starships = await getStarships()
  return starships.filter((starship) =>
    starship.name.toLowerCase().includes(query.toLowerCase())
  )
}

export type Starship = {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  pilots: Array<string>
  films: Array<string>
  created: string
  edited: string
  url: string
}

export type StarshipSchema = {
  $schema: string
  type: string
  properties: {
    name: {
      type: string
    }
    model: {
      type: string
    }
    manufacturer: {
      type: string
    }
    cost_in_credits: {
      type: string
    }
    length: {
      type: string
    }
    max_atmosphering_speed: {
      type: string
    }
    crew: {
      type: string
    }
    passengers: {
      type: string
    }
    cargo_capacity: {
      type: string
    }
    consumables: {
      type: string
    }
    hyperdrive_rating: {
      type: string
    }
    MGLT: {
      type: string
    }
    starship_class: {
      type: string
    }
    pilots: {
      type: string
      items: Array<{
        type: string
      }>
    }
    films: {
      type: string
      items: Array<{
        type: string
      }>
    }
    created: {
      type: string
    }
    edited: {
      type: string
    }
    url: {
      type: string
    }
  }
  required: Array<string>
}
