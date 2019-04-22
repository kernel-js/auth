// Kernel
import { get } from '@kernel-js/support';

// Decorators
import ValidateOAuthClass from '../decorators/ValidateOAuthClass';
import ValidateUserParams from '../decorators/ValidateUserParams';

// Classes
import BaseAuthentication from './BaseAuthentication';

@ValidateOAuthClass()
export default class OAuthAuthentication extends BaseAuthentication {

  private _client: object;

  /**
   * @param  {object} config
   */
  constructor(config: object) {
    super(config);

    this._client = get(config, 'client', {});
  }

  /**
   * @param  {object} data
   * @returns void
   */
  public authorizationHeaders(): object {
    
    const session =this._storage.get();
    const tokenType = get(session, 'token_type', 'Bearer');
    const accessToken = get(session, 'access_token', null);

    return {
      Authorization: `${tokenType} ${accessToken}`,
    };
  }

  /**
   * Gets user access tokens.
   * @param  {object} params
   * @param  {string} url
   * @returns Promise
   */
  @ValidateUserParams()
  public async login(params: object = {}, url: string = '/oauth/token'): Promise < any > {

    const client: object = {
      'scope': get(this._client, 'scope', ''),
      'client_id': get(this._client, 'id', ''),
      'client_secret': get(this._client, 'secret', '')
    };

    const data: object = { grant_type: 'password', ...client, ...params };

    return this._request.post(url, data).then(response => {
      this._storage.store(response.data).then(() => {

        Object.assign(
          this._request.defaults.headers.common,
          this.authorizationHeaders()
        );
      });
    });
  }

  /**
   * Clears all user data by logging out.
   * @returns Promise
   */
  public async logout(): Promise < any > {

    try {
      this._storage.revoke().then(() => {
        
        delete this._request.defaults.headers.common['Authorization'];
      });
    } catch(e) {
      throw new Error(e);
    }
  }
}