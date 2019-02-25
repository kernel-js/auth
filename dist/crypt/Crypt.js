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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcnlwdC9DcnlwdC50cyJdLCJuYW1lcyI6WyJpc0VtcHR5IiwiZW5jcnlwdCIsImRlY3J5cHQiLCJBcmd1bWVudE51bGxFcnJvciIsIkNyeXB0IiwicGFzc3dvcmQiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxTQUNFQSxPQURGLFFBRU8sb0JBRlA7QUFJQSxTQUNFQyxPQUFPLElBQVBBLFFBREYsRUFFRUMsT0FBTyxJQUFQQSxRQUZGLFFBR08sa0JBSFA7QUFLQSxTQUFTQyxpQkFBVCxRQUFrQyx1QkFBbEM7O0lBRXFCQyxLOzs7QUFFbkIsaUJBQW9CQyxRQUFwQixFQUFzQztBQUFBOztBQUNwQyxTQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEO0FBRUQ7Ozs7Ozs7OzRCQUllQyxJLEVBQXNCO0FBRW5DLFVBQUlOLE9BQU8sQ0FBQ00sSUFBRCxDQUFYLEVBQW1CO0FBQ2pCLGNBQU0sSUFBSUgsaUJBQUosQ0FBc0IsaUJBQXRCLENBQU47QUFDRDs7QUFFRCxhQUFPRixRQUFPLENBQUNNLElBQUksQ0FBQ0MsU0FBTCxDQUFlRixJQUFmLENBQUQsRUFBdUIsS0FBS0QsUUFBNUIsQ0FBZDtBQUNEO0FBRUQ7Ozs7Ozs7NEJBSWVDLEksRUFBc0I7QUFFbkMsVUFBSU4sT0FBTyxDQUFDTSxJQUFELENBQVgsRUFBbUI7QUFDakIsY0FBTSxJQUFJSCxpQkFBSixDQUFzQixpQkFBdEIsQ0FBTjtBQUNEOztBQUVELGFBQU9JLElBQUksQ0FBQ0UsS0FBTCxDQUFXUCxRQUFPLENBQUNJLElBQUQsRUFBTyxLQUFLRCxRQUFaLENBQWxCLENBQVA7QUFDRDs7Ozs7O1NBOUJrQkQsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGlzRW1wdHlcbn0gZnJvbSAnQGtlcm5lbC1qcy9zdXBwb3J0JztcblxuaW1wb3J0IHtcbiAgZW5jcnlwdCxcbiAgZGVjcnlwdFxufSBmcm9tICdAa2VybmVsLWpzL2NyeXB0JztcblxuaW1wb3J0IHsgQXJndW1lbnROdWxsRXJyb3IgfSBmcm9tICdAa2VybmVsLWpzL2V4Y2VwdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcnlwdCB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0geyp9IGRhdGEgXG4gICAqL1xuICBwdWJsaWMgZW5jcnlwdChkYXRhOiBvYmplY3QpOiBzdHJpbmcge1xuXG4gICAgaWYgKGlzRW1wdHkoZGF0YSkpIHtcbiAgICAgIHRocm93IG5ldyBBcmd1bWVudE51bGxFcnJvcignRGF0YSB0byBlbmNyeXB0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuY3J5cHQoSlNPTi5zdHJpbmdpZnkoZGF0YSksIHRoaXMucGFzc3dvcmQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0geyp9IGRhdGEgXG4gICAqL1xuICBwdWJsaWMgZGVjcnlwdChkYXRhOiBzdHJpbmcpOiBvYmplY3Qge1xuXG4gICAgaWYgKGlzRW1wdHkoZGF0YSkpIHtcbiAgICAgIHRocm93IG5ldyBBcmd1bWVudE51bGxFcnJvcignRGF0YSB0byBkZWNyeXB0Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZGVjcnlwdChkYXRhLCB0aGlzLnBhc3N3b3JkKSk7XG4gIH1cbn0iXX0=