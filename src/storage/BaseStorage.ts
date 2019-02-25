// Kernel
import { get } from '@kernel-js/support';
import { Cookie, LocalStorage, SessionStorage } from '@kernel-js/storage';

// Enums
import StorageMethods from '../enums/StorageMethods';

// Interfaces
import StorageInterface from '../interfaces/StorageInterface';
export default class BaseStorage implements StorageInterface{

  private _storage: any;

  constructor(config: object) {
    this._storage = this._storageFactory(
      get(config, 'method', StorageMethods.LocalStorage)
    );
  }

  /**
   * @param  {StorageMethods} method
   * @returns any
   */
  private _storageFactory(method: StorageMethods): any {
    switch(method) {
      case StorageMethods.LocalStorage:
      return new LocalStorage();

      case StorageMethods.CookieStorage:
      return new Cookie();

      case StorageMethods.SessionStorage:
      return new SessionStorage();
    }
  }

  /**
   * @returns object
   */
  public get(): object {
    try {
      return this._storage.get('auth')
    } catch(e) {
      throw new Error(e);
    }
  }

  /**
   * @param  {object} data
   * @returns Promise
   */
  public async store(data: object = {}): Promise<any> {
    try {
      this._storage.set('auth', data)
    } catch(e) {
      throw new Error(e);
    }
  }
  
  /**
   * @returns Promise
   */
  public async revoke(): Promise<any> {
    try {
      this._storage.delete('auth');
    } catch(e) {
      throw new Error(e);
    }
  }
}