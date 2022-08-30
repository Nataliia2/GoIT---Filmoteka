const refsModal = {
  backdrop: document.querySelector('.backdrop-modal'),
  modal: document.querySelector('.modal-movie'),
}
const imageURL = "https://image.tmdb.org/t/p/w500";

function createModalFilm(data) {
    const {
      title,
      popularity,
      original_title,
      genre,
      overview,
      poster_path,
      vote_average,
      vote_count,
    } = data;
    
  return `
      <button data-modal-close type="button" class="modal-movie-btn-close">
          <svg class="modal-movie-img-close">
              <use href="./images/icon-close-modal.svg#modal-close"></use>
          </svg>
      </button>

    <div class="modal-movie-cont">

      <div class="modal-movie-cont__img">
        <img class="modal-movie-img" src="${imageURL}${poster_path}" alt="${title}">
      </div>
      
      <div class="modal-movie-cont__data">

        <div class="modal-movie-cont__about">
          <h2 class="modal-movie__title">${title}</h2>
          <table class="modal-movie-table">
          <tbody>
            <tr>
              <td class="modal-movie-table__item-name">Vote / Votes</td>
              <td class="modal-movie-table__item-value">
                <span class="vote">${vote_average.toFixed(1)}</span> / 
                <span class="votes">${vote_count}</span>
              </td>
            </tr>
            <tr>
              <td class="modal-movie-table__item-name">Popularity</td>
              <td class="modal-movie-table__item-value">${popularity.toFixed(1)}</td>
            </tr>
            <tr>
              <td class="modal-movie-table__item-name">Original Title</td>
              <td class="modal-movie-table__item-value">${original_title}</td>
            </tr>
            <tr>
              <td class="modal-movie-table__item-name">Genre</td>
              <td class="modal-movie-table__item-value">${genre}</td>
            </tr>
          </tbody>
          </table>

          <h3 class="modal-movie-about">ABOUT</h3>
          <p class="modal-movie-descr-movie">${overview}</p>
        </div>
      
        <ul class="modal-movie__btn-list">
            <li>
                <button class="btn-watched" type="button">ADD TO WATCHED</button>
            </li>
            <li>
                <button class="btn-queue" type="button">ADD TO QUEUE</button>
            </li>
        </ul>

      </div>

    </div>`;
};

export default function createdCardFilm(data) {
    const dataFilm = createModalFilm(data);
      refsModal.modal.innerHTML = dataFilm;
    
}