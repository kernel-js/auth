// Axios
import { AxiosInstance } from 'axios';

// Kernel
import { get, isEmpty } from '@kernel-js/support';

// Interfaces
import AuthenticationInterface from '../interfaces/AuthenticationInterface';

// Classes
import BaseStorage from '../storage/BaseStorage';

export default class BaseAuthentication implements AuthenticationInterface {

  protected _storage: any;
  protected _request: AxiosInstance;
  
  /**
   * @param  {object} config
   */
  constructor(config: object) {

    this._request = get(config, 'request', {});
    this._storage = new BaseStorage(get(config, 'storage', {}));
  }

  /**
   * Check if an authenticated user exists.
   * @returns boolean
   */
  public isGuest(): boolean {

    return isEmpty(this._storage.get());
  }

  /**
   * Opposite method isGuest.
   * @returns boolean
   */
  public isAuthenticated(): boolean {

    return !this.isGuest();
  }

  /**
   * Gets user access tokens.
   * @param  {object} params
   * @param  {string} url
   * @returns Promise
   */
  public login(params: object = {}, url: string = ''): Promise < any > {
    
    return new Promise((resolve, reject) => {});
  }

  /**
   * Clears all user data by logging out.
   * @returns Promise
   */
  public logout(): Promise < any > {
    
    return new Promise((resolve, reject) => {});
  }
}