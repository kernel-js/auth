export default interface StorageInterface {
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
