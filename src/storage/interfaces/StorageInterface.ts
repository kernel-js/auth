export default interface StorageInterface {

  /**
   * 
   */
  getSession(): object;

  /**
   * 
   * @param data 
   */
  storeSession(data): void;

  /**
   * 
   */
  revokeSession(): void;
}