import BaseAuthentication from './BaseAuthentication';
export default class OAuthAuthentication extends BaseAuthentication {
    private _client;
    /**
     * @param  {object} config
     */
    constructor(config: object);
    /**
     * @param  {object} data
     * @returns void
     */
    authorizationHeaders(): object;
    /**
     * Gets user access tokens.
     * @param  {object} params
     * @param  {string} url
     * @returns Promise
     */
    login(params?: object, url?: string): Promise<any>;
    /**
     * Clears all user data by logging out.
     * @returns Promise
     */
    logout(): Promise<any>;
}
