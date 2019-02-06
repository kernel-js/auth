function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import { isEmpty } from '@kernel-js/support';
import { encrypt as _encrypt, decrypt as _decrypt } from '@kernel-js/crypt';
import { ArgumentNullError } from '@kernel-js/exceptions';

var Crypt =
/*#__PURE__*/
function () {
  function Crypt(password) {
    _classCallCheck(this, Crypt);

    this.password = password;
    this.password = password;
  }
  /**
   * 
   * @param {*} data 
   */


  _createClass(Crypt, [{
    key: "encrypt",
    value: function encrypt(data) {
      if (isEmpty(data)) {
        throw new ArgumentNullError('Data to encrypt');
      }

      return _encrypt(JSON.stringify(data), this.password);
    }
    /**
     * 
     * @param {*} data 
     */

  }, {
    key: "decrypt",
    value: function decrypt(data) {
      if (isEmpty(data)) {
        throw new ArgumentNullError('Data to decrypt');
      }

      return JSON.parse(_decrypt(data, this.password));
    }
  }]);

  return Crypt;
}();

export { Crypt as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcnlwdC9DcnlwdC50cyJdLCJuYW1lcyI6WyJpc0VtcHR5IiwiZW5jcnlwdCIsImRlY3J5cHQiLCJBcmd1bWVudE51bGxFcnJvciIsIkNyeXB0IiwicGFzc3dvcmQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUNFQSxPQURGLFFBRU8sb0JBRlA7QUFJQSxTQUNFQyxPQUFPLElBQVBBLFFBREYsRUFFRUMsT0FBTyxJQUFQQSxRQUZGLFFBR08sa0JBSFA7QUFLQSxTQUFTQyxpQkFBVCxRQUFrQyx1QkFBbEM7O0lBRXFCQyxLOzs7QUFFbkIsaUJBQW9CQyxRQUFwQixFQUFzQztBQUFBOztBQUFBO0FBQ3BDLFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7QUFFRDs7Ozs7Ozs7NEJBSWVDLEksRUFBc0I7QUFFbkMsVUFBSU4sT0FBTyxDQUFDTSxJQUFELENBQVgsRUFBbUI7QUFDakIsY0FBTSxJQUFJSCxpQkFBSixDQUFzQixpQkFBdEIsQ0FBTjtBQUNEOztBQUVELGFBQU9GLFFBQU8sQ0FBQ00sSUFBSSxDQUFDQyxTQUFMLENBQWVGLElBQWYsQ0FBRCxFQUF1QixLQUFLRCxRQUE1QixDQUFkO0FBQ0Q7QUFFRDs7Ozs7Ozs0QkFJZUMsSSxFQUFzQjtBQUVuQyxVQUFJTixPQUFPLENBQUNNLElBQUQsQ0FBWCxFQUFtQjtBQUNqQixjQUFNLElBQUlILGlCQUFKLENBQXNCLGlCQUF0QixDQUFOO0FBQ0Q7O0FBRUQsYUFBT0ksSUFBSSxDQUFDRSxLQUFMLENBQVdQLFFBQU8sQ0FBQ0ksSUFBRCxFQUFPLEtBQUtELFFBQVosQ0FBbEIsQ0FBUDtBQUNEOzs7Ozs7U0E5QmtCRCxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgaXNFbXB0eVxufSBmcm9tICdAa2VybmVsLWpzL3N1cHBvcnQnO1xuXG5pbXBvcnQge1xuICBlbmNyeXB0LFxuICBkZWNyeXB0XG59IGZyb20gJ0BrZXJuZWwtanMvY3J5cHQnO1xuXG5pbXBvcnQgeyBBcmd1bWVudE51bGxFcnJvciB9IGZyb20gJ0BrZXJuZWwtanMvZXhjZXB0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENyeXB0IHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBcbiAgICovXG4gIHB1YmxpYyBlbmNyeXB0KGRhdGE6IG9iamVjdCk6IHN0cmluZyB7XG5cbiAgICBpZiAoaXNFbXB0eShkYXRhKSkge1xuICAgICAgdGhyb3cgbmV3IEFyZ3VtZW50TnVsbEVycm9yKCdEYXRhIHRvIGVuY3J5cHQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5jcnlwdChKU09OLnN0cmluZ2lmeShkYXRhKSwgdGhpcy5wYXNzd29yZCk7XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSB7Kn0gZGF0YSBcbiAgICovXG4gIHB1YmxpYyBkZWNyeXB0KGRhdGE6IHN0cmluZyk6IG9iamVjdCB7XG5cbiAgICBpZiAoaXNFbXB0eShkYXRhKSkge1xuICAgICAgdGhyb3cgbmV3IEFyZ3VtZW50TnVsbEVycm9yKCdEYXRhIHRvIGRlY3J5cHQnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNyeXB0KGRhdGEsIHRoaXMucGFzc3dvcmQpKTtcbiAgfVxufSJdfQ==