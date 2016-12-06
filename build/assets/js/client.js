webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(32);

	var _reactRedux = __webpack_require__(53);

	var _reactDom = __webpack_require__(62);

	var _reactRouter = __webpack_require__(208);

	var _reactRouterRedux = __webpack_require__(269);

	var _reactTapEventPlugin = __webpack_require__(274);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _getMuiTheme = __webpack_require__(280);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _MuiThemeProvider = __webpack_require__(410);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _app = __webpack_require__(427);

	var _app2 = _interopRequireDefault(_app);

	var _reducers = __webpack_require__(562);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _routes = __webpack_require__(582);

	var _routes2 = _interopRequireDefault(_routes);

	var _actions = __webpack_require__(783);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var initialState = window.__INITIAL_STATE__;
	var middleware = (0, _reactRouterRedux.routerMiddleware)(_reactRouter.browserHistory);
	var store = (0, _redux.createStore)(_reducers2.default, initialState, (0, _redux.applyMiddleware)(middleware));
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
	var muiTheme = (0, _getMuiTheme2.default)();

	// Needed for onTouchTap
	// http://stackoverflow.com/a/34015469/988941
	(0, _reactTapEventPlugin2.default)();

	_reactRouter.browserHistory.listen(function () {
	  return store.dispatch((0, _actions.routeLocationDidUpdate)(location));
	});
	(0, _reactDom.render)(_react2.default.createElement(
	  _MuiThemeProvider2.default,
	  { muiTheme: muiTheme },
	  _react2.default.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    _react2.default.createElement(_reactRouter.Router, { routes: _routes2.default, history: history })
	  )
	), document.getElementById('root'));

/***/ },

/***/ 427:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _header = __webpack_require__(428);

	var _header2 = _interopRequireDefault(_header);

	var _footer = __webpack_require__(550);

	var _footer2 = _interopRequireDefault(_footer);

	var _notification = __webpack_require__(553);

	var _notification2 = _interopRequireDefault(_notification);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Styles
	if (true) {
	  __webpack_require__(561);
	}

	var App = function App(props) {
	  var styles = {
	    root: {
	      height: '100%'
	    }
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: styles.root },
	    _react2.default.createElement(_header2.default, null),
	    props.children,
	    _react2.default.createElement(_footer2.default, null),
	    _react2.default.createElement(_notification2.default, null)
	  );
	};

	exports.default = App;

/***/ },

/***/ 428:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _AppBar = __webpack_require__(429);

	var _AppBar2 = _interopRequireDefault(_AppBar);

	var _IconButton = __webpack_require__(438);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _computer = __webpack_require__(482);

	var _computer2 = _interopRequireDefault(_computer);

	var _accountButton = __webpack_require__(483);

	var _accountButton2 = _interopRequireDefault(_accountButton);

	var _testAccount = __webpack_require__(547);

	var _testAccount2 = _interopRequireDefault(_testAccount);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_React$Component) {
	  _inherits(Header, _React$Component);

	  function Header(props) {
	    _classCallCheck(this, Header);

	    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
	  }

	  _createClass(Header, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(_AppBar2.default, {
	        title: 'Typing Teacher',
	        onLeftIconButtonTouchTap: function onLeftIconButtonTouchTap() {
	          return _this2.context.router.push('/');
	        },
	        iconElementLeft: _react2.default.createElement(
	          _IconButton2.default,
	          null,
	          _react2.default.createElement(_computer2.default, null)
	        ),
	        iconElementRight: _react2.default.createElement(
	          'div',
	          { style: { display: 'flex' } },
	          _react2.default.createElement(_accountButton2.default, null)
	        )
	      });
	    }
	  }]);

	  return Header;
	}(_react2.default.Component);

	exports.default = Header;
	;

	Header.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

/***/ },

/***/ 482:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(469);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(478);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var HardwareComputer = function HardwareComputer(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z' })
	  );
	};
	HardwareComputer = (0, _pure2.default)(HardwareComputer);
	HardwareComputer.displayName = 'HardwareComputer';
	HardwareComputer.muiName = 'SvgIcon';

	exports.default = HardwareComputer;

/***/ },

/***/ 483:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(484);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactRedux = __webpack_require__(53);

	var _reactRouterRedux = __webpack_require__(269);

	var _actionTypes = __webpack_require__(489);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _actions = __webpack_require__(490);

	var _actions2 = __webpack_require__(492);

	var _constants = __webpack_require__(491);

	var _constants2 = _interopRequireDefault(_constants);

	var _accountButton = __webpack_require__(494);

	var _accountButton2 = _interopRequireDefault(_accountButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Convert store state to props to be passed to component
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Set props to send
	    modalState: state.account.modalState,
	    currentTab: state.account.currentTab,
	    auth: state.account.auth,
	    player: state.account.player
	  };
	};

	// Creates props that will dispatch actions
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Actions to send
	    updateModalState: function updateModalState(modalState) {
	      dispatch((0, _actions.updateModal)(modalState));
	    },
	    updateCurrentTab: function updateCurrentTab(currentTab) {
	      dispatch((0, _actions.updateCurrentTab)(currentTab));
	    },
	    signoutAccount: function signoutAccount() {
	      _superagent2.default.get(_constants2.default.r.SIGN_OUT).end(function (err, res) {
	        if (err) {
	          return console.log(err);
	        }

	        var data = JSON.parse(res.text);
	        console.log('Sign Out Response', data);
	        dispatch((0, _actions.updateAuth)(data.authenticated));
	        dispatch((0, _actions.updatePlayer)({}));
	        dispatch((0, _actions2.sendSuccess)('Successfully Signed Out'));
	        dispatch((0, _reactRouterRedux.push)('/'));
	      });
	    },
	    signinAccount: function signinAccount(account) {
	      _superagent2.default.post(_constants2.default.r.SIGN_IN).send({
	        username: account.username,
	        password: account.password
	      }).end(function (err, res) {
	        if (err) {
	          if (err.status === 401) {
	            // Unauthorized
	            return dispatch((0, _actions2.sendError)('Incorrect Username or Password'));
	          }
	          return dispatch((0, _actions2.sendError)(err.response.text));
	        }

	        var data = JSON.parse(res.text);
	        var player = data.user;
	        console.log('Sign In Response', data);
	        dispatch((0, _actions.updateAuth)(data.authenticated));
	        dispatch((0, _actions.updateModal)(_constants2.default.c.CLOSED));
	        dispatch((0, _actions.updatePlayer)(player));
	        dispatch((0, _actions2.sendSuccess)('Successfully Signed In'));
	        dispatch((0, _reactRouterRedux.push)('/dashboard'));
	      });
	    },
	    registerAccount: function registerAccount(account) {
	      _superagent2.default.post(_constants2.default.r.REGISTER).send({
	        username: account.username,
	        password: account.password,
	        email: account.email,
	        isTeacher: account.isTeacher
	      }).end(function (err, res) {
	        if (err) {
	          console.log(err);
	          return dispatch((0, _actions2.sendError)(err.response.text));
	        }

	        var data = JSON.parse(res.text);
	        var player = data.user;
	        console.log('Register Response', data);
	        dispatch((0, _actions.updateAuth)(data.authenticated));
	        dispatch((0, _actions.updateModal)(_constants2.default.c.CLOSED));
	        dispatch((0, _actions.updatePlayer)(player));
	        dispatch((0, _actions2.sendSuccess)('Successfully Registered Account'));
	        dispatch((0, _reactRouterRedux.push)('/dashboard'));
	      });
	    }
	  };
	};

	var AccountButtonContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_accountButton2.default);

	exports.default = AccountButtonContainer;

/***/ },

/***/ 489:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var actionTypes = {
	  modalUpdate: 'ACCOUNT_MODAL_UPDATE',
	  tabUpdate: 'ACCOUNT_TAB_UPDATE',
	  signinAccount: 'ACCOUNT_SIGN_IN',
	  signoutAccount: 'ACCOUNT_SIGN_OUT',
	  updatePlayer: 'ACCOUNT_UPDATE_PLAYER',
	  updateAuth: 'ACCOUNT_UPDATE_AUTH'
	};

	exports.default = actionTypes;

/***/ },

/***/ 490:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updatePlayer = exports.signoutAccount = exports.updateAuth = exports.updateCurrentTab = exports.updateModal = undefined;

	var _constants = __webpack_require__(491);

	var _constants2 = _interopRequireDefault(_constants);

	var _actionTypes = __webpack_require__(489);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var updateModal = exports.updateModal = function updateModal(state) {
	  return {
	    type: _actionTypes2.default.modalUpdate,
	    data: {
	      modalState: state
	    }
	  };
	};

	var updateCurrentTab = exports.updateCurrentTab = function updateCurrentTab(tab) {
	  return {
	    type: _actionTypes2.default.tabUpdate,
	    data: {
	      currentTab: tab
	    }
	  };
	};

	var updateAuth = exports.updateAuth = function updateAuth(auth) {
	  return {
	    type: _actionTypes2.default.updateAuth,
	    data: {
	      auth: auth
	    }
	  };
	};

	var signoutAccount = exports.signoutAccount = function signoutAccount() {
	  return {
	    type: _actionTypes2.default.signoutAccount
	  };
	};

	var updatePlayer = exports.updatePlayer = function updatePlayer(player) {
	  return {
	    type: _actionTypes2.default.updatePlayer,
	    data: {
	      player: player
	    }
	  };
	};

/***/ },

/***/ 491:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var constants = {
	  CLOSED: false,
	  OPENED: true,
	  SIGN_IN: 0,
	  REGISTER: 1
	};

	var routes = {
	  SIGN_IN: '/api/1/account/signin',
	  SIGN_OUT: '/api/1/account/signout',
	  REGISTER: '/api/1/account/register',
	  VALIDATE: '/api/1/account/validate'
	};

	var errors = {
	  USERNAME_EMPTY: 'Username is required.',
	  PASSWORD_EMPTY: 'Password is required.',
	  EMAIL_INVALID: 'A valid email is required.'
	};

	exports.default = {
	  c: constants,
	  e: errors,
	  r: routes
	};

/***/ },

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.closeNotification = exports.sendSuccess = exports.sendError = exports.sendMessage = undefined;

	var _actionTypes = __webpack_require__(493);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var sendMessage = exports.sendMessage = function sendMessage(message) {
	  return {
	    type: _actionTypes2.default.sendMessage,
	    data: {
	      message: message
	    }
	  };
	};

	var sendError = exports.sendError = function sendError(err) {
	  // TODO: If needed, handle error types, but for now just send the error message
	  return {
	    type: _actionTypes2.default.sendError,
	    data: {
	      message: err
	    }
	  };
	};

	var sendSuccess = exports.sendSuccess = function sendSuccess(message) {
	  return {
	    type: _actionTypes2.default.sendSuccess,
	    data: {
	      message: message
	    }
	  };
	};

	var closeNotification = exports.closeNotification = function closeNotification() {
	  return {
	    type: _actionTypes2.default.closeNotification
	  };
	};

/***/ },

/***/ 493:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var actionTypes = {
	  sendMessage: 'NOTIFICATION_SEND_MESSAGE',
	  sendError: 'NOTIFICATION_SEND_ERROR',
	  sendSuccess: 'NOTIFICATION_SEND_SUCCESS',
	  closeNotification: 'NOTIFICATION_CLOSE'
	};

	exports.default = actionTypes;

/***/ },

/***/ 494:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _IconButton = __webpack_require__(438);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _accountBox = __webpack_require__(495);

	var _accountBox2 = _interopRequireDefault(_accountBox);

	var _powerSettingsNew = __webpack_require__(496);

	var _powerSettingsNew2 = _interopRequireDefault(_powerSettingsNew);

	var _modal = __webpack_require__(497);

	var _modal2 = _interopRequireDefault(_modal);

	var _constants = __webpack_require__(491);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// Materia UI Components


	// Custom Components


	var AccountButton = function (_React$Component) {
	  _inherits(AccountButton, _React$Component);

	  function AccountButton(props) {
	    _classCallCheck(this, AccountButton);

	    return _possibleConstructorReturn(this, (AccountButton.__proto__ || Object.getPrototypeOf(AccountButton)).call(this, props));
	  }

	  _createClass(AccountButton, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _IconButton2.default,
	          {
	            style: this.props.auth ? {} : { display: "none" },
	            onTouchTap: function onTouchTap() {
	              return _this2.context.router.push('/dashboard');
	            },
	            tooltip: 'Dashboard'
	          },
	          _react2.default.createElement(_accountBox2.default, null)
	        ),
	        _react2.default.createElement(
	          _IconButton2.default,
	          {
	            onTouchTap: function onTouchTap() {
	              _this2.props.auth ? _this2.props.signoutAccount() : _this2.props.updateModalState(_constants2.default.c.OPENED);
	            },
	            tooltip: this.props.auth ? "Sign Out" : "Sign In"
	          },
	          this.props.auth ? _react2.default.createElement(_powerSettingsNew2.default, null) : _react2.default.createElement(_accountBox2.default, null)
	        ),
	        _react2.default.createElement(_modal2.default, this.props)
	      );
	    }
	  }]);

	  return AccountButton;
	}(_react2.default.Component);

	exports.default = AccountButton;


	AccountButton.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

/***/ },

/***/ 495:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(469);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(478);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionAccountBox = function ActionAccountBox(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z' })
	  );
	};
	ActionAccountBox = (0, _pure2.default)(ActionAccountBox);
	ActionAccountBox.displayName = 'ActionAccountBox';
	ActionAccountBox.muiName = 'SvgIcon';

	exports.default = ActionAccountBox;

/***/ },

/***/ 496:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(469);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(478);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ActionPowerSettingsNew = function ActionPowerSettingsNew(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z' })
	  );
	};
	ActionPowerSettingsNew = (0, _pure2.default)(ActionPowerSettingsNew);
	ActionPowerSettingsNew.displayName = 'ActionPowerSettingsNew';
	ActionPowerSettingsNew.muiName = 'SvgIcon';

	exports.default = ActionPowerSettingsNew;

/***/ },

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Dialog = __webpack_require__(498);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _Checkbox = __webpack_require__(508);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _FlatButton = __webpack_require__(513);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _reactSwipeableViews = __webpack_require__(516);

	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

	var _TextField = __webpack_require__(536);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _Tabs = __webpack_require__(542);

	var _constants = __webpack_require__(491);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccountModal = function (_React$Component) {
	  _inherits(AccountModal, _React$Component);

	  function AccountModal(props) {
	    _classCallCheck(this, AccountModal);

	    var _this = _possibleConstructorReturn(this, (AccountModal.__proto__ || Object.getPrototypeOf(AccountModal)).call(this, props));

	    _this.state = {
	      account: {
	        username: '',
	        password: '',
	        email: '',
	        isTeacher: false
	      },
	      errors: {
	        username: '',
	        password: '',
	        email: ''
	      }
	    };

	    _this.updateAccount = _this.updateAccount.bind(_this);
	    _this.isTeacher = _this.isTeacher.bind(_this);
	    return _this;
	  }

	  _createClass(AccountModal, [{
	    key: 'isTeacher',
	    value: function isTeacher(e, _isTeacher) {
	      var t = {};
	      t.isTeacher = _isTeacher;
	      this.setState({
	        account: Object.assign({}, this.state.account, t)
	      });
	    }
	  }, {
	    key: 'updateAccount',
	    value: function updateAccount(e) {
	      var acc = {};
	      acc[e.target.name] = e.target.value;
	      this.setState({
	        account: Object.assign({}, this.state.account, acc)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Cancel',
	        primary: true,
	        onTouchTap: function onTouchTap() {
	          // Remove password from state
	          var temp = {
	            username: _this2.state.account.username,
	            password: '',
	            email: _this2.state.account.email
	          };
	          _this2.props.updateModalState(_constants2.default.c.CLOSED);
	          _this2.setState({
	            account: Object.assign({}, temp)
	          });
	        }
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: 'Submit',
	        onTouchTap: function onTouchTap() {
	          var errMessage = {
	            username: '',
	            password: '',
	            email: ''
	          };
	          if (_this2.state.account.username.length < 1) {
	            errMessage.username = _constants2.default.e.USERNAME_EMPTY;
	          }

	          if (_this2.state.account.password.length < 1) {
	            errMessage.password = _constants2.default.e.PASSWORD_EMPTY;
	          }
	          if (_this2.props.currentTab === _constants2.default.c.SIGN_IN) {
	            // Sign in

	            if (errMessage.username === '' && errMessage.password === '') {
	              _this2.props.signinAccount(_this2.state.account);
	              var temp = {
	                username: '',
	                password: '',
	                email: ''
	              };
	              _this2.setState({
	                account: Object.assign({}, temp)
	              });
	            }
	            _this2.setState({
	              errors: errMessage
	            });
	          } else {
	            // Register Account
	            if (_this2.state.account.email.length < 1 || _this2.state.account.email.match(/.+@.+\..+\s*/g) == null) {
	              errMessage.email = _constants2.default.e.EMAIL_INVALID;
	            }

	            if (errMessage.username === '' && errMessage.password === '' && errMessage.email === '') {

	              _this2.props.registerAccount(_this2.state.account);
	              var _temp = {
	                username: '',
	                password: '',
	                email: '',
	                isTeacher: false
	              };
	              _this2.setState({
	                account: Object.assign({}, _temp)
	              });
	            }
	            _this2.setState({
	              errors: errMessage
	            });
	          }
	        }
	      })];

	      return _react2.default.createElement(
	        _Dialog2.default,
	        {
	          title: 'Modal',
	          modal: false,
	          actions: actions,
	          open: this.props.modalState,
	          onRequestClose: function onRequestClose() {
	            return _this2.props.updateModalState(_constants2.default.c.CLOSED);
	          }
	        },
	        _react2.default.createElement(
	          _Tabs.Tabs,
	          {
	            onChange: function onChange(tab) {
	              return _this2.props.updateCurrentTab(tab);
	            },
	            value: this.props.currentTab
	          },
	          _react2.default.createElement(_Tabs.Tab, { label: 'Sign In', value: 0 }),
	          _react2.default.createElement(_Tabs.Tab, { label: 'Register Account', value: 1 })
	        ),
	        _react2.default.createElement(_TextField2.default, {
	          name: 'username',
	          floatingLabelText: 'User Name',
	          errorText: this.state.errors.username,
	          value: this.state.account.username,
	          onChange: this.updateAccount
	        }),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(_TextField2.default, {
	          name: 'password',
	          floatingLabelText: 'Password',
	          errorText: this.state.errors.password,
	          value: this.state.account.password,
	          onChange: this.updateAccount,
	          type: 'password'
	        }),
	        _react2.default.createElement(
	          _reactSwipeableViews2.default,
	          {
	            index: this.props.currentTab,
	            onChangeIndex: function onChangeIndex(tab) {
	              return _this2.props.updateCurrentTab(tab);
	            }
	          },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              'Forgot Password'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { style: { overflow: 'hidden' } },
	            _react2.default.createElement(_TextField2.default, {
	              name: 'email',
	              floatingLabelText: 'Email',
	              errorText: this.state.errors.email,
	              value: this.state.account.email,
	              onChange: this.updateAccount
	            }),
	            _react2.default.createElement('br', null),
	            _react2.default.createElement(_Checkbox2.default, {
	              label: 'Teacher',
	              onCheck: this.isTeacher
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return AccountModal;
	}(_react2.default.Component);

	exports.default = AccountModal;


	AccountModal.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(484);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactRedux = __webpack_require__(53);

	var _reactRouterRedux = __webpack_require__(269);

	var _actionTypes = __webpack_require__(489);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _actions = __webpack_require__(490);

	var _actions2 = __webpack_require__(492);

	var _constants = __webpack_require__(491);

	var _constants2 = _interopRequireDefault(_constants);

	var _testAccount = __webpack_require__(548);

	var _testAccount2 = _interopRequireDefault(_testAccount);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Convert store state to props to be passed to component
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Set props to send
	  };
	};

	// Creates props that will dispatch actions
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Actions to send
	    signin: function signin() {
	      _superagent2.default.post(_constants2.default.r.SIGN_IN).send({
	        username: 'test',
	        password: 'test'
	      }).end(function (err, res) {
	        if (err) {
	          if (err.status === 401) {
	            // Unauthorized
	            return dispatch((0, _actions2.sendError)('Incorrect Username or Password'));
	          }
	          return dispatch((0, _actions2.sendError)(err.response.text));
	        }

	        var data = JSON.parse(res.text);
	        var player = data.user;
	        console.log('Sign In Response', data);
	        dispatch((0, _actions.updateAuth)(data.authenticated));
	        dispatch((0, _actions2.sendSuccess)('Successfully Signed In'));
	        dispatch((0, _actions.updatePlayer)(player));
	        dispatch((0, _reactRouterRedux.push)('/dashboard'));
	      });
	    }
	  };
	};

	var AccountButtonContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_testAccount2.default);

	exports.default = AccountButtonContainer;

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _IconButton = __webpack_require__(438);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _cake = __webpack_require__(549);

	var _cake2 = _interopRequireDefault(_cake);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TestAccount = function TestAccount(props) {
	  return _react2.default.createElement(
	    _IconButton2.default,
	    {
	      onTouchTap: function onTouchTap() {
	        return props.signin();
	      }
	    },
	    _react2.default.createElement(_cake2.default, null)
	  );
	};

	exports.default = TestAccount;

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(469);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(478);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SocialCake = function SocialCake(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z' })
	  );
	};
	SocialCake = (0, _pure2.default)(SocialCake);
	SocialCake.displayName = 'SocialCake';
	SocialCake.muiName = 'SvgIcon';

	exports.default = SocialCake;

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Paper = __webpack_require__(480);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _muiThemeable = __webpack_require__(551);

	var _muiThemeable2 = _interopRequireDefault(_muiThemeable);

	var _github = __webpack_require__(552);

	var _github2 = _interopRequireDefault(_github);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Styles
	if (true) {
	  //require('../../styles/footer.scss');
	}

	var Footer = function Footer(props) {
	  var theme = props.muiTheme;
	  var styles = {
	    root: {
	      minHeight: '200px',
	      display: 'flex',
	      justifyContent: 'center',
	      alignItems: 'center',
	      padding: '20px',
	      boxSizing: 'border-box',
	      backgroundColor: '#212121',
	      color: 'rgba(255, 255, 255, 0.541176)'
	    },
	    icon: {
	      color: 'rgba(255, 255, 255, 0.541176)',
	      padding: '10px'
	    }
	  };
	  return _react2.default.createElement(
	    _Paper2.default,
	    {
	      zDepth: 1,
	      style: styles.root,
	      id: 'footer' },
	    'View source on ',
	    _react2.default.createElement(
	      'a',
	      { href: 'https://github.com/redice44/TypingTeacher', target: '_blank' },
	      _react2.default.createElement(_github2.default, { style: styles.icon, viewBox: '0 0 16 16' })
	    )
	  );
	};

	exports.default = (0, _muiThemeable2.default)()(Footer);

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends2 = __webpack_require__(431);

	var _extends3 = _interopRequireDefault(_extends2);

	exports.default = muiThemeable;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _getMuiTheme = __webpack_require__(280);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DEFAULT_THEME = void 0;

	function getDefaultTheme() {
	  if (!DEFAULT_THEME) {
	    DEFAULT_THEME = (0, _getMuiTheme2.default)();
	  }
	  return DEFAULT_THEME;
	}

	function muiThemeable() {
	  return function (Component) {
	    var MuiComponent = function MuiComponent(props, context) {
	      var _context$muiTheme = context.muiTheme,
	          muiTheme = _context$muiTheme === undefined ? getDefaultTheme() : _context$muiTheme;


	      return _react2.default.createElement(Component, (0, _extends3.default)({ muiTheme: muiTheme }, props));
	    };

	    MuiComponent.contextTypes = {
	      muiTheme: _react.PropTypes.object.isRequired
	    };

	    return MuiComponent;
	  };
	}

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _SvgIcon = __webpack_require__(478);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var GithubIcon = function GithubIcon(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z' })
	  );
	};

	exports.default = GithubIcon;

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(53);

	var _actionTypes = __webpack_require__(493);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _actions = __webpack_require__(492);

	var _constants = __webpack_require__(554);

	var _constants2 = _interopRequireDefault(_constants);

	var _notification = __webpack_require__(555);

	var _notification2 = _interopRequireDefault(_notification);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Convert store state to props to be passed to component
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Set props to send
	    message: state.notification.message,
	    notificationType: state.notification.type,
	    open: state.notification.open
	  };
	};

	// Creates props that will dispatch actions
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Actions to send
	    sendMessage: function sendMessage(message) {
	      dispatch((0, _actions.sendMessage)(message));
	    },
	    sendError: function sendError(err) {
	      dispatch((0, _actions.sendError)(err));
	    },
	    sendSuccess: function sendSuccess(message) {
	      dispatch((0, _actions.sendSuccess)(message));
	    },
	    closeNotification: function closeNotification() {
	      dispatch((0, _actions.closeNotification)());
	    }

	  };
	};

	var NotificationContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_notification2.default);

	exports.default = NotificationContainer;

