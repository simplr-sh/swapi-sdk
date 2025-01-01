# @simplr-sh/swapi-sdk

A TypeScript SDK for interacting with the Star Wars API (SWAPI).

## Installation

```bash
# Using bun
bun i @simplr-sh/swapi-sdk
```
```bash
# Using NPM
npm i @simplr-sh/swapi-sdk
```
```bash
# Using NPM
yarn i @simplr-sh/swapi-sdk
```


## Features

- Full TypeScript support
- Type-safe responses
- Simple and intuitive API

## API Reference

### Films
- `getFilms()`: Get all Star Wars films
- `getFilmById(id: number)`: Get a film by ID
- `getFilmSchema()`: Get the film schema
- `searchFilms(query: string)`: Search films by title

### People
- `getPeople()`: Get all people
- `getPersonById(id: number)`: Get a person by ID
- `getPersonSchema()`: Get the person schema
- `searchPeople(query: string)`: Search people by name

### Planets
- `getPlanets()`: Get all planets
- `getPlanetById(id: number)`: Get a planet by ID
- `getPlanetSchema()`: Get the planet schema
- `searchPlanets(query: string)`: Search planets by name

### Species
- `getSpecies()`: Get all species
- `getSpeciesById(id: number)`: Get a species by ID
- `getSpeciesSchema()`: Get the species schema
- `searchSpecies(query: string)`: Search species by name

### Starships
- `getStarships()`: Get all starships
- `getStarshipById(id: number)`: Get a starship by ID
- `getStarshipSchema()`: Get the starship schema
- `searchStarships(query: string)`: Search starships by name

### Vehicles
- `getVehicles()`: Get all vehicles
- `getVehicleById(id: number)`: Get a vehicle by ID
- `getVehicleSchema()`: Get the vehicle schema
- `searchVehicles(query: string)`: Search vehicles by name

### Root
- `getRoot()`: Get the API root endpoints

## Usage

```typescript
import { films, people, planets, species, starships, vehicles } from '@simplr-sh/swapi-sdk';

// Get all films
const allFilms = await films.getFilms();

// Search for people
const searchResults = await people.searchPeople('luke');

// Get a specific planet
const tatooine = await planets.getPlanetById('1');
```

## Development

```bash
bun install
bun run index.ts
```

This project was created using `bun init` in bun v1.1.42.
