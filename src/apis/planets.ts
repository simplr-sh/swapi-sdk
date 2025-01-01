import { API_BASE_URL } from '../constants'

/**
 * Get all planets in the Star Wars universe
 *
 * File: https://github.com/simplr-sh/sw-api/blob/main/public/api/planets/all.json
 */
export async function getPlanets() {
  const response = await fetch(`${API_BASE_URL}/planets/all.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch planets')
  }
  return response.json() as Promise<Array<Planet>>
}

/**
 * Get a planet by its ID
 * @param id The ID of the planet
 *
 * Example File: https://github.com/simplr-sh/sw-api/blob/main/public/api/planets/1.json
 */
export async function getPlanetById(id: number) {
  const response = await fetch(`${API_BASE_URL}/planets/${id}.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch planet, ensure the ID is correct & exists')
  }
  return response.json() as Promise<Planet>
}

/**
 * Get the schema for a planet
 *
 * File: https://github.com/simplr-sh/sw-api/blob/main/public/api/planets/schema.json
 */
export async function getPlanetSchema() {
  const response = await fetch(`${API_BASE_URL}/planets/schema.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch planet schema')
  }
  return response.json() as Promise<PlanetSchema>
}

/**
 * Search for a planet by name
 * @param query The search query
 */
export async function searchPlanets(query: string) {
  const planets = await getPlanets()
  return planets.filter((planet) =>
    planet.name.toLowerCase().includes(query.toLowerCase())
  )
}

export type Planet = {
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  population: string
  residents: Array<string>
  films: Array<string>
  created: string
  edited: string
  url: string
}

export type PlanetSchema = {
  $schema: string
  type: string
  properties: {
    name: {
      type: string
    }
    rotation_period: {
      type: string
    }
    orbital_period: {
      type: string
    }
    diameter: {
      type: string
    }
    climate: {
      type: string
    }
    gravity: {
      type: string
    }
    terrain: {
      type: string
    }
    surface_water: {
      type: string
    }
    population: {
      type: string
    }
    residents: {
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
