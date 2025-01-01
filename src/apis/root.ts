import { API_BASE_URL } from '../constants'

/**
 * Get the root of the Star Wars API
 * e.g. the URLs for all the other endpoints
 *
 * File: https://github.com/simplr-sh/sw-api/blob/main/public/api/root.json
 */
export async function getRoot(): Promise<Root> {
  const response = await fetch(`${API_BASE_URL}/root.json`)
  return response.json() as Promise<Root>
}

export type Root = {
  films: string
  people: string
  planets: string
  species: string
  vehicles: string
  starships: string
}
