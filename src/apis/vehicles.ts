import { API_BASE_URL } from '../constants'

/**
 * Get all Star Wars vehicles
 *
 * File: https://github.com/simplr-sh/sw-api/blob/main/public/api/vehicles/all.json
 */
export async function getVehicles() {
  const response = await fetch(`${API_BASE_URL}/vehicles/all.json`)
  return response.json() as Promise<Array<Vehicle>>
}

/**
 * Get a vehicle by its ID
 * @param id The ID of the vehicle
 *
 * Example File: https://github.com/simplr-sh/sw-api/blob/main/public/api/vehicles/4.json
 */
export async function getVehicleById(id: number) {
  const response = await fetch(`${API_BASE_URL}/vehicles/${id}.json`)
  return response.json() as Promise<Vehicle>
}

/**
 * Get the schema for a vehicle
 *
 * File: https://github.com/simplr-sh/sw-api/blob/main/public/api/vehicles/schema.json
 */
export async function getVehicleSchema() {
  const response = await fetch(`${API_BASE_URL}/vehicles/schema.json`)
  return response.json() as Promise<VehicleSchema>
}

/**
 * Search for a vehicle by name
 * @param query The search query
 */
export async function searchVehicles(query: string) {
  const vehicles = await getVehicles()
  return vehicles.filter((vehicle) =>
    vehicle.name.toLowerCase().includes(query.toLowerCase())
  )
}

export type Vehicle = {
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
  vehicle_class: string
  pilots: Array<string>
  films: Array<string>
  created: string
  edited: string
  url: string
}

export type VehicleSchema = {
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
    vehicle_class: {
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
