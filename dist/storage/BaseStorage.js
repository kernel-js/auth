function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { StorageMethods } from './enums/StorageMethods';
import { Cookie, LocalStorage, SessionStorage } from '@kernel-js/storage';
import { isEmpty } from '@kernel-js/support';
import Crypt from '../crypt/Crypt';

var BaseStorage =
/*#__PURE__*/
function () {
  function BaseStorage() {
    var storageMethod = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : StorageMethods.LocalStorage;
    var cryptPassword = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, BaseStorage);

    this.storageMethod = storageMethod;
    this.cryptPassword = cryptPassword;

    _defineProperty(this, "crypt", void 0);

    _defineProperty(this, "storage", void 0);

    this.crypt = new Crypt(cryptPassword);

    this._storageFactory(storageMethod);
  }
  /**
   * 
   * @param storageMethod 
   */


  _createClass(BaseStorage, [{
    key: "_storageFactory",
    value: function _storageFactory(storageMethod) {
      switch (storageMethod) {
        case StorageMethods.LocalStorage:
          this.storage = new LocalStorage();
          break;

        case StorageMethods.CookieStorage:
          this.storage = new Cookie();
          break;

        case StorageMethods.SessionStorage:
          this.storage = new SessionStorage();
          break;
      }
    }
    /**
     * 
     */

  }, {
    key: "getSession",
    value: function getSession() {
      try {
        var session = this.storage.get('auth');

        if (isEmpty(session)) {
          return {};
        }

        return this.crypt.decrypt(session);
      } catch (exception) {
        throw exception;
      }
    }
  }, {
    key: "storeSession",

    /**
     * 
     * @param data 
     */
    value: function storeSession(data) {
      try {
        this.storage.set('auth', this.crypt.encrypt(data));
      } catch (exception) {
        throw exception;
      }
    }
    /**
     * 
     */

  }, {
    key: "revokeSession",
    value: function revokeSession() {
      try {
        this.storage.delete('auth');
      } catch (exception) {
        throw exception;
      }
    }
  }]);

  return BaseStorage;
}();

