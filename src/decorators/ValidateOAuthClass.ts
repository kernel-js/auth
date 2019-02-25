import { get, isEmpty } from '@kernel-js/support';
import { ArgumentNullError } from '@kernel-js/exceptions';

/**
 * @returns any
 */
export default function ValidateOAuthClass(): any {
  
  /**
   * @param  {any} constructor
   */
  return function (constructor: any) {
    const original = constructor;
    const newConstructor: any = function (...args: any[]) {

      const config: object = args[0];
      const client = get(config, 'client', {});

      if (isEmpty(client)) {
        throw new ArgumentNullError('client');
      }
      
      if (isEmpty(get(client, 'id', null))) {
        throw new ArgumentNullError('client.id');
      }
      
      if (isEmpty(get(client, 'secret', null))) {
        throw new ArgumentNullError('client.secret');
      }

      return new original(...args);
    }

    newConstructor.prototype = original.prototype;

    return newConstructor;
  }
}