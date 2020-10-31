import BaseDataService from '../common/base_data_service';

export default class TMDBCommunication extends BaseDataService {
  getGenres = () => {
    return new Promise((resolve, reject) => {
      this.getData(
        `/3/genre/movie/list`,
        {},
        err => reject(err),
        res => resolve(res),
      );
    })
  }

  getListByGenre = (genre_id, page = 1) => {
    return new Promise((resolve, reject) => {
      this.getData(
        `/3/discover/movie`,
        {
          sort_by: 'popularity.desc',
          include_adult: false,
          include_video: false,
          page,
          with_genres: genre_id
        },
        err => reject(err),
        res => resolve(res),
      );
    })
  }

  searchMovie = (query, page = 1) => {
    return new Promise((resolve, reject) => {
      this.getData(
        `/3/search/movie`,
        {
          query,
          page,
          include_adult: false,
        },
        err => reject(err),
        res => resolve(res),
      );
    })
  }

  getMovieDetails = (movieId) => {
    return new Promise((resolve, reject) => {
      this.getData(
        `/3/movie/${movieId}`,
        {},
        err => reject(err),
        res => resolve(res),
      );
    })
  }

  getCredits = (movieId) => {
    return new Promise((resolve, reject) => {
      this.getData(
        `/3/movie/${movieId}/credits`,
        {},
        err => reject(err),
        res => resolve(res),
      );
    })
  }

  getKeywords = (movieId) => {
    return new Promise((resolve, reject) => {
      this.getData(
        `/3/movie/${movieId}/keywords`,
        {},
        err => reject(err),
        res => resolve(res),
      );
    })
  }

  getRecommendations = (movieId) => {
    return new Promise((resolve, reject) => {
      this.getData(
        `/3/movie/${movieId}/recommendations`,
        {},
        err => reject(err),
        res => resolve(res),
      );
    })
  }
  
}
