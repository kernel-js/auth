import StorageInterface from '../interfaces/StorageInterface';
export default class BaseStorage implements StorageInterface {
    private _storage;
    constructor(config: object);
    /**
     * @param  {StorageMethods} method
     * @returns any
     */
    private _storageFactory;
    /**
     * @returns object
     */
    get(): object;
    /**
     * @param  {object} data
     * @returns Promise
     */
    store(data?: object): Promise<any>;
    /**
     * @returns Promise
     */
    revoke(): Promise<any>;
}