/***/ },

/***/ 554:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var constants = {
	  MESSAGE: 'NOTIFICATION_TYPE_MESSAGE',
	  ERROR: 'NOTIFICATION_TYPE_ERROR',
	  SUCCESS: 'NOTIFICATION_TYPE_SUCCESS'
	};

	exports.default = {
	  c: constants
	};

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Snackbar = __webpack_require__(556);

	var _Snackbar2 = _interopRequireDefault(_Snackbar);

	var _constants = __webpack_require__(554);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Material UI Components
	var Notification = function Notification(props) {
	  var styleClass = 'notification';

	  switch (props.notificationType) {
	    case _constants2.default.c.MESSAGE:
	      styleClass = 'notification message';
	      break;
	    case _constants2.default.c.ERROR:
	      styleClass = 'notification error';
	      break;
	    case _constants2.default.c.SUCCESS:
	      styleClass = 'notification success';
	      break;
	    default:
	    // Do nothing.
	  }

	  return _react2.default.createElement(_Snackbar2.default, {
	    open: props.open,
	    message: props.message,
	    className: styleClass,
	    autoHideDuration: 4000,
	    onRequestClose: function onRequestClose() {
	      return props.closeNotification();
	    }
	  });
	};

	exports.default = Notification;

/***/ },

/***/ 561:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(32);

	var _reactRouter = __webpack_require__(208);

	var _reactRouterRedux = __webpack_require__(269);

	var _reducer = __webpack_require__(563);

	var _reducer2 = _interopRequireDefault(_reducer);

	var _reducer3 = __webpack_require__(567);

	var _reducer4 = _interopRequireDefault(_reducer3);

	var _reducer5 = __webpack_require__(569);

	var _reducer6 = _interopRequireDefault(_reducer5);

	var _reducer7 = __webpack_require__(571);

	var _reducer8 = _interopRequireDefault(_reducer7);

	var _reducer9 = __webpack_require__(575);

	var _reducer10 = _interopRequireDefault(_reducer9);

	var _reducer11 = __webpack_require__(580);

	var _reducer12 = _interopRequireDefault(_reducer11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var appReducers = (0, _redux.combineReducers)({
	  game: _reducer2.default,
	  account: _reducer4.default,
	  notification: _reducer6.default,
	  campaign: _reducer8.default,
	  routing: _reactRouterRedux.routerReducer,
	  dashboard: _reducer10.default,
	  history: _reducer12.default
	});

	exports.default = appReducers;

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _init = __webpack_require__(564);

	var _init2 = _interopRequireDefault(_init);

	var _actionTypes = __webpack_require__(566);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _constants = __webpack_require__(565);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var gameReducer = function gameReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _init2.default;
	  var action = arguments[1];

	  switch (action.type) {
	    case _actionTypes2.default.setTimer:
	      console.log('Setting Timer: ' + action.data.timer);
	      // TODO: Validate result
	      return Object.assign({}, state, {
	        timer: action.data.timer
	      });
	    case _actionTypes2.default.updatePhrase:
	      console.log('Updating Phrase: ' + action.data.phrase);
	      // TODO: Validate result
	      return Object.assign({}, state, {
	        phrase: action.data.phrase
	      });
	    case _actionTypes2.default.updateResults:
	      console.log('Updating Game Results: ' + action.data.results);
	      // TODO: Validate result
	      return Object.assign({}, state, {
	        results: action.data.results
	      });
	    case _actionTypes2.default.playPhrase:
	      console.log('Initiating Play Phrase Mode');

	      return Object.assign({}, state, {
	        gameType: _constants2.default.c.PHRASE
	      });
	      break;
	    case _actionTypes2.default.playTime:
	      console.log('Initiating Play Time Trial Mode');

	      return Object.assign({}, state, {
	        gameType: _constants2.default.c.TIME
	      });
	      break;
	    case _actionTypes2.default.setGame:
	      console.log('Initiating Play Time Trial Mode');

	      return Object.assign({}, state, {
	        game: action.data.game
	      });
	      break;
	    default:
	      return state;
	  }
	};

	exports.default = gameReducer;

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(565);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var init = {
	  results: {},
	  gameType: _constants2.default.c.PHRASE,
	  phrase: '',
	  timer: 0,
	  game: {
	    acc: 0,
	    wpm: 0,
	    timer: false,
	    difficulty: 2
	  }
	};

	exports.default = init;

/***/ },

/***/ 565:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var constants = {
	  PHRASE: 0,
	  TIME: 1
	};

	var routes = {
	  GET_PHRASE: '/api/1/phrase'
	};

	exports.default = {
	  c: constants,
	  r: routes
	};

/***/ },

/***/ 566:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var actionTypes = {
	  playPhrase: 'GAME_PLAY_PHRASE',
	  playTime: 'GAME_PLAY_TIME',
	  updateResults: 'GAME_UPDATE_RESULTS',
	  updatePhrase: 'GAME_UPDATE_PHRASE',
	  setTimer: 'GAME_SET_TIMER',
	  setGame: 'GAME_SET'
	};

	exports.default = actionTypes;

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _init = __webpack_require__(568);

	var _init2 = _interopRequireDefault(_init);

	var _actionTypes = __webpack_require__(489);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var accountReducer = function accountReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _init2.default;
	  var action = arguments[1];

	  switch (action.type) {
	    case _actionTypes2.default.modalUpdate:
	      console.log('Updating Sign in Modal: ' + action.data.modalState);

	      return updateState(state, {
	        modalState: action.data.modalState
	      });
	    case _actionTypes2.default.tabUpdate:
	      console.log('Updating Tab in Modal: ' + action.data.currentTab);

	      return updateState(state, {
	        currentTab: action.data.currentTab
	      });
	    case _actionTypes2.default.updateAuth:
	      console.log('Updating Auth State: ' + action.data.auth);

	      return updateState(state, {
	        auth: action.data.auth
	      });
	    case _actionTypes2.default.updatePlayer:
	      console.log('Updating the player:', action.data.player);
	      return updateState(state, {
	        player: action.data.player
	      });
	    default:
	      return state;
	  }
	};

	function updateState(state, update) {
	  return Object.assign({}, state, update);
	}

	exports.default = accountReducer;

/***/ },

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(491);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var init = {
	  currentTab: 0,
	  modalState: _constants2.default.c.CLOSED,
	  auth: false,
	  player: {}
	};

	exports.default = init;

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _init = __webpack_require__(570);

	var _init2 = _interopRequireDefault(_init);

	var _actionTypes = __webpack_require__(493);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _constants = __webpack_require__(554);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var notificationReducer = function notificationReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _init2.default;
	  var action = arguments[1];

	  switch (action.type) {
	    case _actionTypes2.default.sendMessage:
	      console.log('Sending Notification Message: ' + action.data.message);

	      return updateState(state, {
	        message: action.data.message,
	        open: true,
	        type: _constants2.default.c.MESSAGE
	      });
	    case _actionTypes2.default.sendError:
	      console.log('Sending Notification Error: ' + action.data.message);

	      return updateState(state, {
	        message: action.data.message,
	        open: true,
	        type: _constants2.default.c.ERROR
	      });
	    case _actionTypes2.default.sendSuccess:
	      console.log('Sending Success Notification: ' + action.data.message);

	      return updateState(state, {
	        message: action.data.message,
	        open: true,
	        type: _constants2.default.c.SUCCESS
	      });
	    case _actionTypes2.default.closeNotification:
	      console.log('Closing Notification');

	      return updateState(state, {
	        open: false
	      });
	    default:
	      return state;
	  }
	};

	function updateState(state, update) {
	  return Object.assign({}, state, update);
	}

	exports.default = notificationReducer;

/***/ },

/***/ 570:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var init = {
	  open: false,
	  message: ''
	};

	exports.default = init;

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _init = __webpack_require__(572);

	var _init2 = _interopRequireDefault(_init);

	var _actionTypes = __webpack_require__(574);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var accountReducer = function accountReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _init2.default;
	  var action = arguments[1];

	  switch (action.type) {
	    case _actionTypes2.default.editLevel:
	      console.log('\n=== ACTION editLevel===\n  editLevelIndex: ' + action.data.editLevel + '\n  part: ' + action.data.part + '\n  state:', state);

	      return updateState(state, {
	        editLevelIndex: action.data.editLevel,
	        part: action.data.part
	      });
	    case _actionTypes2.default.setLevel:
	      console.log('\n=== ACTION setLevel===\n  level:', action.data.level, '\n  wpm: ' + action.data.level.wpm + '\n  index: ' + action.data.index + '\n  state:', state.levels);
	      var lv = state.levels.slice(0);
	      console.log('level before', lv);
	      lv[action.data.index] = action.data.level;
	      console.log('level after', lv);
	      if (action.data.index < lv.length - 1 && lv[action.data.index + 1].state === _constants2.default.c.EMPTY) {
	        console.log('updating next level with ready');
	        lv[action.data.index + 1].state = _constants2.default.c.READY;
	      }
	      console.log('levels', lv);
	      return updateState(state, {
	        levels: lv
	      });
	    case _actionTypes2.default.updateModal:
	      console.log('Updating modal state: ' + action.data.modalState);

	      return updateState(state, {
	        modalState: action.data.modalState
	      });
	    case _actionTypes2.default.updateLevelType:
	      console.log('Updating level type ' + action.data.levelType);

	      return updateState(state, {
	        levelType: action.data.levelType
	      });
	    case _actionTypes2.default.setCampaignList:
	      console.log('Updating Campaign List', action.data.campaignList);

	      return updateState(state, {
	        campaignList: action.data.campaignList
	      });
	    case _actionTypes2.default.addCampaign:
	      console.log('Adding Campaign');

	      return state;
	    case _actionTypes2.default.isCreating:
	      console.log('Updating isCreating: ' + action.data.isCreating);

	      return updateState(state, {
	        isCreating: action.data.isCreating
	      });
	    case _actionTypes2.default.resetLevel:
	      console.log('Resetting Levels');
	      var level = [{
	        state: _constants2.default.c.READY,
	        wpm: 0,
	        acc: 0
	      }, {
	        state: _constants2.default.c.EMPTY,
	        wpm: 0,
	        acc: 0
	      }, {
	        state: _constants2.default.c.EMPTY,
	        wpm: 0,
	        acc: 0
	      }, {
	        state: _constants2.default.c.EMPTY,
	        wpm: 0,
	        acc: 0
	      }, {
	        state: _constants2.default.c.EMPTY,
	        wpm: 0,
	        acc: 0
	      }];

	      return updateState(state, {
	        levels: level
	      });
	    case _actionTypes2.default.selectCampaign:
	      console.log('Selecting Campaign ' + action.data.camp._id, action.data.camp);

	      return updateState(state, {
	        selectedCampaign: action.data.camp
	      });
	    default:
	      return state;
	  }
	};

	function updateState(state, update) {
	  return Object.assign({}, state, update);
	}

	exports.default = accountReducer;

/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var init = {
	  levels: [{
	    state: _constants2.default.c.READY,
	    wpm: 0,
	    acc: 0,
	    difficulty: 2,
	    timer: false
	  }, {
	    state: _constants2.default.c.EMPTY,
	    wpm: 0,
	    acc: 0,
	    difficulty: 2,
	    timer: false
	  }, {
	    state: _constants2.default.c.EMPTY,
	    wpm: 0,
	    acc: 0,
	    difficulty: 2,
	    timer: false
	  }, {
	    state: _constants2.default.c.EMPTY,
	    wpm: 0,
	    acc: 0,
	    difficulty: 2,
	    timer: false
	  }, {
	    state: _constants2.default.c.EMPTY,
	    wpm: 0,
	    acc: 0,
	    difficulty: 2,
	    timer: false
	  }],
	  modalState: _constants2.default.c.CLOSED,
	  campaignList: [],
	  editLevelIndex: -1,
	  part: 0,
	  isCreating: false,
	  selectedCampaign: {}
	};

	exports.default = init;

/***/ },

/***/ 573:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var constants = {
	  CLOSED: false,
	  OPENED: true,
	  EMPTY: 'EMPTY_LEVEL',
	  READY: 'READY_LEVEL',
	  SPLIT: 'SPLIT_LEVEL',
	  SINGLE: 'SINGLE_LEVEL',
	  MAX_LEVELS: 5,
	  levelState: {
	    needsSave: 'LEVEL_NEEDS_SAVE',
	    saved: 'LEVEL_SAVED',
	    active: 'LEVEL_ACTIVE',
	    completed: 'LEVEL_COMPLETED'
	  }
	};

	var routes = {
	  ADD_CAMPAIGN: '/api/1/campaign/add'
	};

	exports.default = {
	  c: constants,
	  r: routes
	};

/***/ },

/***/ 574:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var actionTypes = {
	  editLevel: 'CAMPAIGN_EDIT_LEVEL',
	  setLevel: 'CAMPAIGN_SET_LEVEL',
	  setCampaignList: 'CAMPAIGN_SET_LIST',
	  addCampaign: 'CAMPAIGN_ADD',
	  isCreating: 'CAMPAIGN_CREATING',
	  updateModal: 'CAMPAIGN_UPDATE_MODAL',
	  updateLevelType: 'CAMPAIGN_UPDATE_LEVEL_TYPE',
	  resetLevel: 'CAMPAIGN_LEVEL',
	  selectCampaign: 'CAMPAIGN_SELECT'
	};

	exports.default = actionTypes;

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _init = __webpack_require__(576);

	var _init2 = _interopRequireDefault(_init);

	var _actionTypes = __webpack_require__(577);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _actionTypes3 = __webpack_require__(578);

	var _actionTypes4 = _interopRequireDefault(_actionTypes3);

	var _constants = __webpack_require__(579);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dashboardReducer = function dashboardReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _init2.default;
	  var action = arguments[1];

	  switch (action.type) {
	    case _actionTypes2.default.updateTab:
	      console.log('Updating current dashboard tab', action.data.index);

	      return updateState(state, {
	        currentTab: action.data.index
	      });
	    case _actionTypes4.default.locationUpdate:
	      switch (action.data.location.pathname) {
	        case _constants2.default.r.dashboard:
	          console.log('from store: dashboard');
	          return updateState(state, {
	            currentTab: _constants2.default.c.tabs.dashboard
	          });
	        case _constants2.default.r.campaign:
	          console.log('from store: campaign');
	          return updateState(state, {
	            currentTab: _constants2.default.c.tabs.campaign
	          });
	        case _constants2.default.r.stats:
	          console.log('from store: stats');
	          return updateState(state, {
	            currentTab: _constants2.default.c.tabs.stats
	          });
	        default:
	          console.log('from store: ' + action.data.location.pathname);
	        // Do nothing
	      }
	    default:
	      return state;
	  }
	};

	function updateState(state, update) {
	  return Object.assign({}, state, update);
	}

	exports.default = dashboardReducer;

/***/ },

/***/ 576:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var init = {
	  currentTab: 0
	};

	exports.default = init;

/***/ },

/***/ 577:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var actionTypes = {
	  updateTab: 'DASHBOARD_UPDATE_TAB'
	};

	exports.default = actionTypes;

/***/ },

/***/ 578:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var actionTypes = {
	  locationUpdate: 'HISTORY_LOCATION_UPDATE'
	};

	exports.default = actionTypes;

/***/ },

/***/ 579:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var constants = {
	  tabs: {
	    dashboard: 1,
	    campaign: 2,
	    stats: 0
	  }
	};

	var routes = {
	  dashboard: '/dashboard',
	  campaign: '/dashboard/campaign',
	  stats: '/dashboard/stats'
	};

	exports.default = {
	  c: constants,
	  r: routes
	};

/***/ },

/***/ 580:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _init = __webpack_require__(581);

	var _init2 = _interopRequireDefault(_init);

	var _actionTypes = __webpack_require__(578);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var historyReducer = function historyReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _init2.default;
	  var action = arguments[1];

	  switch (action.type) {
	    case _actionTypes2.default.locationUpdate:
	      console.log('Location update:', action.data);
	      // TODO: Validate result
	      return Object.assign({}, state);
	    default:
	      return state;
	  }
	};

	exports.default = historyReducer;

/***/ },

/***/ 581:
/***/ function(module, exports) {

	"use strict";

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _app = __webpack_require__(427);

	var _app2 = _interopRequireDefault(_app);

	var _game = __webpack_require__(583);

	var _game2 = _interopRequireDefault(_game);

	var _dashboard = __webpack_require__(606);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var route = {
	  path: '/',
	  component: _app2.default,
	  indexRoute: {
	    component: _game2.default
	  },
	  childRoutes: [_dashboard2.default]
	};

	var routes = [route];

	exports.default = routes;

/***/ },

/***/ 583:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(484);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactRedux = __webpack_require__(53);

	var _reactRouterRedux = __webpack_require__(269);

	var _actionTypes = __webpack_require__(566);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _actions = __webpack_require__(584);

	var _game = __webpack_require__(585);

	var _game2 = _interopRequireDefault(_game);

	var _constants = __webpack_require__(565);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Convert store state to props to be passed to component
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Set props to send
	    gameType: state.game.gameType,
	    phrase: state.game.phrase,
	    timer: state.game.timer,
	    game: state.game.game,
	    difficulty: state.game.difficulty,
	    username: state.account.player.name
	  };
	};

	// Creates props that will dispatch actions
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Actions to send
	    updateResults: function updateResults(results) {
	      dispatch((0, _actions.updateResults)(results));
	    },
	    playPhrase: function playPhrase() {
	      _superagent2.default.get(_constants2.default.r.GET_PHRASE).end(function (err, res) {
	        if (err) {
	          return console.log(err);
	        }
	        var data = JSON.parse(res.text);
	        console.log('Receiving Phrase ' + data.phrase);
	        dispatch((0, _actions.updatePhrase)(data.phrase));
	        dispatch((0, _actions.playPhrase)());
	      });
	    },
	    playTime: function playTime() {
	      _superagent2.default.get(_constants2.default.r.GET_PHRASE).end(function (err, res) {
	        if (err) {
	          return console.log(err);
	        }
	        var data = JSON.parse(res.text);
	        console.log('Receiving Phrase ' + data.phrase);
	        dispatch((0, _actions.updatePhrase)(data.phrase));
	        // TODO: Handle dynamically
	        dispatch(setTimer(30));
	        dispatch((0, _actions.playTime)());
	      });
	    }
	  };
	};

	var GameContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_game2.default);

	exports.default = GameContainer;

/***/ },

/***/ 584:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setGame = exports.updatePhrase = exports.setTimer = exports.updateResults = exports.playTime = exports.playPhrase = undefined;

	var _actionTypes = __webpack_require__(566);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var playPhrase = exports.playPhrase = function playPhrase() {
	  return {
	    type: _actionTypes2.default.playPhrase,
	    data: {}
	  };
	};

	var playTime = exports.playTime = function playTime() {
	  return {
	    type: _actionTypes2.default.playTime,
	    data: {}
	  };
	};

	var updateResults = exports.updateResults = function updateResults(results) {
	  return {
	    type: _actionTypes2.default.updateResults,
	    data: {
	      results: results
	    }
	  };
	};

	var setTimer = exports.setTimer = function setTimer(timer) {
	  return {
	    type: _actionTypes2.default.setTimer,
	    data: {
	      timer: timer
	    }
	  };
	};

	var updatePhrase = exports.updatePhrase = function updatePhrase(phrase) {
	  return {
	    type: _actionTypes2.default.updatePhrase,
	    data: {
	      phrase: phrase
	    }
	  };
	};

	var setGame = exports.setGame = function setGame(game) {
	  return {
	    type: _actionTypes2.default.setGame,
	    data: {
	      game: game
	    }
	  };
	};

/***/ },

