import { films } from '@simplr-sh/swapi-sdk'

;(async () => {
  const film = await films.getFilmById('1')
  console.log(film)
})()
