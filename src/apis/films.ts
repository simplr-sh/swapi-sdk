import { API_BASE_URL } from '../constants'

/**
 * Get all Star Wars films
 *
 * File: https://github.com/simplr-sh/sw-api/blob/main/public/api/films/all.json
 */
export async function getFilms() {
  const response = await fetch(`${API_BASE_URL}/films/all.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch films')
  }
  return response.json() as Promise<Array<Film>>
}

/**
 * Get a Star Wars film by ID
 * @param id The ID of the film
 *
 * Example File: https://github.com/simplr-sh/sw-api/blob/main/public/api/films/1.json
 */
export async function getFilmById(id: number) {
  const response = await fetch(`${API_BASE_URL}/films/${id}.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch film, ensure the ID is correct & exists')
  }
  return response.json() as Promise<Film>
}

/**
 * Get the schema for a Star Wars film
 *
 * File: https://github.com/simplr-sh/sw-api/blob/main/public/api/films/schema.json
 */
export async function getFilmSchema() {
  const response = await fetch(`${API_BASE_URL}/films/schema.json`)
  if (!response.ok) {
    throw new Error('Failed to fetch film schema')
  }
  return response.json() as Promise<FilmSchema>
}

/**
 * Search for a Star Wars film by title
 * @param query The title of the film
 */
export async function searchFilms(query: string) {
  const films = await getFilms()
  return films.filter((film) =>
    film.title.toLowerCase().includes(query.toLowerCase())
  )
}

export type Film = {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: Array<string>
  planets: Array<string>
  starships: Array<string>
  vehicles: Array<string>
  species: Array<string>
  created: string
  edited: string
  url: string
}

export type FilmSchema = {
  $schema: string
  type: string
  properties: {
    title: {
      type: string
    }
    episode_id: {
      type: string
    }
    opening_crawl: {
      type: string
    }
    director: {
      type: string
    }
    producer: {
      type: string
    }
    release_date: {
      type: string
    }
    characters: {
      type: string
      items: Array<{
        type: string
      }>
    }
    planets: {
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
    vehicles: {
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