/***/ 585:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(208);

	var _classnames = __webpack_require__(586);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Paper = __webpack_require__(480);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _Card = __webpack_require__(587);

	var _RaisedButton = __webpack_require__(599);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _TextField = __webpack_require__(536);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _results = __webpack_require__(601);

	var _results2 = _interopRequireDefault(_results);

	var _timer = __webpack_require__(602);

	var _timer2 = _interopRequireDefault(_timer);

	var _constants = __webpack_require__(565);

	var _constants2 = _interopRequireDefault(_constants);

	var _superagent = __webpack_require__(484);

	var _superagent2 = _interopRequireDefault(_superagent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var style = {
			margin: 12
	};

	var backgroundRed = {
			background: "red",
			margin: "1px"
	};

	var styleRed = {
			color: 'red'
	};

	var Game = function (_React$Component) {
			_inherits(Game, _React$Component);

			function Game(props) {
					_classCallCheck(this, Game);

					var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

					_this.state = {
							phrase: "",
							originalPhrase: "",
							phraseTextField: '',
							typos: 0,
							counter: 0,
							disabledPhraseButton: false,
							disabledTimeTrialButton: false,
							disabledTextField: true,
							isResults: false,
							isTimer: false,
							timer: 0,
							gameType: props.gameType,
							game: props.game,
							acc: 0,
							timeTrialWasClicked: false,
							keyEvents: [],
							wpm: 0,
							startTime: 0
					};

					_this.props.playTime();
					//Bindings
					_this.update = _this.update.bind(_this);
					_this.phraseButtonClick = _this.phraseButtonClick.bind(_this);
					_this.timeTrialButtonClick = _this.timeTrialButtonClick.bind(_this);
					_this.sendResults = _this.sendResults.bind(_this);
					_this.replaceString = _this.replaceString.bind(_this);
					return _this;
			}

			_createClass(Game, [{
					key: 'checkForTypos',
					value: function checkForTypos(str) {
							this.setState({
									phraseTextField: str,
									counter: this.state.counter - 1 });

							if (this.state.phrase.substring(this.state.counter - 1, this.state.counter) == '*') {
									//Check for typos
									var newPhrase = this.state.phrase.slice(0, this.state.counter - 1) + this.state.originalPhrase.slice(this.state.counter - 1, this.state.phrase.length);

									this.setState({
											phrase: newPhrase,
											typos: this.state.typos - 1 });
							}
					}
			}, {
					key: 'compareInput',
					value: function compareInput(str) {
							var inputChar = str.substring(this.state.counter, this.state.counter + 1);
							var currentChar = this.state.phrase.substring(this.state.counter, this.state.counter + 1);

							if (inputChar != currentChar) {
									//compare current char with entered char
									var input = this.state.phrase.slice(0, this.state.counter) + '*' + this.state.phrase.slice(this.state.counter + 1, this.state.phrase.length);

									this.setState({
											phraseTextField: str,
											phrase: input,
											counter: this.state.counter + 1 });

									this.state.typos = this.state.typos + 1;
							} else {
									this.setState({
											phraseTextField: str,
											counter: this.state.counter + 1 });
							}
					}
			}, {
					key: 'update',
					value: function update(e) {
							this.state.keyEvents.push({
									key: e.target.value[e.target.value.length - 1],
									timeStamp: Date.now(),
									isTypo: e.target.value[e.target.value.length - 1] != this.state.phrase.substring(this.state.counter, this.state.counter + 1)
							}); // Collect Key Events

							if (e.target.value.length < this.state.phraseTextField.length && this.state.timer > 0 && this.state.gameType == _constants2.default.c.TIME || e.target.value.length < this.state.phraseTextField.length && this.state.gameType == _constants2.default.c.PHRASE) {
									//If User pressed backspace		
									this.checkForTypos(e.target.value); //if backspaced char was a typo, change it to original
							} else if (this.state.counter < this.state.phrase.length - 1 && this.state.timer > 0 && this.state.gameType == _constants2.default.c.TIME || //If user has not typed all characters...
							this.state.counter < this.state.phrase.length - 1 && this.state.gameType == _constants2.default.c.PHRASE) {
									this.compareInput(e.target.value); //Compare if current letter is equal to input
							} else if (this.state.timer > 0 && this.state.gameType == _constants2.default.c.TIME) {
									//if timer is still running and this is time trial...
									this.updatePhrase(); // change current phrase
							} else {
									//Display Results for phrase mode
									this.compareInput(e.target.value);
									this.sendResults();
							}
					}
			}, {
					key: 'updatePhrase',
					value: function updatePhrase() {
							this.setState({
									phrase: this.props.phrase,
									originalPhrase: this.props.phrase,
									phraseTextField: "",
									counter: 0 });
							this.props.playTime();
					}
			}, {
					key: 'phraseButtonClick',
					value: function phraseButtonClick() {
							this.props.playPhrase();

							this.setState({
									phrase: this.props.phrase,
									originalPhrase: this.props.phrase,
									disabledPhraseButton: true,
									disabledTimeTrialButton: true,
									disabledTextField: false,
									isResults: false,
									typos: 0,
									isTimer: false,
									timer: 0,
									startTime: Date.now() / 1000,
									wpm: 0,
									gameType: _constants2.default.c.PHRASE,
									expanded: true,
									keyEvents: [] });
					}
			}, {
					key: 'timeTrialButtonClick',
					value: function timeTrialButtonClick() {

							this.props.playTime();
							this.setState({
									phrase: this.props.phrase,
									originalPhrase: this.props.phrase,
									disabledPhraseButton: true,
									disabledTimeTrialButton: true,
									disabledTextField: false,
									isResults: false,
									typos: 0,
									isTimer: true,
									timer: 10,
									wpm: 0,
									gameType: _constants2.default.c.TIME,
									expanded: true,
									timeTrialWasClicked: !this.state.timeTrialWasClicked,
									keyEvents: [] });
					}
			}, {
					key: 'sendResults',
					value: function sendResults() {
							var _this2 = this;

							console.log('results received');
							var time = Math.round(Date.now() / 1000 - this.state.startTime);

							_superagent2.default.post('/api/1/stats/results').send({
									username: typeof this.props.username == 'undefined' ? 'anonymous' : this.props.username,
									results: {
											timeTrial: this.state.gameType != _constants2.default.c.PHRASE,
											difficulty: this.props.difficulty,
											timeOfRun: Math.round(Date.now() / 1000),
											keyEvents: this.state.keyEvents
									}
							}).end(function (err, res) {
									if (err) {
											return console.log(err);
									}

									var data = JSON.parse(res.text);

									_this2.setState({
											disabledPhraseButton: false,
											acc: Math.round(data.gamerun.acc),
											disabledTimeTrialButton: false,
											disabledTextField: true,
											phraseTextField: '',
											counter: 0,
											isResults: true,
											timer: _this2.state.gameType == _constants2.default.c.PHRASE ? time : _this2.state.timer,
											wpm: Math.round(data.gamerun.wpm)
									});

									_this2.props.updateResults({
											acc: Math.round(data.gamerun.acc),
											keyEvents: _this2.state.keyEvents,
											wpm: Math.round(data.gamerun.wpm),
											timer: _this2.state.gameType == _constants2.default.c.PHRASE ? time : _this2.state.timer,
											gameMode: _this2.state.gameType });
							});
					}
			}, {
					key: 'componentWillReceiveProps',
					value: function componentWillReceiveProps(nextProps) {
							if (true) {
									console.log('=== Will Receive Props: Game', nextProps);
							}
					}
			}, {
					key: 'replaceString',
					value: function replaceString() {
							var parts = this.state.phrase.split(/\\*/g);

							for (var i = 0; i < parts.length; i++) {
									if (parts[i] == "*") // marks characters as red 
											{
													if (this.state.originalPhrase[i] == " ") {
															parts[i] = _react2.default.createElement(
																	'span',
																	{ className: 'match', style: backgroundRed, key: i },
																	this.state.originalPhrase[i]
															);
													} else {
															parts[i] = _react2.default.createElement(
																	'span',
																	{ className: 'match', style: styleRed, key: i },
																	this.state.originalPhrase[i]
															);
													}
											} else {
											parts[i] = _react2.default.createElement(
													'span',
													null,
													parts[i]
											);
									}
							}
							return _react2.default.createElement(
									'div',
									null,
									parts
							);
					}
			}, {
					key: 'render',
					value: function render() {
							if (true) {
									console.log('=== Render: Game', this.props);
							}
							var c = (0, _classnames2.default)({
									'content': true
							});

							var styles = {
									root: {},
									card: {}
							};

							return _react2.default.createElement(
									'div',
									{ className: c },
									_react2.default.createElement(
											_Card.Card,
											{ expanded: this.state.expanded },
											_react2.default.createElement(
													_Card.CardActions,
													{ style: { textAlign: 'center' } },
													_react2.default.createElement(_RaisedButton2.default, {
															label: 'Phrase Mode',
															style: style,
															primary: true,
															disabled: this.state.disabledPhraseButton,
															onClick: this.phraseButtonClick
													}),
													_react2.default.createElement(_RaisedButton2.default, {
															label: 'Time Trial Mode',
															style: style,
															primary: true,
															disabled: this.state.disabledTimeTrialButton,
															onClick: this.timeTrialButtonClick
													})
											),
											_react2.default.createElement(
													_Card.CardText,
													{ expandable: true, style: { display: 'flex', justifyContent: 'center' } },
													_react2.default.createElement(
															'div',
															{ style: { width: '50%' } },
															this.state.isTimer ? _react2.default.createElement(_timer2.default, { timer: this.state.timer, timeTrialWasClicked: this.state.timeTrialWasClicked, sendResults: this.sendResults }) : null,
															_react2.default.createElement(
																	'h3',
																	null,
																	this.replaceString()
															),
															_react2.default.createElement(_TextField2.default, {
																	name: 'phraseTextField',
																	floatingLabelText: 'Type Here',
																	disabled: this.state.disabledTextField,
																	value: this.state.phraseTextField,
																	onChange: this.update,
																	fullWidth: true
															}),
															this.state.isResults ? _react2.default.createElement(_results2.default, { acc: this.state.acc, originalPhrase: this.state.originalPhrase, wpm: this.state.wpm, timer: this.state.timer }) : null
													)
											)
									)
							);
					}
			}]);

			return Game;
	}(_react2.default.Component);

	exports.default = Game;

/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var debug = (true) && (true);

	var Results = function Results(props) {
	  if (debug) {
	    console.log('=== Render: Game/Results', props);
	  }
	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      'h3',
	      null,
	      'You typed'
	    ),
	    _react2.default.createElement(
	      'ul',
	      null,
	      _react2.default.createElement(
	        'li',
	        null,
	        props.originalPhrase
	      ),
	      _react2.default.createElement(
	        'li',
	        null,
	        'in ',
	        props.timer,
	        ' seconds'
	      ),
	      _react2.default.createElement(
	        'li',
	        null,
	        'at ',
	        props.wpm,
	        ' words per minute'
	      ),
	      _react2.default.createElement(
	        'li',
	        null,
	        'with an accuracy of ',
	        props.acc,
	        '%'
	      )
	    )
	  );
	};

	exports.default = Results;

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _LinearProgress = __webpack_require__(603);

	var _LinearProgress2 = _interopRequireDefault(_LinearProgress);

	var _debug = __webpack_require__(605);

	var _debug2 = _interopRequireDefault(_debug);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Timer = function (_React$Component) {
	  _inherits(Timer, _React$Component);

	  function Timer(props) {
	    _classCallCheck(this, Timer);

	    var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

	    _this.state = {
	      timer: props.timer,
	      timeTrialWasClicked: props.timeTrialWasClicked
	    };
	    _this.timerInc = 100 / props.timer / 10;
	    return _this;
	  }

	  _createClass(Timer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      this.timer = setTimeout(function () {
	        return _this2.progress(0);
	      }, 100);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      clearTimeout(this.timer);
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      var _this3 = this;

	      if (this.state.timeTrialWasClicked != nextProps.timeTrialWasClicked) {
	        this.setState({ timer: nextProps.timer, completed: 0, timeTrialWasClicked: nextProps.timeTrialWasClicked });
	        this.timerInc = 100 / nextProps.timer / 10;
	        this.timer = setTimeout(function () {
	          return _this3.progress(0);
	        }, 100);
	      }
	    }
	  }, {
	    key: 'progress',
	    value: function progress(completed) {
	      var _this4 = this;

	      if (completed > 100) {
	        this.setState({ completed: 100 });
	        clearTimeout(this.timer);
	        this.props.sendResults();
	        this.setState({ sum: completed });
	      } else {
	        this.setState({ completed: completed });
	        this.timer = setTimeout(function () {
	          return _this4.progress(completed + _this4.timerInc);
	        }, 100);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (_debug2.default) {
	        //console.log('=== Render Game/Timer', this.props);
	      }

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'p',
	          null,
	          'Time Remaining: ',
	          this.state.timer - Math.floor(this.state.completed / 100 * this.state.timer),
	          ' s'
	        ),
	        _react2.default.createElement(_LinearProgress2.default, { mode: 'determinate', value: this.state.completed })
	      );
	    }
	  }]);

	  return Timer;
	}(_react2.default.Component);

	exports.default = Timer;

/***/ },

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var debug = (true) && (true);
	exports.default = debug;

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dashboard = __webpack_require__(607);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	var _playerOverview = __webpack_require__(668);

	var _playerOverview2 = _interopRequireDefault(_playerOverview);

	var _campaign = __webpack_require__(610);

	var _campaign2 = _interopRequireDefault(_campaign);

	var _stats = __webpack_require__(671);

	var _stats2 = _interopRequireDefault(_stats);

	var _campaign3 = __webpack_require__(780);

	var _campaign4 = _interopRequireDefault(_campaign3);

	var _stats3 = __webpack_require__(782);

	var _stats4 = _interopRequireDefault(_stats3);

	var _auth = __webpack_require__(781);

	var _auth2 = _interopRequireDefault(_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = {
	  path: 'dashboard',
	  component: _dashboard2.default,
	  indexRoute: {
	    component: _playerOverview2.default
	  },
	  childRoutes: [_campaign4.default, _stats4.default]
	};

	if (true) {
	  routes.onEnter = _auth2.default;
	}

	exports.default = routes;

/***/ },

/***/ 607:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(53);

	var _reactRouterRedux = __webpack_require__(269);

	var _actionTypes = __webpack_require__(577);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _actions = __webpack_require__(608);

	var _dashboard = __webpack_require__(609);

	var _dashboard2 = _interopRequireDefault(_dashboard);

	var _constants = __webpack_require__(579);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Convert store state to props to be passed to component
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Set props to send
	    currentTab: state.dashboard.currentTab
	  };
	};

	// Creates props that will dispatch actions
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Actions to send
	    updateTab: function updateTab(i) {
	      switch (i) {
	        case _constants2.default.c.tabs.dashboard:
	          dispatch((0, _reactRouterRedux.push)(_constants2.default.r.dashboard));
	          break;
	        case _constants2.default.c.tabs.campaign:
	          dispatch((0, _reactRouterRedux.push)(_constants2.default.r.campaign));
	          break;
	        case _constants2.default.c.tabs.stats:
	          dispatch((0, _reactRouterRedux.push)(_constants2.default.r.stats));
	          break;
	        default:
	          // Do nothing
	          console.log('Unknown Tab ' + i);
	      }
	      //dispatch(updateTab(i));
	    }
	  };
	};

	var DashboardContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_dashboard2.default);

	exports.default = DashboardContainer;

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateTab = undefined;

	var _actionTypes = __webpack_require__(577);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var updateTab = exports.updateTab = function updateTab(i) {
	  return {
	    type: _actionTypes2.default.updateTab,
	    data: {
	      index: i
	    }
	  };
	};

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(586);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactSwipeableViews = __webpack_require__(516);

	var _reactSwipeableViews2 = _interopRequireDefault(_reactSwipeableViews);

	var _Tabs = __webpack_require__(542);

	var _campaign = __webpack_require__(610);

	var _campaign2 = _interopRequireDefault(_campaign);

	var _playerOverview = __webpack_require__(668);

	var _playerOverview2 = _interopRequireDefault(_playerOverview);

	var _stats = __webpack_require__(671);

	var _stats2 = _interopRequireDefault(_stats);

	var _constants = __webpack_require__(579);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dashboard = function Dashboard(props) {
	  var c = (0, _classnames2.default)({
	    'content': true
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: c },
	    _react2.default.createElement(
	      _Tabs.Tabs,
	      {
	        onChange: function onChange(tab) {
	          return props.updateTab(tab);
	        },
	        value: props.currentTab
	      },
	      _react2.default.createElement(
	        _Tabs.Tab,
	        { label: 'Statistics', value: _constants2.default.c.tabs.stats },
	        _react2.default.createElement(_stats2.default, null)
	      ),
	      _react2.default.createElement(
	        _Tabs.Tab,
	        { label: 'Dashboard', value: _constants2.default.c.tabs.dashboard },
	        _react2.default.createElement(_playerOverview2.default, null)
	      ),
	      _react2.default.createElement(
	        _Tabs.Tab,
	        { label: 'Campaigns', value: _constants2.default.c.tabs.campaign },
	        _react2.default.createElement(_campaign2.default, null)
	      )
	    )
	  );
	};

	exports.default = Dashboard;
	/*
	<SwipeableViews
	  index={props.currentTab}
	  onChangeIndex={(tab) => props.updateTab(tab)}
	>
	  <div>
	    <Stats />
	  </div>
	  <div>
	    <Overview />
	  </div>
	  <div>
	    <Campaign />
	  </div>
	</SwipeableViews>
	*/

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _superagent = __webpack_require__(484);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactRouter = __webpack_require__(208);

	var _classnames = __webpack_require__(586);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _RaisedButton = __webpack_require__(599);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _campaignList = __webpack_require__(611);

	var _campaignList2 = _interopRequireDefault(_campaignList);

	var _create = __webpack_require__(651);

	var _create2 = _interopRequireDefault(_create);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Campaign = function (_React$Component) {
	  _inherits(Campaign, _React$Component);

	  function Campaign(props) {
	    _classCallCheck(this, Campaign);

	    return _possibleConstructorReturn(this, (Campaign.__proto__ || Object.getPrototypeOf(Campaign)).call(this, props));
	  }

	  _createClass(Campaign, [{
	    key: 'render',
	    value: function render() {
	      var c = (0, _classnames2.default)({
	        'content': true
	      });

	      var styles = {
	        root: {
	          margin: '20px'
	        }
	      };

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_create2.default, null),
	        _react2.default.createElement(_campaignList2.default, null)
	      );
	    }
	  }]);

	  return Campaign;
	}(_react2.default.Component);

	exports.default = Campaign;

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(484);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactRedux = __webpack_require__(53);

	var _reactRouterRedux = __webpack_require__(269);

	var _actionTypes = __webpack_require__(574);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _actions = __webpack_require__(612);

	var _campaignList = __webpack_require__(613);

	var _campaignList2 = _interopRequireDefault(_campaignList);

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Convert store state to props to be passed to component
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  // ownProps are props sent to the component
	  var c = [];
	  console.log('state account', state.account);
	  if (state.account.player && state.account.player.campaignList) {
	    c = state.account.player.campaignList;
	  }
	  return {
	    // Set props to send
	    campaignList: c,
	    isCreating: state.campaign.isCreating
	  };
	};

	// Creates props that will dispatch actions
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Actions to send
	    updateCreating: function updateCreating(cBool) {
	      dispatch((0, _actions.isCreating)(cBool));
	    },
	    selectCampaign: function selectCampaign(camp) {
	      dispatch((0, _actions.selectCampaign)(camp));
	    }
	  };
	};

	var CampaignListContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_campaignList2.default);

	exports.default = CampaignListContainer;

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.selectCampaign = exports.resetLevel = exports.isCreating = exports.addCampaign = exports.editLevel = exports.setCampaignList = exports.updateLevelType = exports.updateModal = exports.setLevel = undefined;

	var _actionTypes = __webpack_require__(574);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var setLevel = exports.setLevel = function setLevel(i, level) {
	  return {
	    type: _actionTypes2.default.setLevel,
	    data: {
	      level: level,
	      index: i
	    }
	  };
	};

	var updateModal = exports.updateModal = function updateModal(state) {
	  return {
	    type: _actionTypes2.default.updateModal,
	    data: {
	      modalState: state
	    }
	  };
	};

	var updateLevelType = exports.updateLevelType = function updateLevelType(levelType) {
	  return {
	    type: _actionTypes2.default.updateLevelType,
	    data: {
	      levelType: levelType
	    }
	  };
	};

	// TODO: Restrict by ID search Probably even an account thing.
	var setCampaignList = exports.setCampaignList = function setCampaignList(campaignList) {
	  return {
	    type: _actionTypes2.default.setCampaignList,
	    data: {
	      campaignList: campaignList
	    }
	  };
	};

	var editLevel = exports.editLevel = function editLevel(_editLevel, part) {
	  return {
	    type: _actionTypes2.default.editLevel,
	    data: {
	      editLevel: _editLevel,
	      part: part
	    }
	  };
	};

	var addCampaign = exports.addCampaign = function addCampaign(camp) {
	  return {
	    type: _actionTypes2.default.addCampaign,
	    data: {
	      camp: camp
	    }
	  };
	};

	var isCreating = exports.isCreating = function isCreating(cbool) {
	  return {
	    type: _actionTypes2.default.isCreating,
	    data: {
	      isCreating: cbool
	    }
	  };
	};

	var resetLevel = exports.resetLevel = function resetLevel() {
	  return {
	    type: _actionTypes2.default.resetLevel
	  };
	};

	var selectCampaign = exports.selectCampaign = function selectCampaign(camp) {
	  return {
	    type: _actionTypes2.default.selectCampaign,
	    data: {
	      camp: camp
	    }
	  };
	};

/***/ },

