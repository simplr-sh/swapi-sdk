import * as films from './apis/films'
import * as people from './apis/people'
import * as planets from './apis/planets'
import * as root from './apis/root'
import * as species from './apis/species'
import * as starships from './apis/starships'
import * as vehicles from './apis/vehicles'

export type { Film, FilmSchema } from './apis/films'
export type { Person, PersonSchema } from './apis/people'
export type { Planet, PlanetSchema } from './apis/planets'
export type { Root } from './apis/root'
export type { Species, SpeciesSchema } from './apis/species'
export type { Starship, StarshipSchema } from './apis/starships'
export type { Vehicle, VehicleSchema } from './apis/vehicles'

export { films, people, planets, root, species, starships, vehicles }
