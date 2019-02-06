import {
  StorageMethods
} from '../storage/enums/StorageMethods';

import {
  get,
  isEmpty
} from '@kernel-js/support';

import {
  ArgumentNullError
} from '@kernel-js/exceptions';

import BaseStorage from '../storage/BaseStorage';
import AuthenticationInterface from './interfaces/AuthenticationInterface';

export default class OAuthAuthentication implements AuthenticationInterface {

  private _params: object;
  private _request: any;
  private _storage: BaseStorage;

  constructor(params: object, request: any, private storageMethod: StorageMethods, private cryptPassword: string) {
    this._params = params;
    this._request = request;
    this._storage = new BaseStorage(storageMethod, cryptPassword);
  }

  /**
   * 
   * @param data 
   */
  private _authorizationHeader(data: object = {}): string {

    const tokenType = get(data, 'token_type', 'Bearer');
    const accessToken = get(data, 'access_token', null);

    return `${tokenType} ${accessToken}`;
  }

  /**
   * 
   */
  public isGuest(): boolean {

    return isEmpty(
      get(this._storage.getSession(), 'access_token', null)
    );
  }

  /**
   * 
   */
  public isAuthenticated(): boolean {

    return !this.isGuest();
  }

  /**
   * 
   * @param params 
   * @param url 
   */
  public login(params: object = {}, url: string = '/oauth/token'): Promise < Object > {

    let data: object = {
      'grant_type': 'password'
    };

    if (isEmpty(get(params, 'username', null))) {
      throw new ArgumentNullError('username');
    }

    if (isEmpty(get(params, 'password', null))) {
      throw new ArgumentNullError('password');
    }

    Object.assign(data, this._params);
    Object.assign(data, params);

    return new Promise((resolve, reject) => {

      this._request.post(url, data)
        .then(response => {
          this._storage.storeSession(response.data);
          this._request.defaults.headers.common['Authorization'] = this._authorizationHeader(response.data);

          resolve(response);
        })
        .catch(error => {

          reject(error);
        })
    })

  }

  /**
   * 
   */
  public logout(): Promise < Object > {

    return new Promise((resolve, reject) => {

      try {
        this._storage.revokeSession();
        delete this._request.defaults.headers.common['Authorization'];

        resolve();
      } catch (error) {

        reject(error);
      }

    });
  }
}