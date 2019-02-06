import { StorageMethods } from './enums/StorageMethods';
import StorageInterface from './interfaces/StorageInterface';
export default class BaseStorage implements StorageInterface {
    private storageMethod;
    private cryptPassword;
    private crypt;
    private storage;
    constructor(storageMethod: StorageMethods, cryptPassword: string);
    /**
     *
     * @param storageMethod
     */
    private _storageFactory;
    /**
     *
     */
    getSession(): object;
    /**
     *
     * @param data
     */
    storeSession(data: any): void;
    /**
     *
     */
    revokeSession(): void;
}