/***/ 613:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(614);

	var _Toolbar = __webpack_require__(623);

	var _IconButton = __webpack_require__(438);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _add = __webpack_require__(628);

	var _add2 = _interopRequireDefault(_add);

	var _playCircleOutline = __webpack_require__(629);

	var _playCircleOutline2 = _interopRequireDefault(_playCircleOutline);

	var _moreHoriz = __webpack_require__(630);

	var _moreHoriz2 = _interopRequireDefault(_moreHoriz);

	var _singleCampaign = __webpack_require__(631);

	var _singleCampaign2 = _interopRequireDefault(_singleCampaign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CampaignList = function (_React$Component) {
	  _inherits(CampaignList, _React$Component);

	  function CampaignList(props) {
	    _classCallCheck(this, CampaignList);

	    var _this = _possibleConstructorReturn(this, (CampaignList.__proto__ || Object.getPrototypeOf(CampaignList)).call(this, props));

	    _this.state = {
	      open: true
	    };

	    //this.handleToggle = this.handleToggle.bind(this);
	    return _this;
	  }

	  _createClass(CampaignList, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      console.log('Campaign List Props', this.props);
	      var campaigns = void 0;
	      if (this.props.campaignList) {
	        campaigns = this.props.campaignList.map(function (camp, i) {
	          return _react2.default.createElement(_List.ListItem, { key: i,
	            primaryText: camp.name ? camp.name : 'Untitled',
	            initiallyOpen: false,
	            primaryTogglesNestedList: true,
	            nestedItems: [_react2.default.createElement(_singleCampaign2.default, { key: i + '-' + camp.name, campaign: camp })]
	            // TODO: Make these icon buttons
	            , leftIcon: _react2.default.createElement(_playCircleOutline2.default, null)
	          });
	        });
	      }
	      /*
	      onTouchTap={() => {
	        console.log('clicking camp', camp._id);
	        this.props.selectCampaign(camp);
	      }}
	      */
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _List.List,
	          null,
	          _react2.default.createElement(_List.ListItem, {
	            primaryText: 'Campaign List',
	            initiallyOpen: true
	            //primaryTogglesNestedList={true}
	            , nestedItems: campaigns,
	            leftIcon: _react2.default.createElement(
	              _IconButton2.default,
	              { style: { padding: '0px' },
	                tooltip: 'Create Campaign',
	                tooltipPosition: 'top-right',
	                onTouchTap: function onTouchTap() {
	                  //this.context.router.push('/campaign/create');
	                  _this2.props.updateCreating(!_this2.props.isCreating);
	                }
	              },
	              _react2.default.createElement(_add2.default, null)
	            )
	          })
	        )
	      );
	    }
	  }]);

	  return CampaignList;
	}(_react2.default.Component);

	exports.default = CampaignList;
	;

	CampaignList.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(469);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(478);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ContentAdd = function ContentAdd(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' })
	  );
	};
	ContentAdd = (0, _pure2.default)(ContentAdd);
	ContentAdd.displayName = 'ContentAdd';
	ContentAdd.muiName = 'SvgIcon';

	exports.default = ContentAdd;

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(469);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(478);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AvPlayCircleOutline = function AvPlayCircleOutline(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' })
	  );
	};
	AvPlayCircleOutline = (0, _pure2.default)(AvPlayCircleOutline);
	AvPlayCircleOutline.displayName = 'AvPlayCircleOutline';
	AvPlayCircleOutline.muiName = 'SvgIcon';

	exports.default = AvPlayCircleOutline;

/***/ },

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(469);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(478);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NavigationMoreHoriz = function NavigationMoreHoriz(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' })
	  );
	};
	NavigationMoreHoriz = (0, _pure2.default)(NavigationMoreHoriz);
	NavigationMoreHoriz.displayName = 'NavigationMoreHoriz';
	NavigationMoreHoriz.muiName = 'SvgIcon';

	exports.default = NavigationMoreHoriz;

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _map = __webpack_require__(632);

	var _map2 = _interopRequireDefault(_map);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var singleCampaign = function singleCampaign(props) {
	  if (true) {
	    console.log('=== Render: Campaign/Single', props);
	  }
	  var camp = props.campaign;
	  return _react2.default.createElement(
	    'div',
	    { style: { padding: '20px', width: '100%', textAlign: 'center', boxSizing: 'border-box' } },
	    _react2.default.createElement(
	      'h2',
	      null,
	      'Name: ',
	      camp.name
	    ),
	    _react2.default.createElement(
	      'p',
	      null,
	      'Export ID: ',
	      camp._id
	    ),
	    _react2.default.createElement(_map2.default, { levels: camp.levels, setGame: props.setGame })
	  );
	};

	exports.default = singleCampaign;

/***/ },

/***/ 632:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(484);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactRedux = __webpack_require__(53);

	var _reactRouterRedux = __webpack_require__(269);

	var _actionTypes = __webpack_require__(574);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _actions = __webpack_require__(612);

	var _map = __webpack_require__(633);

	var _map2 = _interopRequireDefault(_map);

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Convert store state to props to be passed to component
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  // ownProps are props sent to the component
	  var lvs = state.campaign.levels;
	  console.log('map container', ownProps);
	  if (ownProps.levels) {
	    lvs = ownProps.levels;
	  }
	  return {
	    // Set props to send
	    levels: lvs,
	    editLevelIndex: state.campaign.editLevelIndex,
	    part: state.campaign.part
	  };
	};

	// Creates props that will dispatch actions
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Actions to send
	    setLevel: function setLevel(i, level) {
	      // TODO: Validate Levels

	      dispatch((0, _actions.setLevel)(i, level));
	    },
	    editLevel: function editLevel(i, part) {
	      dispatch((0, _actions.editLevel)(i, part));
	    }
	  };
	};

	var CampaignMapContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_map2.default);

	exports.default = CampaignMapContainer;

/***/ },

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(208);

	var _Paper = __webpack_require__(480);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _GridList = __webpack_require__(634);

	var _IconButton = __webpack_require__(438);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _modeEdit = __webpack_require__(638);

	var _modeEdit2 = _interopRequireDefault(_modeEdit);

	var _addLevel = __webpack_require__(639);

	var _addLevel2 = _interopRequireDefault(_addLevel);

	var _modal = __webpack_require__(642);

	var _modal2 = _interopRequireDefault(_modal);

	var _level = __webpack_require__(643);

	var _level2 = _interopRequireDefault(_level);

	var _editLevel = __webpack_require__(644);

	var _editLevel2 = _interopRequireDefault(_editLevel);

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  root: {
	    display: 'flex',
	    flexWrap: 'wrap',
	    justifyContent: 'center'
	  },
	  gridList: {
	    display: 'flex',
	    flexWrap: 'nowrap',
	    overflowX: 'auto',
	    width: '100%'
	  },
	  gridTile: {
	    display: 'flex',
	    alignItems: 'center',
	    justifyContent: 'center'
	  },
	  gridTileSplit: {
	    display: 'flex',
	    flexDirection: 'column',
	    alignItems: 'center',
	    justifyContent: 'center'
	  }
	};

	var CampaignMap = function (_React$Component) {
	  _inherits(CampaignMap, _React$Component);

	  function CampaignMap(props) {
	    _classCallCheck(this, CampaignMap);

	    return _possibleConstructorReturn(this, (CampaignMap.__proto__ || Object.getPrototypeOf(CampaignMap)).call(this, props));
	  }

	  _createClass(CampaignMap, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      console.log('map will', nextProps);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var isEditing = false;
	      if (this.props.isEditing) {
	        isEditing = true;
	      }
	      var gridLevels = this.props.levels.map(function (level, i) {
	        var titlebg = void 0;
	        switch (level.state) {
	          case _constants2.default.c.SINGLE:
	            switch (level.levelState) {
	              case _constants2.default.c.levelState.needsSave:
	                titlebg = 'rgba(255, 0, 0, 0.6)';
	                break;
	              case _constants2.default.c.levelState.saved:
	              case _constants2.default.c.levelState.completed:
	                titlebg = 'rgba(0, 155, 0, 0.6)';
	                break;
	              case _constants2.default.c.levelState.active:
	                titlebg = 'rgba(0, 0, 255, 0.6)';
	                break;
	              default:
	              // Do nothing
	            }
	            return _react2.default.createElement(
	              _GridList.GridTile,
	              { key: i, style: styles.gridTile,
	                title: 'Level: ' + (i + 1),
	                titleBackground: titlebg,
	                titlePosition: 'top'
	              },
	              _react2.default.createElement(_level2.default, { isEditing: isEditing, level: level, lvNum: i, part: 0,
	                editLevel: _this2.props.editLevel,
	                setGame: _this2.props.setGame })
	            );
	          case _constants2.default.c.SPLIT:
	            var temp = void 0;
	            // Annoying set the correct priority color
	            if (level.part1.levelState && level.part1.levelState === _constants2.default.c.levelState.needsSave || level.part2.levelState && level.part2.levelState === _constants2.default.c.levelState.needsSave) {
	              temp = 'rgba(255, 0, 0, 0.6)';
	            } else if (level.part1.levelState && level.part1.levelState === _constants2.default.c.levelState.active || level.part2.levelState && level.part2.levelState === _constants2.default.c.levelState.active) {
	              temp = 'rgba(0, 0, 255, 0.6)';
	            } else if (level.part1.levelState && level.part1.levelState === _constants2.default.c.levelState.completed || level.part1.levelState === _constants2.default.c.levelState.saved || level.part2.levelState && level.part2.levelState === _constants2.default.c.levelState.completed || level.part2.levelState === _constants2.default.c.levelState.saved) {
	              temp = 'rgba(0, 155, 0, 0.6)';
	            } else {}
	            return _react2.default.createElement(
	              _GridList.GridTile,
	              { key: i, style: styles.gridTileSplit,
	                title: 'Level: ' + (i + 1),
	                titleBackground: temp,
	                titlePosition: 'top'
	              },
	              _react2.default.createElement(_level2.default, { isEditing: isEditing, level: level, lvNum: i, part: 1,
	                editLevel: _this2.props.editLevel,
	                setGame: _this2.props.setGame }),
	              _react2.default.createElement(_level2.default, { isEditing: isEditing, level: level, lvNum: i, part: 2,
	                editLevel: _this2.props.editLevel,
	                setGame: _this2.props.setGame })
	            );
	          case _constants2.default.c.READY:
	            if (isEditing) {
	              return _react2.default.createElement(
	                _GridList.GridTile,
	                {
	                  key: i,
	                  style: { display: 'flex', justifyContent: 'center' }
	                },
	                _react2.default.createElement(_addLevel2.default, { setLevel: _this2.props.setLevel, index: i })
	              );
	            }
	          case _constants2.default.c.EMPTY:
	            return _react2.default.createElement(_GridList.GridTile, { key: i, style: styles.gridTile });
	          default:
	          // Do nothing
	        }
	      });

	      return _react2.default.createElement(
	        _Paper2.default,
	        { zDepth: 1, style: styles.root },
	        _react2.default.createElement(
	          _GridList.GridList,
	          {
	            style: styles.gridList,
	            cellHeight: 300
	          },
	          gridLevels
	        ),
	        _react2.default.createElement(_editLevel2.default, null)
	      );
	    }
	  }]);

	  return CampaignMap;
	}(_react2.default.Component);

	exports.default = CampaignMap;
	;

/***/ },

/***/ 638:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _pure = __webpack_require__(469);

	var _pure2 = _interopRequireDefault(_pure);

	var _SvgIcon = __webpack_require__(478);

	var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var EditorModeEdit = function EditorModeEdit(props) {
	  return _react2.default.createElement(
	    _SvgIcon2.default,
	    props,
	    _react2.default.createElement('path', { d: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' })
	  );
	};
	EditorModeEdit = (0, _pure2.default)(EditorModeEdit);
	EditorModeEdit.displayName = 'EditorModeEdit';
	EditorModeEdit.muiName = 'SvgIcon';

	exports.default = EditorModeEdit;

/***/ },

/***/ 639:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _FloatingActionButton = __webpack_require__(640);

	var _FloatingActionButton2 = _interopRequireDefault(_FloatingActionButton);

	var _add = __webpack_require__(628);

	var _add2 = _interopRequireDefault(_add);

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  display: 'flex',
	  flexDirection: 'column',
	  alignItems: 'center',
	  justifyContent: 'space-around'
	};

	var AddLevel = function (_React$Component) {
	  _inherits(AddLevel, _React$Component);

	  function AddLevel(props) {
	    _classCallCheck(this, AddLevel);

	    return _possibleConstructorReturn(this, (AddLevel.__proto__ || Object.getPrototypeOf(AddLevel)).call(this, props));
	  }

	  _createClass(AddLevel, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      console.log('add level will', nextProps);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      console.log('flag');
	      return _react2.default.createElement(
	        'div',
	        { style: styles },
	        _react2.default.createElement(
	          _FloatingActionButton2.default,
	          {
	            mini: true,
	            secondary: true,
	            disabled: this.props.index === 0 || this.props.index === _constants2.default.c.MAX_LEVELS - 1,
	            onTouchTap: function onTouchTap() {
	              var lv = {
	                state: _constants2.default.c.SPLIT,
	                part1: {
	                  wpm: 0,
	                  acc: 0,
	                  difficulty: 2,
	                  timer: false,
	                  levelState: _constants2.default.c.levelState.needsSave
	                },
	                part2: {
	                  wpm: 0,
	                  acc: 0,
	                  difficulty: 2,
	                  timer: false,
	                  levelState: _constants2.default.c.levelState.needsSave
	                }
	              };
	              console.log('FAB1 sending', _this2.props.index, lv);
	              _this2.props.setLevel(_this2.props.index, lv);
	            }
	          },
	          _react2.default.createElement(_add2.default, null)
	        ),
	        _react2.default.createElement(
	          _FloatingActionButton2.default,
	          {
	            onTouchTap: function onTouchTap() {
	              _this2.props.setLevel(_this2.props.index, {
	                state: _constants2.default.c.SINGLE,
	                wpm: 0,
	                acc: 0,
	                difficulty: 2,
	                timer: false,
	                levelState: _constants2.default.c.levelState.needsSave
	              });
	            }
	          },
	          _react2.default.createElement(_add2.default, null)
	        ),
	        _react2.default.createElement(
	          _FloatingActionButton2.default,
	          {
	            mini: true,
	            secondary: true,
	            disabled: this.props.index === 0 || this.props.index === _constants2.default.c.MAX_LEVELS - 1,
	            onTouchTap: function onTouchTap() {
	              var lv = {
	                state: _constants2.default.c.SPLIT,
	                part1: {
	                  wpm: 0,
	                  acc: 0,
	                  difficulty: 2,
	                  timer: false,
	                  levelState: _constants2.default.c.levelState.needsSave
	                },
	                part2: {
	                  wpm: 0,
	                  acc: 0,
	                  difficulty: 2,
	                  timer: false,
	                  levelState: _constants2.default.c.levelState.needsSave
	                }
	              };
	              console.log('FAB3 sending', _this2.props.index, lv);
	              _this2.props.setLevel(_this2.props.index, lv);
	            }
	          },
	          _react2.default.createElement(_add2.default, null)
	        )
	      );
	    }
	  }]);

	  return AddLevel;
	}(_react2.default.Component);

	exports.default = AddLevel;

/***/ },

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Dialog = __webpack_require__(498);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _FlatButton = __webpack_require__(513);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _TextField = __webpack_require__(536);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AccountModal = function (_React$Component) {
	  _inherits(AccountModal, _React$Component);

	  function AccountModal(props) {
	    _classCallCheck(this, AccountModal);

	    var _this = _possibleConstructorReturn(this, (AccountModal.__proto__ || Object.getPrototypeOf(AccountModal)).call(this, props));

	    _this.state = {
	      level: {
	        wpm: '',
	        acc: ''
	      }
	    };

	    _this.updateRequirements = _this.updateRequirements.bind(_this);
	    return _this;
	  }

	  _createClass(AccountModal, [{
	    key: 'updateRequirements',
	    value: function updateRequirements(e) {
	      var lv = {};
	      lv[e.target.name] = e.target.value;
	      this.setState({
	        level: Object.assign({}, this.state.level, lv)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Cancel',
	        primary: true,
	        onTouchTap: function onTouchTap() {
	          var temp = {
	            wpm: '',
	            acc: ''
	          };
	          _this2.props.updateModal(_constants2.default.c.CLOSED);
	          _this2.setState({
	            account: Object.assign({}, temp)
	          });
	        }
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: 'Submit',
	        onTouchTap: function onTouchTap() {
	          _this2.props.setLevel(_this2.props.index, {
	            wpm: parseInt(_this2.state.level.wpm),
	            acc: parseInt(_this2.state.level.acc),
	            type: _this2.props.levelType
	          });
	          _this2.setState({
	            level: {
	              wpm: '',
	              acc: ''
	            }
	          });
	          _this2.props.updateModal(_constants2.default.c.CLOSED);
	        }
	      })];

	      return _react2.default.createElement(
	        _Dialog2.default,
	        {
	          title: 'Modal',
	          modal: false,
	          actions: actions,
	          open: this.props.modalState,
	          onRequestClose: function onRequestClose() {
	            return _this2.props.updateModal(_constants2.default.c.CLOSED);
	          }
	        },
	        _react2.default.createElement(_TextField2.default, {
	          name: 'wpm',
	          floatingLabelText: 'Words per Minute',
	          value: this.state.level.wpm,
	          onChange: this.updateRequirements
	        }),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(_TextField2.default, {
	          name: 'acc',
	          floatingLabelText: 'Accuracy',
	          value: this.state.level.acc,
	          onChange: this.updateRequirements
	        })
	      );
	    }
	  }]);

	  return AccountModal;
	}(_react2.default.Component);

	exports.default = AccountModal;


	AccountModal.contextTypes = {
	  router: _react2.default.PropTypes.object
	};

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(586);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _IconButton = __webpack_require__(438);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _modeEdit = __webpack_require__(638);

	var _modeEdit2 = _interopRequireDefault(_modeEdit);

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MapLevel = function MapLevel(props) {
	  console.log('=== Render: campaign/map/level', props);

	  var styles = {
	    root: {
	      margin: '20px',
	      display: 'flex',
	      flexDirection: 'column',
	      alignItems: 'center',
	      border: '3px solid rgba(0, 0, 0, 0.5)',
	      borderRadius: '50%'
	    },
	    textfield: {
	      width: '80%'
	    }
	  };
	  var lv = {};
	  lv.wpm = props.level.wpm;
	  lv.acc = props.level.acc;
	  lv.difficulty = props.level.difficulty;
	  lv.timer = props.level.timer;
	  var tooltipPos = 'bottom-center';
	  lv.levelState = props.level.levelState;

	  switch (props.part) {
	    case 1:
	      lv.wpm = props.level.part1.wpm;
	      lv.acc = props.level.part1.acc;
	      lv.levelState = props.level.part1.levelState;
	      break;
	    case 2:
	      lv.wpm = props.level.part2.wpm;
	      lv.acc = props.level.part2.acc;
	      lv.levelState = props.level.part2.levelState;
	      tooltipPos = 'top-center';
	      break;
	    default:
	    // Do nothing
	  }

	  var classes = (0, _classnames2.default)({
	    'level': true,
	    'pulse-red': lv.levelState === _constants2.default.c.levelState.needsSave,
	    'pulse-green': lv.levelState === _constants2.default.c.levelState.saved || lv.levelState === _constants2.default.c.levelState.completed,
	    'pulse-blue': lv.levelState === _constants2.default.c.levelState.active
	  });

	  return _react2.default.createElement(
	    'div',
	    { style: styles.root },
	    _react2.default.createElement(
	      _IconButton2.default,
	      {
	        className: classes,
	        tooltip: 'wpm: ' + lv.wpm + ' \nacc: ' + lv.acc,
	        tooltipPosition: tooltipPos,
	        onTouchTap: function onTouchTap() {
	          if (props.isEditing) {
	            props.editLevel(props.lvNum, props.part);
	          } else {
	            props.setGame(lv);
	          }
	        }
	      },
	      props.isEditing ? _react2.default.createElement(_modeEdit2.default, null) : props.lvNum
	    )
	  );
	};

	exports.default = MapLevel;

/***/ },

/***/ 644:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(53);

	var _reactRouterRedux = __webpack_require__(269);

	var _actionTypes = __webpack_require__(574);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _actions = __webpack_require__(612);

	var _editLevel2 = __webpack_require__(645);

	var _editLevel3 = _interopRequireDefault(_editLevel2);

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Convert store state to props to be passed to component
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Set props to send
	    levels: state.campaign.levels,
	    editLevelIndex: state.campaign.editLevelIndex,
	    part: state.campaign.part
	  };
	};

	// Creates props that will dispatch actions
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Actions to send
	    setLevel: function setLevel(i, level) {
	      // TODO: Validate Levels

	      dispatch((0, _actions.setLevel)(i, level));
	    },
	    updateLevelState: function (_updateLevelState) {
	      function updateLevelState(_x, _x2) {
	        return _updateLevelState.apply(this, arguments);
	      }

	      updateLevelState.toString = function () {
	        return _updateLevelState.toString();
	      };

	      return updateLevelState;
	    }(function (i, levelState) {
	      dispatch(updateLevelState(i, levelState));
	    }),
	    editLevel: function editLevel(i, part) {
	      dispatch((0, _actions.editLevel)(i, part));
	    }
	  };
	};

	var EditLevelContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_editLevel3.default);

	exports.default = EditLevelContainer;

