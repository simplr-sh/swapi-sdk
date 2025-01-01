import { API_BASE_URL } from '../constants'

/**
 * Get all people in the Star Wars universe
 *
 * File: https://github.com/simplr-sh/sw-api/blob/main/public/api/people/all.json
 */
export async function getPeople() {
  const response = await fetch(`${API_BASE_URL}/people/all.json`)
  return response.json() as Promise<Array<People>>
}

/**
 * Get a person by their ID
 * @param id The ID of the person
 *
 * Example File: https://github.com/simplr-sh/sw-api/blob/main/public/api/people/1.json
 */
export async function getPersonById(id: number) {
  const response = await fetch(`${API_BASE_URL}/people/${id}.json`)
  return response.json() as Promise<People>
}

/**
 * Get the schema for a person
 *
 * File: https://github.com/simplr-sh/sw-api/blob/main/public/api/people/schema.json
 */
export async function getPersonSchema() {
  const response = await fetch(`${API_BASE_URL}/people/schema.json`)
  return response.json() as Promise<PersonSchema>
}

/**
 * Search for people by name
 * @param query The search query
 */

export async function searchPeople(query: string) {
  const people = await getPeople()
  return people.filter((person) =>
    person.name.toLowerCase().includes(query.toLowerCase())
  )
}

export type People = {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: Array<string>
  species: Array<string>
  vehicles: Array<string>
  starships: Array<string>
  created: string
  edited: string
  url: string
}

export type PersonSchema = {
  $schema: string
  type: string
  properties: {
    name: {
      type: string
    }
    height: {
      type: string
    }
    mass: {
      type: string
    }
    hair_color: {
      type: string
    }
    skin_color: {
      type: string
    }
    eye_color: {
      type: string
    }
    birth_year: {
      type: string
    }
    gender: {
      type: string
    }
    homeworld: {
      type: string
    }
    films: {
      type: string
      items: Array<{
        type: string
      }>
    }
    species: {
      type: string
      items: Array<{
        type: string
      }>
    }
    vehicles: {
      type: string
      items: Array<{
        type: string
      }>
    }
    starships: {
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