export { BaseStorage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yYWdlL0Jhc2VTdG9yYWdlLnRzIl0sIm5hbWVzIjpbIlN0b3JhZ2VNZXRob2RzIiwiQ29va2llIiwiTG9jYWxTdG9yYWdlIiwiU2Vzc2lvblN0b3JhZ2UiLCJpc0VtcHR5IiwiQ3J5cHQiLCJCYXNlU3RvcmFnZSIsInN0b3JhZ2VNZXRob2QiLCJjcnlwdFBhc3N3b3JkIiwiY3J5cHQiLCJfc3RvcmFnZUZhY3RvcnkiLCJzdG9yYWdlIiwiQ29va2llU3RvcmFnZSIsInNlc3Npb24iLCJnZXQiLCJkZWNyeXB0IiwiZXhjZXB0aW9uIiwiZGF0YSIsInNldCIsImVuY3J5cHQiLCJkZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsU0FDRUEsY0FERixRQUVPLHdCQUZQO0FBSUEsU0FDRUMsTUFERixFQUVFQyxZQUZGLEVBR0VDLGNBSEYsUUFJTyxvQkFKUDtBQU1BLFNBQ0VDLE9BREYsUUFFTyxvQkFGUDtBQUlBLE9BQU9DLEtBQVAsTUFBa0IsZ0JBQWxCOztJQUlxQkMsVzs7O0FBS25CLHlCQUFnSDtBQUFBLFFBQTVGQyxhQUE0Rix1RUFBNURQLGNBQWMsQ0FBQ0UsWUFBNkM7QUFBQSxRQUF2Qk0sYUFBdUI7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTs7QUFFOUcsU0FBS0MsS0FBTCxHQUFhLElBQUlKLEtBQUosQ0FBVUcsYUFBVixDQUFiOztBQUVBLFNBQUtFLGVBQUwsQ0FBcUJILGFBQXJCO0FBQ0Q7QUFFRDs7Ozs7Ozs7b0NBSXdCQSxhLEVBQStCO0FBQ3JELGNBQVFBLGFBQVI7QUFDRSxhQUFLUCxjQUFjLENBQUNFLFlBQXBCO0FBRUUsZUFBS1MsT0FBTCxHQUFlLElBQUlULFlBQUosRUFBZjtBQUNBOztBQUNGLGFBQUtGLGNBQWMsQ0FBQ1ksYUFBcEI7QUFFRSxlQUFLRCxPQUFMLEdBQWUsSUFBSVYsTUFBSixFQUFmO0FBQ0E7O0FBQ0YsYUFBS0QsY0FBYyxDQUFDRyxjQUFwQjtBQUVFLGVBQUtRLE9BQUwsR0FBZSxJQUFJUixjQUFKLEVBQWY7QUFDQTtBQVpKO0FBY0Q7QUFFRDs7Ozs7O2lDQUc0QjtBQUUxQixVQUFJO0FBRUYsWUFBTVUsT0FBTyxHQUFHLEtBQUtGLE9BQUwsQ0FBYUcsR0FBYixDQUFpQixNQUFqQixDQUFoQjs7QUFFQSxZQUFJVixPQUFPLENBQUNTLE9BQUQsQ0FBWCxFQUFzQjtBQUNwQixpQkFBTyxFQUFQO0FBQ0Q7O0FBRUQsZUFBTyxLQUFLSixLQUFMLENBQVdNLE9BQVgsQ0FBbUJGLE9BQW5CLENBQVA7QUFDRCxPQVRELENBU0UsT0FBT0csU0FBUCxFQUFrQjtBQUVsQixjQUFNQSxTQUFOO0FBQ0Q7QUFDRjs7OztBQUVEOzs7O2lDQUlvQkMsSSxFQUFZO0FBRTlCLFVBQUk7QUFFRixhQUFLTixPQUFMLENBQWFPLEdBQWIsQ0FBaUIsTUFBakIsRUFBeUIsS0FBS1QsS0FBTCxDQUFXVSxPQUFYLENBQW1CRixJQUFuQixDQUF6QjtBQUNELE9BSEQsQ0FHRSxPQUFPRCxTQUFQLEVBQWtCO0FBRWxCLGNBQU1BLFNBQU47QUFDRDtBQUNGO0FBRUQ7Ozs7OztvQ0FHNkI7QUFFM0IsVUFBSTtBQUVGLGFBQUtMLE9BQUwsQ0FBYVMsTUFBYixDQUFvQixNQUFwQjtBQUNELE9BSEQsQ0FHRSxPQUFPSixTQUFQLEVBQWtCO0FBRWxCLGNBQU1BLFNBQU47QUFDRDtBQUNGOzs7Ozs7U0FoRmtCVixXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgU3RvcmFnZU1ldGhvZHNcbn0gZnJvbSAnLi9lbnVtcy9TdG9yYWdlTWV0aG9kcyc7XG5cbmltcG9ydCB7XG4gIENvb2tpZSxcbiAgTG9jYWxTdG9yYWdlLFxuICBTZXNzaW9uU3RvcmFnZVxufSBmcm9tICdAa2VybmVsLWpzL3N0b3JhZ2UnO1xuXG5pbXBvcnQge1xuICBpc0VtcHR5XG59IGZyb20gJ0BrZXJuZWwtanMvc3VwcG9ydCc7XG5cbmltcG9ydCBDcnlwdCBmcm9tICcuLi9jcnlwdC9DcnlwdCc7XG5cbmltcG9ydCBTdG9yYWdlSW50ZXJmYWNlIGZyb20gJy4vaW50ZXJmYWNlcy9TdG9yYWdlSW50ZXJmYWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZVN0b3JhZ2UgaW1wbGVtZW50cyBTdG9yYWdlSW50ZXJmYWNlIHtcblxuICBwcml2YXRlIGNyeXB0OiBDcnlwdDtcbiAgcHJpdmF0ZSBzdG9yYWdlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzdG9yYWdlTWV0aG9kOiBTdG9yYWdlTWV0aG9kcyA9IFN0b3JhZ2VNZXRob2RzLkxvY2FsU3RvcmFnZSwgcHJpdmF0ZSBjcnlwdFBhc3N3b3JkOiBzdHJpbmcpIHtcblxuICAgIHRoaXMuY3J5cHQgPSBuZXcgQ3J5cHQoY3J5cHRQYXNzd29yZCk7XG5cbiAgICB0aGlzLl9zdG9yYWdlRmFjdG9yeShzdG9yYWdlTWV0aG9kKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIHN0b3JhZ2VNZXRob2QgXG4gICAqL1xuICBwcml2YXRlIF9zdG9yYWdlRmFjdG9yeShzdG9yYWdlTWV0aG9kOiBTdG9yYWdlTWV0aG9kcykge1xuICAgIHN3aXRjaCAoc3RvcmFnZU1ldGhvZCkge1xuICAgICAgY2FzZSBTdG9yYWdlTWV0aG9kcy5Mb2NhbFN0b3JhZ2U6XG5cbiAgICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IExvY2FsU3RvcmFnZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU3RvcmFnZU1ldGhvZHMuQ29va2llU3RvcmFnZTpcblxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgQ29va2llKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTdG9yYWdlTWV0aG9kcy5TZXNzaW9uU3RvcmFnZTpcblxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSBuZXcgU2Vzc2lvblN0b3JhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKi9cbiAgcHVibGljIGdldFNlc3Npb24oKTogb2JqZWN0IHtcblxuICAgIHRyeSB7XG5cbiAgICAgIGNvbnN0IHNlc3Npb24gPSB0aGlzLnN0b3JhZ2UuZ2V0KCdhdXRoJyk7XG5cbiAgICAgIGlmIChpc0VtcHR5KHNlc3Npb24pKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY3J5cHQuZGVjcnlwdChzZXNzaW9uKTtcbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBkYXRhIFxuICAgKi9cbiAgcHVibGljIHN0b3JlU2Vzc2lvbihkYXRhKTogdm9pZCB7XG5cbiAgICB0cnkge1xuXG4gICAgICB0aGlzLnN0b3JhZ2Uuc2V0KCdhdXRoJywgdGhpcy5jcnlwdC5lbmNyeXB0KGRhdGEpKTtcbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcblxuICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICovXG4gIHB1YmxpYyByZXZva2VTZXNzaW9uKCk6IHZvaWQge1xuXG4gICAgdHJ5IHtcbiAgICAgIFxuICAgICAgdGhpcy5zdG9yYWdlLmRlbGV0ZSgnYXV0aCcpO1xuICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuXG4gICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgfVxuICB9XG59Il19