/***/ },

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(586);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Paper = __webpack_require__(480);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _TextField = __webpack_require__(536);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _RaisedButton = __webpack_require__(599);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _Slider = __webpack_require__(646);

	var _Slider2 = _interopRequireDefault(_Slider);

	var _Toggle = __webpack_require__(649);

	var _Toggle2 = _interopRequireDefault(_Toggle);

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditLevel = function (_React$Component) {
	  _inherits(EditLevel, _React$Component);

	  function EditLevel(props) {
	    _classCallCheck(this, EditLevel);

	    var _this = _possibleConstructorReturn(this, (EditLevel.__proto__ || Object.getPrototypeOf(EditLevel)).call(this, props));

	    _this.state = {
	      lv: {
	        wpm: '',
	        acc: '',
	        difficulty: 2,
	        timer: false
	      },
	      errorMsg: {
	        wpm: '',
	        acc: ''
	      }
	    };

	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.handleSliderChange = _this.handleSliderChange.bind(_this);
	    return _this;
	  }

	  _createClass(EditLevel, [{
	    key: 'handleChange',
	    value: function handleChange(e) {
	      var lv = {};
	      var value = e.target.value;
	      switch (e.target.name) {
	        case 'timer':
	          value = e.target.checked;
	          break;
	        default:
	        // Do nothing
	      }
	      lv[e.target.name] = value;
	      this.setState({
	        lv: Object.assign({}, this.state.lv, lv)
	      });
	    }
	  }, {
	    key: 'handleSliderChange',
	    value: function handleSliderChange(e, v) {
	      var lv = {
	        difficulty: v
	      };

	      this.setState({
	        lv: Object.assign({}, this.state.lv, lv)
	      });
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      console.log('will mount', nextProps);
	      var lv = nextProps.levels[nextProps.editLevelIndex === -1 ? 0 : nextProps.editLevelIndex];
	      switch (nextProps.part) {
	        case 1:
	          lv.wpm = lv.part1.wpm;
	          lv.acc = lv.part1.acc;
	          lv.difficulty = lv.part1.difficulty;
	          lv.timer = lv.part1.timer;
	          break;
	        case 2:
	          lv.wpm = lv.part2.wpm;
	          lv.acc = lv.part2.acc;
	          lv.difficulty = lv.part2.difficulty;
	          lv.timer = lv.part2.timer;
	          break;
	        default:
	        // Do nothing
	      }
	      console.log(lv);
	      this.setState({
	        lv: lv
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var styles = {
	        root: {
	          width: '100%',
	          padding: '20px',
	          display: this.props.editLevelIndex !== -1 ? 'flex' : 'none',
	          flexDirection: 'column',
	          alignItems: 'center'
	        },
	        children: {
	          display: 'flex',
	          alignItems: 'center'
	        },
	        slider: {
	          width: '40%'
	        }
	      };
	      return _react2.default.createElement(
	        _Paper2.default,
	        { zDepth: 2, style: styles.root },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Level ',
	          this.props.editLevelIndex + 1,
	          this.props.part === 0 ? '' : '.' + this.props.part
	        ),
	        _react2.default.createElement(
	          'h3',
	          null,
	          'Passing Requirements'
	        ),
	        _react2.default.createElement(_TextField2.default, {
	          name: 'wpm',
	          value: this.state.lv.wpm,
	          floatingLabelText: 'Required Words Per Minute',
	          errorText: this.state.errorMsg.wpm,
	          onChange: this.handleChange
	        }),
	        _react2.default.createElement('br', null),
	        _react2.default.createElement(_TextField2.default, {
	          name: 'acc',
	          value: this.state.lv.acc,
	          floatingLabelText: 'Required Accuracy %',
	          errorText: this.state.errorMsg.acc,
	          onChange: this.handleChange
	        }),
	        _react2.default.createElement(
	          'div',
	          { style: {
	              display: 'flex',
	              flexDirection: 'column',
	              justifyContent: 'center'
	            } },
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'p',
	              null,
	              'Difficulty'
	            ),
	            _react2.default.createElement(_Slider2.default, {
	              name: 'difficulty',
	              value: this.state.lv.difficulty,
	              min: 1,
	              max: 4,
	              step: 1,
	              onChange: this.handleSliderChange
	            })
	          ),
	          _react2.default.createElement(_Toggle2.default, {
	            label: 'Timer',
	            name: 'timer',
	            toggled: this.state.lv.timer,
	            onToggle: this.handleChange
	          })
	        ),
	        _react2.default.createElement(
	          'div',
	          { style: { margin: '20px' } },
	          _react2.default.createElement(
	            _RaisedButton2.default,
	            {
	              onTouchTap: function onTouchTap() {
	                var error = false;
	                var errorMsg = {
	                  wpm: '',
	                  acc: ''
	                };
	                var lv = _this2.props.levels[_this2.props.editLevelIndex];
	                if (isNaN(parseInt(_this2.state.lv.wpm))) {
	                  errorMsg.wpm = 'Requires a Number';
	                  error = true;
	                }

	                if (isNaN(parseInt(_this2.state.lv.acc))) {
	                  errorMsg.acc = 'Requires a Number';
	                  error = true;
	                }

	                if (!error) {
	                  switch (_this2.props.part) {
	                    case 0:
	                      lv.wpm = _this2.state.lv.wpm;
	                      lv.acc = _this2.state.lv.acc;
	                      lv.difficulty = _this2.state.lv.difficulty;
	                      lv.timer = _this2.state.lv.timer;
	                      lv.levelState = _constants2.default.c.levelState.saved;
	                      break;
	                    case 1:
	                      lv.part1.wpm = _this2.state.lv.wpm;
	                      lv.part1.acc = _this2.state.lv.acc;
	                      lv.part1.difficulty = _this2.state.lv.difficulty;
	                      lv.part1.timer = _this2.state.lv.timer;
	                      lv.part1.levelState = _constants2.default.c.levelState.saved;
	                      lv.wpm = -1;
	                      lv.acc = -1;
	                      lv.difficulty = -1;
	                      lv.timer = -1;
	                      break;
	                    case 2:
	                      lv.part2.wpm = _this2.state.lv.wpm;
	                      lv.part2.acc = _this2.state.lv.acc;;
	                      lv.part2.difficulty = _this2.state.lv.difficulty;
	                      lv.part2.timer = _this2.state.lv.timer;
	                      lv.part2.levelState = _constants2.default.c.levelState.saved;
	                      lv.wpm = -1;
	                      lv.acc = -1;
	                      lv.difficulty = -1;
	                      lv.timer = -1;
	                      break;
	                    default:
	                    // Do nothing
	                  }
	                  _this2.props.setLevel(_this2.props.editLevelIndex, lv);
	                  _this2.props.editLevel(-1, 0);
	                } else {
	                  _this2.setState({
	                    errorMsg: errorMsg
	                  });
	                }
	              }
	            },
	            'Save'
	          ),
	          _react2.default.createElement(
	            _RaisedButton2.default,
	            {
	              onTouchTap: function onTouchTap() {
	                return _this2.props.editLevel(-1, 0);
	              }
	            },
	            'Cancel'
	          )
	        )
	      );
	    }
	  }]);

	  return EditLevel;
	}(_react2.default.Component);

	exports.default = EditLevel;

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(484);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactRedux = __webpack_require__(53);

	var _reactRouterRedux = __webpack_require__(269);

	var _actionTypes = __webpack_require__(574);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _actions = __webpack_require__(612);

	var _actions2 = __webpack_require__(490);

	var _createCampaign = __webpack_require__(652);

	var _createCampaign2 = _interopRequireDefault(_createCampaign);

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Convert store state to props to be passed to component
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Set props to send
	    player: state.account.player,
	    levels: state.campaign.levels,
	    isCreating: state.campaign.isCreating
	  };
	};

	// Creates props that will dispatch actions
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Actions to send
	    addCampaign: function addCampaign(camp, user) {
	      // create campaign on server
	      _superagent2.default.post(_constants2.default.r.ADD_CAMPAIGN).send({
	        campaign: camp,
	        username: user
	      }).end(function (err, res) {
	        if (err) {
	          return console.log(err);
	        }

	        var data = JSON.parse(res.text);
	        dispatch((0, _actions2.updatePlayer)(data.user));
	      });
	    },
	    updateCreating: function updateCreating(cBool) {
	      dispatch((0, _actions.isCreating)(cBool));
	    },
	    resetLevel: function resetLevel() {
	      dispatch((0, _actions.resetLevel)());
	    },
	    editLevel: function editLevel(i, part) {
	      dispatch((0, _actions.editLevel)(i, part));
	    },
	    updateUser: function updateUser(player) {
	      dispatch((0, _actions2.updatePlayer)(player));
	    }
	  };
	};

	var CreateCampaignContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_createCampaign2.default);

	exports.default = CreateCampaignContainer;

/***/ },

/***/ 652:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _superagent = __webpack_require__(484);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(208);

	var _classnames = __webpack_require__(586);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _Paper = __webpack_require__(480);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _Dialog = __webpack_require__(498);

	var _Dialog2 = _interopRequireDefault(_Dialog);

	var _Checkbox = __webpack_require__(508);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _TextField = __webpack_require__(536);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _FlatButton = __webpack_require__(513);

	var _FlatButton2 = _interopRequireDefault(_FlatButton);

	var _RaisedButton = __webpack_require__(599);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _map = __webpack_require__(632);

	var _map2 = _interopRequireDefault(_map);

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	var _students = __webpack_require__(653);

	var _students2 = _interopRequireDefault(_students);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CreateCampaign = function (_React$Component) {
	  _inherits(CreateCampaign, _React$Component);

	  function CreateCampaign(props) {
	    _classCallCheck(this, CreateCampaign);

	    var _this = _possibleConstructorReturn(this, (CreateCampaign.__proto__ || Object.getPrototypeOf(CreateCampaign)).call(this, props));

	    _this.state = {
	      name: '',
	      camp_id: '',
	      open: false,
	      isTeacherCampaign: false,
	      studentList: []
	    };

	    _this.handleChange = _this.handleChange.bind(_this);
	    _this.importCampaign = _this.importCampaign.bind(_this);
	    _this.importModal = _this.importModal.bind(_this);
	    _this.updateCampId = _this.updateCampId.bind(_this);
	    _this.reset = _this.reset.bind(_this);
	    _this.saveCampaign = _this.saveCampaign.bind(_this);
	    _this.isTeacherCampaign = _this.isTeacherCampaign.bind(_this);
	    _this.getStudents = _this.getStudents.bind(_this);
	    return _this;
	  }

	  _createClass(CreateCampaign, [{
	    key: 'getStudents',
	    value: function getStudents(list) {
	      this.setState({
	        studentList: list
	      });
	    }
	  }, {
	    key: 'importModal',
	    value: function importModal() {
	      var t = !this.state.open;
	      this.setState({
	        open: t
	      });
	    }
	  }, {
	    key: 'isTeacherCampaign',
	    value: function isTeacherCampaign(e, b) {
	      this.setState({
	        isTeacherCampaign: b
	      });
	    }
	  }, {
	    key: 'importCampaign',
	    value: function importCampaign() {
	      var _this2 = this;

	      // import campaign
	      _superagent2.default.post('/api/1/account/addCampaign').send({
	        campId: this.state.camp_id,
	        username: this.props.player.name
	      }).end(function (err, res) {
	        if (err) {
	          console.log('error', err);
	          return;
	        }

	        var data = JSON.parse(res.text);
	        console.log(data);
	        if (!data.error) {
	          // update store with user
	          _this2.props.updateUser(data.user);
	        }
	      });
	      this.importModal();
	      this.reset();
	    }
	  }, {
	    key: 'updateCampId',
	    value: function updateCampId(e) {
	      this.setState({
	        camp_id: e.target.value
	      });
	    }
	  }, {
	    key: 'saveCampaign',
	    value: function saveCampaign() {
	      // TODO: Check to make sure it's a valid level config. ie has levels and ends single
	      // If all levels added are ready to go
	      if (this.state.name !== '' && this.props.levels.every(function (lv) {
	        if (lv.state === _constants2.default.c.SINGLE) {
	          return lv.levelState === _constants2.default.c.levelState.saved;
	        } else if (lv.state === _constants2.default.c.SPLIT) {
	          return lv.part1.levelState && lv.part1.levelState === _constants2.default.c.levelState.saved && lv.part2.levelState && lv.part2.levelState === _constants2.default.c.levelState.saved;
	        }
	        return true;
	      })) {
	        console.log('all levels saved');
	        console.log(this.props);
	        var tempLevels = this.props.levels.map(function (lv, i) {
	          console.log(lv, i);
	          if (lv.state === _constants2.default.c.SINGLE) {
	            lv.levelState = i === 0 ? _constants2.default.c.levelState.active : '';
	          } else if (lv.state === _constants2.default.c.SPLIT) {
	            lv.part1.levelState = '';
	            lv.part2.levelState = '';
	          }
	          return lv;
	        });
	        var camp = {
	          levels: tempLevels,
	          name: this.state.name
	        };
	        if (this.state.isTeacherCampaign) {
	          camp['students'] = this.state.studentList;
	        }
	        this.props.addCampaign(camp, this.props.player.name);
	        this.reset();
	      } else {
	        // TODO Display error
	        console.log('levels need to be saved still');
	      }
	    }
	  }, {
	    key: 'reset',
	    value: function reset() {
	      console.log('campaign/create: Resetting State');
	      this.setState({
	        name: '',
	        camp_id: ''
	      });
	      this.props.updateCreating(false);
	      this.props.resetLevel();
	      this.props.editLevel(-1, 0);
	    }
	  }, {
	    key: 'handleChange',
	    value: function handleChange(e) {
	      this.setState({
	        name: e.target.value
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var c = (0, _classnames2.default)({
	        'content': true
	      });

	      var styles = {
	        root: {
	          display: this.props.isCreating ? 'block' : 'none'
	        },
	        inputs: {
	          display: 'flex',
	          justifyContent: 'center'
	        },
	        buttons: {
	          display: 'flex',
	          marginLeft: '100px',
	          alignItems: 'center'
	        },
	        btn: {
	          margin: '10px'
	        }
	      };

	      var actions = [_react2.default.createElement(_FlatButton2.default, {
	        label: 'Cancel',
	        primary: true,
	        onTouchTap: function onTouchTap() {
	          return _this3.importModal();
	        }
	      }), _react2.default.createElement(_FlatButton2.default, {
	        label: 'Submit',
	        onTouchTap: function onTouchTap() {
	          _this3.importCampaign();
	        }
	      })];

	      return _react2.default.createElement(
	        _Paper2.default,
	        { zDepth: 1, style: styles.root },
	        _react2.default.createElement(
	          'div',
	          { style: styles.inputs },
	          _react2.default.createElement(_TextField2.default, {
	            value: this.state.name,
	            onChange: this.handleChange,
	            floatingLabelText: 'Campaign Name'
	          }),
	          _react2.default.createElement(
	            'div',
	            { style: styles.buttons },
	            _react2.default.createElement(_RaisedButton2.default, { style: styles.btn,
	              label: 'Save',
	              onTouchTap: function onTouchTap() {
	                _this3.saveCampaign();
	              }
	            }),
	            _react2.default.createElement(_RaisedButton2.default, { style: styles.btn,
	              label: 'Cancel',
	              onTouchTap: function onTouchTap() {
	                _this3.reset();
	              }
	            }),
	            _react2.default.createElement(_RaisedButton2.default, { style: styles.btn,
	              label: 'Import',
	              onTouchTap: function onTouchTap() {
	                _this3.importModal();
	              }
	            }),
	            this.props.player.isTeacher ? _react2.default.createElement(_Checkbox2.default, {
	              label: 'Teacher Campaign?',
	              onCheck: this.isTeacherCampaign,
	              style: { width: '300px' }
	            }) : null
	          )
	        ),
	        _react2.default.createElement(_map2.default, { isEditing: true }),
	        this.state.isTeacherCampaign ? _react2.default.createElement(_students2.default, { getStudents: this.getStudents, me: this.props.player.name }) : null,
	        _react2.default.createElement(
	          _Dialog2.default,
	          {
	            title: 'Modal',
	            modal: false,
	            actions: actions,
	            open: this.state.open,
	            onRequestClose: function onRequestClose() {
	              return _this3.importModal();
	            }
	          },
	          _react2.default.createElement(_TextField2.default, {
	            name: 'campId',
	            floatingLabelText: 'Campaign Id',
	            value: this.state.camp_id,
	            onChange: this.updateCampId
	          })
	        )
	      );
	    }
	  }]);

	  return CreateCampaign;
	}(_react2.default.Component);

	exports.default = CreateCampaign;
	;

/***/ },

/***/ 653:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _superagent = __webpack_require__(484);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactAutosuggest = __webpack_require__(654);

	var _reactAutosuggest2 = _interopRequireDefault(_reactAutosuggest);

	var _Paper = __webpack_require__(480);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _RaisedButton = __webpack_require__(599);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _List = __webpack_require__(614);

	var _map = __webpack_require__(632);

	var _map2 = _interopRequireDefault(_map);

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var students = [];
	// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
	function escapeRegexCharacters(str) {
	  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function getSuggestions(value) {
	  var escapedValue = escapeRegexCharacters(value.trim());

	  if (escapedValue === '') {
	    return [];
	  }

	  var regex = new RegExp('^' + escapedValue, 'i');

	  return students.filter(function (student) {
	    return regex.test(student);
	  });
	}

	function getSuggestionValue(suggestion) {
	  return suggestion;
	}

	function renderSuggestion(suggestion) {
	  return _react2.default.createElement(
	    'span',
	    null,
	    suggestion
	  );
	}

	var Students = function (_React$Component) {
	  _inherits(Students, _React$Component);

	  function Students(props) {
	    _classCallCheck(this, Students);

	    var _this = _possibleConstructorReturn(this, (Students.__proto__ || Object.getPrototypeOf(Students)).call(this, props));

	    _this.state = {
	      value: '',
	      suggestions: [],
	      list: []
	    };

	    _this.onChange = _this.onChange.bind(_this);
	    _this.onSuggestionsFetchRequested = _this.onSuggestionsFetchRequested.bind(_this);
	    _this.onSuggestionsClearRequested = _this.onSuggestionsClearRequested.bind(_this);
	    _this.addStudent = _this.addStudent.bind(_this);

	    _superagent2.default.get('/api/1/account/all').end(function (err, res) {
	      if (err) {
	        return console.log(err);
	      }

	      students = JSON.parse(res.text);
	    });
	    return _this;
	  }

	  _createClass(Students, [{
	    key: 'addStudent',
	    value: function addStudent() {
	      var _this2 = this;

	      var t = this.state.list;
	      // If the student isn't already on the list
	      if (!t.find(function (s) {
	        return s == _this2.state.value;
	      }) && this.state.value != this.props.me && this.state.value != "") {
	        t.push(this.state.value);
	        this.props.getStudents(t);
	        this.setState({
	          list: t
	        });
	      }
	    }
	  }, {
	    key: 'onChange',
	    value: function onChange(event, _ref) {
	      var newValue = _ref.newValue,
	          method = _ref.method;

	      this.setState({
	        value: newValue
	      });
	    }
	  }, {
	    key: 'onSuggestionsFetchRequested',
	    value: function onSuggestionsFetchRequested(_ref2) {
	      var value = _ref2.value;

	      this.setState({
	        suggestions: getSuggestions(value)
	      });
	    }
	  }, {
	    key: 'onSuggestionsClearRequested',
	    value: function onSuggestionsClearRequested() {
	      this.setState({
	        suggestions: []
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var _state = this.state,
	          value = _state.value,
	          suggestions = _state.suggestions;

	      var inputProps = {
	        placeholder: "Student Name",
	        value: value,
	        onChange: this.onChange
	      };
	      var studentList = [];
	      this.state.list.forEach(function (s, i) {
	        studentList.push(_react2.default.createElement(_List.ListItem, { key: i, primaryText: s }));
	      });

	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          _Paper2.default,
	          { style: { paddingBottom: "20px", paddingLeft: "20px" } },
	          _react2.default.createElement(_RaisedButton2.default, {
	            label: 'Add',
	            style: { marginBottom: "20px", marginTop: "20px" },
	            onTouchTap: function onTouchTap() {
	              _this3.addStudent();
	            } }),
	          _react2.default.createElement(_reactAutosuggest2.default, {
	            suggestions: suggestions,
	            onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
	            onSuggestionsClearRequested: this.onSuggestionsClearRequested,
	            getSuggestionValue: getSuggestionValue,
	            renderSuggestion: renderSuggestion,
	            inputProps: inputProps })
	        ),
	        _react2.default.createElement(
	          _List.List,
	          null,
	          studentList.length > 0 ? _react2.default.createElement(_List.ListItem, {
	            primaryText: 'Student List',
	            initiallyOpen: true,
	            primaryTogglesNestedList: true,
	            nestedItems: studentList }) : null
	        )
	      );
	    }
	  }]);

	  return Students;
	}(_react2.default.Component);

	exports.default = Students;
	;

/***/ },

/***/ 654:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(655).default;

/***/ },

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _redux = __webpack_require__(32);

	var _redux2 = __webpack_require__(656);

	var _redux3 = _interopRequireDefault(_redux2);

	var _Autosuggest = __webpack_require__(657);

	var _Autosuggest2 = _interopRequireDefault(_Autosuggest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var alwaysTrue = function alwaysTrue() {
	  return true;
	};
	var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions(value) {
	  return value.trim().length > 0;
	};
	var defaultTheme = {
	  container: 'react-autosuggest__container',
	  containerOpen: 'react-autosuggest__container--open',
	  input: 'react-autosuggest__input',
	  suggestionsContainer: 'react-autosuggest__suggestions-container',
	  suggestionsList: 'react-autosuggest__suggestions-list',
	  suggestion: 'react-autosuggest__suggestion',
	  suggestionFocused: 'react-autosuggest__suggestion--focused',
	  sectionContainer: 'react-autosuggest__section-container',
	  sectionTitle: 'react-autosuggest__section-title'
	};

	var mapToAutowhateverTheme = function mapToAutowhateverTheme(theme) {
	  var result = {};

	  for (var key in theme) {
	    switch (key) {
	      case 'suggestionsContainer':
	        result['itemsContainer'] = theme[key];
	        break;

	      case 'suggestion':
	        result['item'] = theme[key];
	        break;

	      case 'suggestionFocused':
	        result['itemFocused'] = theme[key];
	        break;

	      case 'suggestionsList':
	        result['itemsList'] = theme[key];
	        break;

	      default:
	        result[key] = theme[key];
	    }
	  }

	  return result;
	};

	var AutosuggestContainer = function (_Component) {
	  _inherits(AutosuggestContainer, _Component);

	  function AutosuggestContainer(_ref) {
	    var alwaysRenderSuggestions = _ref.alwaysRenderSuggestions;

	    _classCallCheck(this, AutosuggestContainer);

	    var _this = _possibleConstructorReturn(this, (AutosuggestContainer.__proto__ || Object.getPrototypeOf(AutosuggestContainer)).call(this));

	    _this.storeInputReference = function (input) {
	      _this.input = input;
	    };

	    var initialState = {
	      isFocused: false,
	      isCollapsed: !alwaysRenderSuggestions,
	      focusedSectionIndex: null,
	      focusedSuggestionIndex: null,
	      valueBeforeUpDown: null
	    };

	    _this.store = (0, _redux.createStore)(_redux3.default, initialState);
	    return _this;
	  }

	  _createClass(AutosuggestContainer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var suggestions = _props.suggestions;
	      var onSuggestionsFetchRequested = _props.onSuggestionsFetchRequested;
	      var onSuggestionsClearRequested = _props.onSuggestionsClearRequested;
	      var multiSection = _props.multiSection;
	      var shouldRenderSuggestions = _props.shouldRenderSuggestions;
	      var renderInputComponent = _props.renderInputComponent;
	      var renderSuggestionsContainer = _props.renderSuggestionsContainer;
	      var getSuggestionValue = _props.getSuggestionValue;
	      var renderSuggestion = _props.renderSuggestion;
	      var renderSectionTitle = _props.renderSectionTitle;
	      var getSectionSuggestions = _props.getSectionSuggestions;
	      var inputProps = _props.inputProps;
	      var onSuggestionSelected = _props.onSuggestionSelected;
	      var focusInputOnSuggestionClick = _props.focusInputOnSuggestionClick;
	      var focusFirstSuggestion = _props.focusFirstSuggestion;
	      var alwaysRenderSuggestions = _props.alwaysRenderSuggestions;
	      var theme = _props.theme;
	      var id = _props.id;


	      return _react2.default.createElement(_Autosuggest2.default, {
	        suggestions: suggestions,
	        onSuggestionsFetchRequested: onSuggestionsFetchRequested,
	        onSuggestionsClearRequested: onSuggestionsClearRequested,
	        multiSection: multiSection,
	        shouldRenderSuggestions: alwaysRenderSuggestions ? alwaysTrue : shouldRenderSuggestions,
	        alwaysRenderSuggestions: alwaysRenderSuggestions,
	        renderInputComponent: renderInputComponent,
	        renderSuggestionsContainer: renderSuggestionsContainer,
	        getSuggestionValue: getSuggestionValue,
	        renderSuggestion: renderSuggestion,
	        renderSectionTitle: renderSectionTitle,
	        getSectionSuggestions: getSectionSuggestions,
	        inputProps: inputProps,
	        onSuggestionSelected: onSuggestionSelected,
	        focusInputOnSuggestionClick: focusInputOnSuggestionClick,
	        focusFirstSuggestion: focusFirstSuggestion,
	        theme: mapToAutowhateverTheme(theme),
	        id: id,
	        inputRef: this.storeInputReference,
	        store: this.store
	      });
	    }
	  }]);

	  return AutosuggestContainer;
	}(_react.Component);

	AutosuggestContainer.propTypes = {
	  suggestions: _react.PropTypes.array.isRequired,
	  onSuggestionsFetchRequested: function onSuggestionsFetchRequested(props, propName) {
	    var onSuggestionsFetchRequested = props[propName];

	    if (typeof onSuggestionsFetchRequested !== 'function') {
	      throw new Error('\'onSuggestionsFetchRequested\' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp');
	    }
	  },
	  onSuggestionsClearRequested: function onSuggestionsClearRequested(props, propName) {
	    var onSuggestionsClearRequested = props[propName];

	    if (props.alwaysRenderSuggestions === false && typeof onSuggestionsClearRequested !== 'function') {
	      throw new Error('\'onSuggestionsClearRequested\' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp');
	    }
	  },
	  onSuggestionSelected: _react.PropTypes.func,
	  renderInputComponent: _react.PropTypes.func,
	  renderSuggestionsContainer: _react.PropTypes.func,
	  getSuggestionValue: _react.PropTypes.func.isRequired,
	  renderSuggestion: _react.PropTypes.func.isRequired,
	  inputProps: function inputProps(props, propName) {
	    var inputProps = props[propName];

	    if (!inputProps.hasOwnProperty('value')) {
	      throw new Error('\'inputProps\' must have \'value\'.');
	    }

	    if (!inputProps.hasOwnProperty('onChange')) {
	      throw new Error('\'inputProps\' must have \'onChange\'.');
	    }
	  },
	  shouldRenderSuggestions: _react.PropTypes.func,
	  alwaysRenderSuggestions: _react.PropTypes.bool,
	  multiSection: _react.PropTypes.bool,
	  renderSectionTitle: function renderSectionTitle(props, propName) {
	    var renderSectionTitle = props[propName];

	    if (props.multiSection === true && typeof renderSectionTitle !== 'function') {
	      throw new Error('\'renderSectionTitle\' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp');
	    }
	  },
	  getSectionSuggestions: function getSectionSuggestions(props, propName) {
	    var getSectionSuggestions = props[propName];

	    if (props.multiSection === true && typeof getSectionSuggestions !== 'function') {
	      throw new Error('\'getSectionSuggestions\' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp');
	    }
	  },
	  focusInputOnSuggestionClick: _react.PropTypes.bool,
	  focusFirstSuggestion: _react.PropTypes.bool,
	  theme: _react.PropTypes.object,
	  id: _react.PropTypes.string
	};
	AutosuggestContainer.defaultProps = {
	  shouldRenderSuggestions: defaultShouldRenderSuggestions,
	  alwaysRenderSuggestions: false,
	  multiSection: false,
	  focusInputOnSuggestionClick: true,
	  focusFirstSuggestion: false,
	  theme: defaultTheme,
	  id: '1'
	};
	exports.default = AutosuggestContainer;

