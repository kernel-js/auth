export default interface AuthenticationInterface {
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
    login(params: object, url: string): Promise<Object>;
    /**
     *
     */
    logout(): Promise<Object>;
}
