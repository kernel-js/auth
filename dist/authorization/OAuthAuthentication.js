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
    key: "authorizationHeaders",
    value: function authorizationHeaders() {
      var session = this._storage.get();

      var tokenType = get(session, 'token_type', 'Bearer');
      var accessToken = get(session, 'access_token', null);
      return {
        Authorization: "".concat(tokenType, " ").concat(accessToken)
      };
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
                    _this2._request.defaults.headers.common = _objectSpread({}, _this2.authorizationHeaders());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRob3JpemF0aW9uL09BdXRoQXV0aGVudGljYXRpb24udHMiXSwibmFtZXMiOlsiZ2V0IiwiVmFsaWRhdGVPQXV0aENsYXNzIiwiVmFsaWRhdGVVc2VyUGFyYW1zIiwiQmFzZUF1dGhlbnRpY2F0aW9uIiwiT0F1dGhBdXRoZW50aWNhdGlvbiIsImNvbmZpZyIsIl9jbGllbnQiLCJzZXNzaW9uIiwiX3N0b3JhZ2UiLCJ0b2tlblR5cGUiLCJhY2Nlc3NUb2tlbiIsIkF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJ1cmwiLCJjbGllbnQiLCJkYXRhIiwiZ3JhbnRfdHlwZSIsIl9yZXF1ZXN0IiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsInN0b3JlIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiYXV0aG9yaXphdGlvbkhlYWRlcnMiLCJyZXZva2UiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxTQUFTQSxHQUFULFFBQW9CLG9CQUFwQixDLENBRUE7O0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0Isa0NBQS9CO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0Isa0NBQS9CLEMsQ0FFQTs7QUFDQSxPQUFPQyxrQkFBUCxNQUErQixzQkFBL0I7SUFHcUJDLG1CLFdBRHBCSCxrQkFBa0IsRSxVQW1DaEJDLGtCQUFrQixFOzs7OztBQTlCbkI7OztBQUdBLCtCQUFZRyxNQUFaLEVBQTRCO0FBQUE7O0FBQUE7O0FBQzFCLDZGQUFNQSxNQUFOO0FBRDBCLFVBTHBCQyxPQUtvQjtBQUcxQixVQUFLQSxPQUFMLEdBQWVOLEdBQUcsQ0FBQ0ssTUFBRCxFQUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBbEI7QUFIMEI7QUFJM0I7QUFFRDs7Ozs7Ozs7MkNBSXNDO0FBRXBDLFVBQU1FLE9BQU8sR0FBRSxLQUFLQyxRQUFMLENBQWNSLEdBQWQsRUFBZjs7QUFDQSxVQUFNUyxTQUFTLEdBQUdULEdBQUcsQ0FBQ08sT0FBRCxFQUFVLFlBQVYsRUFBd0IsUUFBeEIsQ0FBckI7QUFDQSxVQUFNRyxXQUFXLEdBQUdWLEdBQUcsQ0FBQ08sT0FBRCxFQUFVLGNBQVYsRUFBMEIsSUFBMUIsQ0FBdkI7QUFFQSxhQUFPO0FBQ0xJLFFBQUFBLGFBQWEsWUFBS0YsU0FBTCxjQUFrQkMsV0FBbEI7QUFEUixPQUFQO0FBR0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT21CRSxnQkFBQUEsTSwyREFBaUIsRTtBQUFJQyxnQkFBQUEsRywyREFBYyxjO0FBRTlDQyxnQkFBQUEsTSxHQUFpQjtBQUNyQiwyQkFBU2QsR0FBRyxDQUFDLEtBQUtNLE9BQU4sRUFBZSxPQUFmLEVBQXdCLEVBQXhCLENBRFM7QUFFckIsK0JBQWFOLEdBQUcsQ0FBQyxLQUFLTSxPQUFOLEVBQWUsSUFBZixFQUFxQixFQUFyQixDQUZLO0FBR3JCLG1DQUFpQk4sR0FBRyxDQUFDLEtBQUtNLE9BQU4sRUFBZSxRQUFmLEVBQXlCLEVBQXpCO0FBSEMsaUI7QUFNakJTLGdCQUFBQSxJO0FBQWlCQyxrQkFBQUEsVUFBVSxFQUFFO21CQUFlRixNLEVBQVdGLE07aURBRXRELEtBQUtLLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQkwsR0FBbkIsRUFBd0JFLElBQXhCLEVBQThCSSxJQUE5QixDQUFtQyxVQUFBQyxRQUFRLEVBQUk7QUFDcEQsa0JBQUEsTUFBSSxDQUFDWixRQUFMLENBQWNhLEtBQWQsQ0FBb0JELFFBQVEsQ0FBQ0wsSUFBN0IsRUFBbUNJLElBQW5DLENBQXdDLFlBQU07QUFFNUMsb0JBQUEsTUFBSSxDQUFDRixRQUFMLENBQWNLLFFBQWQsQ0FBdUJDLE9BQXZCLENBQStCQyxNQUEvQixxQkFBNkMsTUFBSSxDQUFDQyxvQkFBTCxFQUE3QztBQUNELG1CQUhEO0FBSUQsaUJBTE0sQzs7Ozs7Ozs7Ozs7Ozs7OztBQVFUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT0kscUJBQUtqQixRQUFMLENBQWNrQixNQUFkLEdBQXVCUCxJQUF2QixDQUE0QixZQUFNO0FBRWhDLHlCQUFPLE1BQUksQ0FBQ0YsUUFBTCxDQUFjSyxRQUFkLENBQXVCQyxPQUF2QixDQUErQkMsTUFBL0IsQ0FBc0MsZUFBdEMsQ0FBUDtBQUNELGlCQUhEOzs7Ozs7OztzQkFLTSxJQUFJRyxLQUFKLGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqRXFDeEIsa0I7U0FBNUJDLG1CIiwic291cmNlc0NvbnRlbnQiOlsiLy8gS2VybmVsXG5pbXBvcnQgeyBnZXQgfSBmcm9tICdAa2VybmVsLWpzL3N1cHBvcnQnO1xuXG4vLyBEZWNvcmF0b3JzXG5pbXBvcnQgVmFsaWRhdGVPQXV0aENsYXNzIGZyb20gJy4uL2RlY29yYXRvcnMvVmFsaWRhdGVPQXV0aENsYXNzJztcbmltcG9ydCBWYWxpZGF0ZVVzZXJQYXJhbXMgZnJvbSAnLi4vZGVjb3JhdG9ycy9WYWxpZGF0ZVVzZXJQYXJhbXMnO1xuXG4vLyBDbGFzc2VzXG5pbXBvcnQgQmFzZUF1dGhlbnRpY2F0aW9uIGZyb20gJy4vQmFzZUF1dGhlbnRpY2F0aW9uJztcblxuQFZhbGlkYXRlT0F1dGhDbGFzcygpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPQXV0aEF1dGhlbnRpY2F0aW9uIGV4dGVuZHMgQmFzZUF1dGhlbnRpY2F0aW9uIHtcblxuICBwcml2YXRlIF9jbGllbnQ6IG9iamVjdDtcblxuICAvKipcbiAgICogQHBhcmFtICB7b2JqZWN0fSBjb25maWdcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogb2JqZWN0KSB7XG4gICAgc3VwZXIoY29uZmlnKTtcblxuICAgIHRoaXMuX2NsaWVudCA9IGdldChjb25maWcsICdjbGllbnQnLCB7fSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7b2JqZWN0fSBkYXRhXG4gICAqIEByZXR1cm5zIHZvaWRcbiAgICovXG4gIHB1YmxpYyBhdXRob3JpemF0aW9uSGVhZGVycygpOiBvYmplY3Qge1xuICAgIFxuICAgIGNvbnN0IHNlc3Npb24gPXRoaXMuX3N0b3JhZ2UuZ2V0KCk7XG4gICAgY29uc3QgdG9rZW5UeXBlID0gZ2V0KHNlc3Npb24sICd0b2tlbl90eXBlJywgJ0JlYXJlcicpO1xuICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gZ2V0KHNlc3Npb24sICdhY2Nlc3NfdG9rZW4nLCBudWxsKTtcblxuICAgIHJldHVybiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgJHt0b2tlblR5cGV9ICR7YWNjZXNzVG9rZW59YCxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdXNlciBhY2Nlc3MgdG9rZW5zLlxuICAgKiBAcGFyYW0gIHtvYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHVybFxuICAgKiBAcmV0dXJucyBQcm9taXNlXG4gICAqL1xuICBAVmFsaWRhdGVVc2VyUGFyYW1zKClcbiAgcHVibGljIGFzeW5jIGxvZ2luKHBhcmFtczogb2JqZWN0ID0ge30sIHVybDogc3RyaW5nID0gJy9vYXV0aC90b2tlbicpOiBQcm9taXNlIDwgYW55ID4ge1xuXG4gICAgY29uc3QgY2xpZW50OiBvYmplY3QgPSB7XG4gICAgICAnc2NvcGUnOiBnZXQodGhpcy5fY2xpZW50LCAnc2NvcGUnLCAnJyksXG4gICAgICAnY2xpZW50X2lkJzogZ2V0KHRoaXMuX2NsaWVudCwgJ2lkJywgJycpLFxuICAgICAgJ2NsaWVudF9zZWNyZXQnOiBnZXQodGhpcy5fY2xpZW50LCAnc2VjcmV0JywgJycpXG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGE6IG9iamVjdCA9IHsgZ3JhbnRfdHlwZTogJ3Bhc3N3b3JkJywgLi4uY2xpZW50LCAuLi5wYXJhbXMgfTtcblxuICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0LnBvc3QodXJsLCBkYXRhKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRoaXMuX3N0b3JhZ2Uuc3RvcmUocmVzcG9uc2UuZGF0YSkudGhlbigoKSA9PiB7XG5cbiAgICAgICAgdGhpcy5fcmVxdWVzdC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbiA9IHsgLi4udGhpcy5hdXRob3JpemF0aW9uSGVhZGVycygpIH07XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgYWxsIHVzZXIgZGF0YSBieSBsb2dnaW5nIG91dC5cbiAgICogQHJldHVybnMgUHJvbWlzZVxuICAgKi9cbiAgcHVibGljIGFzeW5jIGxvZ291dCgpOiBQcm9taXNlIDwgYW55ID4ge1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX3N0b3JhZ2UucmV2b2tlKCkudGhlbigoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBkZWxldGUgdGhpcy5fcmVxdWVzdC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddO1xuICAgICAgfSk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gICAgfVxuICB9XG59Il19