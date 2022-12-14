import { refs } from '../../references/reference.js';

export function fillModal(film) {
  refs.filmModalRef.setAttribute('id', film.id);
  refs.filmName.textContent = film.title;
  refs.filmImage.alt = film.title;
  refs.filmImage.src = film.poster_path;
  refs.filmPopulation.textContent = film.popularity;
  refs.filmTittle.textContent = film.original_title;
  refs.filmVoteFirst.textContent = film.vote_average;
  refs.filmVoteSecond.textContent = film.vote_count;
  refs.filmAbout.textContent = film.overview;
  refs.filmGenres.textContent = film.genre_ids_full;
}
