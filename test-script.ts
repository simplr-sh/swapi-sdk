import {
  films,
  people,
  planets,
  root,
  species,
  starships,
  vehicles,
} from './dist/index'
;(async () => {
  const [film, person, planet, _root, _species, starship, vehicle] =
    await Promise.all([
      films.getFilmById(1),
      people.getPersonById(1),
      planets.getPlanetById(1),
      root.getRoot(),
      species.getSpeciesById(1),
      starships.getStarshipById(9),
      vehicles.getVehicleById(4),
    ])

  console.log({
    film,
    person,
    planet,
    _root,
    _species,
    starship,
    vehicle,
  })
})()