/***/ },

/***/ 656:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var INPUT_FOCUSED = 'INPUT_FOCUSED';
	var INPUT_BLURRED = 'INPUT_BLURRED';
	var INPUT_CHANGED = 'INPUT_CHANGED';
	var UPDATE_FOCUSED_SUGGESTION = 'UPDATE_FOCUSED_SUGGESTION';
	var RESET_FOCUSED_SUGGESTION = 'RESET_FOCUSED_SUGGESTION';
	var REVEAL_SUGGESTIONS = 'REVEAL_SUGGESTIONS';
	var CLOSE_SUGGESTIONS = 'CLOSE_SUGGESTIONS';

	var inputFocused = function inputFocused(shouldRenderSuggestions) {
	  return {
	    type: INPUT_FOCUSED,
	    shouldRenderSuggestions: shouldRenderSuggestions
	  };
	};

	var inputBlurred = function inputBlurred(shouldRenderSuggestions) {
	  return {
	    type: INPUT_BLURRED,
	    shouldRenderSuggestions: shouldRenderSuggestions
	  };
	};

	var inputChanged = function inputChanged(shouldRenderSuggestions) {
	  return {
	    type: INPUT_CHANGED,
	    shouldRenderSuggestions: shouldRenderSuggestions
	  };
	};

	var updateFocusedSuggestion = function updateFocusedSuggestion(sectionIndex, suggestionIndex, value) {
	  return {
	    type: UPDATE_FOCUSED_SUGGESTION,
	    sectionIndex: sectionIndex,
	    suggestionIndex: suggestionIndex,
	    value: value
	  };
	};

	var resetFocusedSuggestion = function resetFocusedSuggestion() {
	  var shouldResetValueBeforeUpDown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
	  return {
	    type: RESET_FOCUSED_SUGGESTION,
	    shouldResetValueBeforeUpDown: shouldResetValueBeforeUpDown
	  };
	};

	var revealSuggestions = function revealSuggestions() {
	  return {
	    type: REVEAL_SUGGESTIONS
	  };
	};

	var closeSuggestions = function closeSuggestions() {
	  return {
	    type: CLOSE_SUGGESTIONS
	  };
	};

	var actionCreators = exports.actionCreators = {
	  inputFocused: inputFocused,
	  inputBlurred: inputBlurred,
	  inputChanged: inputChanged,
	  updateFocusedSuggestion: updateFocusedSuggestion,
	  resetFocusedSuggestion: resetFocusedSuggestion,
	  revealSuggestions: revealSuggestions,
	  closeSuggestions: closeSuggestions
	};

	var reducer = function reducer(state, action) {
	  switch (action.type) {
	    case INPUT_FOCUSED:
	      return _extends({}, state, {
	        isFocused: true,
	        isCollapsed: !action.shouldRenderSuggestions
	      });

	    case INPUT_BLURRED:
	      return _extends({}, state, {
	        isFocused: false,
	        focusedSectionIndex: null,
	        focusedSuggestionIndex: null,
	        valueBeforeUpDown: null,
	        isCollapsed: !action.shouldRenderSuggestions
	      });

	    case INPUT_CHANGED:
	      return _extends({}, state, {
	        focusedSectionIndex: null,
	        focusedSuggestionIndex: null,
	        valueBeforeUpDown: null,
	        isCollapsed: !action.shouldRenderSuggestions
	      });

	    case UPDATE_FOCUSED_SUGGESTION:
	      {
	        var sectionIndex = action.sectionIndex;
	        var suggestionIndex = action.suggestionIndex;
	        var value = action.value;
	        var valueBeforeUpDown = state.valueBeforeUpDown;


	        if (suggestionIndex === null) {
	          valueBeforeUpDown = null;
	        } else if (valueBeforeUpDown === null && typeof value !== 'undefined') {
	          valueBeforeUpDown = value;
	        }

	        return _extends({}, state, {
	          focusedSectionIndex: sectionIndex,
	          focusedSuggestionIndex: suggestionIndex,
	          valueBeforeUpDown: valueBeforeUpDown
	        });
	      }

	    case RESET_FOCUSED_SUGGESTION:
	      {
	        return _extends({}, state, {
	          focusedSectionIndex: null,
	          focusedSuggestionIndex: null,
	          valueBeforeUpDown: action.shouldResetValueBeforeUpDown ? null : state.valueBeforeUpDown
	        });
	      }

	    case REVEAL_SUGGESTIONS:
	      return _extends({}, state, {
	        isCollapsed: false
	      });

	    case CLOSE_SUGGESTIONS:
	      return _extends({}, state, {
	        focusedSectionIndex: null,
	        focusedSuggestionIndex: null,
	        valueBeforeUpDown: null,
	        isCollapsed: true
	      });

	    default:
	      return state;
	  }
	};

	exports.default = reducer;

/***/ },

/***/ 657:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(53);

	var _arrays = __webpack_require__(658);

	var _arrays2 = _interopRequireDefault(_arrays);

	var _redux = __webpack_require__(656);

	var _reactAutowhatever = __webpack_require__(659);

	var _reactAutowhatever2 = _interopRequireDefault(_reactAutowhatever);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    isFocused: state.isFocused,
	    isCollapsed: state.isCollapsed,
	    focusedSectionIndex: state.focusedSectionIndex,
	    focusedSuggestionIndex: state.focusedSuggestionIndex,
	    valueBeforeUpDown: state.valueBeforeUpDown
	  };
	};

	var Autosuggest = function (_Component) {
	  _inherits(Autosuggest, _Component);

	  function Autosuggest() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, Autosuggest);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Autosuggest.__proto__ || Object.getPrototypeOf(Autosuggest)).call.apply(_ref, [this].concat(args))), _this), _this.onDocumentMouseDown = function (event) {
	      _this.justClickedOnSuggestionsContainer = false;

	      var node = event.detail && event.detail.target || // This is for testing only. Please show me a better way to emulate this.
	      event.target;

	      do {
	        if (node.getAttribute('data-suggestion-index') !== null) {
	          // Suggestion was clicked
	          return;
	        }

	        if (node === _this.suggestionsContainer) {
	          // Something else inside suggestions container was clicked
	          _this.justClickedOnSuggestionsContainer = true;
	          return;
	        }

	        node = node.parentNode;
	      } while (node !== null && node !== document);
	    }, _this.storeReferences = function (autowhatever) {
	      if (autowhatever !== null) {
	        var input = autowhatever.input;


	        _this.input = input;
	        _this.props.inputRef(input);

	        _this.suggestionsContainer = autowhatever.itemsContainer;
	      }
	    }, _this.onSuggestionMouseEnter = function (event, _ref2) {
	      var sectionIndex = _ref2.sectionIndex;
	      var itemIndex = _ref2.itemIndex;

	      _this.props.updateFocusedSuggestion(sectionIndex, itemIndex);
	    }, _this.focusFirstSuggestion = function () {
	      _this.props.updateFocusedSuggestion(_this.props.multiSection ? 0 : null, 0);
	    }, _this.onSuggestionMouseDown = function () {
	      _this.justSelectedSuggestion = true;
	    }, _this.onSuggestionsClearRequested = function () {
	      var onSuggestionsClearRequested = _this.props.onSuggestionsClearRequested;


	      onSuggestionsClearRequested && onSuggestionsClearRequested();
	    }, _this.onSuggestionSelected = function (event, data) {
	      var _this$props = _this.props;
	      var alwaysRenderSuggestions = _this$props.alwaysRenderSuggestions;
	      var onSuggestionSelected = _this$props.onSuggestionSelected;
	      var onSuggestionsFetchRequested = _this$props.onSuggestionsFetchRequested;
	      var resetFocusedSuggestion = _this$props.resetFocusedSuggestion;


	      onSuggestionSelected && onSuggestionSelected(event, data);

	      if (alwaysRenderSuggestions) {
	        onSuggestionsFetchRequested({ value: data.suggestionValue });
	      } else {
	        _this.onSuggestionsClearRequested();
	      }

	      resetFocusedSuggestion();
	    }, _this.onSuggestionClick = function (event) {
	      var _this$props2 = _this.props;
	      var alwaysRenderSuggestions = _this$props2.alwaysRenderSuggestions;
	      var focusInputOnSuggestionClick = _this$props2.focusInputOnSuggestionClick;
	      var closeSuggestions = _this$props2.closeSuggestions;

	      var _this$getSuggestionIn = _this.getSuggestionIndices(_this.findSuggestionElement(event.target));

	      var sectionIndex = _this$getSuggestionIn.sectionIndex;
	      var suggestionIndex = _this$getSuggestionIn.suggestionIndex;

	      var clickedSuggestion = _this.getSuggestion(sectionIndex, suggestionIndex);
	      var clickedSuggestionValue = _this.props.getSuggestionValue(clickedSuggestion);

	      _this.maybeCallOnChange(event, clickedSuggestionValue, 'click');
	      _this.onSuggestionSelected(event, {
	        suggestion: clickedSuggestion,
	        suggestionValue: clickedSuggestionValue,
	        sectionIndex: sectionIndex,
	        method: 'click'
	      });

	      if (!alwaysRenderSuggestions) {
	        closeSuggestions();
	      }

	      if (focusInputOnSuggestionClick === true) {
	        _this.input.focus();
	      } else {
	        _this.onBlur();
	      }

	      setTimeout(function () {
	        _this.justSelectedSuggestion = false;
	      });
	    }, _this.onBlur = function () {
	      var _this$props3 = _this.props;
	      var inputProps = _this$props3.inputProps;
	      var shouldRenderSuggestions = _this$props3.shouldRenderSuggestions;
	      var inputBlurred = _this$props3.inputBlurred;
	      var value = inputProps.value;
	      var onBlur = inputProps.onBlur;

	      var focusedSuggestion = _this.getFocusedSuggestion();

	      inputBlurred(shouldRenderSuggestions(value));
	      onBlur && onBlur(_this.blurEvent, { focusedSuggestion: focusedSuggestion });
	    }, _this.resetFocusedSuggestionOnMouseLeave = function () {
	      _this.props.resetFocusedSuggestion(false);
	    }, _this.itemProps = function (_ref3) {
	      var sectionIndex = _ref3.sectionIndex;
	      var itemIndex = _ref3.itemIndex;

	      return {
	        'data-section-index': sectionIndex,
	        'data-suggestion-index': itemIndex,
	        onMouseEnter: _this.onSuggestionMouseEnter,
	        onMouseLeave: _this.resetFocusedSuggestionOnMouseLeave,
	        onMouseDown: _this.onSuggestionMouseDown,
	        onTouchStart: _this.onSuggestionMouseDown, // Because on iOS `onMouseDown` is not triggered
	        onClick: _this.onSuggestionClick
	      };
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(Autosuggest, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      document.addEventListener('mousedown', this.onDocumentMouseDown);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if ((0, _arrays2.default)(nextProps.suggestions, this.props.suggestions)) {
	        if (nextProps.focusFirstSuggestion && nextProps.suggestions.length > 0 && nextProps.focusedSuggestionIndex === null && nextProps.inputProps.value !== this.props.inputProps.value && nextProps.valueBeforeUpDown === this.props.valueBeforeUpDown) {
	          this.focusFirstSuggestion();
	        }
	      } else {
	        if (this.willRenderSuggestions(nextProps)) {
	          if (nextProps.focusFirstSuggestion) {
	            this.focusFirstSuggestion();
	          }

	          var isCollapsed = nextProps.isCollapsed;
	          var revealSuggestions = nextProps.revealSuggestions;


	          if (isCollapsed && !this.justSelectedSuggestion) {
	            revealSuggestions();
	          }
	        } else {
	          nextProps.resetFocusedSuggestion();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('mousedown', this.onDocumentMouseDown);
	    }
	  }, {
	    key: 'getSuggestion',
	    value: function getSuggestion(sectionIndex, suggestionIndex) {
	      var _props = this.props;
	      var suggestions = _props.suggestions;
	      var multiSection = _props.multiSection;
	      var getSectionSuggestions = _props.getSectionSuggestions;


	      if (multiSection) {
	        return getSectionSuggestions(suggestions[sectionIndex])[suggestionIndex];
	      }

	      return suggestions[suggestionIndex];
	    }
	  }, {
	    key: 'getFocusedSuggestion',
	    value: function getFocusedSuggestion() {
	      var _props2 = this.props;
	      var focusedSectionIndex = _props2.focusedSectionIndex;
	      var focusedSuggestionIndex = _props2.focusedSuggestionIndex;


	      if (focusedSuggestionIndex === null) {
	        return null;
	      }

	      return this.getSuggestion(focusedSectionIndex, focusedSuggestionIndex);
	    }
	  }, {
	    key: 'getSuggestionValueByIndex',
	    value: function getSuggestionValueByIndex(sectionIndex, suggestionIndex) {
	      var getSuggestionValue = this.props.getSuggestionValue;


	      return getSuggestionValue(this.getSuggestion(sectionIndex, suggestionIndex));
	    }
	  }, {
	    key: 'getSuggestionIndices',
	    value: function getSuggestionIndices(suggestionElement) {
	      var sectionIndex = suggestionElement.getAttribute('data-section-index');
	      var suggestionIndex = suggestionElement.getAttribute('data-suggestion-index');

	      return {
	        sectionIndex: typeof sectionIndex === 'string' ? parseInt(sectionIndex, 10) : null,
	        suggestionIndex: parseInt(suggestionIndex, 10)
	      };
	    }
	  }, {
	    key: 'findSuggestionElement',
	    value: function findSuggestionElement(startNode) {
	      var node = startNode;

	      do {
	        if (node.getAttribute('data-suggestion-index') !== null) {
	          return node;
	        }

	        node = node.parentNode;
	      } while (node !== null);

	      console.error('Clicked element:', startNode); // eslint-disable-line no-console
	      throw new Error('Couldn\'t find suggestion element');
	    }
	  }, {
	    key: 'maybeCallOnChange',
	    value: function maybeCallOnChange(event, newValue, method) {
	      var _props$inputProps = this.props.inputProps;
	      var value = _props$inputProps.value;
	      var onChange = _props$inputProps.onChange;


	      if (newValue !== value) {
	        onChange(event, { newValue: newValue, method: method });
	      }
	    }
	  }, {
	    key: 'willRenderSuggestions',
	    value: function willRenderSuggestions(props) {
	      var suggestions = props.suggestions;
	      var inputProps = props.inputProps;
	      var shouldRenderSuggestions = props.shouldRenderSuggestions;
	      var value = inputProps.value;


	      return suggestions.length > 0 && shouldRenderSuggestions(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props3 = this.props;
	      var suggestions = _props3.suggestions;
	      var renderInputComponent = _props3.renderInputComponent;
	      var renderSuggestionsContainer = _props3.renderSuggestionsContainer;
	      var onSuggestionsFetchRequested = _props3.onSuggestionsFetchRequested;
	      var renderSuggestion = _props3.renderSuggestion;
	      var inputProps = _props3.inputProps;
	      var shouldRenderSuggestions = _props3.shouldRenderSuggestions;
	      var multiSection = _props3.multiSection;
	      var renderSectionTitle = _props3.renderSectionTitle;
	      var id = _props3.id;
	      var getSectionSuggestions = _props3.getSectionSuggestions;
	      var theme = _props3.theme;
	      var isFocused = _props3.isFocused;
	      var isCollapsed = _props3.isCollapsed;
	      var focusedSectionIndex = _props3.focusedSectionIndex;
	      var focusedSuggestionIndex = _props3.focusedSuggestionIndex;
	      var valueBeforeUpDown = _props3.valueBeforeUpDown;
	      var inputFocused = _props3.inputFocused;
	      var inputChanged = _props3.inputChanged;
	      var updateFocusedSuggestion = _props3.updateFocusedSuggestion;
	      var resetFocusedSuggestion = _props3.resetFocusedSuggestion;
	      var revealSuggestions = _props3.revealSuggestions;
	      var closeSuggestions = _props3.closeSuggestions;
	      var getSuggestionValue = _props3.getSuggestionValue;
	      var alwaysRenderSuggestions = _props3.alwaysRenderSuggestions;
	      var value = inputProps.value;
	      var _onFocus = inputProps.onFocus;
	      var _onKeyDown = inputProps.onKeyDown;

	      var willRenderSuggestions = this.willRenderSuggestions(this.props);
	      var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;
	      var items = isOpen ? suggestions : [];
	      var autowhateverInputProps = _extends({}, inputProps, {
	        onFocus: function onFocus(event) {
	          if (!_this2.justSelectedSuggestion && !_this2.justClickedOnSuggestionsContainer) {
	            inputFocused(shouldRenderSuggestions(value));
	            _onFocus && _onFocus(event);

	            if (shouldRenderSuggestions(value)) {
	              onSuggestionsFetchRequested({ value: value });
	            }
	          }
	        },
	        onBlur: function onBlur(event) {
	          if (_this2.justClickedOnSuggestionsContainer) {
	            _this2.input.focus();
	            return;
	          }

	          _this2.blurEvent = event;

	          if (!_this2.justSelectedSuggestion) {
	            _this2.onBlur();
	            _this2.onSuggestionsClearRequested();
	          }
	        },
	        onChange: function onChange(event) {
	          var value = event.target.value;

	          var shouldRender = shouldRenderSuggestions(value);

	          _this2.maybeCallOnChange(event, value, 'type');
	          inputChanged(shouldRender);

	          if (shouldRender) {
	            onSuggestionsFetchRequested({ value: value });
	          } else {
	            _this2.onSuggestionsClearRequested();
	          }
	        },
	        onKeyDown: function onKeyDown(event, data) {
	          switch (event.key) {
	            case 'ArrowDown':
	            case 'ArrowUp':
	              if (isCollapsed) {
	                if (shouldRenderSuggestions(value)) {
	                  onSuggestionsFetchRequested({ value: value });
	                  revealSuggestions();
	                }
	              } else if (suggestions.length > 0) {
	                var newFocusedSectionIndex = data.newFocusedSectionIndex;
	                var newFocusedItemIndex = data.newFocusedItemIndex;


	                var newValue = void 0;

	                if (newFocusedItemIndex === null) {
	                  // valueBeforeUpDown can be null if, for example, user
	                  // hovers on the first suggestion and then pressed Up.
	                  // If that happens, use the original input value.
	                  newValue = valueBeforeUpDown === null ? value : valueBeforeUpDown;
	                } else {
	                  newValue = _this2.getSuggestionValueByIndex(newFocusedSectionIndex, newFocusedItemIndex);
	                }

	                updateFocusedSuggestion(newFocusedSectionIndex, newFocusedItemIndex, value);
	                _this2.maybeCallOnChange(event, newValue, event.key === 'ArrowDown' ? 'down' : 'up');
	              }

	              event.preventDefault(); // Prevents the cursor from moving

	              break;

	            case 'Enter':
	              {
	                var focusedSuggestion = _this2.getFocusedSuggestion();

	                if (isOpen && !alwaysRenderSuggestions) {
	                  closeSuggestions();
	                }

	                if (focusedSuggestion !== null) {
	                  var _newValue = getSuggestionValue(focusedSuggestion);

	                  _this2.onSuggestionSelected(event, {
	                    suggestion: focusedSuggestion,
	                    suggestionValue: _newValue,
	                    sectionIndex: focusedSectionIndex,
	                    method: 'enter'
	                  });

	                  _this2.maybeCallOnChange(event, _newValue, 'enter');

	                  _this2.justSelectedSuggestion = true;

	                  setTimeout(function () {
	                    _this2.justSelectedSuggestion = false;
	                  });
	                }

	                break;
	              }

	            case 'Escape':
	              {
	                if (isOpen) {
	                  // If input.type === 'search', the browser clears the input
	                  // when Escape is pressed. We want to disable this default
	                  // behaviour so that, when suggestions are shown, we just hide
	                  // them, without clearing the input.
	                  event.preventDefault();
	                }

	                var willCloseSuggestions = isOpen && !alwaysRenderSuggestions;

	                if (valueBeforeUpDown === null) {
	                  // Didn't interact with Up/Down
	                  if (!willCloseSuggestions) {
	                    var _newValue2 = '';

	                    _this2.maybeCallOnChange(event, _newValue2, 'escape');

	                    if (shouldRenderSuggestions(_newValue2)) {
	                      onSuggestionsFetchRequested({ value: _newValue2 });
	                    } else {
	                      _this2.onSuggestionsClearRequested();
	                    }
	                  }
	                } else {
	                  // Interacted with Up/Down
	                  _this2.maybeCallOnChange(event, valueBeforeUpDown, 'escape');
	                }

	                if (willCloseSuggestions) {
	                  _this2.onSuggestionsClearRequested();
	                  closeSuggestions();
	                } else {
	                  resetFocusedSuggestion();
	                }

	                break;
	              }
	          }

	          _onKeyDown && _onKeyDown(event);
	        }
	      });
	      var renderSuggestionData = {
	        query: (valueBeforeUpDown || value).trim()
	      };

	      return _react2.default.createElement(_reactAutowhatever2.default, {
	        multiSection: multiSection,
	        items: items,
	        renderInputComponent: renderInputComponent,
	        renderItemsContainer: renderSuggestionsContainer,
	        renderItem: renderSuggestion,
	        renderItemData: renderSuggestionData,
	        renderSectionTitle: renderSectionTitle,
	        getSectionItems: getSectionSuggestions,
	        focusedSectionIndex: focusedSectionIndex,
	        focusedItemIndex: focusedSuggestionIndex,
	        inputProps: autowhateverInputProps,
	        itemProps: this.itemProps,
	        theme: theme,
	        id: id,
	        ref: this.storeReferences
	      });
	    }
	  }]);

	  return Autosuggest;
	}(_react.Component);

	Autosuggest.propTypes = {
	  suggestions: _react.PropTypes.array.isRequired,
	  onSuggestionsFetchRequested: _react.PropTypes.func.isRequired,
	  onSuggestionsClearRequested: _react.PropTypes.func,
	  onSuggestionSelected: _react.PropTypes.func,
	  renderInputComponent: _react.PropTypes.func,
	  renderSuggestionsContainer: _react.PropTypes.func,
	  getSuggestionValue: _react.PropTypes.func.isRequired,
	  renderSuggestion: _react.PropTypes.func.isRequired,
	  inputProps: _react.PropTypes.object.isRequired,
	  shouldRenderSuggestions: _react.PropTypes.func.isRequired,
	  alwaysRenderSuggestions: _react.PropTypes.bool.isRequired,
	  multiSection: _react.PropTypes.bool.isRequired,
	  renderSectionTitle: _react.PropTypes.func,
	  getSectionSuggestions: _react.PropTypes.func,
	  focusInputOnSuggestionClick: _react.PropTypes.bool.isRequired,
	  focusFirstSuggestion: _react.PropTypes.bool.isRequired,
	  theme: _react.PropTypes.object.isRequired,
	  id: _react.PropTypes.string.isRequired,
	  inputRef: _react.PropTypes.func.isRequired,

	  isFocused: _react.PropTypes.bool.isRequired,
	  isCollapsed: _react.PropTypes.bool.isRequired,
	  focusedSectionIndex: _react.PropTypes.number,
	  focusedSuggestionIndex: _react.PropTypes.number,
	  valueBeforeUpDown: _react.PropTypes.string,

	  inputFocused: _react.PropTypes.func.isRequired,
	  inputBlurred: _react.PropTypes.func.isRequired,
	  inputChanged: _react.PropTypes.func.isRequired,
	  updateFocusedSuggestion: _react.PropTypes.func.isRequired,
	  resetFocusedSuggestion: _react.PropTypes.func.isRequired,
	  revealSuggestions: _react.PropTypes.func.isRequired,
	  closeSuggestions: _react.PropTypes.func.isRequired
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, _redux.actionCreators)(Autosuggest);

