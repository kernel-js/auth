export default class Crypt {
    private password;
    constructor(password: string);
    /**
     *
     * @param {*} data
     */
    encrypt(data: object): string;
    /**
     *
     * @param {*} data
     */
    decrypt(data: string): object;
}
