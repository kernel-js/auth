import _regeneratorRuntime from "@babel/runtime/regenerator";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/inherits";
import _applyDecoratedDescriptor from "@babel/runtime/helpers/applyDecoratedDescriptor";

var _dec, _dec2, _class, _class2, _temp;

// Kernel
import { get } from '@kernel-js/support'; // Decorators

import ValidateOAuthClass from '../decorators/ValidateOAuthClass';
import ValidateUserParams from '../decorators/ValidateUserParams'; // Classes

import BaseAuthentication from './BaseAuthentication';
var OAuthAuthentication = (_dec = ValidateOAuthClass(), _dec2 = ValidateUserParams(), _dec(_class = (_class2 = (_temp =
/*#__PURE__*/
function (_BaseAuthentication) {
  _inherits(OAuthAuthentication, _BaseAuthentication);

  /**
   * @param  {object} config
   */
  function OAuthAuthentication(config) {
    var _this;

    _classCallCheck(this, OAuthAuthentication);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OAuthAuthentication).call(this, config));
    _this._client = void 0;
    _this._client = get(config, 'client', {});
    return _this;
  }
  /**
   * @param  {object} data
   * @returns void
   */


  _createClass(OAuthAuthentication, [{
    key: "_setAuthorizationHeader",
    value: function _setAuthorizationHeader(data) {
      var tokenType = get(data, 'token_type', 'Bearer');
      var accessToken = get(data, 'access_token', null);
      this._request.defaults.headers.common['Authorization'] = "".concat(tokenType, " ").concat(accessToken);
    }
    /**
     * @param  {object} data
     * @returns void
     */

  }, {
    key: "_revokeAuthorizationHeader",
    value: function _revokeAuthorizationHeader(data) {
      delete this._request.defaults.headers.common['Authorization'];
    }
    /**
     * Gets user access tokens.
     * @param  {object} params
     * @param  {string} url
     * @returns Promise
     */

  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var params,
            url,
            client,
            data,
            _args = arguments;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                url = _args.length > 1 && _args[1] !== undefined ? _args[1] : '/oauth/token';
                client = {
                  'scope': get(this._client, 'scope', ''),
                  'client_id': get(this._client, 'id', ''),
                  'client_secret': get(this._client, 'secret', '')
                };
                data = _objectSpread({
                  grant_type: 'password'
                }, client, params);
                return _context.abrupt("return", this._request.post(url, data).then(function (response) {
                  _this2._storage.store(response.data).then(function () {
                    _this2._setAuthorizationHeader(response.data);
                  });
                }));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function login() {
        return _login.apply(this, arguments);
      }

      return login;
    }()
    /**
     * Clears all user data by logging out.
     * @returns Promise
     */

  }, {
    key: "logout",
    value: function () {
      var _logout = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                this._storage.revoke().then(function () {
                  delete _this3._request.defaults.headers.common['Authorization'];
                });

                _context2.next = 7;
                break;

              case 4:
                _context2.prev = 4;
                _context2.t0 = _context2["catch"](0);
                throw new Error(_context2.t0);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 4]]);
      }));

      function logout() {
        return _logout.apply(this, arguments);
      }

      return logout;
    }()
  }]);

  return OAuthAuthentication;
}(BaseAuthentication), _temp), (_applyDecoratedDescriptor(_class2.prototype, "login", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "login"), _class2.prototype)), _class2)) || _class);
export { OAuthAuthentication as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRob3JpemF0aW9uL09BdXRoQXV0aGVudGljYXRpb24udHMiXSwibmFtZXMiOlsiZ2V0IiwiVmFsaWRhdGVPQXV0aENsYXNzIiwiVmFsaWRhdGVVc2VyUGFyYW1zIiwiQmFzZUF1dGhlbnRpY2F0aW9uIiwiT0F1dGhBdXRoZW50aWNhdGlvbiIsImNvbmZpZyIsIl9jbGllbnQiLCJkYXRhIiwidG9rZW5UeXBlIiwiYWNjZXNzVG9rZW4iLCJfcmVxdWVzdCIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInBhcmFtcyIsInVybCIsImNsaWVudCIsImdyYW50X3R5cGUiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiX3N0b3JhZ2UiLCJzdG9yZSIsIl9zZXRBdXRob3JpemF0aW9uSGVhZGVyIiwicmV2b2tlIiwiRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsU0FBU0EsR0FBVCxRQUFvQixvQkFBcEIsQyxDQUVBOztBQUNBLE9BQU9DLGtCQUFQLE1BQStCLGtDQUEvQjtBQUNBLE9BQU9DLGtCQUFQLE1BQStCLGtDQUEvQixDLENBRUE7O0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0Isc0JBQS9CO0lBR3FCQyxtQixXQURwQkgsa0JBQWtCLEUsVUF1Q2hCQyxrQkFBa0IsRTs7Ozs7QUFsQ25COzs7QUFHQSwrQkFBWUcsTUFBWixFQUE0QjtBQUFBOztBQUFBOztBQUMxQiw2RkFBTUEsTUFBTjtBQUQwQixVQUxwQkMsT0FLb0I7QUFHMUIsVUFBS0EsT0FBTCxHQUFlTixHQUFHLENBQUNLLE1BQUQsRUFBUyxRQUFULEVBQW1CLEVBQW5CLENBQWxCO0FBSDBCO0FBSTNCO0FBRUQ7Ozs7Ozs7OzRDQUlnQ0UsSSxFQUFvQjtBQUNsRCxVQUFNQyxTQUFTLEdBQUdSLEdBQUcsQ0FBQ08sSUFBRCxFQUFPLFlBQVAsRUFBcUIsUUFBckIsQ0FBckI7QUFDQSxVQUFNRSxXQUFXLEdBQUdULEdBQUcsQ0FBQ08sSUFBRCxFQUFPLGNBQVAsRUFBdUIsSUFBdkIsQ0FBdkI7QUFFQSxXQUFLRyxRQUFMLENBQWNDLFFBQWQsQ0FBdUJDLE9BQXZCLENBQStCQyxNQUEvQixDQUFzQyxlQUF0QyxjQUE0REwsU0FBNUQsY0FBeUVDLFdBQXpFO0FBQ0Q7QUFFRDs7Ozs7OzsrQ0FJbUNGLEksRUFBb0I7QUFDckQsYUFBTyxLQUFLRyxRQUFMLENBQWNDLFFBQWQsQ0FBdUJDLE9BQXZCLENBQStCQyxNQUEvQixDQUFzQyxlQUF0QyxDQUFQO0FBQ0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT21CQyxnQkFBQUEsTSwyREFBaUIsRTtBQUFJQyxnQkFBQUEsRywyREFBYyxjO0FBRTlDQyxnQkFBQUEsTSxHQUFpQjtBQUNyQiwyQkFBU2hCLEdBQUcsQ0FBQyxLQUFLTSxPQUFOLEVBQWUsT0FBZixFQUF3QixFQUF4QixDQURTO0FBRXJCLCtCQUFhTixHQUFHLENBQUMsS0FBS00sT0FBTixFQUFlLElBQWYsRUFBcUIsRUFBckIsQ0FGSztBQUdyQixtQ0FBaUJOLEdBQUcsQ0FBQyxLQUFLTSxPQUFOLEVBQWUsUUFBZixFQUF5QixFQUF6QjtBQUhDLGlCO0FBTWpCQyxnQkFBQUEsSTtBQUFpQlUsa0JBQUFBLFVBQVUsRUFBRTttQkFBZUQsTSxFQUFXRixNO2lEQUV0RCxLQUFLSixRQUFMLENBQWNRLElBQWQsQ0FBbUJILEdBQW5CLEVBQXdCUixJQUF4QixFQUE4QlksSUFBOUIsQ0FBbUMsVUFBQUMsUUFBUSxFQUFJO0FBQ3BELGtCQUFBLE1BQUksQ0FBQ0MsUUFBTCxDQUFjQyxLQUFkLENBQW9CRixRQUFRLENBQUNiLElBQTdCLEVBQW1DWSxJQUFuQyxDQUF3QyxZQUFNO0FBQzVDLG9CQUFBLE1BQUksQ0FBQ0ksdUJBQUwsQ0FBNkJILFFBQVEsQ0FBQ2IsSUFBdEM7QUFDRCxtQkFGRDtBQUdELGlCQUpNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPVDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9JLHFCQUFLYyxRQUFMLENBQWNHLE1BQWQsR0FBdUJMLElBQXZCLENBQTRCLFlBQU07QUFDaEMseUJBQU8sTUFBSSxDQUFDVCxRQUFMLENBQWNDLFFBQWQsQ0FBdUJDLE9BQXZCLENBQStCQyxNQUEvQixDQUFzQyxlQUF0QyxDQUFQO0FBQ0QsaUJBRkQ7Ozs7Ozs7O3NCQUlNLElBQUlZLEtBQUosYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW5FcUN0QixrQjtTQUE1QkMsbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBLZXJuZWxcbmltcG9ydCB7IGdldCB9IGZyb20gJ0BrZXJuZWwtanMvc3VwcG9ydCc7XG5cbi8vIERlY29yYXRvcnNcbmltcG9ydCBWYWxpZGF0ZU9BdXRoQ2xhc3MgZnJvbSAnLi4vZGVjb3JhdG9ycy9WYWxpZGF0ZU9BdXRoQ2xhc3MnO1xuaW1wb3J0IFZhbGlkYXRlVXNlclBhcmFtcyBmcm9tICcuLi9kZWNvcmF0b3JzL1ZhbGlkYXRlVXNlclBhcmFtcyc7XG5cbi8vIENsYXNzZXNcbmltcG9ydCBCYXNlQXV0aGVudGljYXRpb24gZnJvbSAnLi9CYXNlQXV0aGVudGljYXRpb24nO1xuXG5AVmFsaWRhdGVPQXV0aENsYXNzKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9BdXRoQXV0aGVudGljYXRpb24gZXh0ZW5kcyBCYXNlQXV0aGVudGljYXRpb24ge1xuXG4gIHByaXZhdGUgX2NsaWVudDogb2JqZWN0O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IGNvbmZpZ1xuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBvYmplY3QpIHtcbiAgICBzdXBlcihjb25maWcpO1xuXG4gICAgdGhpcy5fY2xpZW50ID0gZ2V0KGNvbmZpZywgJ2NsaWVudCcsIHt9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IGRhdGFcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgcHJpdmF0ZSBfc2V0QXV0aG9yaXphdGlvbkhlYWRlcihkYXRhOiBvYmplY3QpOiB2b2lkIHtcbiAgICBjb25zdCB0b2tlblR5cGUgPSBnZXQoZGF0YSwgJ3Rva2VuX3R5cGUnLCAnQmVhcmVyJyk7XG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBnZXQoZGF0YSwgJ2FjY2Vzc190b2tlbicsIG51bGwpO1xuXG4gICAgdGhpcy5fcmVxdWVzdC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYCR7dG9rZW5UeXBlfSAke2FjY2Vzc1Rva2VufWA7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IGRhdGFcbiAgICogQHJldHVybnMgdm9pZFxuICAgKi9cbiAgcHJpdmF0ZSBfcmV2b2tlQXV0aG9yaXphdGlvbkhlYWRlcihkYXRhOiBvYmplY3QpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fcmVxdWVzdC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdXNlciBhY2Nlc3MgdG9rZW5zLlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHVybFxuICAgKiBAcmV0dXJucyBQcm9taXNlXG4gICAqL1xuICBAVmFsaWRhdGVVc2VyUGFyYW1zKClcbiAgcHVibGljIGFzeW5jIGxvZ2luKHBhcmFtczogb2JqZWN0ID0ge30sIHVybDogc3RyaW5nID0gJy9vYXV0aC90b2tlbicpOiBQcm9taXNlIDwgYW55ID4ge1xuXG4gICAgY29uc3QgY2xpZW50OiBvYmplY3QgPSB7XG4gICAgICAnc2NvcGUnOiBnZXQodGhpcy5fY2xpZW50LCAnc2NvcGUnLCAnJyksXG4gICAgICAnY2xpZW50X2lkJzogZ2V0KHRoaXMuX2NsaWVudCwgJ2lkJywgJycpLFxuICAgICAgJ2NsaWVudF9zZWNyZXQnOiBnZXQodGhpcy5fY2xpZW50LCAnc2VjcmV0JywgJycpXG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGE6IG9iamVjdCA9IHsgZ3JhbnRfdHlwZTogJ3Bhc3N3b3JkJywgLi4uY2xpZW50LCAuLi5wYXJhbXMgfTtcblxuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0LnBvc3QodXJsLCBkYXRhKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuX3N0b3JhZ2Uuc3RvcmUocmVzcG9uc2UuZGF0YSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldEF1dGhvcml6YXRpb25IZWFkZXIocmVzcG9uc2UuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIHVzZXIgZGF0YSBieSBsb2dnaW5nIG91dC5cbiAgICogQHJldHVybnMgUHJvbWlzZVxuICAgKi9cbiAgcHVibGljIGFzeW5jIGxvZ291dCgpOiBQcm9taXNlIDwgYW55ID4ge1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX3N0b3JhZ2UucmV2b2tlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9yZXF1ZXN0LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ107XG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICB9XG4gIH1cbn0iXX0=