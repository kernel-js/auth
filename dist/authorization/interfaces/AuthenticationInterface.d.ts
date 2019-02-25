export default interface AuthenticationInterface {
    /**
     * Check if an authenticated user exists.
     * @returns boolean
     */
    isGuest(): boolean;
    /**
     * Opposite method isGuest.
     * @returns boolean
     */
    isAuthenticated(): boolean;
    /**
     * Gets user access tokens.
     * @param  {object} params
     * @param  {string} url
     * @returns Promise
     */
    login(params: object, url: string): Promise<any>;
    /**
     * Clears all user data by logging out.
     * @returns Promise
     */
    logout(): Promise<any>;
}
