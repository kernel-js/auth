function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { get, isEmpty } from '@kernel-js/support';
import { ArgumentNullError } from '@kernel-js/exceptions';
import BaseStorage from '../storage/BaseStorage';

var OAuthAuthentication =
/*#__PURE__*/
function () {
  function OAuthAuthentication(params, request, storageMethod, cryptPassword) {
    _classCallCheck(this, OAuthAuthentication);

    this.storageMethod = storageMethod;
    this.cryptPassword = cryptPassword;

    _defineProperty(this, "_params", void 0);

    _defineProperty(this, "_request", void 0);

    _defineProperty(this, "_storage", void 0);

    this._params = params;
    this._request = request;
    this._storage = new BaseStorage(storageMethod, cryptPassword);
  }
  /**
   * 
   * @param data 
   */


  _createClass(OAuthAuthentication, [{
    key: "_authorizationHeader",
    value: function _authorizationHeader() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var tokenType = get(data, 'token_type', 'Bearer');
      var accessToken = get(data, 'access_token', null);
      return "".concat(tokenType, " ").concat(accessToken);
    }
    /**
     * 
     */

  }, {
    key: "isGuest",
    value: function isGuest() {
      return isEmpty(get(this._storage.getSession(), 'access_token', null));
    }
    /**
     * 
     */

  }, {
    key: "isAuthenticated",
    value: function isAuthenticated() {
      return !this.isGuest();
    }
    /**
     * 
     * @param params 
     * @param url 
     */

  }, {
    key: "login",
    value: function login() {
      var _this = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/oauth/token';
      var data = {
        'grant_type': 'password'
      };

      if (isEmpty(get(params, 'username', null))) {
        throw new ArgumentNullError('Username');
      }

      if (isEmpty(get(params, 'password', null))) {
        throw new ArgumentNullError('Password');
      }

      Object.assign(data, this._params);
      Object.assign(data, params);
      return new Promise(function (resolve, reject) {
        _this._request.post(url, data).then(function (response) {
          _this._storage.storeSession(response.data);

          _this._request.defaults.headers.common['Authorization'] = _this._authorizationHeader(response.data);
          resolve(response);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
    /**
     * 
     */

  }, {
    key: "logout",
    value: function logout() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        try {
          _this2._storage.revokeSession();

          delete _this2._request.defaults.headers.common['Authorization'];
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }
  }]);

  return OAuthAuthentication;
}();

export { OAuthAuthentication as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hdXRob3JpemF0aW9uL09BdXRoQXV0aGVudGljYXRpb24udHMiXSwibmFtZXMiOlsiZ2V0IiwiaXNFbXB0eSIsIkFyZ3VtZW50TnVsbEVycm9yIiwiQmFzZVN0b3JhZ2UiLCJPQXV0aEF1dGhlbnRpY2F0aW9uIiwicGFyYW1zIiwicmVxdWVzdCIsInN0b3JhZ2VNZXRob2QiLCJjcnlwdFBhc3N3b3JkIiwiX3BhcmFtcyIsIl9yZXF1ZXN0IiwiX3N0b3JhZ2UiLCJkYXRhIiwidG9rZW5UeXBlIiwiYWNjZXNzVG9rZW4iLCJnZXRTZXNzaW9uIiwiaXNHdWVzdCIsInVybCIsIk9iamVjdCIsImFzc2lnbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicG9zdCIsInRoZW4iLCJyZXNwb25zZSIsInN0b3JlU2Vzc2lvbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsIl9hdXRob3JpemF0aW9uSGVhZGVyIiwiY2F0Y2giLCJlcnJvciIsInJldm9rZVNlc3Npb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsU0FDRUEsR0FERixFQUVFQyxPQUZGLFFBR08sb0JBSFA7QUFLQSxTQUNFQyxpQkFERixRQUVPLHVCQUZQO0FBSUEsT0FBT0MsV0FBUCxNQUF3Qix3QkFBeEI7O0lBR3FCQyxtQjs7O0FBTW5CLCtCQUFZQyxNQUFaLEVBQTRCQyxPQUE1QixFQUFrREMsYUFBbEQsRUFBeUZDLGFBQXpGLEVBQWdIO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDOUcsU0FBS0MsT0FBTCxHQUFlSixNQUFmO0FBQ0EsU0FBS0ssUUFBTCxHQUFnQkosT0FBaEI7QUFDQSxTQUFLSyxRQUFMLEdBQWdCLElBQUlSLFdBQUosQ0FBZ0JJLGFBQWhCLEVBQStCQyxhQUEvQixDQUFoQjtBQUNEO0FBRUQ7Ozs7Ozs7OzJDQUl3RDtBQUFBLFVBQTNCSSxJQUEyQix1RUFBWixFQUFZO0FBRXRELFVBQU1DLFNBQVMsR0FBR2IsR0FBRyxDQUFDWSxJQUFELEVBQU8sWUFBUCxFQUFxQixRQUFyQixDQUFyQjtBQUNBLFVBQU1FLFdBQVcsR0FBR2QsR0FBRyxDQUFDWSxJQUFELEVBQU8sY0FBUCxFQUF1QixJQUF2QixDQUF2QjtBQUVBLHVCQUFVQyxTQUFWLGNBQXVCQyxXQUF2QjtBQUNEO0FBRUQ7Ozs7Ozs4QkFHMEI7QUFFeEIsYUFBT2IsT0FBTyxDQUNaRCxHQUFHLENBQUMsS0FBS1csUUFBTCxDQUFjSSxVQUFkLEVBQUQsRUFBNkIsY0FBN0IsRUFBNkMsSUFBN0MsQ0FEUyxDQUFkO0FBR0Q7QUFFRDs7Ozs7O3NDQUdrQztBQUVoQyxhQUFPLENBQUMsS0FBS0MsT0FBTCxFQUFSO0FBQ0Q7QUFFRDs7Ozs7Ozs7NEJBS29GO0FBQUE7O0FBQUEsVUFBdkVYLE1BQXVFLHVFQUF0RCxFQUFzRDtBQUFBLFVBQWxEWSxHQUFrRCx1RUFBcEMsY0FBb0M7QUFFbEYsVUFBSUwsSUFBWSxHQUFHO0FBQ2pCLHNCQUFjO0FBREcsT0FBbkI7O0FBSUEsVUFBSVgsT0FBTyxDQUFDRCxHQUFHLENBQUNLLE1BQUQsRUFBUyxVQUFULEVBQXFCLElBQXJCLENBQUosQ0FBWCxFQUE0QztBQUMxQyxjQUFNLElBQUlILGlCQUFKLENBQXNCLFVBQXRCLENBQU47QUFDRDs7QUFFRCxVQUFJRCxPQUFPLENBQUNELEdBQUcsQ0FBQ0ssTUFBRCxFQUFTLFVBQVQsRUFBcUIsSUFBckIsQ0FBSixDQUFYLEVBQTRDO0FBQzFDLGNBQU0sSUFBSUgsaUJBQUosQ0FBc0IsVUFBdEIsQ0FBTjtBQUNEOztBQUVEZ0IsTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNQLElBQWQsRUFBb0IsS0FBS0gsT0FBekI7QUFDQVMsTUFBQUEsTUFBTSxDQUFDQyxNQUFQLENBQWNQLElBQWQsRUFBb0JQLE1BQXBCO0FBRUEsYUFBTyxJQUFJZSxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBRXRDLFFBQUEsS0FBSSxDQUFDWixRQUFMLENBQWNhLElBQWQsQ0FBbUJOLEdBQW5CLEVBQXdCTCxJQUF4QixFQUNHWSxJQURILENBQ1EsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCLFVBQUEsS0FBSSxDQUFDZCxRQUFMLENBQWNlLFlBQWQsQ0FBMkJELFFBQVEsQ0FBQ2IsSUFBcEM7O0FBQ0EsVUFBQSxLQUFJLENBQUNGLFFBQUwsQ0FBY2lCLFFBQWQsQ0FBdUJDLE9BQXZCLENBQStCQyxNQUEvQixDQUFzQyxlQUF0QyxJQUF5RCxLQUFJLENBQUNDLG9CQUFMLENBQTBCTCxRQUFRLENBQUNiLElBQW5DLENBQXpEO0FBRUFTLFVBQUFBLE9BQU8sQ0FBQ0ksUUFBRCxDQUFQO0FBQ0QsU0FOSCxFQU9HTSxLQVBILENBT1MsVUFBQUMsS0FBSyxFQUFJO0FBRWRWLFVBQUFBLE1BQU0sQ0FBQ1UsS0FBRCxDQUFOO0FBQ0QsU0FWSDtBQVdELE9BYk0sQ0FBUDtBQWVEO0FBRUQ7Ozs7Ozs2QkFHb0M7QUFBQTs7QUFFbEMsYUFBTyxJQUFJWixPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBRXRDLFlBQUk7QUFDRixVQUFBLE1BQUksQ0FBQ1gsUUFBTCxDQUFjc0IsYUFBZDs7QUFDQSxpQkFBTyxNQUFJLENBQUN2QixRQUFMLENBQWNpQixRQUFkLENBQXVCQyxPQUF2QixDQUErQkMsTUFBL0IsQ0FBc0MsZUFBdEMsQ0FBUDtBQUVBUixVQUFBQSxPQUFPO0FBQ1IsU0FMRCxDQUtFLE9BQU9XLEtBQVAsRUFBYztBQUVkVixVQUFBQSxNQUFNLENBQUNVLEtBQUQsQ0FBTjtBQUNEO0FBRUYsT0FaTSxDQUFQO0FBYUQ7Ozs7OztTQW5Ha0I1QixtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFN0b3JhZ2VNZXRob2RzXG59IGZyb20gJy4uL3N0b3JhZ2UvZW51bXMvU3RvcmFnZU1ldGhvZHMnO1xuXG5pbXBvcnQge1xuICBnZXQsXG4gIGlzRW1wdHlcbn0gZnJvbSAnQGtlcm5lbC1qcy9zdXBwb3J0JztcblxuaW1wb3J0IHtcbiAgQXJndW1lbnROdWxsRXJyb3Jcbn0gZnJvbSAnQGtlcm5lbC1qcy9leGNlcHRpb25zJztcblxuaW1wb3J0IEJhc2VTdG9yYWdlIGZyb20gJy4uL3N0b3JhZ2UvQmFzZVN0b3JhZ2UnO1xuaW1wb3J0IEF1dGhlbnRpY2F0aW9uSW50ZXJmYWNlIGZyb20gJy4vaW50ZXJmYWNlcy9BdXRoZW50aWNhdGlvbkludGVyZmFjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9BdXRoQXV0aGVudGljYXRpb24gaW1wbGVtZW50cyBBdXRoZW50aWNhdGlvbkludGVyZmFjZSB7XG5cbiAgcHJpdmF0ZSBfcGFyYW1zOiBvYmplY3Q7XG4gIHByaXZhdGUgX3JlcXVlc3Q6IGFueTtcbiAgcHJpdmF0ZSBfc3RvcmFnZTogQmFzZVN0b3JhZ2U7XG5cbiAgY29uc3RydWN0b3IocGFyYW1zOiBvYmplY3QsIHJlcXVlc3Q6IGFueSwgcHJpdmF0ZSBzdG9yYWdlTWV0aG9kOiBTdG9yYWdlTWV0aG9kcywgcHJpdmF0ZSBjcnlwdFBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9wYXJhbXMgPSBwYXJhbXM7XG4gICAgdGhpcy5fcmVxdWVzdCA9IHJlcXVlc3Q7XG4gICAgdGhpcy5fc3RvcmFnZSA9IG5ldyBCYXNlU3RvcmFnZShzdG9yYWdlTWV0aG9kLCBjcnlwdFBhc3N3b3JkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGRhdGEgXG4gICAqL1xuICBwcml2YXRlIF9hdXRob3JpemF0aW9uSGVhZGVyKGRhdGE6IG9iamVjdCA9IHt9KTogc3RyaW5nIHtcblxuICAgIGNvbnN0IHRva2VuVHlwZSA9IGdldChkYXRhLCAndG9rZW5fdHlwZScsICdCZWFyZXInKTtcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGdldChkYXRhLCAnYWNjZXNzX3Rva2VuJywgbnVsbCk7XG5cbiAgICByZXR1cm4gYCR7dG9rZW5UeXBlfSAke2FjY2Vzc1Rva2VufWA7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqL1xuICBwdWJsaWMgaXNHdWVzdCgpOiBib29sZWFuIHtcblxuICAgIHJldHVybiBpc0VtcHR5KFxuICAgICAgZ2V0KHRoaXMuX3N0b3JhZ2UuZ2V0U2Vzc2lvbigpLCAnYWNjZXNzX3Rva2VuJywgbnVsbClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcHVibGljIGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcblxuICAgIHJldHVybiAhdGhpcy5pc0d1ZXN0KCk7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBwYXJhbXMgXG4gICAqIEBwYXJhbSB1cmwgXG4gICAqL1xuICBwdWJsaWMgbG9naW4ocGFyYW1zOiBvYmplY3QgPSB7fSwgdXJsOiBzdHJpbmcgPSAnL29hdXRoL3Rva2VuJyk6IFByb21pc2UgPCBPYmplY3QgPiB7XG5cbiAgICBsZXQgZGF0YTogb2JqZWN0ID0ge1xuICAgICAgJ2dyYW50X3R5cGUnOiAncGFzc3dvcmQnXG4gICAgfTtcblxuICAgIGlmIChpc0VtcHR5KGdldChwYXJhbXMsICd1c2VybmFtZScsIG51bGwpKSkge1xuICAgICAgdGhyb3cgbmV3IEFyZ3VtZW50TnVsbEVycm9yKCdVc2VybmFtZScpO1xuICAgIH1cblxuICAgIGlmIChpc0VtcHR5KGdldChwYXJhbXMsICdwYXNzd29yZCcsIG51bGwpKSkge1xuICAgICAgdGhyb3cgbmV3IEFyZ3VtZW50TnVsbEVycm9yKCdQYXNzd29yZCcpO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oZGF0YSwgdGhpcy5fcGFyYW1zKTtcbiAgICBPYmplY3QuYXNzaWduKGRhdGEsIHBhcmFtcyk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICB0aGlzLl9yZXF1ZXN0LnBvc3QodXJsLCBkYXRhKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5fc3RvcmFnZS5zdG9yZVNlc3Npb24ocmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgdGhpcy5fcmVxdWVzdC5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gdGhpcy5fYXV0aG9yaXphdGlvbkhlYWRlcihyZXNwb25zZS5kYXRhKTtcblxuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuXG4gICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfSlcbiAgICB9KVxuXG4gIH1cblxuICAvKipcbiAgICogXG4gICAqL1xuICBwdWJsaWMgbG9nb3V0KCk6IFByb21pc2UgPCBPYmplY3QgPiB7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLl9zdG9yYWdlLnJldm9rZVNlc3Npb24oKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3JlcXVlc3QuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ0F1dGhvcml6YXRpb24nXTtcblxuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuXG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxufSJdfQ==