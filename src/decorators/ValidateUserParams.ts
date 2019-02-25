import { get, isEmpty } from '@kernel-js/support';
import { ArgumentNullError } from '@kernel-js/exceptions';

/**
 * @returns any
 */
export default function Validate(): any {
  
  /**
   * @param  {any} target
   * @param  {string} propertyKey
   * @param  {PropertyDescriptor} descriptor
   */
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    
    descriptor.value = function (...args: any[]) {

      const params: object = args[0];

      if (isEmpty(get(params, 'username', null))) {
        throw new ArgumentNullError('username');
      }

      if (isEmpty(get(params, 'password', null))) {
        throw new ArgumentNullError('password');
      }

      return originalMethod.apply(this, args);
    }
    
    return descriptor;
  }
}