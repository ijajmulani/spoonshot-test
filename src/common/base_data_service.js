import { AppConfig } from "./config";

export default class BaseDataService {

  getData = (methodName, data = {}, onError, onSuccess) => {
    const appConfig = AppConfig.BaseAPI;
    const params = new URLSearchParams({...data, 
      api_key: AppConfig.APIKey,
      language: 'en-US',
    });
     
    const responsePromise = fetch(`${appConfig}${methodName}?${params}`)
    this.onResponseReceipt(responsePromise, onError, onSuccess);
  }

  onResponseReceipt = (responsePromise, onError, onSuccess) => {
    responsePromise.then(response => {
      return response.json()
    }).then(responseJson => {
      onSuccess(responseJson);
    }).catch(exception => {
      onError({ error: exception });
    });
  }
}
