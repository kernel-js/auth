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
                    _this2._request.defaults.headers.common = _objectSpread({}, _this2.authorizationHeaders);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRob3JpemF0aW9uL09BdXRoQXV0aGVudGljYXRpb24udHMiXSwibmFtZXMiOlsiZ2V0IiwiVmFsaWRhdGVPQXV0aENsYXNzIiwiVmFsaWRhdGVVc2VyUGFyYW1zIiwiQmFzZUF1dGhlbnRpY2F0aW9uIiwiT0F1dGhBdXRoZW50aWNhdGlvbiIsImNvbmZpZyIsIl9jbGllbnQiLCJzZXNzaW9uIiwiX3N0b3JhZ2UiLCJ0b2tlblR5cGUiLCJhY2Nlc3NUb2tlbiIsIkF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJ1cmwiLCJjbGllbnQiLCJkYXRhIiwiZ3JhbnRfdHlwZSIsIl9yZXF1ZXN0IiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsInN0b3JlIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiY29tbW9uIiwiYXV0aG9yaXphdGlvbkhlYWRlcnMiLCJyZXZva2UiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxTQUFTQSxHQUFULFFBQW9CLG9CQUFwQixDLENBRUE7O0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0Isa0NBQS9CO0FBQ0EsT0FBT0Msa0JBQVAsTUFBK0Isa0NBQS9CLEMsQ0FFQTs7QUFDQSxPQUFPQyxrQkFBUCxNQUErQixzQkFBL0I7SUFHcUJDLG1CLFdBRHBCSCxrQkFBa0IsRSxVQW1DaEJDLGtCQUFrQixFOzs7OztBQTlCbkI7OztBQUdBLCtCQUFZRyxNQUFaLEVBQTRCO0FBQUE7O0FBQUE7O0FBQzFCLDZGQUFNQSxNQUFOO0FBRDBCLFVBTHBCQyxPQUtvQjtBQUcxQixVQUFLQSxPQUFMLEdBQWVOLEdBQUcsQ0FBQ0ssTUFBRCxFQUFTLFFBQVQsRUFBbUIsRUFBbkIsQ0FBbEI7QUFIMEI7QUFJM0I7QUFFRDs7Ozs7Ozs7MkNBSXNDO0FBRXBDLFVBQU1FLE9BQU8sR0FBRSxLQUFLQyxRQUFMLENBQWNSLEdBQWQsRUFBZjs7QUFDQSxVQUFNUyxTQUFTLEdBQUdULEdBQUcsQ0FBQ08sT0FBRCxFQUFVLFlBQVYsRUFBd0IsUUFBeEIsQ0FBckI7QUFDQSxVQUFNRyxXQUFXLEdBQUdWLEdBQUcsQ0FBQ08sT0FBRCxFQUFVLGNBQVYsRUFBMEIsSUFBMUIsQ0FBdkI7QUFFQSxhQUFPO0FBQ0xJLFFBQUFBLGFBQWEsWUFBS0YsU0FBTCxjQUFrQkMsV0FBbEI7QUFEUixPQUFQO0FBR0Q7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT21CRSxnQkFBQUEsTSwyREFBaUIsRTtBQUFJQyxnQkFBQUEsRywyREFBYyxjO0FBRTlDQyxnQkFBQUEsTSxHQUFpQjtBQUNyQiwyQkFBU2QsR0FBRyxDQUFDLEtBQUtNLE9BQU4sRUFBZSxPQUFmLEVBQXdCLEVBQXhCLENBRFM7QUFFckIsK0JBQWFOLEdBQUcsQ0FBQyxLQUFLTSxPQUFOLEVBQWUsSUFBZixFQUFxQixFQUFyQixDQUZLO0FBR3JCLG1DQUFpQk4sR0FBRyxDQUFDLEtBQUtNLE9BQU4sRUFBZSxRQUFmLEVBQXlCLEVBQXpCO0FBSEMsaUI7QUFNakJTLGdCQUFBQSxJO0FBQWlCQyxrQkFBQUEsVUFBVSxFQUFFO21CQUFlRixNLEVBQVdGLE07aURBRXRELEtBQUtLLFFBQUwsQ0FBY0MsSUFBZCxDQUFtQkwsR0FBbkIsRUFBd0JFLElBQXhCLEVBQThCSSxJQUE5QixDQUFtQyxVQUFBQyxRQUFRLEVBQUk7QUFDcEQsa0JBQUEsTUFBSSxDQUFDWixRQUFMLENBQWNhLEtBQWQsQ0FBb0JELFFBQVEsQ0FBQ0wsSUFBN0IsRUFBbUNJLElBQW5DLENBQXdDLFlBQU07QUFFNUMsb0JBQUEsTUFBSSxDQUFDRixRQUFMLENBQWNLLFFBQWQsQ0FBdUJDLE9BQXZCLENBQStCQyxNQUEvQixxQkFBNkMsTUFBSSxDQUFDQyxvQkFBbEQ7QUFDRCxtQkFIRDtBQUlELGlCQUxNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRVDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9JLHFCQUFLakIsUUFBTCxDQUFja0IsTUFBZCxHQUF1QlAsSUFBdkIsQ0FBNEIsWUFBTTtBQUVoQyx5QkFBTyxNQUFJLENBQUNGLFFBQUwsQ0FBY0ssUUFBZCxDQUF1QkMsT0FBdkIsQ0FBK0JDLE1BQS9CLENBQXNDLGVBQXRDLENBQVA7QUFDRCxpQkFIRDs7Ozs7Ozs7c0JBS00sSUFBSUcsS0FBSixjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakVxQ3hCLGtCO1NBQTVCQyxtQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEtlcm5lbFxuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnQGtlcm5lbC1qcy9zdXBwb3J0JztcblxuLy8gRGVjb3JhdG9yc1xuaW1wb3J0IFZhbGlkYXRlT0F1dGhDbGFzcyBmcm9tICcuLi9kZWNvcmF0b3JzL1ZhbGlkYXRlT0F1dGhDbGFzcyc7XG5pbXBvcnQgVmFsaWRhdGVVc2VyUGFyYW1zIGZyb20gJy4uL2RlY29yYXRvcnMvVmFsaWRhdGVVc2VyUGFyYW1zJztcblxuLy8gQ2xhc3Nlc1xuaW1wb3J0IEJhc2VBdXRoZW50aWNhdGlvbiBmcm9tICcuL0Jhc2VBdXRoZW50aWNhdGlvbic7XG5cbkBWYWxpZGF0ZU9BdXRoQ2xhc3MoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT0F1dGhBdXRoZW50aWNhdGlvbiBleHRlbmRzIEJhc2VBdXRoZW50aWNhdGlvbiB7XG5cbiAgcHJpdmF0ZSBfY2xpZW50OiBvYmplY3Q7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IG9iamVjdCkge1xuICAgIHN1cGVyKGNvbmZpZyk7XG5cbiAgICB0aGlzLl9jbGllbnQgPSBnZXQoY29uZmlnLCAnY2xpZW50Jywge30pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge29iamVjdH0gZGF0YVxuICAgKiBAcmV0dXJucyB2b2lkXG4gICAqL1xuICBwdWJsaWMgYXV0aG9yaXphdGlvbkhlYWRlcnMoKTogb2JqZWN0IHtcbiAgICBcbiAgICBjb25zdCBzZXNzaW9uID10aGlzLl9zdG9yYWdlLmdldCgpO1xuICAgIGNvbnN0IHRva2VuVHlwZSA9IGdldChzZXNzaW9uLCAndG9rZW5fdHlwZScsICdCZWFyZXInKTtcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGdldChzZXNzaW9uLCAnYWNjZXNzX3Rva2VuJywgbnVsbCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgQXV0aG9yaXphdGlvbjogYCR7dG9rZW5UeXBlfSAke2FjY2Vzc1Rva2VufWAsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHVzZXIgYWNjZXNzIHRva2Vucy5cbiAgICogQHBhcmFtICB7b2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtICB7c3RyaW5nfSB1cmxcbiAgICogQHJldHVybnMgUHJvbWlzZVxuICAgKi9cbiAgQFZhbGlkYXRlVXNlclBhcmFtcygpXG4gIHB1YmxpYyBhc3luYyBsb2dpbihwYXJhbXM6IG9iamVjdCA9IHt9LCB1cmw6IHN0cmluZyA9ICcvb2F1dGgvdG9rZW4nKTogUHJvbWlzZSA8IGFueSA+IHtcblxuICAgIGNvbnN0IGNsaWVudDogb2JqZWN0ID0ge1xuICAgICAgJ3Njb3BlJzogZ2V0KHRoaXMuX2NsaWVudCwgJ3Njb3BlJywgJycpLFxuICAgICAgJ2NsaWVudF9pZCc6IGdldCh0aGlzLl9jbGllbnQsICdpZCcsICcnKSxcbiAgICAgICdjbGllbnRfc2VjcmV0JzogZ2V0KHRoaXMuX2NsaWVudCwgJ3NlY3JldCcsICcnKVxuICAgIH07XG5cbiAgICBjb25zdCBkYXRhOiBvYmplY3QgPSB7IGdyYW50X3R5cGU6ICdwYXNzd29yZCcsIC4uLmNsaWVudCwgLi4ucGFyYW1zIH07XG5cbiAgICByZXR1cm4gdGhpcy5fcmVxdWVzdC5wb3N0KHVybCwgZGF0YSkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0aGlzLl9zdG9yYWdlLnN0b3JlKHJlc3BvbnNlLmRhdGEpLnRoZW4oKCkgPT4ge1xuXG4gICAgICAgIHRoaXMuX3JlcXVlc3QuZGVmYXVsdHMuaGVhZGVycy5jb21tb24gPSB7IC4uLnRoaXMuYXV0aG9yaXphdGlvbkhlYWRlcnMgfTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgdXNlciBkYXRhIGJ5IGxvZ2dpbmcgb3V0LlxuICAgKiBAcmV0dXJucyBQcm9taXNlXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgbG9nb3V0KCk6IFByb21pc2UgPCBhbnkgPiB7XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5fc3RvcmFnZS5yZXZva2UoKS50aGVuKCgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGRlbGV0ZSB0aGlzLl9yZXF1ZXN0LmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uWydBdXRob3JpemF0aW9uJ107XG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlKTtcbiAgICB9XG4gIH1cbn0iXX0=