import {
  StorageMethods
} from './enums/StorageMethods';

import {
  Cookie,
  LocalStorage,
  SessionStorage
} from '@kernel-js/storage';

import {
  isEmpty
} from '@kernel-js/support';

import Crypt from '../crypt/Crypt';

import StorageInterface from './interfaces/StorageInterface';

export default class BaseStorage implements StorageInterface {

  private crypt: Crypt;
  private storage: any;

  constructor(private storageMethod: StorageMethods = StorageMethods.LocalStorage, private cryptPassword: string) {

    this.crypt = new Crypt(cryptPassword);

    this._storageFactory(storageMethod);
  }

  /**
   * 
   * @param storageMethod 
   */
  private _storageFactory(storageMethod: StorageMethods) {
    switch (storageMethod) {
      case StorageMethods.LocalStorage:

        this.storage = new LocalStorage();
        break;
      case StorageMethods.CookieStorage:

        this.storage = new Cookie();
        break;
      case StorageMethods.SessionStorage:

        this.storage = new SessionStorage();
        break;
    }
  }

  /**
   * 
   */
  public getSession(): object {

    try {

      const session = this.storage.get('auth');

      if (isEmpty(session)) {
        return {};
      }

      return this.crypt.decrypt(session);
    } catch (exception) {

      throw exception;
    }
  };

  /**
   * 
   * @param data 
   */
  public storeSession(data): void {

    try {

      this.storage.set('auth', this.crypt.encrypt(data));
    } catch (exception) {

      throw exception;
    }
  }

  /**
   * 
   */
  public revokeSession(): void {

    try {
      
      this.storage.delete('auth');
    } catch (exception) {

      throw exception;
    }
  }
}