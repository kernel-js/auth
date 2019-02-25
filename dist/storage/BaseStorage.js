import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _createClass from "@babel/runtime/helpers/createClass";
// Kernel
import { get } from '@kernel-js/support';
import { Cookie, LocalStorage, SessionStorage } from '@kernel-js/storage'; // Enums

import StorageMethods from '../enums/StorageMethods'; // Interfaces

var BaseStorage =
/*#__PURE__*/
function () {
  function BaseStorage(config) {
    _classCallCheck(this, BaseStorage);

    this._storage = void 0;
    this._storage = this._storageFactory(get(config, 'method', StorageMethods.LocalStorage));
  }
  /**
   * @param  {StorageMethods} method
   * @returns any
   */


  _createClass(BaseStorage, [{
    key: "_storageFactory",
    value: function _storageFactory(method) {
      switch (method) {
        case StorageMethods.LocalStorage:
          return new LocalStorage();

        case StorageMethods.CookieStorage:
          return new Cookie();

        case StorageMethods.SessionStorage:
          return new SessionStorage();
      }
    }
    /**
     * @returns object
     */

  }, {
    key: "get",
    value: function get() {
      try {
        return this._storage.get('auth');
      } catch (e) {
        throw new Error(e);
      }
    }
    /**
     * @param  {object} data
     * @returns Promise
     */

  }, {
    key: "store",
    value: function () {
      var _store = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee() {
        var data,
            _args = arguments;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
                _context.prev = 1;

                this._storage.set('auth', data);

                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](1);
                throw new Error(_context.t0);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 5]]);
      }));

      function store() {
        return _store.apply(this, arguments);
      }

      return store;
    }()
    /**
     * @returns Promise
     */

  }, {
    key: "revoke",
    value: function () {
      var _revoke = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee2() {
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                this._storage.delete('auth');

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

      function revoke() {
        return _revoke.apply(this, arguments);
      }

      return revoke;
    }()
  }]);

  return BaseStorage;
}();

