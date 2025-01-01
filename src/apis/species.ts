import { API_BASE_URL } from '../constants'

/**
 * Get all species in the Star Wars universe
 *
 * File: https://github.com/simplr-sh/sw-api/blob/main/public/api/species/all.json
 */
export async function getSpecies() {
  const response = await fetch(`${API_BASE_URL}/species/all.json`)
  return response.json() as Promise<Array<Species>>
}

/**
 * Get a species by its ID
 * @param id The ID of the species
 *
 * Example File: https://github.com/simplr-sh/sw-api/blob/main/public/api/species/1.json
 */
export async function getSpeciesById(id: number) {
  const response = await fetch(`${API_BASE_URL}/species/${id}.json`)
  return response.json() as Promise<Species>
}

/**
 * Get the schema for a species
 *
 * File: https://github.com/simplr-sh/sw-api/blob/main/public/api/species/schema.json
 */
export async function getSpeciesSchema() {
  const response = await fetch(`${API_BASE_URL}/species/schema.json`)
  return response.json() as Promise<SpeciesSchema>
}

/**
 * Search for a species by name
 * @param query The search query
 */
export async function searchSpecies(query: string) {
  const species = await getSpecies()
  return species.filter((species) =>
    species.name.toLowerCase().includes(query.toLowerCase())
  )
}

export type Species = {
  name: string
  classification: string
  designation: string
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  homeworld?: string
  language: string
  people: Array<string>
  films: Array<string>
  created: string
  edited: string
  url: string
}

export type SpeciesSchema = {
  $schema: string
  type: string
  properties: {
    name: {
      type: string
    }
    classification: {
      type: string
    }
    designation: {
      type: string
    }
    average_height: {
      type: string
    }
    skin_colors: {
      type: string
    }
    hair_colors: {
      type: string
    }
    eye_colors: {
      type: string
    }
    average_lifespan: {
      type: string
    }
    homeworld: {
      type: string
    }
    language: {
      type: string
    }
    people: {
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