/***/ },

/***/ 658:
/***/ function(module, exports) {

	module.exports = function shallowEqualArrays(arrA, arrB) {
	  if (arrA === arrB) {
	    return true;
	  }

	  var len = arrA.length;

	  if (arrB.length !== len) {
	    return false;
	  }

	  for (var i = 0; i < len; i++) {
	    if (arrA[i] !== arrB[i]) {
	      return false;
	    }
	  }

	  return true;
	};


/***/ },

/***/ 659:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(660).default;

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _sectionIterator = __webpack_require__(661);

	var _sectionIterator2 = _interopRequireDefault(_sectionIterator);

	var _reactThemeable = __webpack_require__(662);

	var _reactThemeable2 = _interopRequireDefault(_reactThemeable);

	var _SectionTitle = __webpack_require__(664);

	var _SectionTitle2 = _interopRequireDefault(_SectionTitle);

	var _ItemsList = __webpack_require__(666);

	var _ItemsList2 = _interopRequireDefault(_ItemsList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var alwaysTrue = function alwaysTrue() {
	  return true;
	};
	var emptyObject = {};
	var defaultRenderInputComponent = function defaultRenderInputComponent(props) {
	  return _react2.default.createElement('input', props);
	};
	var defaultRenderItemsContainer = function defaultRenderItemsContainer(props) {
	  return _react2.default.createElement('div', props);
	};
	var defaultTheme = {
	  container: 'react-autowhatever__container',
	  containerOpen: 'react-autowhatever__container--open',
	  input: 'react-autowhatever__input',
	  itemsContainer: 'react-autowhatever__items-container',
	  itemsList: 'react-autowhatever__items-list',
	  item: 'react-autowhatever__item',
	  itemFocused: 'react-autowhatever__item--focused',
	  sectionContainer: 'react-autowhatever__section-container',
	  sectionTitle: 'react-autowhatever__section-title'
	};

	var Autowhatever = function (_Component) {
	  _inherits(Autowhatever, _Component);

	  function Autowhatever(props) {
	    _classCallCheck(this, Autowhatever);

	    var _this = _possibleConstructorReturn(this, (Autowhatever.__proto__ || Object.getPrototypeOf(Autowhatever)).call(this, props));

	    _this.focusedItem = null;

	    _this.setSectionsItems(props);
	    _this.setSectionIterator(props);
	    _this.setTheme(props);

	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    _this.storeInputReference = _this.storeInputReference.bind(_this);
	    _this.storeItemsContainerReference = _this.storeItemsContainerReference.bind(_this);
	    _this.onFocusedItemChange = _this.onFocusedItemChange.bind(_this);
	    _this.getItemId = _this.getItemId.bind(_this);
	    return _this;
	  }

	  _createClass(Autowhatever, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.ensureFocusedItemIsVisible();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.items !== this.props.items) {
	        this.setSectionsItems(nextProps);
	      }

	      if (nextProps.items !== this.props.items || nextProps.multiSection !== this.props.multiSection) {
	        this.setSectionIterator(nextProps);
	      }

	      if (nextProps.theme !== this.props.theme) {
	        this.setTheme(nextProps);
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.ensureFocusedItemIsVisible();
	    }
	  }, {
	    key: 'setSectionsItems',
	    value: function setSectionsItems(props) {
	      if (props.multiSection) {
	        this.sectionsItems = props.items.map(function (section) {
	          return props.getSectionItems(section);
	        });
	        this.sectionsLengths = this.sectionsItems.map(function (items) {
	          return items.length;
	        });
	        this.allSectionsAreEmpty = this.sectionsLengths.every(function (itemsCount) {
	          return itemsCount === 0;
	        });
	      }
	    }
	  }, {
	    key: 'setSectionIterator',
	    value: function setSectionIterator(props) {
	      this.sectionIterator = (0, _sectionIterator2.default)({
	        multiSection: props.multiSection,
	        data: props.multiSection ? this.sectionsLengths : props.items.length
	      });
	    }
	  }, {
	    key: 'setTheme',
	    value: function setTheme(props) {
	      this.theme = (0, _reactThemeable2.default)(props.theme);
	    }
	  }, {
	    key: 'storeInputReference',
	    value: function storeInputReference(input) {
	      if (input !== null) {
	        this.input = input;
	      }
	    }
	  }, {
	    key: 'storeItemsContainerReference',
	    value: function storeItemsContainerReference(itemsContainer) {
	      if (itemsContainer !== null) {
	        this.itemsContainer = itemsContainer;
	      }
	    }
	  }, {
	    key: 'onFocusedItemChange',
	    value: function onFocusedItemChange(focusedItem) {
	      this.focusedItem = focusedItem;
	    }
	  }, {
	    key: 'getItemId',
	    value: function getItemId(sectionIndex, itemIndex) {
	      if (itemIndex === null) {
	        return null;
	      }

	      var id = this.props.id;

	      var section = sectionIndex === null ? '' : 'section-' + sectionIndex;

	      return 'react-autowhatever-' + id + '-' + section + '-item-' + itemIndex;
	    }
	  }, {
	    key: 'renderSections',
	    value: function renderSections() {
	      var _this2 = this;

	      if (this.allSectionsAreEmpty) {
	        return null;
	      }

	      var theme = this.theme;
	      var _props = this.props;
	      var id = _props.id;
	      var items = _props.items;
	      var renderItem = _props.renderItem;
	      var renderItemData = _props.renderItemData;
	      var shouldRenderSection = _props.shouldRenderSection;
	      var renderSectionTitle = _props.renderSectionTitle;
	      var focusedSectionIndex = _props.focusedSectionIndex;
	      var focusedItemIndex = _props.focusedItemIndex;
	      var itemProps = _props.itemProps;


	      return items.map(function (section, sectionIndex) {
	        if (!shouldRenderSection(section)) {
	          return null;
	        }

	        var keyPrefix = 'react-autowhatever-' + id + '-';
	        var sectionKeyPrefix = keyPrefix + 'section-' + sectionIndex + '-';

	        // `key` is provided by theme()
	        /* eslint-disable react/jsx-key */
	        return _react2.default.createElement(
	          'div',
	          theme(sectionKeyPrefix + 'container', 'sectionContainer'),
	          _react2.default.createElement(_SectionTitle2.default, {
	            section: section,
	            renderSectionTitle: renderSectionTitle,
	            theme: theme,
	            sectionKeyPrefix: sectionKeyPrefix
	          }),
	          _react2.default.createElement(_ItemsList2.default, {
	            items: _this2.sectionsItems[sectionIndex],
	            itemProps: itemProps,
	            renderItem: renderItem,
	            renderItemData: renderItemData,
	            sectionIndex: sectionIndex,
	            focusedItemIndex: focusedSectionIndex === sectionIndex ? focusedItemIndex : null,
	            onFocusedItemChange: _this2.onFocusedItemChange,
	            getItemId: _this2.getItemId,
	            theme: theme,
	            keyPrefix: keyPrefix,
	            ref: _this2.storeItemsListReference
	          })
	        );
	        /* eslint-enable react/jsx-key */
	      });
	    }
	  }, {
	    key: 'renderItems',
	    value: function renderItems() {
	      var items = this.props.items;


	      if (items.length === 0) {
	        return null;
	      }

	      var theme = this.theme;
	      var _props2 = this.props;
	      var id = _props2.id;
	      var renderItem = _props2.renderItem;
	      var renderItemData = _props2.renderItemData;
	      var focusedSectionIndex = _props2.focusedSectionIndex;
	      var focusedItemIndex = _props2.focusedItemIndex;
	      var itemProps = _props2.itemProps;


	      return _react2.default.createElement(_ItemsList2.default, {
	        items: items,
	        itemProps: itemProps,
	        renderItem: renderItem,
	        renderItemData: renderItemData,
	        focusedItemIndex: focusedSectionIndex === null ? focusedItemIndex : null,
	        onFocusedItemChange: this.onFocusedItemChange,
	        getItemId: this.getItemId,
	        theme: theme,
	        keyPrefix: 'react-autowhatever-' + id + '-'
	      });
	    }
	  }, {
	    key: 'onKeyDown',
	    value: function onKeyDown(event) {
	      var _props3 = this.props;
	      var inputProps = _props3.inputProps;
	      var focusedSectionIndex = _props3.focusedSectionIndex;
	      var focusedItemIndex = _props3.focusedItemIndex;


	      switch (event.key) {
	        case 'ArrowDown':
	        case 'ArrowUp':
	          {
	            var nextPrev = event.key === 'ArrowDown' ? 'next' : 'prev';

	            var _sectionIterator$next = this.sectionIterator[nextPrev]([focusedSectionIndex, focusedItemIndex]);

	            var _sectionIterator$next2 = _slicedToArray(_sectionIterator$next, 2);

	            var newFocusedSectionIndex = _sectionIterator$next2[0];
	            var newFocusedItemIndex = _sectionIterator$next2[1];


	            inputProps.onKeyDown(event, { newFocusedSectionIndex: newFocusedSectionIndex, newFocusedItemIndex: newFocusedItemIndex });
	            break;
	          }

	        default:
	          inputProps.onKeyDown(event, { focusedSectionIndex: focusedSectionIndex, focusedItemIndex: focusedItemIndex });
	      }
	    }
	  }, {
	    key: 'ensureFocusedItemIsVisible',
	    value: function ensureFocusedItemIsVisible() {
	      var focusedItem = this.focusedItem;


	      if (!focusedItem) {
	        return;
	      }

	      var itemsContainer = this.itemsContainer;

	      var itemOffsetRelativeToContainer = focusedItem.offsetParent === itemsContainer ? focusedItem.offsetTop : focusedItem.offsetTop - itemsContainer.offsetTop;

	      var scrollTop = itemsContainer.scrollTop; // Top of the visible area

	      if (itemOffsetRelativeToContainer < scrollTop) {
	        // Item is off the top of the visible area
	        scrollTop = itemOffsetRelativeToContainer;
	      } else if (itemOffsetRelativeToContainer + focusedItem.offsetHeight > scrollTop + itemsContainer.offsetHeight) {
	        // Item is off the bottom of the visible area
	        scrollTop = itemOffsetRelativeToContainer + focusedItem.offsetHeight - itemsContainer.offsetHeight;
	      }

	      if (scrollTop !== itemsContainer.scrollTop) {
	        itemsContainer.scrollTop = scrollTop;
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var theme = this.theme;
	      var _props4 = this.props;
	      var id = _props4.id;
	      var multiSection = _props4.multiSection;
	      var renderInputComponent = _props4.renderInputComponent;
	      var renderItemsContainer = _props4.renderItemsContainer;
	      var focusedSectionIndex = _props4.focusedSectionIndex;
	      var focusedItemIndex = _props4.focusedItemIndex;

	      var renderedItems = multiSection ? this.renderSections() : this.renderItems();
	      var isOpen = renderedItems !== null;
	      var ariaActivedescendant = this.getItemId(focusedSectionIndex, focusedItemIndex);
	      var containerProps = theme('react-autowhatever-' + id + '-container', 'container', isOpen && 'containerOpen');
	      var itemsContainerId = 'react-autowhatever-' + id;
	      var inputComponent = renderInputComponent(_extends({
	        type: 'text',
	        value: '',
	        autoComplete: 'off',
	        role: 'combobox',
	        'aria-autocomplete': 'list',
	        'aria-owns': itemsContainerId,
	        'aria-expanded': isOpen,
	        'aria-haspopup': isOpen,
	        'aria-activedescendant': ariaActivedescendant
	      }, theme('react-autowhatever-' + id + '-input', 'input'), this.props.inputProps, {
	        onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
	        ref: this.storeInputReference
	      }));
	      var itemsContainer = renderItemsContainer(_extends({
	        id: itemsContainerId
	      }, theme('react-autowhatever-' + id + '-items-container', 'itemsContainer'), {
	        ref: this.storeItemsContainerReference,
	        children: renderedItems
	      }));

	      return _react2.default.createElement(
	        'div',
	        containerProps,
	        inputComponent,
	        itemsContainer
	      );
	    }
	  }]);

	  return Autowhatever;
	}(_react.Component);

	Autowhatever.propTypes = {
	  id: _react.PropTypes.string, // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
	  multiSection: _react.PropTypes.bool, // Indicates whether a multi section layout should be rendered.
	  renderInputComponent: _react.PropTypes.func, // Renders the input component.
	  items: _react.PropTypes.array.isRequired, // Array of items or sections to render.
	  renderItemsContainer: _react.PropTypes.func, // Renders the items container.
	  renderItem: _react.PropTypes.func, // This function renders a single item.
	  renderItemData: _react.PropTypes.object, // Arbitrary data that will be passed to renderItem()
	  shouldRenderSection: _react.PropTypes.func, // This function gets a section and returns whether it should be rendered, or not.
	  renderSectionTitle: _react.PropTypes.func, // This function gets a section and renders its title.
	  getSectionItems: _react.PropTypes.func, // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
	  inputComponent: _react.PropTypes.func, // When specified, it is used to render the input element
	  inputProps: _react.PropTypes.object, // Arbitrary input props
	  itemProps: _react.PropTypes.oneOfType([// Arbitrary item props
	  _react.PropTypes.object, _react.PropTypes.func]),
	  focusedSectionIndex: _react.PropTypes.number, // Section index of the focused item
	  focusedItemIndex: _react.PropTypes.number, // Focused item index (within a section)
	  theme: _react.PropTypes.oneOfType([// Styles. See: https://github.com/markdalgleish/react-themeable
	  _react.PropTypes.object, _react.PropTypes.array])
	};
	Autowhatever.defaultProps = {
	  id: '1',
	  multiSection: false,
	  renderInputComponent: defaultRenderInputComponent,
	  renderItemsContainer: defaultRenderItemsContainer,
	  shouldRenderSection: alwaysTrue,
	  renderItem: function renderItem() {
	    throw new Error('`renderItem` must be provided');
	  },
	  renderItemData: emptyObject,
	  renderSectionTitle: function renderSectionTitle() {
	    throw new Error('`renderSectionTitle` must be provided');
	  },
	  getSectionItems: function getSectionItems() {
	    throw new Error('`getSectionItems` must be provided');
	  },
	  inputProps: emptyObject,
	  itemProps: emptyObject,
	  focusedSectionIndex: null,
	  focusedItemIndex: null,
	  theme: defaultTheme
	};
	exports.default = Autowhatever;

/***/ },

/***/ 661:
/***/ function(module, exports) {

	"use strict";

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	module.exports = function (_ref) {
	  var data = _ref.data;
	  var multiSection = _ref.multiSection;

	  function nextNonEmptySectionIndex(sectionIndex) {
	    if (sectionIndex === null) {
	      sectionIndex = 0;
	    } else {
	      sectionIndex++;
	    }

	    while (sectionIndex < data.length && data[sectionIndex] === 0) {
	      sectionIndex++;
	    }

	    return sectionIndex === data.length ? null : sectionIndex;
	  }

	  function prevNonEmptySectionIndex(sectionIndex) {
	    if (sectionIndex === null) {
	      sectionIndex = data.length - 1;
	    } else {
	      sectionIndex--;
	    }

	    while (sectionIndex >= 0 && data[sectionIndex] === 0) {
	      sectionIndex--;
	    }

	    return sectionIndex === -1 ? null : sectionIndex;
	  }

	  function next(position) {
	    var _position = _slicedToArray(position, 2);

	    var sectionIndex = _position[0];
	    var itemIndex = _position[1];


	    if (multiSection) {
	      if (itemIndex === null || itemIndex === data[sectionIndex] - 1) {
	        sectionIndex = nextNonEmptySectionIndex(sectionIndex);

	        if (sectionIndex === null) {
	          return [null, null];
	        }

	        return [sectionIndex, 0];
	      }

	      return [sectionIndex, itemIndex + 1];
	    }

	    if (data === 0 || itemIndex === data - 1) {
	      return [null, null];
	    }

	    if (itemIndex === null) {
	      return [null, 0];
	    }

	    return [null, itemIndex + 1];
	  }

	  function prev(position) {
	    var _position2 = _slicedToArray(position, 2);

	    var sectionIndex = _position2[0];
	    var itemIndex = _position2[1];


	    if (multiSection) {
	      if (itemIndex === null || itemIndex === 0) {
	        sectionIndex = prevNonEmptySectionIndex(sectionIndex);

	        if (sectionIndex === null) {
	          return [null, null];
	        }

	        return [sectionIndex, data[sectionIndex] - 1];
	      }

	      return [sectionIndex, itemIndex - 1];
	    }

	    if (data === 0 || itemIndex === 0) {
	      return [null, null];
	    }

	    if (itemIndex === null) {
	      return [null, data - 1];
	    }

	    return [null, itemIndex - 1];
	  }

	  function isLast(position) {
	    return next(position)[1] === null;
	  }

	  return {
	    next: next,
	    prev: prev,
	    isLast: isLast
	  };
	};


/***/ },

/***/ 662:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var _objectAssign = __webpack_require__(663);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var truthy = function truthy(x) {
	  return x;
	};

	exports['default'] = function (input) {
	  var _ref = Array.isArray(input) && input.length === 2 ? input : [input, null];

	  var _ref2 = _slicedToArray(_ref, 2);

	  var theme = _ref2[0];
	  var classNameDecorator = _ref2[1];

	  return function (key) {
	    for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      names[_key - 1] = arguments[_key];
	    }

	    var styles = names.map(function (name) {
	      return theme[name];
	    }).filter(truthy);

	    return typeof styles[0] === 'string' || typeof classNameDecorator === 'function' ? { key: key, className: classNameDecorator ? classNameDecorator.apply(undefined, _toConsumableArray(styles)) : styles.join(' ') } : { key: key, style: _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(styles))) };
	  };
	};

	module.exports = exports['default'];