export { BaseStorage as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdG9yYWdlL0Jhc2VTdG9yYWdlLnRzIl0sIm5hbWVzIjpbImdldCIsIkNvb2tpZSIsIkxvY2FsU3RvcmFnZSIsIlNlc3Npb25TdG9yYWdlIiwiU3RvcmFnZU1ldGhvZHMiLCJCYXNlU3RvcmFnZSIsImNvbmZpZyIsIl9zdG9yYWdlIiwiX3N0b3JhZ2VGYWN0b3J5IiwibWV0aG9kIiwiQ29va2llU3RvcmFnZSIsImUiLCJFcnJvciIsImRhdGEiLCJzZXQiLCJkZWxldGUiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLFNBQVNBLEdBQVQsUUFBb0Isb0JBQXBCO0FBQ0EsU0FBU0MsTUFBVCxFQUFpQkMsWUFBakIsRUFBK0JDLGNBQS9CLFFBQXFELG9CQUFyRCxDLENBRUE7O0FBQ0EsT0FBT0MsY0FBUCxNQUEyQix5QkFBM0IsQyxDQUVBOztJQUVxQkMsVzs7O0FBSW5CLHVCQUFZQyxNQUFaLEVBQTRCO0FBQUE7O0FBQUEsU0FGcEJDLFFBRW9CO0FBQzFCLFNBQUtBLFFBQUwsR0FBZ0IsS0FBS0MsZUFBTCxDQUNkUixHQUFHLENBQUNNLE1BQUQsRUFBUyxRQUFULEVBQW1CRixjQUFjLENBQUNGLFlBQWxDLENBRFcsQ0FBaEI7QUFHRDtBQUVEOzs7Ozs7OztvQ0FJd0JPLE0sRUFBNkI7QUFDbkQsY0FBT0EsTUFBUDtBQUNFLGFBQUtMLGNBQWMsQ0FBQ0YsWUFBcEI7QUFDQSxpQkFBTyxJQUFJQSxZQUFKLEVBQVA7O0FBRUEsYUFBS0UsY0FBYyxDQUFDTSxhQUFwQjtBQUNBLGlCQUFPLElBQUlULE1BQUosRUFBUDs7QUFFQSxhQUFLRyxjQUFjLENBQUNELGNBQXBCO0FBQ0EsaUJBQU8sSUFBSUEsY0FBSixFQUFQO0FBUkY7QUFVRDtBQUVEOzs7Ozs7MEJBR3FCO0FBQ25CLFVBQUk7QUFDRixlQUFPLEtBQUtJLFFBQUwsQ0FBY1AsR0FBZCxDQUFrQixNQUFsQixDQUFQO0FBQ0QsT0FGRCxDQUVFLE9BQU1XLENBQU4sRUFBUztBQUNULGNBQU0sSUFBSUMsS0FBSixDQUFVRCxDQUFWLENBQU47QUFDRDtBQUNGO0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW1CRSxnQkFBQUEsSSwyREFBZSxFOzs7QUFFOUIscUJBQUtOLFFBQUwsQ0FBY08sR0FBZCxDQUFrQixNQUFsQixFQUEwQkQsSUFBMUI7Ozs7Ozs7O3NCQUVNLElBQUlELEtBQUosYTs7Ozs7Ozs7Ozs7Ozs7OztBQUlWOzs7Ozs7Ozs7Ozs7Ozs7O0FBS0kscUJBQUtMLFFBQUwsQ0FBY1EsTUFBZCxDQUFxQixNQUFyQjs7Ozs7Ozs7c0JBRU0sSUFBSUgsS0FBSixjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0F6RFNQLFciLCJzb3VyY2VzQ29udGVudCI6WyIvLyBLZXJuZWxcbmltcG9ydCB7IGdldCB9IGZyb20gJ0BrZXJuZWwtanMvc3VwcG9ydCc7XG5pbXBvcnQgeyBDb29raWUsIExvY2FsU3RvcmFnZSwgU2Vzc2lvblN0b3JhZ2UgfSBmcm9tICdAa2VybmVsLWpzL3N0b3JhZ2UnO1xuXG4vLyBFbnVtc1xuaW1wb3J0IFN0b3JhZ2VNZXRob2RzIGZyb20gJy4uL2VudW1zL1N0b3JhZ2VNZXRob2RzJztcblxuLy8gSW50ZXJmYWNlc1xuaW1wb3J0IFN0b3JhZ2VJbnRlcmZhY2UgZnJvbSAnLi4vaW50ZXJmYWNlcy9TdG9yYWdlSW50ZXJmYWNlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VTdG9yYWdlIGltcGxlbWVudHMgU3RvcmFnZUludGVyZmFjZXtcblxuICBwcml2YXRlIF9zdG9yYWdlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiBvYmplY3QpIHtcbiAgICB0aGlzLl9zdG9yYWdlID0gdGhpcy5fc3RvcmFnZUZhY3RvcnkoXG4gICAgICBnZXQoY29uZmlnLCAnbWV0aG9kJywgU3RvcmFnZU1ldGhvZHMuTG9jYWxTdG9yYWdlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICB7U3RvcmFnZU1ldGhvZHN9IG1ldGhvZFxuICAgKiBAcmV0dXJucyBhbnlcbiAgICovXG4gIHByaXZhdGUgX3N0b3JhZ2VGYWN0b3J5KG1ldGhvZDogU3RvcmFnZU1ldGhvZHMpOiBhbnkge1xuICAgIHN3aXRjaChtZXRob2QpIHtcbiAgICAgIGNhc2UgU3RvcmFnZU1ldGhvZHMuTG9jYWxTdG9yYWdlOlxuICAgICAgcmV0dXJuIG5ldyBMb2NhbFN0b3JhZ2UoKTtcblxuICAgICAgY2FzZSBTdG9yYWdlTWV0aG9kcy5Db29raWVTdG9yYWdlOlxuICAgICAgcmV0dXJuIG5ldyBDb29raWUoKTtcblxuICAgICAgY2FzZSBTdG9yYWdlTWV0aG9kcy5TZXNzaW9uU3RvcmFnZTpcbiAgICAgIHJldHVybiBuZXcgU2Vzc2lvblN0b3JhZ2UoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHJldHVybnMgb2JqZWN0XG4gICAqL1xuICBwdWJsaWMgZ2V0KCk6IG9iamVjdCB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLl9zdG9yYWdlLmdldCgnYXV0aCcpXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge29iamVjdH0gZGF0YVxuICAgKiBAcmV0dXJucyBQcm9taXNlXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgc3RvcmUoZGF0YTogb2JqZWN0ID0ge30pOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9zdG9yYWdlLnNldCgnYXV0aCcsIGRhdGEpXG4gICAgfSBjYXRjaChlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIFxuICAvKipcbiAgICogQHJldHVybnMgUHJvbWlzZVxuICAgKi9cbiAgcHVibGljIGFzeW5jIHJldm9rZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLl9zdG9yYWdlLmRlbGV0ZSgnYXV0aCcpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgIH1cbiAgfVxufSJdfQ==