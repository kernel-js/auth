import { StorageMethods } from '../storage/enums/StorageMethods';
import AuthenticationInterface from './interfaces/AuthenticationInterface';
export default class OAuthAuthentication implements AuthenticationInterface {
    private storageMethod;
    private cryptPassword;
    private _params;
    private _request;
    private _storage;
    constructor(params: object, request: any, storageMethod: StorageMethods, cryptPassword: string);
    /**
     *
     * @param data
     */
    private _authorizationHeader;
    /**
     *
     */
    isGuest(): boolean;
    /**
     *
     */
    isAuthenticated(): boolean;
    /**
     *
     * @param params
     * @param url
     */
    login(params?: object, url?: string): Promise<Object>;
    /**
     *
     */
    logout(): Promise<Object>;
}
