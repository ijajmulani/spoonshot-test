import BaseDataService from '../common/base_data_service';

export default class TMDBCommunication extends BaseDataService {
  getDataByQuery = (query, pageNumber, limit) => {
    return new Promise((resolve, reject) => {
      this.getData(
        `/v3/search/anime?q=${query}&limit=${limit}&page=${pageNumber}`,
        err => reject(err),
        res => resolve(res),
      );
    })
  }
}
