import {
  isEmpty
} from '@kernel-js/support';

import {
  encrypt,
  decrypt
} from '@kernel-js/crypt';

import { ArgumentNullError } from '@kernel-js/exceptions';

export default class Crypt {

  constructor(private password: string) {
    this.password = password;
  }

  /**
   * 
   * @param {*} data 
   */
  public encrypt(data: object): string {

    if (isEmpty(data)) {
      throw new ArgumentNullError('Data to encrypt');
    }

    return encrypt(JSON.stringify(data), this.password);
  }

  /**
   * 
   * @param {*} data 
   */
  public decrypt(data: string): object {

    if (isEmpty(data)) {
      throw new ArgumentNullError('Data to decrypt');
    }

    return JSON.parse(decrypt(data, this.password));
  }
}