/***/ },

/***/ 663:
/***/ function(module, exports) {

	'use strict';
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function ToObject(val) {
		if (val == null) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function ownEnumerableKeys(obj) {
		var keys = Object.getOwnPropertyNames(obj);

		if (Object.getOwnPropertySymbols) {
			keys = keys.concat(Object.getOwnPropertySymbols(obj));
		}

		return keys.filter(function (key) {
			return propIsEnumerable.call(obj, key);
		});
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var keys;
		var to = ToObject(target);

		for (var s = 1; s < arguments.length; s++) {
			from = arguments[s];
			keys = ownEnumerableKeys(Object(from));

			for (var i = 0; i < keys.length; i++) {
				to[keys[i]] = from[keys[i]];
			}
		}

		return to;
	};


/***/ },

/***/ 664:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _compareObjects = __webpack_require__(665);

	var _compareObjects2 = _interopRequireDefault(_compareObjects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SectionTitle = function (_Component) {
	  _inherits(SectionTitle, _Component);

	  function SectionTitle() {
	    _classCallCheck(this, SectionTitle);

	    return _possibleConstructorReturn(this, (SectionTitle.__proto__ || Object.getPrototypeOf(SectionTitle)).apply(this, arguments));
	  }

	  _createClass(SectionTitle, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects2.default)(nextProps, this.props);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var section = _props.section;
	      var renderSectionTitle = _props.renderSectionTitle;
	      var theme = _props.theme;
	      var sectionKeyPrefix = _props.sectionKeyPrefix;

	      var sectionTitle = renderSectionTitle(section);

	      if (!sectionTitle) {
	        return null;
	      }

	      return _react2.default.createElement(
	        'div',
	        theme(sectionKeyPrefix + 'title', 'sectionTitle'),
	        sectionTitle
	      );
	    }
	  }]);

	  return SectionTitle;
	}(_react.Component);

	SectionTitle.propTypes = {
	  section: _react.PropTypes.any.isRequired,
	  renderSectionTitle: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.func.isRequired,
	  sectionKeyPrefix: _react.PropTypes.string.isRequired
	};
	exports.default = SectionTitle;

/***/ },

/***/ 665:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.default = compareObjects;
	function compareObjects(objA, objB) {
	  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	  if (objA === objB) {
	    return false;
	  }

	  var aKeys = Object.keys(objA);
	  var bKeys = Object.keys(objB);

	  if (aKeys.length !== bKeys.length) {
	    return true;
	  }

	  var keysMap = {};
	  var i = void 0,
	      len = void 0;

	  for (i = 0, len = keys.length; i < len; i++) {
	    keysMap[keys[i]] = true;
	  }

	  for (i = 0, len = aKeys.length; i < len; i++) {
	    var key = aKeys[i];
	    var aValue = objA[key];
	    var bValue = objB[key];

	    if (aValue === bValue) {
	      continue;
	    }

	    if (!keysMap[key] || aValue === null || bValue === null || (typeof aValue === 'undefined' ? 'undefined' : _typeof(aValue)) !== 'object' || (typeof bValue === 'undefined' ? 'undefined' : _typeof(bValue)) !== 'object') {
	      return true;
	    }

	    var aValueKeys = Object.keys(aValue);
	    var bValueKeys = Object.keys(bValue);

	    if (aValueKeys.length !== bValueKeys.length) {
	      return true;
	    }

	    for (var n = 0, length = aValueKeys.length; n < length; n++) {
	      var aValueKey = aValueKeys[n];

	      if (aValue[aValueKey] !== bValue[aValueKey]) {
	        return true;
	      }
	    }
	  }

	  return false;
	}

/***/ },

/***/ 666:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Item = __webpack_require__(667);

	var _Item2 = _interopRequireDefault(_Item);

	var _compareObjects = __webpack_require__(665);

	var _compareObjects2 = _interopRequireDefault(_compareObjects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ItemsList = function (_Component) {
	  _inherits(ItemsList, _Component);

	  function ItemsList() {
	    _classCallCheck(this, ItemsList);

	    var _this = _possibleConstructorReturn(this, (ItemsList.__proto__ || Object.getPrototypeOf(ItemsList)).call(this));

	    _this.storeFocusedItemReference = _this.storeFocusedItemReference.bind(_this);
	    return _this;
	  }

	  _createClass(ItemsList, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects2.default)(nextProps, this.props, ['itemProps']);
	    }
	  }, {
	    key: 'storeFocusedItemReference',
	    value: function storeFocusedItemReference(focusedItem) {
	      this.props.onFocusedItemChange(focusedItem === null ? null : focusedItem.item);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var items = _props.items;
	      var itemProps = _props.itemProps;
	      var renderItem = _props.renderItem;
	      var renderItemData = _props.renderItemData;
	      var sectionIndex = _props.sectionIndex;
	      var focusedItemIndex = _props.focusedItemIndex;
	      var getItemId = _props.getItemId;
	      var theme = _props.theme;
	      var keyPrefix = _props.keyPrefix;

	      var sectionPrefix = sectionIndex === null ? keyPrefix : keyPrefix + 'section-' + sectionIndex + '-';
	      var isItemPropsFunction = typeof itemProps === 'function';

	      return _react2.default.createElement(
	        'ul',
	        _extends({ role: 'listbox' }, theme(sectionPrefix + 'items-list', 'itemsList')),
	        items.map(function (item, itemIndex) {
	          var isFocused = itemIndex === focusedItemIndex;
	          var itemKey = sectionPrefix + 'item-' + itemIndex;
	          var itemPropsObj = isItemPropsFunction ? itemProps({ sectionIndex: sectionIndex, itemIndex: itemIndex }) : itemProps;
	          var allItemProps = _extends({
	            id: getItemId(sectionIndex, itemIndex)
	          }, theme(itemKey, 'item', isFocused && 'itemFocused'), itemPropsObj);

	          if (isFocused) {
	            allItemProps.ref = _this2.storeFocusedItemReference;
	          }

	          // `key` is provided by theme()
	          /* eslint-disable react/jsx-key */
	          return _react2.default.createElement(_Item2.default, _extends({}, allItemProps, {
	            sectionIndex: sectionIndex,
	            itemIndex: itemIndex,
	            item: item,
	            renderItem: renderItem,
	            renderItemData: renderItemData
	          }));
	          /* eslint-enable react/jsx-key */
	        })
	      );
	    }
	  }]);

	  return ItemsList;
	}(_react.Component);

	ItemsList.propTypes = {
	  items: _react.PropTypes.array.isRequired,
	  itemProps: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
	  renderItem: _react.PropTypes.func.isRequired,
	  renderItemData: _react.PropTypes.object.isRequired,
	  sectionIndex: _react.PropTypes.number,
	  focusedItemIndex: _react.PropTypes.number,
	  onFocusedItemChange: _react.PropTypes.func.isRequired,
	  getItemId: _react.PropTypes.func.isRequired,
	  theme: _react.PropTypes.func.isRequired,
	  keyPrefix: _react.PropTypes.string.isRequired
	};
	ItemsList.defaultProps = {
	  sectionIndex: null
	};
	exports.default = ItemsList;

/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _compareObjects = __webpack_require__(665);

	var _compareObjects2 = _interopRequireDefault(_compareObjects);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Item = function (_Component) {
	  _inherits(Item, _Component);

	  function Item() {
	    _classCallCheck(this, Item);

	    var _this = _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).call(this));

	    _this.storeItemReference = _this.storeItemReference.bind(_this);
	    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
	    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
	    _this.onMouseDown = _this.onMouseDown.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }

	  _createClass(Item, [{
	    key: 'shouldComponentUpdate',
	    value: function shouldComponentUpdate(nextProps) {
	      return (0, _compareObjects2.default)(nextProps, this.props, ['renderItemData']);
	    }
	  }, {
	    key: 'storeItemReference',
	    value: function storeItemReference(item) {
	      if (item !== null) {
	        this.item = item;
	      }
	    }
	  }, {
	    key: 'onMouseEnter',
	    value: function onMouseEnter(event) {
	      var _props = this.props;
	      var sectionIndex = _props.sectionIndex;
	      var itemIndex = _props.itemIndex;


	      this.props.onMouseEnter(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }
	  }, {
	    key: 'onMouseLeave',
	    value: function onMouseLeave(event) {
	      var _props2 = this.props;
	      var sectionIndex = _props2.sectionIndex;
	      var itemIndex = _props2.itemIndex;


	      this.props.onMouseLeave(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }
	  }, {
	    key: 'onMouseDown',
	    value: function onMouseDown(event) {
	      var _props3 = this.props;
	      var sectionIndex = _props3.sectionIndex;
	      var itemIndex = _props3.itemIndex;


	      this.props.onMouseDown(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }
	  }, {
	    key: 'onClick',
	    value: function onClick(event) {
	      var _props4 = this.props;
	      var sectionIndex = _props4.sectionIndex;
	      var itemIndex = _props4.itemIndex;


	      this.props.onClick(event, { sectionIndex: sectionIndex, itemIndex: itemIndex });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props5 = this.props;
	      var item = _props5.item;
	      var renderItem = _props5.renderItem;
	      var renderItemData = _props5.renderItemData;

	      var restProps = _objectWithoutProperties(_props5, ['item', 'renderItem', 'renderItemData']);

	      delete restProps.sectionIndex;
	      delete restProps.itemIndex;

	      if (typeof restProps.onMouseEnter === 'function') {
	        restProps.onMouseEnter = this.onMouseEnter;
	      }

	      if (typeof restProps.onMouseLeave === 'function') {
	        restProps.onMouseLeave = this.onMouseLeave;
	      }

	      if (typeof restProps.onMouseDown === 'function') {
	        restProps.onMouseDown = this.onMouseDown;
	      }

	      if (typeof restProps.onClick === 'function') {
	        restProps.onClick = this.onClick;
	      }

	      return _react2.default.createElement(
	        'li',
	        _extends({ role: 'option' }, restProps, { ref: this.storeItemReference }),
	        renderItem(item, renderItemData)
	      );
	    }
	  }]);

	  return Item;
	}(_react.Component);

	Item.propTypes = {
	  sectionIndex: _react.PropTypes.number,
	  itemIndex: _react.PropTypes.number.isRequired,
	  item: _react.PropTypes.any.isRequired,
	  renderItem: _react.PropTypes.func.isRequired,
	  renderItemData: _react.PropTypes.object.isRequired,
	  onMouseEnter: _react.PropTypes.func,
	  onMouseLeave: _react.PropTypes.func,
	  onMouseDown: _react.PropTypes.func,
	  onClick: _react.PropTypes.func
	};
	exports.default = Item;

/***/ },

/***/ 668:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(53);

	var _reactRouterRedux = __webpack_require__(269);

	var _actionTypes = __webpack_require__(577);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	var _actions = __webpack_require__(608);

	var _overview = __webpack_require__(669);

	var _overview2 = _interopRequireDefault(_overview);

	var _constants = __webpack_require__(579);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Convert store state to props to be passed to component
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Set props to send
	    user: state.account.player
	  };
	};

	// Creates props that will dispatch actions
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Actions to send
	    //dispatch(updateTab(i));
	  };
	};

	var OverviewContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_overview2.default);

	exports.default = OverviewContainer;

/***/ },

/***/ 669:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _campaignList = __webpack_require__(611);

	var _campaignList2 = _interopRequireDefault(_campaignList);

	var _single = __webpack_require__(670);

	var _single2 = _interopRequireDefault(_single);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var playerOverviewStats = function playerOverviewStats(props) {
	  if (true) {
	    console.log('=== Render: dashboard/overview', props);
	  }
	  var styles = {
	    root: {
	      display: 'flex',
	      flexDirection: 'column',
	      justifyContent: 'center',
	      alignItems: 'center'
	    },
	    sections: {
	      width: '100%',
	      display: 'flex',
	      flexDirection: 'column',
	      alignItems: 'center'
	    },
	    header: {
	      marginBottom: '-20px'
	    }
	  };
	  var recentCamp = void 0;
	  if (props.user.campaignList && props.user.campaignList.length > 0) {
	    recentCamp = _react2.default.createElement(_single2.default, { campaign: props.user.campaignList[props.user.campaignList.length - 1] });
	  }

	  return _react2.default.createElement(
	    'div',
	    { style: styles.root },
	    _react2.default.createElement(
	      'div',
	      { style: styles.sections },
	      _react2.default.createElement(
	        'h1',
	        null,
	        'Welcome ',
	        props.user.name
	      )
	    ),
	    _react2.default.createElement(
	      'div',
	      { style: styles.sections },
	      _react2.default.createElement(
	        'h1',
	        { style: styles.header },
	        'Most Recent Campaign'
	      ),
	      recentCamp
	    )
	  );
	};

	exports.default = playerOverviewStats;

/***/ },

/***/ 670:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(484);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _reactRedux = __webpack_require__(53);

	var _reactRouterRedux = __webpack_require__(269);

	var _actionTypes = __webpack_require__(574);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	__webpack_require__(612);

	var _actions = __webpack_require__(584);

	var _singleCampaign = __webpack_require__(631);

	var _singleCampaign2 = _interopRequireDefault(_singleCampaign);

	var _constants = __webpack_require__(573);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Convert store state to props to be passed to component
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Set props to send
	    campaign: ownProps.campaign
	  };
	};

	// Creates props that will dispatch actions
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Actions to send
	    setGame: function setGame(game) {
	      dispatch((0, _actions.setGame)(game));
	      dispatch((0, _reactRouterRedux.push)('/'));
	    }
	  };
	};

	var SingleCampaignContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_singleCampaign2.default);

	exports.default = SingleCampaignContainer;

/***/ },

/***/ 671:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _reactRedux = __webpack_require__(53);

	var _reactRouterRedux = __webpack_require__(269);

	var _stats = __webpack_require__(672);

	var _stats2 = _interopRequireDefault(_stats);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// Convert store state to props to be passed to component
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Set props to send
	    user: state.account.player
	  };
	};

	// Creates props that will dispatch actions
	var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
	  // ownProps are props sent to the component
	  return {
	    // Actions to send
	  };
	};

	var StatsContainer = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_stats2.default);

	exports.default = StatsContainer;

/***/ },

/***/ 672:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _superagent = __webpack_require__(484);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _RaisedButton = __webpack_require__(599);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _SelectField = __webpack_require__(673);

	var _SelectField2 = _interopRequireDefault(_SelectField);

	var _MenuItem = __webpack_require__(688);

	var _MenuItem2 = _interopRequireDefault(_MenuItem);

	var _Paper = __webpack_require__(480);

	var _Paper2 = _interopRequireDefault(_Paper);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _d = __webpack_require__(689);

	var d3 = _interopRequireWildcard(_d);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LineChart = __webpack_require__(690).LineChart;

	var reqURLBase = '/api/1/stats/';

	var style = {
	  margin: 12
	};

	//Dummy chart test data

	var dummyData = [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }];

	var width = 700;
	var height = 300;
	var margins = { left: 100, right: 100, top: 50, bottom: 50 };
	var title = "User sample";
	// chart series,
	// field: is what field your data want to be selected
	// name: the name of the field that display in legend
	// color: what color is the line
	var chartSeries = [{
	  field: 'y',
	  name: 'y',
	  color: '#ff7f0e'
	}];
	// your x accessor
	var x = function x(d) {
	  return d.index;
	};

	//end of dummy test data

	var debug = (true) && (true);

	var styles = {
	  margins: {
	    left: 100,
	    right: 100,
	    top: 50,
	    bottom: 50
	  }
	};

	var Stats = function (_React$Component) {
	  _inherits(Stats, _React$Component);

	  function Stats(props) {
	    _classCallCheck(this, Stats);

	    //set function bindings
	    /*    this.getFakeDataTime = this.getFakeDataTime.bind(this);
	        this.getNFakeData = this.getNFakeData.bind(this);
	        this.getAllFakeData = this.getAllFakeData.bind(this);
	        this.sendFakeData = this.sendFakeData.bind(this);*/
	    var _this = _possibleConstructorReturn(this, (Stats.__proto__ || Object.getPrototypeOf(Stats)).call(this, props));

	    _this.state = {
	      data: {},
	      fromTime: 0,
	      toTime: 80000,
	      runNumber: 10,
	      chartTitle: 'WPM Chart',
	      chartWidth: '750',
	      chartHeight: '500',
	      WPMchartSeries: [{
	        field: 'wpm',
	        name: 'WPM',
	        color: '#ff7f0e'
	      }],
	      AccChartSeries: [{
	        field: 'acc',
	        name: 'Accuracy',
	        color: '#ff7f0e'
	      }],
	      selectValue: null
	    };
	    _this.update = _this.update.bind(_this);
	    return _this;
	  }

	  _createClass(Stats, [{
	    key: 'getFakeDataTime',
	    value: function getFakeDataTime(fromTime, toTime) {

	      //set request url
	      var user = this.props.user.name;
	      var reqURLext = '/runs/period/' + fromTime + '-' + toTime;
	      var reqURL = reqURLBase + user + reqURLext;

	      //make request
	      _superagent2.default.get(reqURL).end(function (err, res) {
	        if (err) {
	          return console.log(err);
	        }
	        var data = JSON.parse(res.text);
	        console.log(data);
	      });
	    }
	  }, {
	    key: 'getNFakeData',
	    value: function getNFakeData(runNumber) {
	      var _this2 = this;

	      //set request url
	      var user = this.props.user.name;
	      var reqURLext = '/runs/' + runNumber;
	      var reqURL = reqURLBase + user + reqURLext;

	      //make request
	      var data = _superagent2.default.get(reqURL).end(function (err, res) {
	        if (err) {
	          return console.log(err);
	        }

	        var data = JSON.parse(res.text);
	        console.log(data);
	        for (var i = 0; i < data.gameruns.length; i++) {
	          data.gameruns[i].index = i;
	        }
	        _this2.setState({ data: data });
	        console.log('here is the state data', _this2.state.data);
	      });
	    }
	  }, {
	    key: 'getAllFakeData',
	    value: function getAllFakeData() {
	      var _this3 = this;

	      var user = this.props.user.name;
	      var reqURLext = '/runs/';
	      var reqURL = reqURLBase + user + reqURLext;

	      _superagent2.default.get(reqURL).end(function (err, res) {
	        if (err) {
	          return console.log(err);
	        }
	        var data = JSON.parse(res.text);
	        for (var i = 0; i < data.gameruns.length; i++) {
	          data.gameruns[i].index = i;
	        }
	        _this3.setState({ data: data });
	      });
	    }
	  }, {
	    key: 'update',
	    value: function update(e, i, v) {
	      this.setState({ selectValue: v });
	      switch (i) {
	        case 0:
	          break;
	        case 1:
	        case 2:
	        case 3:
	        case 4:
	          this.getNFakeData(v);
	          break;
	        default:
	          this.getAllFakeData();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (debug) {
	        console.log('=== Render: Stats', this.props);
	        console.log('state data for stats', this.state.data);
	      }
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _SelectField2.default,
	            {
	              style: style,
	              floatingLabelFixed: false,
	              floatingLabelText: 'Last',
	              onChange: this.update,
	              value: this.state.selectValue
	            },
	            _react2.default.createElement(_MenuItem2.default, {
	              value: null
	            }),
	            _react2.default.createElement(_MenuItem2.default, {
	              value: 5,
	              primaryText: '5 Games'
	            }),
	            _react2.default.createElement(_MenuItem2.default, {
	              value: 10,
	              primaryText: '10 Games'
	            }),
	            _react2.default.createElement(_MenuItem2.default, {
	              value: 25,
	              primaryText: '25 Games'
	            }),
	            _react2.default.createElement(_MenuItem2.default, {
	              value: 50,
	              primaryText: '50 Games'
	            }),
	            _react2.default.createElement(_MenuItem2.default, {
	              value: 100,
	              primaryText: 'All Games'
	            })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          null,
	          this.state.data.gameruns !== undefined ? _react2.default.createElement(
	            _Paper2.default,
	            null,
	            _react2.default.createElement(LineChart, {
	              title: this.state.chartTitle,
	              width: this.state.chartWidth,
	              height: this.state.chartHeight,
	              data: this.state.data.gameruns,
	              chartSeries: this.state.WPMchartSeries,
	              x: x
	            }),
	            _react2.default.createElement(LineChart, {
	              title: this.state.chartTitle,
	              width: this.state.chartWidth,
	              height: this.state.chartHeight,
	              data: this.state.data.gameruns,
	              chartSeries: this.state.AccChartSeries,
	              x: x
	            })
	          ) : null
	        )
	      );
	    }
	  }]);

	  return Stats;
	}(_react2.default.Component);

	;

	exports.default = Stats;

/***/ },

/***/ 780:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _campaign = __webpack_require__(610);

	var _campaign2 = _interopRequireDefault(_campaign);

	var _auth = __webpack_require__(781);

	var _auth2 = _interopRequireDefault(_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = {
	  path: 'campaign',
	  component: _campaign2.default
	};

	if (true) {
	  routes.onEnter = _auth2.default;
	}

	exports.default = routes;

/***/ },

/***/ 781:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _superagent = __webpack_require__(484);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _constants = __webpack_require__(491);

	var _constants2 = _interopRequireDefault(_constants);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var authenticate = function authenticate(nextState, replace, cb) {
	  _superagent2.default.get(_constants2.default.r.VALIDATE).end(function (err, res) {
	    if (err) {
	      return cb(err);
	    }

	    var data = JSON.parse(res.text);
	    if (!data.authenticated) {
	      console.log('redirecting');
	      replace('/');
	      return cb();
	    }
	    console.log('Authenticated');
	    return cb();
	  });
	};

	exports.default = authenticate;

/***/ },

/***/ 782:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _stats = __webpack_require__(671);

	var _stats2 = _interopRequireDefault(_stats);

	var _auth = __webpack_require__(781);

	var _auth2 = _interopRequireDefault(_auth);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = {
	  path: 'stats',
	  component: _stats2.default
	};

	if (true) {
	  routes.onEnter = _auth2.default;
	}

	exports.default = routes;

/***/ },

/***/ 783:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.routeLocationDidUpdate = undefined;

	var _actionTypes = __webpack_require__(578);

	var _actionTypes2 = _interopRequireDefault(_actionTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routeLocationDidUpdate = exports.routeLocationDidUpdate = function routeLocationDidUpdate(location) {
	  return {
	    type: _actionTypes2.default.locationUpdate,
	    data: { location: location }
	  };
	};

/***/ }

});