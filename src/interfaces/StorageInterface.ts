export default interface StorageInterface {

  /**
   * @returns object
   */
  get(): object;
  
  /**
   * @param  {object} data
   * @returns Promise
   */
  store(data: object): Promise < any > ;
  
  /**
   * @returns Promise
   */
  revoke(): Promise < any > ;
}