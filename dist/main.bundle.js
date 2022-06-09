"use strict";
(self["webpackChunkcra_routing"] = self["webpackChunkcra_routing"] || []).push([[179],{

/***/ 393:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__(9711);
// EXTERNAL MODULE: ./node_modules/effector-react/effector-react.mjs
var effector_react = __webpack_require__(4190);
// EXTERNAL MODULE: ./node_modules/effector/effector.mjs
var effector = __webpack_require__(8116);
;// CONCATENATED MODULE: ./src/entities/app/model/index.ts
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};


var AppDomain = (0,effector/* createDomain */.Fj)("AppDomain");
var initApp = AppDomain.createEvent("initApp");
var startedApp = AppDomain.createEvent("startedApp");
var $appStarted = AppDomain.createStore(false).on(startedApp, function () { return true; });
var setEventMessage = AppDomain.createEvent();
var $eventMessages = AppDomain.createStore([])
    .on(setEventMessage, function (state, event) { return __spreadArray(__spreadArray([], __read(state), false), [event], false); })
    .reset([$appStarted]);
(0,effector/* sample */.UP)({
    clock: initApp,
    fn: function () { return "start initial App"; },
    target: setEventMessage,
});
var useAppStarted = function () { return (0,effector_react/* useStore */.oR)($appStarted); };
var useEventMessages = function () { return (0,effector_react/* useStore */.oR)($eventMessages); };
var selectors = {
    useAppStarted: useAppStarted,
    useEventMessages: useEventMessages,
};
var events = { initApp: initApp, setEventMessage: setEventMessage, startedApp: startedApp };

;// CONCATENATED MODULE: ./src/entities/app/index.ts


// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 3 modules
var transition = __webpack_require__(7031);
;// CONCATENATED MODULE: ./src/features/poupup/ui/index.tsx
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var ui_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





var Poupup = function () {
    var opened = model_selectors.useOpenedPoupup();
    var handleClose = (0,effector_react/* useEvent */.zX)(model_events.closePoupup);
    var _a = ui_read((0,react.useState)(false), 2), show = _a[0], setShow = _a[1];
    (0,react.useEffect)(function () {
        if (opened) {
            setShow(opened);
            var timer_1 = setTimeout(function () {
                setShow(function (prev) { return !prev; });
                handleClose();
            }, 3000);
            return function () { return clearTimeout(timer_1); };
        }
    }, [opened]);
    return ((0,jsx_runtime.jsx)(transition/* Transition */.u, __assign({ as: "div", show: show, appear: true, className: "absolute bottom-8 left-8 flex flex-col will-change-auto", enter: "duration-700 ease-in-out transform ", enterFrom: "translate-y-full", enterTo: "translate-y-0", leave: "duration-300 ease-in-out transform transition-opacity ease-linear", leaveFrom: "translate-y-0 opacity-100", leaveTo: "translate-y-full opacity-0" }, { children: (0,jsx_runtime.jsx)("div", __assign({ className: "\r\n            rounded-lg bg-green-600 px-10 py-5 shadow-lg" }, { children: (0,jsx_runtime.jsx)(Message, {}) })) })));
};
var Message = function () {
    var message = model_selectors.useMessage();
    return ((0,jsx_runtime.jsx)(transition/* Transition */.u, __assign({ appear: true, as: "div" }, { children: (0,jsx_runtime.jsx)(transition/* Transition.Child */.u.Child, __assign({ as: react.Fragment, enter: "duration-500 ease-linear transition-opacity", enterFrom: "opacity-0", enterTo: "opacity-100", leaveFrom: "opacity-100", leaveTo: "opacity-70", leave: "transition-opacity ease-linear" }, { children: (0,jsx_runtime.jsx)("span", { children: message }) })) })));
};

;// CONCATENATED MODULE: ./src/features/poupup/model/index.ts


var PoupupDomain = (0,effector/* createDomain */.Fj)("PoupupDomain");
var openPoupup = PoupupDomain.createEvent();
var closePoupup = PoupupDomain.createEvent();
var clearMessage = PoupupDomain.createEvent();
var $openedPoupup = PoupupDomain.createStore(false)
    .on(openPoupup, function () { return true; })
    .reset([closePoupup]);
var setMessage = PoupupDomain.createEvent();
var $message = PoupupDomain.createStore(null)
    .on(setMessage, function (_, message) { return message; })
    .reset(clearMessage);
(0,effector/* sample */.UP)({
    clock: $message,
    source: $openedPoupup,
    filter: function (pop, message) { return message !== null || !pop; },
    target: openPoupup,
});
var model_events = {
    setMessage: setMessage,
    closePoupup: closePoupup,
};
var useMessage = function () { return (0,effector_react/* useStore */.oR)($message); };
var useOpenedPoupup = function () { return (0,effector_react/* useStore */.oR)($openedPoupup); };
var model_selectors = { useMessage: useMessage, useOpenedPoupup: useOpenedPoupup };

;// CONCATENATED MODULE: ./src/features/poupup/index.ts



// EXTERNAL MODULE: ./node_modules/patronum/reset/index.js
var patronum_reset = __webpack_require__(5349);
// EXTERNAL MODULE: ./node_modules/patronum/delay/index.js
var delay = __webpack_require__(9399);
// EXTERNAL MODULE: ./node_modules/dayjs/dayjs.min.js
var dayjs_min = __webpack_require__(7484);
var dayjs_min_default = /*#__PURE__*/__webpack_require__.n(dayjs_min);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/weekOfYear.js
var weekOfYear = __webpack_require__(5183);
var weekOfYear_default = /*#__PURE__*/__webpack_require__.n(weekOfYear);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/duration.js
var duration = __webpack_require__(1646);
var duration_default = /*#__PURE__*/__webpack_require__.n(duration);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/relativeTime.js
var relativeTime = __webpack_require__(4110);
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/utc.js
var utc = __webpack_require__(178);
var utc_default = /*#__PURE__*/__webpack_require__.n(utc);
// EXTERNAL MODULE: ./node_modules/dayjs/plugin/timezone.js
var timezone = __webpack_require__(9387);
var timezone_default = /*#__PURE__*/__webpack_require__.n(timezone);
// EXTERNAL MODULE: ./node_modules/dayjs/locale/ru.js
var ru = __webpack_require__(600);
var ru_default = /*#__PURE__*/__webpack_require__.n(ru);
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9669);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);
;// CONCATENATED MODULE: ./src/shared/lib/api.ts
var api_assign = (undefined && undefined.__assign) || function () {
    api_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return api_assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};









dayjs_min_default().extend((weekOfYear_default()));
dayjs_min_default().extend((duration_default()));
dayjs_min_default().extend((relativeTime_default()));
dayjs_min_default().extend((utc_default()));
dayjs_min_default().extend((timezone_default()));
dayjs_min_default().tz.setDefault(dayjs_min_default().tz.guess());
dayjs_min_default().locale((ru_default()));
var daysJS = (dayjs_min_default());
var API_URL = "http://localhost:4000";
var bookingAPIInstance = axios_default().create({
    baseURL: API_URL,
    withCredentials: true,
});
bookingAPIInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = "Bearer ".concat(localStorage.getItem("token"));
    return config;
});
bookingAPIInstance.interceptors.response.use(function (config) {
    return config;
}, function (error) { return __awaiter(void 0, void 0, void 0, function () {
    var originalRequest, response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                originalRequest = error.config;
                if (!(error.response.status === 401 && error.config && !error.config._isRetry)) return [3 /*break*/, 4];
                originalRequest._isRetry = true;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_default().get("".concat(API_URL, "/auth/refresh"), { withCredentials: true })];
            case 2:
                response = _a.sent();
                localStorage.setItem("token", response.data.accessToken);
                return [2 /*return*/, bookingAPIInstance.request(originalRequest)];
            case 3:
                e_1 = _a.sent();
                localStorage.removeItem("token");
                return [3 /*break*/, 4];
            case 4: throw error;
        }
    });
}); });
var login = function (cred) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bookingAPIInstance.post("/auth/login", cred)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var getMe = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, bookingAPIInstance.get("/auth/profile")];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
var registration = function (user) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, bookingAPIInstance.post("/auth/registration", user)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
var logout = function () { return __awaiter(void 0, void 0, void 0, function () {
    var req;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bookingAPIInstance.post("/auth/logout")];
            case 1:
                req = _a.sent();
                if (req.status < 400)
                    localStorage.removeItem("token");
                return [2 /*return*/, req];
        }
    });
}); };
var getReserves = function (params) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, bookingAPIInstance.get("/reserves", { params: params })];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
var getReserve = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, bookingAPIInstance.get("/reserves", { params: id })];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
var getTables = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, bookingAPIInstance.get("/tables", { params: { id: id } })];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
var deleteReserve = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, bookingAPIInstance.delete("/reserves/".concat(id))];
}); }); };
var deleteSelectedReserves = function (ids) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, bookingAPIInstance.post("/reserves/selected", ids)];
}); }); };
var deleteAllReserves = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, bookingAPIInstance.delete("/reserves/all")];
}); }); };
var getHallplanes = function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    return [2 /*return*/, bookingAPIInstance.get("/hallplanes")];
}); }); };
var postReserve = function (reserve) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
    switch (_a.label) {
        case 0: return [4 /*yield*/, bookingAPIInstance.post("/reserves", reserve)];
        case 1: return [2 /*return*/, _a.sent()];
    }
}); }); };
var getTablesFx = (0,effector/* createEffect */.GW)(getTables);
var getHallplanesFx = (0,effector/* createEffect */.GW)(getHallplanes);
var postReserveFx = (0,effector/* createEffect */.GW)(postReserve);
var deleteReserveByIdFx = (0,effector/* createEffect */.GW)(deleteReserve);
var deleteAllReservesFx = (0,effector/* createEffect */.GW)(deleteAllReserves);
var deleteSelectedReservesFx = (0,effector/* createEffect */.GW)(deleteSelectedReserves);
var modifyUser = function (_a) { return __awaiter(void 0, void 0, void 0, function () {
    var id = _a.id, user = __rest(_a, ["id"]);
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, bookingAPIInstance.patch("/users/".concat(id), api_assign({}, user))];
            case 1: return [2 /*return*/, _b.sent()];
        }
    });
}); };
var BookingAPI = {
    getMe: getMe,
    login: login,
    logout: logout,
    modifyUser: modifyUser,
    getReserve: getReserve,
    getReserves: getReserves,
    getTablesFx: getTablesFx,
    registration: registration,
    postReserveFx: postReserveFx,
    getHallplanesFx: getHallplanesFx,
    deleteReserveByIdFx: deleteReserveByIdFx,
    deleteAllReservesFx: deleteAllReservesFx,
    deleteSelectedReservesFx: deleteSelectedReservesFx,
};

;// CONCATENATED MODULE: ./src/entities/auth/lib/api.ts


var loginFx = (0,effector/* createEffect */.GW)(BookingAPI.login);
var checkAuthFx = (0,effector/* createEffect */.GW)(BookingAPI.getMe);
var registrationFx = (0,effector/* createEffect */.GW)(BookingAPI.registration);
var logoutFx = (0,effector/* createEffect */.GW)(BookingAPI.logout);
var modifyUserFx = (0,effector/* createEffect */.GW)(BookingAPI.modifyUser);

;// CONCATENATED MODULE: ./src/entities/auth/lib/index.ts



;// CONCATENATED MODULE: ./src/entities/auth/model/index.ts
var model_assign = (undefined && undefined.__assign) || function () {
    model_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return model_assign.apply(this, arguments);
};







var AuthDomain = (0,effector/* createDomain */.Fj)("authDomain");
var changeUserValues = AuthDomain.createEvent();
var $user = AuthDomain.createStore(null).on(changeUserValues, function (user, event) {
    var _a;
    return (model_assign(model_assign({}, user), (_a = {}, _a[event.target.name] = event.target.value, _a)));
});
var $accessToken = AuthDomain.createStore(null);
var setCredential = AuthDomain.createEvent();
var $credential = AuthDomain.createStore({
    email: "",
    password: "",
}).on(setCredential, function (state, event) {
    var _a;
    return (model_assign(model_assign({}, state), (_a = {}, _a[event.target.name] = event.target.value, _a)));
});
var model_login = AuthDomain.createEvent();
model_login.watch(function (e) { return e.preventDefault(); });
(0,effector/* sample */.UP)({
    clock: model_login,
    source: $credential,
    fn: function (cred, _) { return cred; },
    target: loginFx,
});
(0,effector/* sample */.UP)({
    clock: loginFx.doneData,
    fn: function (res) {
        localStorage.setItem("token", res.data.accessToken);
        return res.data.accessToken;
    },
    target: $accessToken,
});
var $authError = AuthDomain.createStore(null);
(0,effector/* sample */.UP)({
    clock: loginFx.failData,
    fn: function (res) { return res.message; },
    target: $authError,
});
var checkAuth = AuthDomain.createEvent();
(0,effector/* sample */.UP)({
    clock: checkAuth,
    target: checkAuthFx,
});
(0,effector/* sample */.UP)({
    clock: $accessToken,
    filter: function (token) { return token !== null && token.length > 0; },
    target: checkAuth,
});
(0,effector/* sample */.UP)({
    clock: checkAuthFx.doneData,
    fn: function (res) { return res.data; },
    target: $user,
});
var $isAuth = AuthDomain.createStore(null)
    .on(checkAuthFx.doneData, function () { return true; })
    .on(checkAuthFx.fail, function () { return false; });
var $pending = AuthDomain.createStore(false).on(checkAuthFx.pending, function (_, state) { return state; });
(0,effector/* sample */.UP)({
    clock: $isAuth,
    filter: function (auth) { return auth !== null; },
    target: events.startedApp,
});
var setRegistrationCredential = AuthDomain.createEvent();
var $registrationCredential = AuthDomain.createStore({
    roleId: 1,
}).on(setRegistrationCredential, function (state, event) {
    var _a;
    return (model_assign(model_assign({}, state), (_a = {}, _a[event.target.name] = event.target.value, _a)));
});
var model_registration = AuthDomain.createEvent();
var $registrationComplited = AuthDomain.createStore(false).reset([setRegistrationCredential, setCredential]);
(0,effector/* sample */.UP)({
    clock: model_registration,
    source: $registrationCredential,
    target: registrationFx,
});
(0,effector/* sample */.UP)({
    clock: registrationFx.doneData,
    target: $registrationComplited,
    fn: function () { return true; },
});
model_registration.watch(function (e) { return e.preventDefault(); });
var model_logout = AuthDomain.createEvent();
(0,effector/* sample */.UP)({
    clock: model_logout,
    target: logoutFx,
});
(0,patronum_reset/* reset */.m)({
    clock: [logoutFx["finally"]],
    target: [$user, $isAuth, $accessToken],
});
(0,patronum_reset/* reset */.m)({
    clock: [$isAuth, loginFx["finally"], logoutFx["finally"]],
    target: [$credential, $registrationCredential, $registrationComplited],
});
(0,patronum_reset/* reset */.m)({ clock: [model_login, setCredential], target: $authError });
(0,patronum_reset/* reset */.m)({ clock: loginFx.fail, target: $accessToken });
(0,delay/* delay */.g)({
    source: (0,effector/* sample */.UP)({
        clock: checkAuth,
        fn: function () { return "start checking authorization"; },
    }),
    timeout: 1000,
    target: events.setEventMessage,
});
(0,delay/* delay */.g)({
    source: (0,effector/* sample */.UP)({
        clock: checkAuthFx.done,
        fn: function () { return "authorization complite"; },
    }),
    timeout: 1000,
    target: events.setEventMessage,
});
(0,delay/* delay */.g)({
    source: (0,effector/* sample */.UP)({
        clock: checkAuthFx.fail,
        fn: function () { return "authorization failed"; },
    }),
    timeout: 1000,
    target: events.setEventMessage,
});
var model_modifyUser = AuthDomain.createEvent();
(0,effector/* sample */.UP)({
    //@ts-ignore
    clock: model_modifyUser,
    source: $user,
    filter: function (user, _) { return user !== null; },
    fn: function (user, _) { return user; },
    target: modifyUserFx,
});
(0,effector/* sample */.UP)({
    clock: modifyUserFx.doneData,
    fn: function (res) { return JSON.stringify(res.data); },
    target: model_events.setMessage,
});
var auth_model_events = {
    login: model_login,
    logout: model_logout,
    checkAuth: checkAuth,
    modifyUser: model_modifyUser,
    registration: model_registration,
    setCredential: setCredential,
    changeUserValues: changeUserValues,
    setRegistrationCredential: setRegistrationCredential,
};
var useUser = function () { return (0,effector_react/* useStore */.oR)($user); };
var useIsAuth = function () { return (0,effector_react/* useStore */.oR)($isAuth); };
var usePending = function () { return (0,effector_react/* useStore */.oR)($pending); };
var useAuthError = function () { return (0,effector_react/* useStore */.oR)($authError); };
var useCredential = function () { return (0,effector_react/* useStore */.oR)($credential); };
var useAccessToken = function () { return (0,effector_react/* useStore */.oR)($accessToken); };
var useRegistrationComlited = function () { return (0,effector_react/* useStore */.oR)($registrationComplited); };
var useRegistrationCredential = function () { return (0,effector_react/* useStore */.oR)($registrationCredential); };
var auth_model_selectors = {
    useUser: useUser,
    useIsAuth: useIsAuth,
    usePending: usePending,
    useAuthError: useAuthError,
    useCredential: useCredential,
    useAccessToken: useAccessToken,
    useRegistrationComlited: useRegistrationComlited,
    useRegistrationCredential: useRegistrationCredential,
};

;// CONCATENATED MODULE: ./src/entities/auth/ui/index.tsx
var ui_assign = (undefined && undefined.__assign) || function () {
    ui_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ui_assign.apply(this, arguments);
};
var ui_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





var AuthForm = function () {
    var handleSubmit = (0,effector_react/* useEvent */.zX)(auth_model_events.login);
    var handleChange = (0,effector_react/* useEvent */.zX)(auth_model_events.setCredential);
    var credential = auth_model_selectors.useCredential();
    return ((0,jsx_runtime.jsxs)("div", ui_assign({ className: "flex w-full max-w-xl flex-col space-y-4 rounded-lg bg-gray-100 shadow-sm" }, { children: [(0,jsx_runtime.jsx)("h3", ui_assign({ className: " rounded-t-lg bg-white p-2 text-center first-letter:uppercase" }, { children: "\u0430\u0432\u0442\u043E\u0440\u0438\u0437\u0430\u0446\u0438\u044F" })), (0,jsx_runtime.jsxs)("form", ui_assign({ onSubmit: handleSubmit, className: "flex flex-col space-y-4 p-4 " }, { children: [(0,jsx_runtime.jsx)(InputFiled, { label: "login", placeholder: "email", name: "email", value: credential.email, onChange: handleChange }), (0,jsx_runtime.jsx)(InputFiled, { label: "password", placeholder: "password", type: "password", name: "password", value: credential.password, onChange: handleChange }), (0,jsx_runtime.jsx)("button", ui_assign({ type: "submit", className: "flex justify-center rounded-lg bg-green-600 px-4 py-2 text-white duration-150 hover:bg-green-500" }, { children: "\u0432\u043E\u0439\u0442\u0438" }))] })), (0,jsx_runtime.jsx)(AuthError, {})] })));
};
var InputFiled = (0,react.memo)(function (_a) {
    var label = _a.label, props = ui_rest(_a, ["label"]);
    return ((0,jsx_runtime.jsxs)("label", ui_assign({ className: "flex flex-col space-y-2 text-gray-900" }, { children: [(0,jsx_runtime.jsx)("span", { children: label }), (0,jsx_runtime.jsx)("input", ui_assign({}, props, { className: "rounded-lg border-2 p-2" }))] })));
});
var AuthError = function () {
    var authError = auth_model_selectors.useAuthError();
    return (0,jsx_runtime.jsx)("div", { children: authError });
};
var RegistrationForm = function () {
    var credential = auth_model_selectors.useRegistrationCredential();
    var handleChange = (0,effector_react/* useEvent */.zX)(auth_model_events.setRegistrationCredential);
    var handleSubmit = (0,effector_react/* useEvent */.zX)(auth_model_events.registration);
    return ((0,jsx_runtime.jsxs)("div", ui_assign({ className: "flex w-full max-w-xl flex-col space-y-4 rounded-lg bg-gray-100 shadow-sm" }, { children: [(0,jsx_runtime.jsx)("h3", ui_assign({ className: " rounded-t-lg bg-white p-2 text-center first-letter:uppercase" }, { children: "\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" })), (0,jsx_runtime.jsxs)("form", ui_assign({ onSubmit: handleSubmit, className: "flex flex-col space-y-4 p-4 " }, { children: [(0,jsx_runtime.jsx)(InputFiled, { label: "email", placeholder: "email", name: "email", value: credential.email, onChange: handleChange }), (0,jsx_runtime.jsx)(InputFiled, { label: "name", placeholder: "name", name: "name", value: credential.name, onChange: handleChange }), (0,jsx_runtime.jsx)(InputFiled, { label: "password", placeholder: "password", type: "password", name: "password", value: credential.password, onChange: handleChange }), (0,jsx_runtime.jsx)("button", ui_assign({ type: "submit", className: "flex justify-center rounded-lg bg-green-600 px-4 py-2 text-white duration-150 hover:bg-green-500" }, { children: "\u0432\u043E\u0439\u0442\u0438" }))] }))] })));
};

;// CONCATENATED MODULE: ./src/entities/auth/index.ts




// EXTERNAL MODULE: ./node_modules/jwt-decode/build/jwt-decode.esm.js
var jwt_decode_esm = __webpack_require__(6245);
// EXTERNAL MODULE: ./node_modules/react-router/index.js
var react_router = __webpack_require__(6974);
;// CONCATENATED MODULE: ./src/widgets/auth-context/index.tsx
var auth_context_assign = (undefined && undefined.__assign) || function () {
    auth_context_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return auth_context_assign.apply(this, arguments);
};







var AuthContext = (0,react.createContext)({});
var AuthProvider = function (props) {
    var login = (0,effector_react/* useEvent */.zX)(auth_model_events.login);
    var logout = (0,effector_react/* useEvent */.zX)(auth_model_events.logout);
    var registration = (0,effector_react/* useEvent */.zX)(auth_model_events.registration);
    var checkAuth = (0,effector_react/* useEvent */.zX)(auth_model_events.checkAuth);
    var isAuth = auth_model_selectors.useIsAuth();
    var location = (0,react_router/* useLocation */.TH)();
    var navigate = (0,react_router/* useNavigate */.s0)();
    (0,react.useLayoutEffect)(function () {
        var token = localStorage.getItem("token");
        if (token) {
            var decodedToken = (0,jwt_decode_esm/* default */.Z)(token);
            if (decodedToken.exp <= daysJS().unix())
                checkAuth();
        }
    }, [location]);
    (0,react.useEffect)(function () {
        checkAuth();
    }, []);
    (0,react.useEffect)(function () {
        if (!isAuth)
            navigate("/auth", { state: { from: location } });
    }, [isAuth]);
    return (0,jsx_runtime.jsx)(AuthContext.Provider, auth_context_assign({ value: { login: login, logout: logout, registration: registration, isAuth: isAuth, checkAuth: checkAuth } }, props));
};
var useAuth = function () { return useContext(AuthContext); };


// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/CalculatorIcon.js
var CalculatorIcon = __webpack_require__(1289);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/ClockIcon.js
var ClockIcon = __webpack_require__(5186);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/WifiIcon.js
var WifiIcon = __webpack_require__(5676);
;// CONCATENATED MODULE: ./src/shared/ui/nav-card/index.tsx
var nav_card_assign = (undefined && undefined.__assign) || function () {
    nav_card_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return nav_card_assign.apply(this, arguments);
};



var NavCard = (0,react.memo)(function (_a) {
    var title = _a.title, icon = _a.icon, href = _a.href, description = _a.description;
    return ((0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, nav_card_assign({ to: href }, { children: (0,jsx_runtime.jsxs)("article", nav_card_assign({ className: "rounded bg-gray-200 p-4 shadow-sm duration-150 hover:bg-amber-600 hover:text-white hover:shadow-xl " }, { children: [(0,jsx_runtime.jsxs)("div", nav_card_assign({ className: "mb-4 flex items-center justify-between" }, { children: [(0,jsx_runtime.jsx)("h3", nav_card_assign({ className: "text-xl font-semibold" }, { children: title })), icon] })), (0,jsx_runtime.jsx)("p", nav_card_assign({ className: "text-sm" }, { children: description }))] })) })));
});
NavCard.displayName = "NavCard";

;// CONCATENATED MODULE: ./src/pages/home/index.tsx
var home_assign = (undefined && undefined.__assign) || function () {
    home_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return home_assign.apply(this, arguments);
};



var Home = function () {
    return ((0,jsx_runtime.jsx)("div", home_assign({ className: "flex flex-col px-10 py-5" }, { children: (0,jsx_runtime.jsxs)("section", home_assign({ className: "flex flex-col" }, { children: [(0,jsx_runtime.jsx)("h2", { children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430" }), (0,jsx_runtime.jsxs)("div", home_assign({ className: "mb-20 grid items-stretch gap-4 md:mb-0 md:grid-cols-3" }, { children: [(0,jsx_runtime.jsx)(NavCard, { title: "booking", href: "/booking", description: "\u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435", icon: (0,jsx_runtime.jsx)(CalculatorIcon/* default */.Z, { className: "h-10 w-10 " }) }), (0,jsx_runtime.jsx)(NavCard, { title: "add new reserve", href: "/booking/add", description: "\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0440\u0435\u0437\u0435\u0440\u0432", icon: (0,jsx_runtime.jsx)(ClockIcon/* default */.Z, { className: "h-10 w-10 " }) }), (0,jsx_runtime.jsx)(NavCard, { title: "scheduller", href: "/booking/scheduller", description: "\u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435", icon: (0,jsx_runtime.jsx)(WifiIcon/* default */.Z, { className: "h-10 w-10 " }) })] }))] })) })));
};

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js + 8 modules
var dialog = __webpack_require__(7979);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/XIcon.js
var XIcon = __webpack_require__(5506);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/MenuIcon.js
var MenuIcon = __webpack_require__(9065);
;// CONCATENATED MODULE: ./src/shared/lib/helpers.ts
var routes = [
    { id: 1, path: "/", title: "главная" },
    // { id: 2, path: "/calculator", title: "калькулятор" },
    // { id: 3, path: "/timer", title: "таймер" },
    // { id: 4, path: "chess", title: "Chess" },
    // { id: 5, path: "/animate-icons", title: "анимированные иконки" },
    // { id: 6, path: "/xo", title: "крестики-нолики(proccess)" },
    { id: 7, path: "/booking", title: "бронирование (proccess)" },
];
var privateRoutes = (/* unused pure expression or super */ null && ([
// { id: 1, path: "/dark-store", title: "Dark Store" },
// { id: 2, path: "/ritm-style", title: "Ritm Style" },
// { id: 2, path: "/admin/dashboard", title: "Dashboard" },
// { id: 3, path: "/admin/lk", title: "LK" },
]));

;// CONCATENATED MODULE: ./src/shared/lib/index.ts



// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
;// CONCATENATED MODULE: ./src/shared/ui/navlink/index.tsx
var navlink_assign = (undefined && undefined.__assign) || function () {
    navlink_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return navlink_assign.apply(this, arguments);
};




var NavLink = (0,react.memo)(function (_a) {
    var href = _a.href, title = _a.title, vertical = _a.vertical, selected = _a.selected;
    return ((0,jsx_runtime.jsx)("li", navlink_assign({ className: (0,clsx_m/* default */.Z)(vertical && "flex w-full") }, { children: (0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, navlink_assign({ to: href, className: (0,clsx_m/* default */.Z)("rounded p-2 duration-150 first-letter:uppercase hover:bg-gray-200 hover:text-gray-900 active:bg-white active:text-gray-900", vertical && "w-full text-center", selected && "underline underline-offset-1") }, { children: title })) })));
});
NavLink.displayName = "NavLink";

;// CONCATENATED MODULE: ./src/shared/ui/index.ts


;// CONCATENATED MODULE: ./src/widgets/navigations/index.tsx
var navigations_assign = (undefined && undefined.__assign) || function () {
    navigations_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return navigations_assign.apply(this, arguments);
};





var Nav = (0,react.memo)(function (_a) {
    var routes = _a.routes, vertiacal = _a.vertiacal;
    var location = (0,react_router/* useLocation */.TH)();
    return ((0,jsx_runtime.jsx)("nav", navigations_assign({ className: (0,clsx_m/* default */.Z)(vertiacal ? "flex-col items-center space-y-4" : "flex-row items-center space-x-4 divide-x-2", "    divide-gray-200", "flex") }, { children: (0,jsx_runtime.jsx)("ul", navigations_assign({ className: (0,clsx_m/* default */.Z)(vertiacal ? "w-full flex-col items-center space-y-4 px-2" : "flex-row items-center space-x-4", "flex ") }, { children: routes.map(function (route) { return ((0,jsx_runtime.jsx)(NavLink, { href: route.path, title: route.title, vertical: true, selected: location.pathname === route.path }, route.id)); }) })) })));
});
Nav.displayName = "Nav";

;// CONCATENATED MODULE: ./src/features/drawer/ui/index.tsx
var drawer_ui_assign = (undefined && undefined.__assign) || function () {
    drawer_ui_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return drawer_ui_assign.apply(this, arguments);
};








var BurgerButton = function () {
    var handleClick = (0,effector_react/* useEvent */.zX)(drawer_events.toggleDrawer);
    var isOpened = drawer_selectors.useOpenedDrawer();
    return ((0,jsx_runtime.jsx)("button", drawer_ui_assign({ onClick: handleClick, className: "block lg:hidden" }, { children: isOpened ? (0,jsx_runtime.jsx)(XIcon/* default */.Z, { className: "h-6 w-6" }) : (0,jsx_runtime.jsx)(MenuIcon/* default */.Z, { className: "h-6 w-6" }) })));
};
var Drawer = function () {
    var isOpened = drawer_selectors.useOpenedDrawer();
    var handleClick = (0,effector_react/* useEvent */.zX)(drawer_events.toggleDrawer);
    var completeButtonRef = (0,react.useRef)(null);
    return ((0,jsx_runtime.jsx)(transition/* Transition.Root */.u.Root, drawer_ui_assign({ show: isOpened, as: react.Fragment }, { children: (0,jsx_runtime.jsx)(dialog/* Dialog */.V, drawer_ui_assign({ as: "aside", className: "fixed inset-0 z-50 overflow-hidden", onClose: handleClick, initialFocus: completeButtonRef }, { children: (0,jsx_runtime.jsxs)("div", drawer_ui_assign({ className: "absolute inset-0 overflow-hidden" }, { children: [(0,jsx_runtime.jsx)(transition/* Transition.Child */.u.Child, drawer_ui_assign({ as: react.Fragment, enter: "ease-in-out duration-500", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-500", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: (0,jsx_runtime.jsx)(dialog/* Dialog.Overlay */.V.Overlay, { className: "absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" }) })), (0,jsx_runtime.jsx)("div", drawer_ui_assign({ className: "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10" }, { children: (0,jsx_runtime.jsx)(transition/* Transition.Child */.u.Child, drawer_ui_assign({ as: react.Fragment, enter: "transform transition ease-in-out duration-300", enterFrom: "translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in-out duration-300", leaveFrom: "translate-x-0", leaveTo: "translate-x-full" }, { children: (0,jsx_runtime.jsxs)("div", drawer_ui_assign({ className: "pointer-events-auto relative w-screen max-w-md" }, { children: [(0,jsx_runtime.jsx)(transition/* Transition.Child */.u.Child, drawer_ui_assign({ as: react.Fragment, enter: "ease-in-out duration-500", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in-out duration-500", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: (0,jsx_runtime.jsx)("div", drawer_ui_assign({ className: "absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4" }, { children: (0,jsx_runtime.jsxs)("button", drawer_ui_assign({ ref: completeButtonRef, type: "button", className: "hover:animate-cross-spin group w-8 p-1 text-[#2a2e37] marker:h-8 hover:rounded-full hover:bg-[#2a2e37]", onClick: handleClick }, { children: [(0,jsx_runtime.jsx)("span", drawer_ui_assign({ className: "sr-only" }, { children: "Close panel" })), (0,jsx_runtime.jsx)(XIcon/* default */.Z, { className: "h-6 w-6 duration-150  group-hover:text-white", "aria-hidden": "true" })] })) })) })), (0,jsx_runtime.jsxs)("div", drawer_ui_assign({ className: "flex h-full flex-col divide-y overflow-y-scroll bg-white py-6 shadow-xl" }, { children: [(0,jsx_runtime.jsxs)("div", drawer_ui_assign({ className: "flex flex-col items-center justify-between space-y-2 px-4 " }, { children: [(0,jsx_runtime.jsx)(dialog/* Dialog.Title */.V.Title, drawer_ui_assign({ className: "text-2xl font-bold text-blue-500 md:text-4xl" }, { children: "Booking" })), (0,jsx_runtime.jsx)(dialog/* Dialog.Description */.V.Description, { children: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430 \u0440\u0435\u0437\u0435\u0440\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F" })] })), (0,jsx_runtime.jsx)(Nav, { routes: routes, vertiacal: true })] }))] })) })) }))] })) })) })));
};

;// CONCATENATED MODULE: ./src/features/drawer/model/drawer.ts


var toggleDrawer = (0,effector/* createEvent */.yM)();
var $isOpenedDrawer = (0,effector/* createStore */.MT)(false).on(toggleDrawer, function (state, _) { return !state; });
var drawer_events = {
    toggleDrawer: toggleDrawer,
};
var useOpenedDrawer = function () { return (0,effector_react/* useStore */.oR)($isOpenedDrawer); };
var drawer_selectors = {
    useOpenedDrawer: useOpenedDrawer,
};

;// CONCATENATED MODULE: ./src/features/drawer/model/index.ts


;// CONCATENATED MODULE: ./src/features/drawer/index.ts



;// CONCATENATED MODULE: ./src/shared/ui/spinner-loading/index.tsx
var spinner_loading_assign = (undefined && undefined.__assign) || function () {
    spinner_loading_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return spinner_loading_assign.apply(this, arguments);
};


var SpriteIcons = function (props, svgRef) {
    return ((0,jsx_runtime.jsxs)("svg", spinner_loading_assign({ xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 38 38", "aria-hidden": true }, props, { ref: svgRef }, { children: [(0,jsx_runtime.jsx)("defs", { children: (0,jsx_runtime.jsxs)("linearGradient", spinner_loading_assign({ x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" }, { children: [(0,jsx_runtime.jsx)("stop", { stopColor: "currentColor", stopOpacity: "0", offset: "0%" }), (0,jsx_runtime.jsx)("stop", { stopColor: "currentColor", stopOpacity: ".631", offset: "63.146%" }), (0,jsx_runtime.jsx)("stop", { stopColor: "currentColor", offset: "100%" })] })) }), (0,jsx_runtime.jsx)("g", spinner_loading_assign({ fill: "none", fillRule: "evenodd" }, { children: (0,jsx_runtime.jsxs)("g", spinner_loading_assign({ transform: "translate(1 1)" }, { children: [(0,jsx_runtime.jsx)("path", spinner_loading_assign({ d: "M36 18c0-9.94-8.06-18-18-18", id: "Oval-2", stroke: "url(#a)", strokeWidth: "2" }, { children: (0,jsx_runtime.jsx)("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", fill: "currentColor", dur: "0.9s", repeatCount: "indefinite" }) })), (0,jsx_runtime.jsx)("circle", spinner_loading_assign({ fill: "currentColor", cx: "36", cy: "18", r: "1" }, { children: (0,jsx_runtime.jsx)("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", fill: "currentColor", dur: "0.9s", repeatCount: "indefinite" }) }))] })) }))] })));
};
var SpinerLoader = (0,react.forwardRef)(SpriteIcons);

;// CONCATENATED MODULE: ./src/widgets/footer/index.tsx
var footer_assign = (undefined && undefined.__assign) || function () {
    footer_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return footer_assign.apply(this, arguments);
};

var Footer = function () {
    return ((0,jsx_runtime.jsx)("footer", footer_assign({ className: "flex px-4 py-2 bg-ocean text-white" }, { children: (0,jsx_runtime.jsx)("div", { children: "footer" }) })));
};

;// CONCATENATED MODULE: ./src/widgets/header/index.tsx
var header_assign = (undefined && undefined.__assign) || function () {
    header_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return header_assign.apply(this, arguments);
};





var Header = function (_a) {
    var children = _a.children, title = _a.title;
    var handleLogOut = (0,effector_react/* useEvent */.zX)(auth_model_events.logout);
    var user = auth_model_selectors.useUser();
    var isAuth = auth_model_selectors.useUser();
    return ((0,jsx_runtime.jsxs)("header", header_assign({ className: "flex items-center justify-between bg-ocean px-4 py-2 text-white shadow-md duration-150  hover:shadow-lg sm:space-x-12 md:px-8" }, { children: [(0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, header_assign({ to: "/" }, { children: (0,jsx_runtime.jsx)("h2", header_assign({ className: "text-2xl font-bold duration-150 first-letter:uppercase hover:drop-shadow-xl" }, { children: title })) })), children, (0,jsx_runtime.jsx)("div", { className: "sm:grow" }), (0,jsx_runtime.jsxs)("div", header_assign({ className: "flex items-center space-x-2" }, { children: [(0,jsx_runtime.jsx)("a", header_assign({ href: "tg://resolve?domain=WildeDJ", className: "rounded-full bg-white fill-ocean p-2" }, { children: (0,jsx_runtime.jsx)("svg", header_assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "16", height: "16" }, { children: (0,jsx_runtime.jsx)("path", { d: "M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z", color: "#fff" }) })) })), (0,jsx_runtime.jsx)("a", header_assign({ href: "https://github.com/Rastraponovich", rel: "noreferrer", target: "_blank", className: "rounded-full bg-white fill-ocean p-2" }, { children: (0,jsx_runtime.jsx)("svg", header_assign({ viewBox: "0 0 24 24", width: "16", height: "16" }, { children: (0,jsx_runtime.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" }) })) }))] })), user && ((0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, header_assign({ to: "/profile", className: "underline underline-offset-2" }, { children: user.email }))), isAuth && user && ((0,jsx_runtime.jsx)("button", header_assign({ onClick: handleLogOut, className: "flex items-center justify-center rounded-lg bg-gray-200 px-4 py-2 uppercase text-gray-900 duration-150 hover:bg-blue-600 hover:text-white" }, { children: "\u0432\u044B\u0445\u043E\u0434" }))), !isAuth && ((0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, header_assign({ to: "/auth", className: "flex items-center justify-center rounded-lg bg-gray-200 px-4 py-2 uppercase text-gray-900 duration-150 hover:bg-blue-600 hover:text-white" }, { children: "\u0432\u0445\u043E\u0434/\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F" }))), (0,jsx_runtime.jsx)(BurgerButton, {})] })));
};

;// CONCATENATED MODULE: ./src/widgets/main-layout/index.tsx
var main_layout_assign = (undefined && undefined.__assign) || function () {
    main_layout_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return main_layout_assign.apply(this, arguments);
};












var MainLayout = function () {
    var isAppStarted = selectors.useAppStarted();
    var location = (0,react_router/* useLocation */.TH)();
    var pageName = (0,react.useMemo)(function () {
        var names = location.pathname.split("/");
        return names[names.length - 1];
    }, [location]);
    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)(Header, main_layout_assign({ title: pageName }, { children: (0,jsx_runtime.jsx)("div", main_layout_assign({ className: "hidden lg:flex" }, { children: (0,jsx_runtime.jsx)(Nav, { routes: routes }) })) })), (0,jsx_runtime.jsx)(Drawer, {}), (0,jsx_runtime.jsx)("main", main_layout_assign({ className: "flex grow flex-col" }, { children: !isAppStarted ? (0,jsx_runtime.jsx)(FirstLoader, {}) : (0,jsx_runtime.jsx)(react_router/* Outlet */.j3, {}) })), (0,jsx_runtime.jsx)(Poupup, {}), (0,jsx_runtime.jsx)(Footer, {})] }));
};
var FirstLoader = function () {
    var messages = selectors.useEventMessages();
    return ((0,jsx_runtime.jsxs)("div", main_layout_assign({ className: "absolute inset-0 flex flex-col items-center justify-center space-y-2 overflow-clip bg-white" }, { children: [(0,jsx_runtime.jsx)(SpinerLoader, { className: "h-20 w-20" }), (0,jsx_runtime.jsx)("div", main_layout_assign({ className: "flex flex-col space-y-2 overflow-hidden rounded-lg bg-gray-200 p-10 text-gray-900" }, { children: messages.map(function (message) { return ((0,jsx_runtime.jsx)(transition/* Transition */.u, main_layout_assign({ as: "div", show: true, appear: true, enterFrom: "opacity-0 -translate-y-full", enter: "duration-700 transform opacity ", enterTo: "opacity-100 translate-y-0" }, { children: (0,jsx_runtime.jsx)("span", { children: message }) }), Date.now())); }) }))] })));
};

// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/CalendarIcon.js
var CalendarIcon = __webpack_require__(2450);
;// CONCATENATED MODULE: ./src/entities/booking/lib/helpers.ts
// export const _hallPlanes_: Array<THallplane> = [
//     { id: 1, name: "основной", isActive: true, image: "hall.jpeg" },
//     { id: 2, name: "вип", isActive: true, image: "vip.jpeg" },
//     { id: 3, name: "второй зал", isActive: true, image: "second.jpg" },
//     { id: 4, name: "терраса", isActive: true, image: "terrace.jpeg" },
//     { id: 5, name: "служебный", isActive: true, image: "reserve.jpeg" },
// ]
// export const _tables_: TTable[] = [
//     { id: 1, name: "стол 1", hallplaneId: 1, isActive: true },
//     { id: 2, name: "стол 2", hallplaneId: 1, isActive: true },
//     { id: 3, name: "стол 3", hallplaneId: 1, isActive: true },
//     { id: 4, name: "стол 4", hallplaneId: 1, isActive: true },
//     { id: 5, name: "стол 5", hallplaneId: 3, isActive: true },
//     { id: 6, name: "стол 6", hallplaneId: 3, isActive: true },
//     { id: 7, name: "стол 7", hallplaneId: 3, isActive: true },
//     { id: 8, name: "вип 1", hallplaneId: 2, isActive: true },
//     { id: 9, name: "вип 2", hallplaneId: 2, isActive: true },
//     { id: 10, name: "улица 1", hallplaneId: 4, isActive: true },
//     { id: 11, name: "улица 2", hallplaneId: 4, isActive: true },
//     { id: 12, name: "улица 3", hallplaneId: 4, isActive: true },
//     { id: 13, name: "служебный 1", hallplaneId: 5, isActive: true },
// ]
var _statuses_ = [
    { id: 1, name: "свободен", value: "free" },
    { id: 2, name: "занят", value: "ordered" },
    { id: 3, name: "недоступен", value: "outOfServie" },
];
var _defaultReserve_ = {
    id: 0,
    table: {
        id: 0,
        name: "выберите стол",
        hallplaneId: 0,
        isActive: true,
        reserves: [],
    },
    hallplane: {
        id: 0,
        name: "выбирите зал",
        isActive: true,
        image: "hall.jpeg",
    },
    hallplaneId: 0,
    tableId: 0,
    prepay: 0,
    guests: 0,
    status: { id: 1, name: "свободен", value: "free" },
    startDate: Date.now(),
    endDate: Date.now(),
};
var _prepaysDict_ = [
    { id: 0, name: "без фильтрации", value: [] },
    { id: 1, name: "без предоплат", value: [0] },
    { id: 2, name: "от 1000 до 2000", value: [1000, 2000] },
    { id: 3, name: "от 2000 до 5000", value: [2000, 5000] },
    { id: 4, name: "от 5000 до 10000", value: [5000, 10000] },
    { id: 5, name: "от 10000", value: [10000] },
];

;// CONCATENATED MODULE: ./src/entities/booking/lib/api.ts


var getReservesFx = (0,effector/* createEffect */.GW)(BookingAPI.getReserves);
var getFliteredReservesFx = (0,effector/* createEffect */.GW)(BookingAPI.getReserves);
var getReserveFx = (0,effector/* createEffect */.GW)(BookingAPI.getReserve);
var api_getTablesFx = (0,effector/* attach */.ub)({
    effect: BookingAPI.getTablesFx,
});
var getHallPlanesFx = (0,effector/* attach */.ub)({
    effect: BookingAPI.getHallplanesFx,
});
var PostReserveFx = (0,effector/* attach */.ub)({
    effect: BookingAPI.postReserveFx,
});
var deleteReserveById = (0,effector/* attach */.ub)({
    effect: BookingAPI.deleteReserveByIdFx,
});
(0,effector/* sample */.UP)({
    clock: [
        BookingAPI.postReserveFx.doneData,
        BookingAPI.deleteReserveByIdFx.doneData,
        BookingAPI.deleteAllReservesFx.doneData,
        BookingAPI.deleteSelectedReservesFx.doneData,
    ],
    fn: function () { return ({}); },
    target: getReservesFx,
});

;// CONCATENATED MODULE: ./src/entities/booking/lib/index.ts




;// CONCATENATED MODULE: ./src/entities/booking/model/index.ts
var model_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var model_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};



var pageDomain = (0,effector/* createDomain */.Fj)("pageDomain");
var $withDeleted = pageDomain.createStore(true);
var initPage = pageDomain.createEvent();
var $pageMounted = pageDomain.createStore(false);
var $reserve = pageDomain.createStore(_defaultReserve_);
var model_getTables = pageDomain.createEvent();
(0,effector/* sample */.UP)({
    clock: model_getTables,
    target: api_getTablesFx,
});
var $tables = pageDomain.createStore([]).on(api_getTablesFx.doneData, function (_, res) { return res.data[0]; });
var model_getHallplanes = pageDomain.createEvent();
(0,effector/* sample */.UP)({
    clock: model_getHallplanes,
    target: getHallPlanesFx,
});
var $hallplanes = pageDomain
    .createStore([])
    .on(getHallPlanesFx.doneData, function (_, res) { return res.data[0]; });
var model_getReserves = pageDomain.createEvent();
(0,effector/* sample */.UP)({
    clock: model_getReserves,
    source: $withDeleted,
    fn: function (withDeleted, _) { return ({ withDeleted: withDeleted }); },
    target: getReservesFx,
});
var $reserves = pageDomain
    .createStore([])
    .on(getReservesFx.doneData, function (_, payload) { return payload.data[0]; });
var selectReserve = pageDomain.createEvent();
var $selectedReserves = pageDomain.createStore([]).on(selectReserve, function (reserves, id) {
    var candidate = reserves.some(function (r) { return r === id; });
    if (candidate)
        return reserves.filter(function (r) { return r !== id; });
    return model_spreadArray(model_spreadArray([], model_read(reserves), false), [id], false);
});
var $compacted = pageDomain.createStore(false);
var $selectedReservesCount = $selectedReserves.map(function (item) { return item.length; });
var $reservesCount = pageDomain.createStore(0).on(getReservesFx.doneData, function (_, res) { return res.data[1]; });
var $filteredReserves = (0,effector/* createStore */.MT)([])
    .on(getFliteredReservesFx.doneData, function (_, res) { return res.data[0]; })
    .on($reserves, function (_, r) { return r; });
$selectedReserves.reset($filteredReserves);
var $filteredReservesCount = $reservesCount
    .map(function (quantity) { return quantity; })
    .on(getFliteredReservesFx.doneData, function (_, res) { return res.data[1]; });
var $isLoadingReserves = (0,effector/* createStore */.MT)(false).on([getFliteredReservesFx.pending, getReservesFx.pending], function (_, state) { return state; });
var useCompactList = function () { return (0,effector_react/* useStore */.oR)($compacted); };
var usePageMounted = function () { return (0,effector_react/* useStore */.oR)($pageMounted); };
var useReserves = function () { return (0,effector_react/* useStore */.oR)($filteredReserves); };
var useReservesCount = function () { return (0,effector_react/* useStore */.oR)($reservesCount); };
var useSelectedReserves = function () { return (0,effector_react/* useStore */.oR)($selectedReserves); };
var useIsLoadingReserves = function () { return (0,effector_react/* useStore */.oR)($isLoadingReserves); };
var useFilteredReservesCount = function () { return (0,effector_react/* useStore */.oR)($filteredReservesCount); };
var useSelectedReservesCount = function () { return (0,effector_react/* useStore */.oR)($selectedReservesCount); };
(0,effector/* sample */.UP)({
    clock: initPage,
    target: [model_getHallplanes, model_getReserves, model_getTables],
});
(0,effector/* sample */.UP)({
    clock: [getHallPlanesFx.fail, getReservesFx.fail, api_getTablesFx.fail],
    fn: function () { return false; },
    target: $pageMounted,
});
(0,effector/* sample */.UP)({
    clock: [getHallPlanesFx.doneData, getReservesFx.doneData, api_getTablesFx.doneData],
    fn: function () { return true; },
    target: $pageMounted,
});
var booking_model_selectors = {
    useReserves: useReserves,
    useCompactList: useCompactList,
    usePageMounted: usePageMounted,
    useReservesCount: useReservesCount,
    useSelectedReserves: useSelectedReserves,
    useIsLoadingReserves: useIsLoadingReserves,
    useSelectedReservesCount: useSelectedReservesCount,
    useFilteredReservesCount: useFilteredReservesCount,
};
var booking_model_events = {
    initPage: initPage,
    getTables: model_getTables,
    getReserves: model_getReserves,
    selectReserve: selectReserve,
};

;// CONCATENATED MODULE: ./src/entities/booking/index.ts


// export * from "./ui"

;// CONCATENATED MODULE: ./src/features/reserves-filters/model/reserves-filters.ts
var reserves_filters_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var reserves_filters_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};




var filtersDomain = (0,effector/* createDomain */.Fj)("filtersDomain");
var toggleVisibledFiltersClicked = filtersDomain.createEvent();
var $visibledFilters = filtersDomain
    .createStore(false)
    .on(toggleVisibledFiltersClicked, function (state, _) { return !state; });
var toggleWithDeleted = (0,effector/* createEvent */.yM)();
var reserves_filters_$withDeleted = filtersDomain.createStore(true).on(toggleWithDeleted, function (state, _) { return !state; });
var reserves_filters_$hallplanes = (0,effector/* combine */.$e)($hallplanes, function (hallplanes) {
    return reserves_filters_spreadArray([{ id: 0, name: "без фильтрации", value: "" }], reserves_filters_read(hallplanes), false);
});
var selectHallPlane = filtersDomain.createEvent();
var $selectedHallPlanes = filtersDomain
    .createStore({
    id: 0,
    name: "без фильтрации",
    isActive: true,
    image: "",
})
    .on(selectHallPlane, function (_, payload) { return payload; });
var $prepays = filtersDomain.createStore(_prepaysDict_);
var selectPrepay = filtersDomain.createEvent();
var $selectedPrepay = filtersDomain
    .createStore(_prepaysDict_[0])
    .on(selectPrepay, function (_, payload) { return payload; });
(0,effector/* sample */.UP)({
    clock: [$selectedHallPlanes, $selectedPrepay, reserves_filters_$withDeleted],
    source: [$selectedHallPlanes, $selectedPrepay, reserves_filters_$withDeleted],
    //@ts-ignore
    fn: function (_a, _) {
        var _b = reserves_filters_read(_a, 3), filteredHallPlanes = _b[0], prepays = _b[1], withDeleted = _b[2];
        if (filteredHallPlanes.id !== 0) {
            if (prepays.id !== 0)
                return {
                    hallplaneId: filteredHallPlanes.id,
                    prepayType: prepays.id,
                    withDeleted: withDeleted,
                };
            return {
                hallplaneId: filteredHallPlanes.id,
                withDeleted: withDeleted,
            };
        }
        if (prepays.value.length !== 0)
            return { prepayType: prepays.id, withDeleted: withDeleted };
        return { withDeleted: withDeleted };
    },
    target: getFliteredReservesFx,
});
var reserves_filters_events = {
    selectHallPlane: selectHallPlane,
    selectPrepay: selectPrepay,
    toggleWithDeleted: toggleWithDeleted,
    toggleVisibledFiltersClicked: toggleVisibledFiltersClicked,
};
var usePrepays = function () { return (0,effector_react/* useStore */.oR)($prepays); };
var useHallPlanes = function () { return (0,effector_react/* useStore */.oR)(reserves_filters_$hallplanes); };
var useWithDeleted = function () { return (0,effector_react/* useStore */.oR)(reserves_filters_$withDeleted); };
var useSelectedPrepay = function () { return (0,effector_react/* useStore */.oR)($selectedPrepay); };
var useVisibledFilters = function () { return (0,effector_react/* useStore */.oR)($visibledFilters); };
var useSelectedHallPlane = function () { return (0,effector_react/* useStore */.oR)($selectedHallPlanes); };
var reserves_filters_selectors = {
    usePrepays: usePrepays,
    useHallPlanes: useHallPlanes,
    useWithDeleted: useWithDeleted,
    useSelectedPrepay: useSelectedPrepay,
    useVisibledFilters: useVisibledFilters,
    useSelectedHallPlane: useSelectedHallPlane,
};

;// CONCATENATED MODULE: ./src/features/reserves-filters/model/index.ts


;// CONCATENATED MODULE: ./src/features/reserves-filters/index.ts


;// CONCATENATED MODULE: ./src/features/reserves-action-panel/model/index.ts
var reserves_action_panel_model_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};




var toggleComactClicked = (0,effector/* createEvent */.yM)();
$compacted.on(toggleComactClicked, function (state, _) { return !state; });
var deleteAllReservesClicked = (0,effector/* createEvent */.yM)();
(0,effector/* sample */.UP)({
    clock: deleteAllReservesClicked,
    target: BookingAPI.deleteAllReservesFx,
});
var deleteSelectedReservesClicked = (0,effector/* createEvent */.yM)();
(0,effector/* sample */.UP)({
    clock: deleteSelectedReservesClicked,
    source: $selectedReserves,
    fn: function (selected, _) { return selected; },
    target: BookingAPI.deleteSelectedReservesFx,
});
var resetAllFiltersClicked = (0,effector/* createEvent */.yM)();
var selectAllReservesClicked = (0,effector/* createEvent */.yM)();
(0,effector/* sample */.UP)({
    clock: selectAllReservesClicked,
    source: [$filteredReserves, $selectedReserves],
    //@ts-ignore
    fn: function (_a, _) {
        var _b = reserves_action_panel_model_read(_a, 2), filteredReserves = _b[0], selectedReserves = _b[1];
        var selectedAll = filteredReserves.length === selectedReserves.length;
        if (selectedAll)
            return [];
        return filteredReserves.map(function (reserve) { return reserve.id; });
    },
    target: $selectedReserves,
});
$selectedReserves.reset([
    BookingAPI.deleteReserveByIdFx.doneData,
    BookingAPI.deleteAllReservesFx.doneData,
    resetAllFiltersClicked,
]);
$selectedHallPlanes.reset(resetAllFiltersClicked);
$selectedPrepay.reset(resetAllFiltersClicked);

// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/CheckIcon.js
var CheckIcon = __webpack_require__(4343);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/ViewGridIcon.js
var ViewGridIcon = __webpack_require__(1748);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/ViewListIcon.js
var ViewListIcon = __webpack_require__(8528);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/TrashIcon.js
var TrashIcon = __webpack_require__(8945);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/XCircleIcon.js
var XCircleIcon = __webpack_require__(9965);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/FilterIcon.js
var FilterIcon = __webpack_require__(2439);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/FilterIcon.js
var esm_FilterIcon = __webpack_require__(5954);
;// CONCATENATED MODULE: ./src/features/reserves-action-panel/ui/index.tsx
var reserves_action_panel_ui_assign = (undefined && undefined.__assign) || function () {
    reserves_action_panel_ui_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return reserves_action_panel_ui_assign.apply(this, arguments);
};
var reserves_action_panel_ui_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};










var ActionPanel = function () {
    return ((0,jsx_runtime.jsxs)("div", reserves_action_panel_ui_assign({ className: "flex flex-col justify-start space-y-2 rounded border  bg-gray-100 p-2 md:flex-row md:items-center  md:space-y-0 md:space-x-4" }, { children: [(0,jsx_runtime.jsx)(DeleteAllReservesButton, {}), (0,jsx_runtime.jsx)(DeleteSelectedReservesButton, {}), (0,jsx_runtime.jsx)(SelectAllButton, {}), (0,jsx_runtime.jsx)(ResetFiltersButton, {}), (0,jsx_runtime.jsx)(ToggleCompactButton, {}), (0,jsx_runtime.jsx)(ShowFiltersButton, {})] })));
};
var ActionButton = (0,react.memo)(function (_a) {
    var children = _a.children, className = _a.className, caption = _a.caption, props = reserves_action_panel_ui_rest(_a, ["children", "className", "caption"]);
    return ((0,jsx_runtime.jsxs)("button", reserves_action_panel_ui_assign({ type: "button" }, props, { className: (0,clsx_m/* default */.Z)("flex items-center space-x-2 self-start rounded-lg py-2 pl-4 pr-2 text-white shadow-md duration-150 hover:shadow-lg disabled:opacity-50", className) }, { children: [(0,jsx_runtime.jsx)("span", { children: caption }), children] })));
});
ActionButton.displayName = "ActionButton";
var SelectAllButton = function () {
    var hanldeSelectAllReservesClicked = (0,effector_react/* useEvent */.zX)(selectAllReservesClicked);
    var selectedReservesCount = booking_model_selectors.useSelectedReservesCount();
    var filteredOrdersCount = booking_model_selectors.useFilteredReservesCount();
    return ((0,jsx_runtime.jsx)(ActionButton, reserves_action_panel_ui_assign({ caption: selectedReservesCount === filteredOrdersCount ? "снять выделение" : "выбрать все", onClick: hanldeSelectAllReservesClicked, className: "bg-green-600" }, { children: selectedReservesCount === filteredOrdersCount ? ((0,jsx_runtime.jsx)(XIcon/* default */.Z, { className: "h-4 w-4" })) : ((0,jsx_runtime.jsx)(CheckIcon/* default */.Z, { className: "h-4 w-4" })) })));
};
var ToggleCompactButton = function () {
    var handleToggleComactClicked = (0,effector_react/* useEvent */.zX)(toggleComactClicked);
    var compact = booking_model_selectors.useCompactList();
    return ((0,jsx_runtime.jsx)("button", reserves_action_panel_ui_assign({ className: "rounded-lg bg-white p-2 text-gray-500 shadow-md hover:text-gray-900 active:text-gray-500", onClick: handleToggleComactClicked }, { children: compact ? (0,jsx_runtime.jsx)(ViewGridIcon/* default */.Z, { className: "h-5 w-5" }) : (0,jsx_runtime.jsx)(ViewListIcon/* default */.Z, { className: "h-5 w-5" }) })));
};
var DeleteAllReservesButton = function () {
    var handleDeleteAllReservesClicked = (0,effector_react/* useEvent */.zX)(deleteAllReservesClicked);
    return ((0,jsx_runtime.jsx)(ActionButton, reserves_action_panel_ui_assign({ className: "bg-rose-600", caption: "\u043E\u0442\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0432\u0441\u0435", onClick: handleDeleteAllReservesClicked }, { children: (0,jsx_runtime.jsx)(TrashIcon/* default */.Z, { className: "h-4 w-4" }) })));
};
var DeleteSelectedReservesButton = function () {
    var handleDeleteSelectedReservesClicked = (0,effector_react/* useEvent */.zX)(deleteSelectedReservesClicked);
    var selectedReservesCount = booking_model_selectors.useSelectedReservesCount();
    return ((0,jsx_runtime.jsx)(ActionButton, reserves_action_panel_ui_assign({ className: "bg-rose-600", caption: (0,jsx_runtime.jsxs)("span", { children: ["\u043E\u0442\u0447\u0438\u0441\u0442\u0438\u0442\u044C ", selectedReservesCount > 0 && ": " + selectedReservesCount] }), onClick: handleDeleteSelectedReservesClicked, disabled: selectedReservesCount === 0 }, { children: (0,jsx_runtime.jsx)(TrashIcon/* default */.Z, { className: "h-4 w-4" }) })));
};
var ResetFiltersButton = function () {
    var handleResetFiltersClicked = (0,effector_react/* useEvent */.zX)(resetAllFiltersClicked);
    return ((0,jsx_runtime.jsx)(ActionButton, reserves_action_panel_ui_assign({ onClick: handleResetFiltersClicked, caption: "\u0441\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B", className: "bg-rose-600" }, { children: (0,jsx_runtime.jsx)(XCircleIcon/* default */.Z, { className: "h-4 w-4" }) })));
};
var ShowFiltersButton = function () {
    var handleToggleVisibledClicked = (0,effector_react/* useEvent */.zX)(reserves_filters_events.toggleVisibledFiltersClicked);
    var visibled = reserves_filters_selectors.useVisibledFilters();
    return ((0,jsx_runtime.jsx)("button", reserves_action_panel_ui_assign({ className: "rounded-lg bg-white p-2 text-gray-500 shadow-md hover:text-gray-900 active:text-gray-500", onClick: handleToggleVisibledClicked }, { children: visibled ? (0,jsx_runtime.jsx)(FilterIcon/* default */.Z, { className: "h-5 w-5" }) : (0,jsx_runtime.jsx)(esm_FilterIcon/* default */.Z, { className: "h-5 w-5" }) })));
};

;// CONCATENATED MODULE: ./src/features/reserves-action-panel/index.ts



// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/AdjustmentsIcon.js
var AdjustmentsIcon = __webpack_require__(8471);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/listbox/listbox.js + 5 modules
var listbox = __webpack_require__(9787);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/SelectorIcon.js
var SelectorIcon = __webpack_require__(1013);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/solid/esm/CheckIcon.js
var esm_CheckIcon = __webpack_require__(8057);
;// CONCATENATED MODULE: ./src/shared/ui/select/index.tsx
var select_assign = (undefined && undefined.__assign) || function () {
    select_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return select_assign.apply(this, arguments);
};





var Select = function (_a) {
    var items = _a.items, onSelect = _a.onSelect, disabled = _a.disabled, selected = _a.selected, label = _a.label, containerClassName = _a.containerClassName;
    return ((0,jsx_runtime.jsx)("div", select_assign({ className: containerClassName }, { children: (0,jsx_runtime.jsxs)(listbox/* Listbox */.R, select_assign({ value: selected, onChange: onSelect, disabled: disabled }, { children: [label && ((0,jsx_runtime.jsx)(listbox/* Listbox.Label */.R.Label, select_assign({ className: "foucus:text-gray-900 mb-2 px-1 first-letter:uppercase" }, { children: label }))), (0,jsx_runtime.jsxs)("div", select_assign({ className: "relative" }, { children: [(0,jsx_runtime.jsxs)(listbox/* Listbox.Button */.R.Button, select_assign({ className: "group relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 disabled:cursor-default disabled:opacity-30 sm:text-sm" }, { children: [(0,jsx_runtime.jsx)("span", select_assign({ className: "block truncate" }, { children: selected === null || selected === void 0 ? void 0 : selected.name })), (0,jsx_runtime.jsx)("span", select_assign({ className: (0,clsx_m/* default */.Z)("pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2") }, { children: (0,jsx_runtime.jsx)(SelectorIcon/* default */.Z, { className: " h-5 w-5 text-gray-400 duration-300 group-hover:text-gray-500 group-active:text-gray-900 ", "aria-hidden": "true" }) }))] })), (0,jsx_runtime.jsx)(transition/* Transition */.u, select_assign({ as: react.Fragment, leave: "transition ease-in duration-100", leaveFrom: "opacity-100", leaveTo: "opacity-0" }, { children: (0,jsx_runtime.jsx)(listbox/* Listbox.Options */.R.Options, select_assign({ className: "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" }, { children: items.map(function (item, itemIdx) { return ((0,jsx_runtime.jsx)(listbox/* Listbox.Option */.R.Option, select_assign({ className: function (_a) {
                                        var active = _a.active;
                                        return "relative cursor-default select-none py-2 pl-10 pr-4 ".concat(active
                                            ? "bg-amber-100 text-amber-900"
                                            : "text-gray-900");
                                    }, value: item }, { children: function (_a) {
                                        var selected = _a.selected;
                                        return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsx)("span", select_assign({ className: "block truncate ".concat(selected
                                                        ? "font-medium"
                                                        : "font-normal") }, { children: item.name })), selected ? ((0,jsx_runtime.jsx)("span", select_assign({ className: "absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600" }, { children: (0,jsx_runtime.jsx)(esm_CheckIcon/* default */.Z, { className: "h-5 w-5", "aria-hidden": "true" }) }))) : null] }));
                                    } }), itemIdx)); }) })) }))] }))] })) })));
};

;// CONCATENATED MODULE: ./src/features/reserves-filters/ui/index.tsx
var reserves_filters_ui_assign = (undefined && undefined.__assign) || function () {
    reserves_filters_ui_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return reserves_filters_ui_assign.apply(this, arguments);
};





var Filters = function () {
    var prepays = reserves_filters_selectors.usePrepays();
    var hallplanes = reserves_filters_selectors.useHallPlanes();
    var withDeleted = reserves_filters_selectors.useWithDeleted();
    var selectedPrepay = reserves_filters_selectors.useSelectedPrepay();
    var selectedHallplane = reserves_filters_selectors.useSelectedHallPlane();
    var selectPrepay = (0,effector_react/* useEvent */.zX)(reserves_filters_events.selectPrepay);
    var toggleWithDeleted = (0,effector_react/* useEvent */.zX)(reserves_filters_events.toggleWithDeleted);
    var handleSelectHallplane = (0,effector_react/* useEvent */.zX)(reserves_filters_events.selectHallPlane);
    return ((0,jsx_runtime.jsxs)("div", reserves_filters_ui_assign({ className: "flex flex-col space-y-4 rounded bg-gray-100 px-2 py-4" }, { children: [(0,jsx_runtime.jsxs)("div", reserves_filters_ui_assign({ className: "flex items-center space-x-2" }, { children: [(0,jsx_runtime.jsx)("span", reserves_filters_ui_assign({ className: "text-xl font-semibold first-letter:uppercase sm:text-base" }, { children: "\u0444\u0438\u043B\u044C\u0442\u0440\u044B" })), (0,jsx_runtime.jsx)(AdjustmentsIcon/* default */.Z, { className: "h-6 w-6" })] })), (0,jsx_runtime.jsxs)("div", reserves_filters_ui_assign({ className: "flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0" }, { children: [(0,jsx_runtime.jsxs)("label", reserves_filters_ui_assign({ className: "flex grow flex-col items-start space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0" }, { children: [(0,jsx_runtime.jsx)("span", { children: "\u0443\u0434\u0430\u043B\u0435\u043D\u043D\u044B\u0435" }), (0,jsx_runtime.jsx)("input", { type: "checkbox", checked: withDeleted, onChange: toggleWithDeleted })] })), (0,jsx_runtime.jsxs)("div", reserves_filters_ui_assign({ className: "flex grow flex-col items-start space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0" }, { children: [(0,jsx_runtime.jsx)("span", { children: "\u043F\u043E \u0437\u0430\u043B\u0430\u043C:" }), (0,jsx_runtime.jsx)(Select, { items: hallplanes, onSelect: handleSelectHallplane, selected: selectedHallplane, containerClassName: "grow" })] })), (0,jsx_runtime.jsxs)("div", reserves_filters_ui_assign({ className: "flex grow flex-col items-start space-y-2 md:flex-row md:items-center md:space-x-4 md:space-y-0" }, { children: [(0,jsx_runtime.jsx)("span", { children: "\u043F\u043E \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0435:" }), (0,jsx_runtime.jsx)(Select, { items: prepays, onSelect: selectPrepay, selected: selectedPrepay, containerClassName: "grow" })] }))] }))] })));
};

;// CONCATENATED MODULE: ./src/shared/ui/scale-animation-wrapper/index.tsx
var scale_animation_wrapper_assign = (undefined && undefined.__assign) || function () {
    scale_animation_wrapper_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return scale_animation_wrapper_assign.apply(this, arguments);
};



var ScalesComponentAnimation = (0,react.memo)(function (_a) {
    var children = _a.children;
    return ((0,jsx_runtime.jsx)(transition/* Transition */.u, scale_animation_wrapper_assign({ show: true, as: "div", appear: true, enter: "transition-[transform_opacity] duration-500 ", enterFrom: "scale-150 opacity-0", enterTo: "scale-1 opacity-100", leave: "transition-[transform_opacity] duration-500 ", leaveFrom: "scale-1 opacity-100", leaveTo: "opacity-0 scale-70" }, { children: children })));
});

// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/UsersIcon.js
var UsersIcon = __webpack_require__(7556);
;// CONCATENATED MODULE: ./src/entities/booking/ui/index.tsx
var booking_ui_assign = (undefined && undefined.__assign) || function () {
    booking_ui_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return booking_ui_assign.apply(this, arguments);
};







var ReserveCard = (0,react.memo)(function (_a) {
    var reserve = _a.reserve, onClick = _a.onClick, selected = _a.selected, compact = _a.compact;
    var handleClick = function () {
        reserve.deletedAt === "" && onClick(reserve.id);
    };
    return ((0,jsx_runtime.jsxs)("div", booking_ui_assign({ style: {
            backgroundImage: !compact ? "url(/assets/booking/".concat(reserve.hallplane.image, ")") : "",
        }, onClick: handleClick, className: (0,clsx_m/* default */.Z)("group  relative bg-white bg-cover bg-no-repeat bg-origin-border text-white", reserve.deletedAt && "opacity-30", compact ? "flex-row text-gray-900" : "h-[200px] w-[200px] flex-col", selected && "  shadow-blue-100/50 ring-2 ring-blue-500/50 ring-offset-1 ring-offset-current ", "text-md flex   justify-between rounded-lg border border-transparent  p-4 font-light shadow-lg duration-150  hover:shadow-2xl") }, { children: [!compact && (0,jsx_runtime.jsx)("div", { className: "absolute inset-0  bg-black/30" }), (0,jsx_runtime.jsxs)("div", booking_ui_assign({ className: (0,clsx_m/* default */.Z)("z-10 flex items-start justify-between", compact && "order-2 space-x-2 ") }, { children: [(0,jsx_runtime.jsxs)("div", booking_ui_assign({ className: (0,clsx_m/* default */.Z)(compact ? "flex items-center space-x-2" : "flex flex-col space-y-1", "text-sm") }, { children: [(0,jsx_runtime.jsxs)("span", booking_ui_assign({ className: " truncate drop-shadow-xl " }, { children: ["c ", daysJS(Number(reserve.startDate)).format("DD.MM.YYYY HH:mm")] })), (0,jsx_runtime.jsxs)("span", booking_ui_assign({ className: " truncate drop-shadow-xl " }, { children: ["\u043F\u043E ", daysJS(Number(reserve.endDate)).format("DD.MM.YYYY HH:mm")] }))] })), (0,jsx_runtime.jsx)("span", { className: (0,clsx_m/* default */.Z)(
                        // reserve.status.value === "outOfServie"
                        //     ? "bg-rose-600 ring-2 ring-rose-300 "
                        //     : "bg-green-100 ring-2 ring-green-300 ",
                        "h-3 w-3 animate-pulse rounded-full border-2  border-white  ") })] })), (0,jsx_runtime.jsxs)("div", booking_ui_assign({ className: (0,clsx_m/* default */.Z)(compact && "order-1", "z-10 flex flex-col") }, { children: [(0,jsx_runtime.jsxs)("div", booking_ui_assign({ className: (0,clsx_m/* default */.Z)(compact && "space-x-4", "flex items-center justify-between") }, { children: [(0,jsx_runtime.jsx)("h5", booking_ui_assign({ className: "first-letter:uppercase" }, { children: reserve.hallplane.name })), (0,jsx_runtime.jsx)("span", booking_ui_assign({ className: "after:ml-1 after:content-['\u0440']" }, { children: reserve.prepay }))] })), (0,jsx_runtime.jsxs)("div", booking_ui_assign({ className: (0,clsx_m/* default */.Z)(compact && "space-x-3", "flex items-center justify-between") }, { children: [(0,jsx_runtime.jsx)("span", booking_ui_assign({ className: "font-medium first-letter:uppercase before:mr-1 before:content-['\u2116']" }, { children: reserve.table.name })), (0,jsx_runtime.jsxs)("div", booking_ui_assign({ className: "flex items-center space-x-2" }, { children: [(0,jsx_runtime.jsx)(UsersIcon/* default */.Z, { className: "h-3 w-3 " }), (0,jsx_runtime.jsx)("span", { children: reserve.guests })] }))] }))] }))] })));
});
ReserveCard.displayName = "ReserveCard";
var Loader = function () {
    var isLoading = booking_model_selectors.useIsLoadingReserves();
    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: isLoading && ((0,jsx_runtime.jsx)("div", booking_ui_assign({ className: "fixed inset-0 z-50 flex grow justify-center bg-black/30 pt-[25%]" }, { children: (0,jsx_runtime.jsx)(SpinerLoader, { className: "h-20 w-20" }) }))) }));
};

;// CONCATENATED MODULE: ./src/entities/booking/ui/reserves-list.tsx
var reserves_list_assign = (undefined && undefined.__assign) || function () {
    reserves_list_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return reserves_list_assign.apply(this, arguments);
};










var ReservesList = function () {
    var filteredOrders = booking_model_selectors.useReserves();
    var compact = booking_model_selectors.useCompactList();
    var selectedReserves = booking_model_selectors.useSelectedReserves();
    var isLoading = booking_model_selectors.useIsLoadingReserves();
    var handleSelectBooking = (0,effector_react/* useEvent */.zX)(booking_model_events.selectReserve);
    return ((0,jsx_runtime.jsx)("div", reserves_list_assign({ className: (0,clsx_m/* default */.Z)(compact
            ? "flex flex-col space-y-2"
            : "grid justify-center gap-4 py-2 sm:grid-cols-2 md:grid-cols-3 md:justify-start md:gap-3 lg:grid-cols-5 xl:grid-cols-6") }, { children: filteredOrders.map(function (reserve) { return ((0,jsx_runtime.jsx)(ScalesComponentAnimation, { children: (0,jsx_runtime.jsx)(ReserveCard, { reserve: reserve, onClick: handleSelectBooking, compact: compact, selected: selectedReserves.some(function (id) { return id === reserve.id; }) }, reserve.id) }, reserve.id)); }) })));
};
var Reserves = function () {
    var reservesCount = booking_model_selectors.useReservesCount();
    var filteredReservesCount = booking_model_selectors.useFilteredReservesCount();
    return ((0,jsx_runtime.jsxs)("section", reserves_list_assign({ className: "flex flex-col space-y-2 bg-gray-200 p-4" }, { children: [(0,jsx_runtime.jsxs)("div", reserves_list_assign({ className: "flex items-center space-x-2" }, { children: [(0,jsx_runtime.jsx)("h4", reserves_list_assign({ className: "!my-4 text-2xl font-bold first-letter:uppercase sm:text-xl" }, { children: "\u0441\u043F\u0438\u0441\u043E\u043A \u0440\u0435\u0437\u0435\u0440\u0432\u043E\u0432" })), (0,jsx_runtime.jsxs)("span", { children: [filteredReservesCount, " / ", reservesCount] }), (0,jsx_runtime.jsx)(CalendarIcon/* default */.Z, { className: "h-6 w-6" })] })), (0,jsx_runtime.jsxs)("div", reserves_list_assign({ className: "flex flex-col  space-y-2 text-base sm:text-sm" }, { children: [(0,jsx_runtime.jsx)(ActionPanel, {}), (0,jsx_runtime.jsx)(Filters, {})] })), filteredReservesCount === 0 && (0,jsx_runtime.jsx)("span", reserves_list_assign({ className: "w-full text-center text-4xl " }, { children: "\u0431\u0440\u043E\u043D\u0435\u0439 \u043D\u0435\u0442" })), (0,jsx_runtime.jsx)(ReservesList, {})] })));
};

;// CONCATENATED MODULE: ./src/pages/booking/index.tsx
var booking_assign = (undefined && undefined.__assign) || function () {
    booking_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return booking_assign.apply(this, arguments);
};







var BookingPage = function () {
    var initPage = (0,effector_react/* useEvent */.zX)(booking_model_events.initPage);
    var pageMounted = booking_model_selectors.usePageMounted();
    (0,react.useEffect)(function () {
        initPage();
    }, []);
    return ((0,jsx_runtime.jsxs)("div", booking_assign({ className: " z-50 flex grow flex-col space-y-2 px-4 py-2 font-sans md:space-y-4 md:px-10 md:py-5" }, { children: [(0,jsx_runtime.jsxs)("nav", booking_assign({ className: "flex space-x-2" }, { children: [(0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, booking_assign({ to: "/booking" }, { children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" })), (0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, booking_assign({ to: "/booking/scheduller" }, { children: "\u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435" }))] })), (0,jsx_runtime.jsx)(Loader, {}), (0,jsx_runtime.jsx)(Reserves, {})] })));
};
//refactoring needded to accept params array
var CodeGenerator = (0,react.memo)(function (_a) {
    var filteredhallPlanesId = _a.filteredhallPlanesId, prepaysId = _a.prepaysId;
    var params = [
        filteredhallPlanesId !== 0 && "hallId=".concat(filteredhallPlanesId),
        prepaysId !== 0 && "prepaysId=".concat(prepaysId),
    ];
    return ((0,jsx_runtime.jsxs)("section", booking_assign({ className: "flex flex-col space-y-4 bg-teal-600 px-4 py-8" }, { children: [(0,jsx_runtime.jsx)("h4", booking_assign({ className: "text-2xl font-bold text-white sm:text-xl" }, { children: "api query generator" })), (0,jsx_runtime.jsxs)("pre", booking_assign({ className: "rounded bg-gray-300 p-4 text-sm" }, { children: [(0,jsx_runtime.jsx)("p", { children: "\u0434\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u0432\u044B\u043F\u043E\u043B\u043D\u0438\u043C \u0437\u0430\u043F\u0440\u043E\u0441" }), (0,jsx_runtime.jsxs)("code", { children: ["GET: /api/orders?", params.join("&")] })] }))] })));
});
CodeGenerator.displayName = "CodeGenerator";

// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/ChevronLeftIcon.js
var ChevronLeftIcon = __webpack_require__(8121);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/ChevronRightIcon.js
var ChevronRightIcon = __webpack_require__(169);
;// CONCATENATED MODULE: ./src/features/reserves-sheduller/lib/helpers.ts
var days = [
    { id: 1, dayOfWeek: 1 },
    { id: 2, dayOfWeek: 2 },
    { id: 3, dayOfWeek: 3 },
    { id: 4, dayOfWeek: 4 },
    { id: 5, dayOfWeek: 5 },
    { id: 6, dayOfWeek: 6 },
    { id: 7, dayOfWeek: 7 },
];

;// CONCATENATED MODULE: ./src/features/reserves-sheduller/lib/api.ts


var lib_api_getTablesFx = (0,effector/* attach */.ub)({
    effect: BookingAPI.getTablesFx,
    mapParams: function (id) { return id; },
});
var api_getHallplanesFx = (0,effector/* attach */.ub)({
    effect: BookingAPI.getHallplanesFx,
});

;// CONCATENATED MODULE: ./src/features/reserves-sheduller/lib/index.ts




;// CONCATENATED MODULE: ./src/features/reserves-sheduller/model/index.ts
var reserves_sheduller_model_assign = (undefined && undefined.__assign) || function () {
    reserves_sheduller_model_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return reserves_sheduller_model_assign.apply(this, arguments);
};
var reserves_sheduller_model_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var reserves_sheduller_model_spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};





var setCurrentWeek = (0,effector/* createEvent */.yM)();
var $currentWeek = (0,effector/* createStore */.MT)(daysJS().week()).on(setCurrentWeek, function (_, payload) { return payload; });
var prevWeekClicked = (0,effector/* createEvent */.yM)();
(0,effector/* sample */.UP)({
    clock: prevWeekClicked,
    source: $currentWeek,
    fn: function (week, _) {
        if (week > 0)
            return week - 1;
        return 53;
    },
    target: $currentWeek,
});
var nextWeekClicked = (0,effector/* createEvent */.yM)();
(0,effector/* sample */.UP)({
    clock: nextWeekClicked,
    source: $currentWeek,
    fn: function (week, _) {
        if (week === 53)
            return 0;
        return week + 1;
    },
    target: $currentWeek,
});
var getHallPlanes = (0,effector/* createEvent */.yM)();
(0,effector/* sample */.UP)({
    clock: getHallPlanes,
    target: api_getHallplanesFx,
});
var model_$hallplanes = (0,effector/* createStore */.MT)([])
    .on(api_getHallplanesFx.doneData, function (_, res) { return reserves_sheduller_model_spreadArray([
    {
        id: 0,
        name: "без фильтрации",
        image: "",
        isActive: true,
    }
], reserves_sheduller_model_read(res.data[0]), false); })
    .on($hallplanes, function (_, halls) { return reserves_sheduller_model_spreadArray([
    {
        id: 0,
        name: "без фильтрации",
        image: "",
        isActive: true,
    }
], reserves_sheduller_model_read(halls), false); });
var selectHallplane = (0,effector/* createEvent */.yM)();
var $selectedHallplane = model_$hallplanes
    .map(function (hp) { return hp[0]; })
    .on(selectHallplane, function (_, payload) { return payload; });
var reserves_sheduller_model_getTables = (0,effector/* createEvent */.yM)();
(0,effector/* sample */.UP)({
    clock: $selectedHallplane,
    fn: function (selected) { return selected.id; },
    target: reserves_sheduller_model_getTables,
});
(0,effector/* sample */.UP)({
    clock: reserves_sheduller_model_getTables,
    fn: function (id) { return id; },
    target: lib_api_getTablesFx,
});
var model_$tables = (0,effector/* createStore */.MT)([]).on(lib_api_getTablesFx.doneData, function (_, res) { return res.data[0]; });
var $records = (0,effector/* combine */.$e)($currentWeek, model_$tables, function (currentWeek, tables) {
    return tables.map(function (table) { return (reserves_sheduller_model_assign(reserves_sheduller_model_assign({}, table), { reserves: table.reserves.filter(function (reserve) {
            return daysJS(Number(reserve.startDate)).week() === currentWeek;
        }) })); });
});
var useRecords = function () { return (0,effector_react/* useStore */.oR)($records); };
var useHallplanes = function () { return (0,effector_react/* useStore */.oR)(model_$hallplanes); };
var useCurrentWeek = function () { return (0,effector_react/* useStore */.oR)($currentWeek); };
var useSelectedHallplane = function () { return (0,effector_react/* useStore */.oR)($selectedHallplane); };
var reserves_sheduller_model_selectors = {
    useRecords: useRecords,
    useHallplanes: useHallplanes,
    useCurrentWeek: useCurrentWeek,
    useSelectedHallplane: useSelectedHallplane,
};
var reserves_sheduller_model_events = {
    getHallPlanes: getHallPlanes,
    selectHallplane: selectHallplane,
    nextWeekClicked: nextWeekClicked,
    prevWeekClicked: prevWeekClicked,
};

;// CONCATENATED MODULE: ./src/features/reserves-sheduller/ui/index.tsx
var reserves_sheduller_ui_assign = (undefined && undefined.__assign) || function () {
    reserves_sheduller_ui_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return reserves_sheduller_ui_assign.apply(this, arguments);
};
var reserves_sheduller_ui_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};










var ReservesSheduler = function () {
    var currentWeek = reserves_sheduller_model_selectors.useCurrentWeek();
    var records = reserves_sheduller_model_selectors.useRecords();
    return ((0,jsx_runtime.jsxs)("div", reserves_sheduller_ui_assign({ className: "gorw flex flex-col space-y-4" }, { children: [(0,jsx_runtime.jsxs)("div", reserves_sheduller_ui_assign({ className: "flex items-center  " }, { children: [(0,jsx_runtime.jsx)("h4", reserves_sheduller_ui_assign({ className: "text-2xl font-semibold first-letter:uppercase" }, { children: "\u0440\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435" })), (0,jsx_runtime.jsx)(CalendarIcon/* default */.Z, { className: "mx-2 h-6 w-6" })] })), (0,jsx_runtime.jsxs)("div", reserves_sheduller_ui_assign({ className: "mb-2 flex items-center space-x-4" }, { children: [(0,jsx_runtime.jsx)(WeekSelector, {}), (0,jsx_runtime.jsx)(HallplanesFilter, {})] })), (0,jsx_runtime.jsx)("div", reserves_sheduller_ui_assign({ className: "w-full overflow-x-auto" }, { children: (0,jsx_runtime.jsxs)("table", reserves_sheduller_ui_assign({ className: "w-full border-collapse overflow-auto rounded border border-slate-400 text-sm font-normal text-gray-900" }, { children: [(0,jsx_runtime.jsx)("thead", { children: (0,jsx_runtime.jsxs)("tr", { children: [(0,jsx_runtime.jsx)("th", reserves_sheduller_ui_assign({ className: "border border-slate-300 bg-slate-300 p-2 " }, { children: (0,jsx_runtime.jsxs)("div", reserves_sheduller_ui_assign({ className: "flex flex-col space-y-1 divide-y divide-gray-900" }, { children: [(0,jsx_runtime.jsx)("span", { children: "\u0434\u043D\u0438 \u043D\u0435\u0434\u0435\u043B\u0438" }), (0,jsx_runtime.jsx)("span", { children: "\u0441\u0442\u043E\u043B\u044B" })] })) })), days.map(function (day) { return ((0,jsx_runtime.jsx)(Day, { number: day.dayOfWeek, week: currentWeek }, day.id)); })] }) }), (0,jsx_runtime.jsx)("tbody", { children: records.map(function (record) { return ((0,react.createElement)(CalendarRow, reserves_sheduller_ui_assign({}, record, { key: record.id + record.name }))); }) }), (0,jsx_runtime.jsx)("tfoot", {})] })) }))] })));
};
var Cell = (0,react.memo)(function (_a) {
    var reserves = _a.reserves;
    var onClick = function () {
        if (reserves.length)
            console.log(reserves);
    };
    return ((0,jsx_runtime.jsx)("td", reserves_sheduller_ui_assign({ onClick: onClick, className: "border border-slate-300 bg-green-600 py-2 text-center text-white" }, { children: (0,jsx_runtime.jsx)("span", reserves_sheduller_ui_assign({ className: "" }, { children: reserves.length })) })));
});
Cell.displayName = "Cell";
var CalendarRow = (0,react.memo)(function (_a) {
    var reserves = _a.reserves, id = _a.id, name = _a.name;
    return ((0,jsx_runtime.jsxs)("tr", { children: [(0,jsx_runtime.jsx)("td", reserves_sheduller_ui_assign({ className: "border border-slate-300 bg-gray-200 py-2 text-center" }, { children: name })), days.map(function (day) {
                return reserves.some(function (reserve) {
                    return daysJS(Number(reserve.startDate)).day() ===
                        day.dayOfWeek;
                }) ? ((0,jsx_runtime.jsx)(Cell, { reserves: reserves
                        .filter(function (reserve) {
                        return daysJS(Number(reserve.startDate)).day() ===
                            day.dayOfWeek;
                    })
                        .map(function (item) { return item.id; }) }, day.dayOfWeek)) : ((0,jsx_runtime.jsx)("td", reserves_sheduller_ui_assign({ className: "border border-slate-300 bg-gray-200 py-2 text-center text-gray-900" }, { children: (0,jsx_runtime.jsx)("span", { className: "" }) }), day.dayOfWeek));
            })] }, id));
});
CalendarRow.displayName = "CalendarRow";
var Day = (0,react.memo)(function (_a) {
    var number = _a.number, week = _a.week;
    var _b = reserves_sheduller_ui_read(useCurrentDay(number, week), 2), currentDay = _b[0], stringifyDay = _b[1];
    return ((0,jsx_runtime.jsx)("th", reserves_sheduller_ui_assign({ className: (0,clsx_m/* default */.Z)(currentDay && "bg-green-600 text-white", "border border-slate-300 p-2 ") }, { children: (0,jsx_runtime.jsx)("span", { children: stringifyDay }) })));
});
Day.displayName = "Day";
var useCurrentDay = function (dayofWeek, weekNumber) {
    var _a = reserves_sheduller_ui_read((0,react.useState)(false), 2), isCurrentDay = _a[0], setIsCurrentDay = _a[1];
    var _b = reserves_sheduller_ui_read((0,react.useState)(""), 2), stringifyDay = _b[0], setStringifyDay = _b[1];
    (0,react.useEffect)(function () {
        setIsCurrentDay(daysJS().week(weekNumber).day(dayofWeek).format("DD.MM.YY") ===
            daysJS().format("DD.MM.YY"));
        setStringifyDay(daysJS().week(weekNumber).day(dayofWeek).format("dd DD.MM.YY"));
    }, [dayofWeek, weekNumber]);
    return (0,react.useMemo)(function () { return [isCurrentDay, stringifyDay]; }, [isCurrentDay, stringifyDay]);
};
var WeekSelector = function () {
    var currentWeek = reserves_sheduller_model_selectors.useCurrentWeek();
    var handlePrevWeekClicked = (0,effector_react/* useEvent */.zX)(reserves_sheduller_model_events.prevWeekClicked);
    var handleNextWeekClicked = (0,effector_react/* useEvent */.zX)(reserves_sheduller_model_events.nextWeekClicked);
    return ((0,jsx_runtime.jsxs)("div", reserves_sheduller_ui_assign({ className: "flex items-center space-x-2 sm:self-end" }, { children: [(0,jsx_runtime.jsx)("button", reserves_sheduller_ui_assign({ className: "rounded-full bg-gray-200 p-2 shadow-sm duration-150 hover:bg-blue-600 hover:text-white hover:shadow-md active:opacity-75", onClick: handlePrevWeekClicked }, { children: (0,jsx_runtime.jsx)(ChevronLeftIcon/* default */.Z, { className: "h-4 w-4" }) })), (0,jsx_runtime.jsxs)("div", reserves_sheduller_ui_assign({ className: "flex items-center  rounded border py-2 px-4 text-sm" }, { children: [(0,jsx_runtime.jsx)(CalendarIcon/* default */.Z, { className: "mr-2 h-6 w-6" }), (0,jsx_runtime.jsx)("span", reserves_sheduller_ui_assign({ className: " after:mx-1 after:content-['-']" }, { children: daysJS().week(currentWeek).day(0).format("DD.MM.YY") })), (0,jsx_runtime.jsx)("span", reserves_sheduller_ui_assign({ className: "mx-1" }, { children: daysJS().week(currentWeek).day(6).format("DD.MM.YY") }))] })), (0,jsx_runtime.jsx)("button", reserves_sheduller_ui_assign({ className: "rounded-full bg-gray-200 p-2 shadow-sm duration-150 hover:bg-blue-600 hover:text-white hover:shadow-md active:opacity-75", onClick: handleNextWeekClicked }, { children: (0,jsx_runtime.jsx)(ChevronRightIcon/* default */.Z, { className: "h-4 w-4" }) }))] })));
};
var HallplanesFilter = function () {
    var hallplanes = reserves_sheduller_model_selectors.useHallplanes();
    var selectedHallplane = reserves_sheduller_model_selectors.useSelectedHallplane();
    var handleSelectHallplane = (0,effector_react/* useEvent */.zX)(reserves_sheduller_model_events.selectHallplane);
    return ((0,jsx_runtime.jsxs)("div", reserves_sheduller_ui_assign({ className: "flex w-full items-center space-x-2 text-base sm:text-sm" }, { children: [(0,jsx_runtime.jsx)("span", { children: "\u043F\u043E \u0437\u0430\u043B\u0430\u043C:" }), (0,jsx_runtime.jsx)(Select, { items: hallplanes, onSelect: handleSelectHallplane, selected: selectedHallplane, containerClassName: "grow" })] })));
};

;// CONCATENATED MODULE: ./src/pages/booking/scheduller/index.tsx
var scheduller_assign = (undefined && undefined.__assign) || function () {
    scheduller_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return scheduller_assign.apply(this, arguments);
};








var SchedullerPage = function () {
    var initPage = (0,effector_react/* useEvent */.zX)(booking_model_events.initPage);
    var pageMounted = booking_model_selectors.usePageMounted();
    (0,react.useEffect)(function () {
        initPage();
    }, []);
    var location = (0,react_router/* useLocation */.TH)();
    var links = (0,react.useMemo)(function () { return location.pathname.split("/"); }, [location.pathname]);
    return ((0,jsx_runtime.jsxs)("div", scheduller_assign({ className: " z-50 flex grow flex-col space-y-2 px-4 py-2 font-sans md:space-y-4 md:px-10 md:py-5" }, { children: [(0,jsx_runtime.jsx)("nav", scheduller_assign({ className: "flex" }, { children: links.map(function (link, idx) { return ((0,jsx_runtime.jsx)(react_router_dom/* NavLink */.OL, scheduller_assign({ to: "/".concat(link), className: (0,clsx_m/* default */.Z)(idx !== links.length - 1 && "after:mx-4 after:content-['>']", (0,react_router/* matchPath */.LX)(location.pathname, link) && "underline") }, { children: idx === 0 ? "Home" : link }), idx)); }) })), (0,jsx_runtime.jsx)(Loader, {}), pageMounted && (0,jsx_runtime.jsx)(ReservesSheduler, {})] })));
};

;// CONCATENATED MODULE: ./src/pages/auth/index.tsx
var auth_assign = (undefined && undefined.__assign) || function () {
    auth_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return auth_assign.apply(this, arguments);
};
var auth_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};




var AuthPage = function () {
    var _a, _b;
    var isAuth = auth_model_selectors.useIsAuth();
    var navigate = (0,react_router/* useNavigate */.s0)();
    var registrationComlited = auth_model_selectors.useRegistrationComlited();
    var location = (0,react_router/* useLocation */.TH)();
    //@ts-ignore
    var fromPage = ((_b = (_a = location.state) === null || _a === void 0 ? void 0 : _a.from) === null || _b === void 0 ? void 0 : _b.pathname) || "/";
    var _c = auth_read((0,react.useState)("auth"), 2), wind = _c[0], setWind = _c[1];
    var handleSetWindow = function () {
        if (wind === "auth")
            return setWind("reg");
        return setWind("auth");
    };
    if (isAuth)
        return (0,jsx_runtime.jsx)(react_router/* Navigate */.Fg, { to: fromPage, replace: true });
    return ((0,jsx_runtime.jsxs)("div", auth_assign({ className: "flex grow flex-col space-y-2 px-4 py-2 font-sans md:space-y-4 md:px-10 md:py-5" }, { children: [fromPage, (0,jsx_runtime.jsx)("button", auth_assign({ onClick: handleSetWindow }, { children: "toggle" })), (0,jsx_runtime.jsx)("div", auth_assign({ className: "flex flex-col items-center space-y-4 rounded-lg bg-gray-200 p-4" }, { children: registrationComlited ? (0,jsx_runtime.jsx)("div", { children: "\u043E\u0439 \u043A\u0440\u0430\u0441\u0430\u0432\u0430!" }) : wind === "auth" ? (0,jsx_runtime.jsx)(AuthForm, {}) : (0,jsx_runtime.jsx)(RegistrationForm, {}) }))] })));
};

;// CONCATENATED MODULE: ./src/pages/404/index.tsx
var _404_assign = (undefined && undefined.__assign) || function () {
    _404_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return _404_assign.apply(this, arguments);
};


var NotFoundPage = function () {
    return ((0,jsx_runtime.jsxs)("section", _404_assign({ className: "flex grow flex-col items-center justify-center space-y-4 text-gray-900" }, { children: [(0,jsx_runtime.jsx)("h2", _404_assign({ className: "text-center text-3xl font-bold first-letter:uppercase" }, { children: "\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430" })), (0,jsx_runtime.jsx)(react_router_dom/* Link */.rU, _404_assign({ to: "/", replace: true, className: "rounded-lg bg-gray-200 px-10 py-5 shadow-lg duration-150 first-letter:uppercase hover:bg-green-600 hover:text-white" }, { children: "\u0434\u043E\u043C\u0430\u0448\u043D\u044F\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430" }))] })));
};

// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/UserCircleIcon.js
var UserCircleIcon = __webpack_require__(2484);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/PencilIcon.js
var PencilIcon = __webpack_require__(6896);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/SaveIcon.js
var SaveIcon = __webpack_require__(4315);
;// CONCATENATED MODULE: ./src/pages/profile/index.tsx
var profile_assign = (undefined && undefined.__assign) || function () {
    profile_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return profile_assign.apply(this, arguments);
};
var profile_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var profile_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};






var ProfilePage = function () {
    var user = auth_model_selectors.useUser();
    var handleSaveUser = (0,effector_react/* useEvent */.zX)(auth_model_events.modifyUser);
    var handleChangeUser = (0,effector_react/* useEvent */.zX)(auth_model_events.changeUserValues);
    var handleSaveClicked = (0,react.useCallback)(function () { return handleSaveUser(); }, []);
    var handleChange = (0,react.useCallback)(handleChangeUser, []);
    return ((0,jsx_runtime.jsx)("section", profile_assign({ className: "flex grow flex-col items-center px-10 py-5" }, { children: (0,jsx_runtime.jsxs)("form", profile_assign({ className: "flex grow flex-col items-start space-y-4 rounded-lg bg-gray-100 px-10", onSubmit: function (e) { return e.preventDefault(); } }, { children: [(0,jsx_runtime.jsx)(UserCircleIcon/* default */.Z, { className: "h-40 w-40 " }), (0,jsx_runtime.jsx)(UserInput, { type: "text", value: user.name, name: "name", className: "text-4xl", onChange: handleChange, onSaveClicked: handleSaveClicked }), (0,jsx_runtime.jsx)(UserInput, { type: "text", value: user.role.name, name: "role[name]", className: "text-xl font-normal", onChange: handleChange, onSaveClicked: handleSaveClicked }), (0,jsx_runtime.jsx)(UserInput, { type: "text", value: user.email, name: "email", className: "text-base font-light italic", onChange: handleChange, onSaveClicked: handleSaveClicked }), (0,jsx_runtime.jsx)(UserInput, { type: "password", value: user.password, name: "password", onChange: handleChange, onSaveClicked: handleSaveClicked })] })) })));
};
var UserInput = (0,react.memo)(function (_a) {
    var onSaveClicked = _a.onSaveClicked, props = profile_rest(_a, ["onSaveClicked"]);
    var _b = profile_read((0,react.useState)(true), 2), disabledField = _b[0], setDisabledField = _b[1];
    var ref = (0,react.useRef)(null);
    console.log("render, ", props === null || props === void 0 ? void 0 : props.name);
    var toggledDisabledField = function () {
        var _a;
        setDisabledField(function (prev) { return !prev; });
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
    };
    (0,react.useEffect)(function () {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.focus();
    }, [disabledField]);
    return ((0,jsx_runtime.jsxs)("label", profile_assign({ className: "group relative flex w-full items-center justify-between" }, { children: [(0,jsx_runtime.jsx)("input", profile_assign({ ref: ref }, props, { className: (0,clsx_m/* default */.Z)(props.className, " focus:ring-none foucs:underline bg-transparent focus:border-b focus:border-b-black focus:outline-none"), disabled: disabledField })), (0,jsx_runtime.jsx)("button", profile_assign({ onClick: toggledDisabledField, type: "button", className: (0,clsx_m/* default */.Z)("absolute right-0 hidden rounded bg-gray-200 p-2", disabledField && "group-hover:block") }, { children: (0,jsx_runtime.jsx)(PencilIcon/* default */.Z, { className: "h-4 w-4" }) })), (0,jsx_runtime.jsx)("button", profile_assign({ onClick: onSaveClicked, type: "button", className: (0,clsx_m/* default */.Z)("absolute right-0  rounded bg-gray-200 p-2", !disabledField ? "block" : "hidden") }, { children: (0,jsx_runtime.jsx)(SaveIcon/* default */.Z, { className: "h-4 w-4" }) }))] })));
}, function (prev, next) {
    if (prev.value !== next.value)
        return false;
    return true;
});

;// CONCATENATED MODULE: ./src/app/router/index.tsx
var router_assign = (undefined && undefined.__assign) || function () {
    router_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return router_assign.apply(this, arguments);
};










var Router = function () {
    return ((0,jsx_runtime.jsx)(react_router/* Routes */.Z5, { children: (0,jsx_runtime.jsxs)(react_router/* Route */.AW, router_assign({ path: "/", element: (0,jsx_runtime.jsx)(MainLayout, {}) }, { children: [(0,jsx_runtime.jsx)(react_router/* Route */.AW, { index: true, element: (0,jsx_runtime.jsx)(PrivateRoute, { children: (0,jsx_runtime.jsx)(Home, {}) }) }), (0,jsx_runtime.jsx)(react_router/* Route */.AW, { path: "auth", element: (0,jsx_runtime.jsx)(AuthPage, {}) }), (0,jsx_runtime.jsxs)(react_router/* Route */.AW, router_assign({ path: "booking", element: (0,jsx_runtime.jsx)(PrivateOutlet, {}) }, { children: [(0,jsx_runtime.jsx)(react_router/* Route */.AW, { index: true, element: (0,jsx_runtime.jsx)(BookingPage, {}) }), (0,jsx_runtime.jsx)(react_router/* Route */.AW, { path: "scheduller", element: (0,jsx_runtime.jsx)(SchedullerPage, {}) })] })), (0,jsx_runtime.jsx)(react_router/* Route */.AW, { path: "profile", element: (0,jsx_runtime.jsx)(PrivateRoute, { children: (0,jsx_runtime.jsx)(ProfilePage, {}) }) }), (0,jsx_runtime.jsx)(react_router/* Route */.AW, { path: "*", element: (0,jsx_runtime.jsx)(NotFoundPage, {}) })] })) }));
};
var PrivateOutlet = function () {
    var isAuth = auth_model_selectors.useIsAuth();
    return isAuth ? (0,jsx_runtime.jsx)(react_router/* Outlet */.j3, {}) : (0,jsx_runtime.jsx)(react_router/* Navigate */.Fg, { to: "/auth" });
};
var PrivateRoute = function (_a) {
    var children = _a.children;
    var isAuth = auth_model_selectors.useIsAuth();
    if (!isAuth)
        return (0,jsx_runtime.jsx)(react_router/* Navigate */.Fg, { to: "/auth", replace: true });
    return children;
};

;// CONCATENATED MODULE: ./src/app/index.tsx







var App = function () {
    var initApp = (0,effector_react/* useEvent */.zX)(events.initApp);
    (0,react.useEffect)(function () {
        initApp();
    }, []);
    return ((0,jsx_runtime.jsx)(AuthProvider, { children: (0,jsx_runtime.jsx)(Router, {}) }));
};
/* harmony default export */ var app = (App);

;// CONCATENATED MODULE: ./src/reportWebVitals.ts
var reportWebVitals = function (onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        __webpack_require__.e(/* import() */ 216).then(__webpack_require__.bind(__webpack_require__, 2131)).then(function (_a) {
            var getCLS = _a.getCLS, getFID = _a.getFID, getFCP = _a.getFCP, getLCP = _a.getLCP, getTTFB = _a.getTTFB;
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

;// CONCATENATED MODULE: ./src/index.tsx







var root = client.createRoot(document.getElementById("root"));
root.render((0,jsx_runtime.jsx)(react.StrictMode, { children: (0,jsx_runtime.jsx)(react_router_dom/* BrowserRouter */.VK, { children: (0,jsx_runtime.jsx)(app, {}) }) }));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [216], function() { return __webpack_exec__(393); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBRyxHQUNLLEdBQ0QsQ0FDdEI7QUFFRCwwRUFBMEU7QUFDMUUsNkRBQTZEO0FBQzdELDBFQUEwRTtBQUMxRSxlQUFlLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9lbnRpdGllcy9hcHAvbW9kZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvZW50aXRpZXMvYXBwL2luZGV4LnRzIiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL2ZlYXR1cmVzL3BvdXB1cC91aS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvZmVhdHVyZXMvcG91cHVwL21vZGVsL2luZGV4LnRzIiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL2ZlYXR1cmVzL3BvdXB1cC9pbmRleC50cyIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9zaGFyZWQvbGliL2FwaS50cyIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9lbnRpdGllcy9hdXRoL2xpYi9hcGkudHMiLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvZW50aXRpZXMvYXV0aC9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvZW50aXRpZXMvYXV0aC9tb2RlbC9pbmRleC50cyIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9lbnRpdGllcy9hdXRoL3VpL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9lbnRpdGllcy9hdXRoL2luZGV4LnRzIiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL3dpZGdldHMvYXV0aC1jb250ZXh0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9zaGFyZWQvdWkvbmF2LWNhcmQvaW5kZXgudHN4Iiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL3BhZ2VzL2hvbWUvaW5kZXgudHN4Iiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL3NoYXJlZC9saWIvaGVscGVycy50cyIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9zaGFyZWQvbGliL2luZGV4LnRzIiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL3NoYXJlZC91aS9uYXZsaW5rL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9zaGFyZWQvdWkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvd2lkZ2V0cy9uYXZpZ2F0aW9ucy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvZmVhdHVyZXMvZHJhd2VyL3VpL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9mZWF0dXJlcy9kcmF3ZXIvbW9kZWwvZHJhd2VyLnRzIiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL2ZlYXR1cmVzL2RyYXdlci9tb2RlbC9pbmRleC50cyIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9mZWF0dXJlcy9kcmF3ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvc2hhcmVkL3VpL3NwaW5uZXItbG9hZGluZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvd2lkZ2V0cy9mb290ZXIvaW5kZXgudHN4Iiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL3dpZGdldHMvaGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy93aWRnZXRzL21haW4tbGF5b3V0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9lbnRpdGllcy9ib29raW5nL2xpYi9oZWxwZXJzLnRzIiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL2VudGl0aWVzL2Jvb2tpbmcvbGliL2FwaS50cyIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9lbnRpdGllcy9ib29raW5nL2xpYi9pbmRleC50cyIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9lbnRpdGllcy9ib29raW5nL21vZGVsL2luZGV4LnRzIiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL2VudGl0aWVzL2Jvb2tpbmcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvZmVhdHVyZXMvcmVzZXJ2ZXMtZmlsdGVycy9tb2RlbC9yZXNlcnZlcy1maWx0ZXJzLnRzIiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL2ZlYXR1cmVzL3Jlc2VydmVzLWZpbHRlcnMvbW9kZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvZmVhdHVyZXMvcmVzZXJ2ZXMtZmlsdGVycy9pbmRleC50cyIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9mZWF0dXJlcy9yZXNlcnZlcy1hY3Rpb24tcGFuZWwvbW9kZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvZmVhdHVyZXMvcmVzZXJ2ZXMtYWN0aW9uLXBhbmVsL3VpL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9mZWF0dXJlcy9yZXNlcnZlcy1hY3Rpb24tcGFuZWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvc2hhcmVkL3VpL3NlbGVjdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvZmVhdHVyZXMvcmVzZXJ2ZXMtZmlsdGVycy91aS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvc2hhcmVkL3VpL3NjYWxlLWFuaW1hdGlvbi13cmFwcGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9lbnRpdGllcy9ib29raW5nL3VpL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9lbnRpdGllcy9ib29raW5nL3VpL3Jlc2VydmVzLWxpc3QudHN4Iiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL3BhZ2VzL2Jvb2tpbmcvaW5kZXgudHN4Iiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL2ZlYXR1cmVzL3Jlc2VydmVzLXNoZWR1bGxlci9saWIvaGVscGVycy50cyIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9mZWF0dXJlcy9yZXNlcnZlcy1zaGVkdWxsZXIvbGliL2FwaS50cyIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9mZWF0dXJlcy9yZXNlcnZlcy1zaGVkdWxsZXIvbGliL2luZGV4LnRzIiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL2ZlYXR1cmVzL3Jlc2VydmVzLXNoZWR1bGxlci9tb2RlbC9pbmRleC50cyIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9mZWF0dXJlcy9yZXNlcnZlcy1zaGVkdWxsZXIvdWkvaW5kZXgudHN4Iiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL3BhZ2VzL2Jvb2tpbmcvc2NoZWR1bGxlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvcGFnZXMvYXV0aC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vY3JhLXJvdXRpbmcvLi9zcmMvcGFnZXMvNDA0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9wYWdlcy9wcm9maWxlL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9hcHAvcm91dGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9hcHAvaW5kZXgudHN4Iiwid2VicGFjazovL2NyYS1yb3V0aW5nLy4vc3JjL3JlcG9ydFdlYlZpdGFscy50cyIsIndlYnBhY2s6Ly9jcmEtcm91dGluZy8uL3NyYy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRG9tYWluLCBzYW1wbGUgfSBmcm9tIFwiZWZmZWN0b3JcIlxyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJlZmZlY3Rvci1yZWFjdFwiXHJcblxyXG5jb25zdCBBcHBEb21haW4gPSBjcmVhdGVEb21haW4oXCJBcHBEb21haW5cIilcclxuXHJcbmNvbnN0IGluaXRBcHAgPSBBcHBEb21haW4uY3JlYXRlRXZlbnQoXCJpbml0QXBwXCIpXHJcbmNvbnN0IHN0YXJ0ZWRBcHAgPSBBcHBEb21haW4uY3JlYXRlRXZlbnQoXCJzdGFydGVkQXBwXCIpXHJcblxyXG5leHBvcnQgY29uc3QgJGFwcFN0YXJ0ZWQgPSBBcHBEb21haW4uY3JlYXRlU3RvcmU8Ym9vbGVhbj4oZmFsc2UpLm9uKHN0YXJ0ZWRBcHAsICgpID0+IHRydWUpXHJcblxyXG5jb25zdCBzZXRFdmVudE1lc3NhZ2UgPSBBcHBEb21haW4uY3JlYXRlRXZlbnQ8c3RyaW5nPigpXHJcblxyXG5jb25zdCAkZXZlbnRNZXNzYWdlcyA9IEFwcERvbWFpbi5jcmVhdGVTdG9yZTxBcnJheTxzdHJpbmc+PihbXSlcclxuICAgIC5vbihzZXRFdmVudE1lc3NhZ2UsIChzdGF0ZSwgZXZlbnQpID0+IFsuLi5zdGF0ZSwgZXZlbnRdKVxyXG4gICAgLnJlc2V0KFskYXBwU3RhcnRlZF0pXHJcblxyXG5zYW1wbGUoe1xyXG4gICAgY2xvY2s6IGluaXRBcHAsXHJcbiAgICBmbjogKCkgPT4gXCJzdGFydCBpbml0aWFsIEFwcFwiLFxyXG4gICAgdGFyZ2V0OiBzZXRFdmVudE1lc3NhZ2UsXHJcbn0pXHJcblxyXG5jb25zdCB1c2VBcHBTdGFydGVkID0gKCkgPT4gdXNlU3RvcmUoJGFwcFN0YXJ0ZWQpXHJcbmNvbnN0IHVzZUV2ZW50TWVzc2FnZXMgPSAoKSA9PiB1c2VTdG9yZSgkZXZlbnRNZXNzYWdlcylcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XHJcbiAgICB1c2VBcHBTdGFydGVkLFxyXG4gICAgdXNlRXZlbnRNZXNzYWdlcyxcclxufVxyXG5leHBvcnQgY29uc3QgZXZlbnRzID0geyBpbml0QXBwLCBzZXRFdmVudE1lc3NhZ2UsIHN0YXJ0ZWRBcHAgfVxyXG4iLCJleHBvcnQgKiBhcyBhcHBNb2RlbCBmcm9tIFwiLi9tb2RlbFwiXHJcbiIsImltcG9ydCB7IFRyYW5zaXRpb24gfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VFdmVudCB9IGZyb20gXCJlZmZlY3Rvci1yZWFjdFwiXHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgcG91cHVwTW9kZWwgfSBmcm9tIFwiLi5cIlxyXG5cclxuZXhwb3J0IGNvbnN0IFBvdXB1cCA9ICgpID0+IHtcclxuICAgIGNvbnN0IG9wZW5lZCA9IHBvdXB1cE1vZGVsLnNlbGVjdG9ycy51c2VPcGVuZWRQb3VwdXAoKVxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSB1c2VFdmVudChwb3VwdXBNb2RlbC5ldmVudHMuY2xvc2VQb3VwdXApXHJcblxyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAob3BlbmVkKSB7XHJcbiAgICAgICAgICAgIHNldFNob3cob3BlbmVkKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFNob3coKHByZXYpID0+ICFwcmV2KVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2UoKVxyXG4gICAgICAgICAgICB9LCAzMDAwKVxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtvcGVuZWRdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRyYW5zaXRpb25cclxuICAgICAgICAgICAgYXM9XCJkaXZcIlxyXG4gICAgICAgICAgICBzaG93PXtzaG93fVxyXG4gICAgICAgICAgICBhcHBlYXJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTggbGVmdC04IGZsZXggZmxleC1jb2wgd2lsbC1jaGFuZ2UtYXV0b1wiXHJcbiAgICAgICAgICAgIGVudGVyPVwiZHVyYXRpb24tNzAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBcIlxyXG4gICAgICAgICAgICBlbnRlckZyb209XCJ0cmFuc2xhdGUteS1mdWxsXCJcclxuICAgICAgICAgICAgZW50ZXJUbz1cInRyYW5zbGF0ZS15LTBcIlxyXG4gICAgICAgICAgICBsZWF2ZT1cImR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1vcGFjaXR5IGVhc2UtbGluZWFyXCJcclxuICAgICAgICAgICAgbGVhdmVGcm9tPVwidHJhbnNsYXRlLXktMCBvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgIGxlYXZlVG89XCJ0cmFuc2xhdGUteS1mdWxsIG9wYWNpdHktMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgcm91bmRlZC1sZyBiZy1ncmVlbi02MDAgcHgtMTAgcHktNSBzaGFkb3ctbGdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TWVzc2FnZSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IE1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gcG91cHVwTW9kZWwuc2VsZWN0b3JzLnVzZU1lc3NhZ2UoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRyYW5zaXRpb24gYXBwZWFyIGFzPVwiZGl2XCI+XHJcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uLkNoaWxkXHJcbiAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICBlbnRlcj1cImR1cmF0aW9uLTUwMCBlYXNlLWxpbmVhciB0cmFuc2l0aW9uLW9wYWNpdHlcIlxyXG4gICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS03MFwiXHJcbiAgICAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zaXRpb24tb3BhY2l0eSBlYXNlLWxpbmVhclwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnttZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG4gICAgICAgIDwvVHJhbnNpdGlvbj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVEb21haW4sIHNhbXBsZSB9IGZyb20gXCJlZmZlY3RvclwiXHJcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcImVmZmVjdG9yLXJlYWN0XCJcclxuXHJcbmNvbnN0IFBvdXB1cERvbWFpbiA9IGNyZWF0ZURvbWFpbihcIlBvdXB1cERvbWFpblwiKVxyXG5cclxuY29uc3Qgb3BlblBvdXB1cCA9IFBvdXB1cERvbWFpbi5jcmVhdGVFdmVudCgpXHJcbmNvbnN0IGNsb3NlUG91cHVwID0gUG91cHVwRG9tYWluLmNyZWF0ZUV2ZW50KClcclxuY29uc3QgY2xlYXJNZXNzYWdlID0gUG91cHVwRG9tYWluLmNyZWF0ZUV2ZW50KClcclxuY29uc3QgJG9wZW5lZFBvdXB1cCA9IFBvdXB1cERvbWFpbi5jcmVhdGVTdG9yZTxib29sZWFuPihmYWxzZSlcclxuICAgIC5vbihvcGVuUG91cHVwLCAoKSA9PiB0cnVlKVxyXG4gICAgLnJlc2V0KFtjbG9zZVBvdXB1cF0pXHJcblxyXG5jb25zdCBzZXRNZXNzYWdlID0gUG91cHVwRG9tYWluLmNyZWF0ZUV2ZW50PHN0cmluZz4oKVxyXG5cclxuY29uc3QgJG1lc3NhZ2UgPSBQb3VwdXBEb21haW4uY3JlYXRlU3RvcmU8c3RyaW5nIHwgbnVsbD4obnVsbClcclxuICAgIC5vbihzZXRNZXNzYWdlLCAoXywgbWVzc2FnZSkgPT4gbWVzc2FnZSlcclxuICAgIC5yZXNldChjbGVhck1lc3NhZ2UpXHJcblxyXG5zYW1wbGUoe1xyXG4gICAgY2xvY2s6ICRtZXNzYWdlLFxyXG4gICAgc291cmNlOiAkb3BlbmVkUG91cHVwLFxyXG4gICAgZmlsdGVyOiAocG9wLCBtZXNzYWdlKSA9PiBtZXNzYWdlICE9PSBudWxsIHx8ICFwb3AsXHJcbiAgICB0YXJnZXQ6IG9wZW5Qb3VwdXAsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xyXG4gICAgc2V0TWVzc2FnZSxcclxuICAgIGNsb3NlUG91cHVwLFxyXG59XHJcblxyXG5jb25zdCB1c2VNZXNzYWdlID0gKCkgPT4gdXNlU3RvcmUoJG1lc3NhZ2UpXHJcbmNvbnN0IHVzZU9wZW5lZFBvdXB1cCA9ICgpID0+IHVzZVN0b3JlKCRvcGVuZWRQb3VwdXApXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7IHVzZU1lc3NhZ2UsIHVzZU9wZW5lZFBvdXB1cCB9XHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL3VpXCJcclxuXHJcbmV4cG9ydCAqIGFzIHBvdXB1cE1vZGVsIGZyb20gXCIuL21vZGVsXCJcclxuIiwiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiXHJcbmltcG9ydCB3ZWVrT2ZZZWFyIGZyb20gXCJkYXlqcy9wbHVnaW4vd2Vla09mWWVhclwiXHJcblxyXG5pbXBvcnQgZHVyYXRpb24gZnJvbSBcImRheWpzL3BsdWdpbi9kdXJhdGlvblwiXHJcbmltcG9ydCByZWxhdGl2ZVRpbWUgZnJvbSBcImRheWpzL3BsdWdpbi9yZWxhdGl2ZVRpbWVcIlxyXG5pbXBvcnQgdXRjIGZyb20gXCJkYXlqcy9wbHVnaW4vdXRjXCJcclxuaW1wb3J0IHRpbWV6b25lIGZyb20gXCJkYXlqcy9wbHVnaW4vdGltZXpvbmVcIlxyXG5cclxuaW1wb3J0IHJ1IGZyb20gXCJkYXlqcy9sb2NhbGUvcnVcIlxyXG5pbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IGNyZWF0ZUVmZmVjdCB9IGZyb20gXCJlZmZlY3RvclwiXHJcbmltcG9ydCB7IFRIYWxscGxhbmUsIFRSZXNlcnZlLCBUUmVzZXJ2ZXNQYXJhbXMsIFRUYWJsZSB9IGZyb20gXCJlbnRpdGllcy9ib29raW5nL2xpYlwiXHJcbmltcG9ydCB7IFRDcmVkZW50aWFsVXNlciwgVFJlZ2lzdHJhdGlvbkNyZWRlbnRpYWwsIFRVc2VyIH0gZnJvbSBcImVudGl0aWVzL2F1dGgvbGliXCJcclxuZGF5anMuZXh0ZW5kKHdlZWtPZlllYXIpXHJcblxyXG5kYXlqcy5leHRlbmQoZHVyYXRpb24pXHJcbmRheWpzLmV4dGVuZChyZWxhdGl2ZVRpbWUpXHJcbmRheWpzLmV4dGVuZCh1dGMpXHJcbmRheWpzLmV4dGVuZCh0aW1lem9uZSlcclxuZGF5anMudHouc2V0RGVmYXVsdChkYXlqcy50ei5ndWVzcygpKVxyXG5kYXlqcy5sb2NhbGUocnUpXHJcblxyXG5leHBvcnQgY29uc3QgZGF5c0pTID0gZGF5anNcclxuXHJcbmNvbnN0IEFQSV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMFwiXHJcblxyXG5jb25zdCBib29raW5nQVBJSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogQVBJX1VSTCxcclxuICAgIHdpdGhDcmVkZW50aWFsczogdHJ1ZSxcclxufSlcclxuXHJcbnR5cGUgVEFjY2Vzc1Rva2VuID0ge1xyXG4gICAgYWNjZXNzVG9rZW46IHN0cmluZ1xyXG59XHJcbnR5cGUgQXV0aFJlc3BvbnNlID0gVEFjY2Vzc1Rva2VuXHJcblxyXG5ib29raW5nQVBJSW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChjb25maWc6IGFueSkgPT4ge1xyXG4gICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpfWBcclxuICAgIHJldHVybiBjb25maWdcclxufSlcclxuXHJcbmJvb2tpbmdBUElJbnN0YW5jZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKFxyXG4gICAgKGNvbmZpZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBjb25maWdcclxuICAgIH0sXHJcbiAgICBhc3luYyAoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFJlcXVlc3QgPSBlcnJvci5jb25maWdcclxuICAgICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgJiYgZXJyb3IuY29uZmlnICYmICFlcnJvci5jb25maWcuX2lzUmV0cnkpIHtcclxuICAgICAgICAgICAgb3JpZ2luYWxSZXF1ZXN0Ll9pc1JldHJ5ID0gdHJ1ZVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQ8QXV0aFJlc3BvbnNlPihgJHtBUElfVVJMfS9hdXRoL3JlZnJlc2hgLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KVxyXG5cclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzcG9uc2UuZGF0YS5hY2Nlc3NUb2tlbilcclxuICAgICAgICAgICAgICAgIHJldHVybiBib29raW5nQVBJSW5zdGFuY2UucmVxdWVzdChvcmlnaW5hbFJlcXVlc3QpXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlcnJvclxyXG4gICAgfVxyXG4pXHJcblxyXG5jb25zdCBsb2dpbiA9IGFzeW5jIChjcmVkOiBUQ3JlZGVudGlhbFVzZXIpID0+IHtcclxuICAgIHJldHVybiBhd2FpdCBib29raW5nQVBJSW5zdGFuY2UucG9zdChcIi9hdXRoL2xvZ2luXCIsIGNyZWQpXHJcbn1cclxuXHJcbmNvbnN0IGdldE1lID0gYXN5bmMgKCkgPT4gYXdhaXQgYm9va2luZ0FQSUluc3RhbmNlLmdldChcIi9hdXRoL3Byb2ZpbGVcIilcclxuXHJcbmNvbnN0IHJlZ2lzdHJhdGlvbiA9IGFzeW5jICh1c2VyOiBUUmVnaXN0cmF0aW9uQ3JlZGVudGlhbCkgPT4gYXdhaXQgYm9va2luZ0FQSUluc3RhbmNlLnBvc3QoXCIvYXV0aC9yZWdpc3RyYXRpb25cIiwgdXNlcilcclxuXHJcbmNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlcSA9IGF3YWl0IGJvb2tpbmdBUElJbnN0YW5jZS5wb3N0KFwiL2F1dGgvbG9nb3V0XCIpXHJcblxyXG4gICAgaWYgKHJlcS5zdGF0dXMgPCA0MDApIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIilcclxuXHJcbiAgICByZXR1cm4gcmVxXHJcbn1cclxuXHJcbmNvbnN0IGdldFJlc2VydmVzID0gYXN5bmMgKHBhcmFtcz86IFRSZXNlcnZlc1BhcmFtcykgPT4gYXdhaXQgYm9va2luZ0FQSUluc3RhbmNlLmdldChcIi9yZXNlcnZlc1wiLCB7IHBhcmFtcyB9KVxyXG5jb25zdCBnZXRSZXNlcnZlID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IGF3YWl0IGJvb2tpbmdBUElJbnN0YW5jZS5nZXQoXCIvcmVzZXJ2ZXNcIiwgeyBwYXJhbXM6IGlkIH0pXHJcblxyXG5jb25zdCBnZXRUYWJsZXMgPSBhc3luYyAoaWQ6IG51bWJlciB8IHZvaWQpID0+IGF3YWl0IGJvb2tpbmdBUElJbnN0YW5jZS5nZXQoXCIvdGFibGVzXCIsIHsgcGFyYW1zOiB7IGlkIH0gfSlcclxuXHJcbmNvbnN0IGRlbGV0ZVJlc2VydmUgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4gYm9va2luZ0FQSUluc3RhbmNlLmRlbGV0ZShgL3Jlc2VydmVzLyR7aWR9YClcclxuXHJcbmNvbnN0IGRlbGV0ZVNlbGVjdGVkUmVzZXJ2ZXMgPSBhc3luYyAoaWRzOiBBcnJheTxudW1iZXI+KSA9PiBib29raW5nQVBJSW5zdGFuY2UucG9zdChcIi9yZXNlcnZlcy9zZWxlY3RlZFwiLCBpZHMpXHJcblxyXG5jb25zdCBkZWxldGVBbGxSZXNlcnZlcyA9IGFzeW5jICgpID0+IGJvb2tpbmdBUElJbnN0YW5jZS5kZWxldGUoXCIvcmVzZXJ2ZXMvYWxsXCIpXHJcblxyXG5jb25zdCBnZXRIYWxscGxhbmVzID0gYXN5bmMgKCkgPT4gYm9va2luZ0FQSUluc3RhbmNlLmdldChcIi9oYWxscGxhbmVzXCIpXHJcblxyXG5jb25zdCBwb3N0UmVzZXJ2ZSA9IGFzeW5jIChyZXNlcnZlOiBUUmVzZXJ2ZSkgPT4gYXdhaXQgYm9va2luZ0FQSUluc3RhbmNlLnBvc3QoXCIvcmVzZXJ2ZXNcIiwgcmVzZXJ2ZSlcclxuXHJcbmNvbnN0IGdldFRhYmxlc0Z4ID0gY3JlYXRlRWZmZWN0PG51bWJlciB8IG5ldmVyIHwgdm9pZCwgQXhpb3NSZXNwb25zZTxbQXJyYXk8VFRhYmxlPiwgbnVtYmVyXT4sIEVycm9yPihnZXRUYWJsZXMpXHJcbmNvbnN0IGdldEhhbGxwbGFuZXNGeCA9IGNyZWF0ZUVmZmVjdDx2b2lkLCBBeGlvc1Jlc3BvbnNlPFtBcnJheTxUSGFsbHBsYW5lPiwgbnVtYmVyXSwgRXJyb3I+PihnZXRIYWxscGxhbmVzKVxyXG5cclxuY29uc3QgcG9zdFJlc2VydmVGeCA9IGNyZWF0ZUVmZmVjdDxUUmVzZXJ2ZSwgQXhpb3NSZXNwb25zZTxUUmVzZXJ2ZT4sIEVycm9yPihwb3N0UmVzZXJ2ZSlcclxuXHJcbmNvbnN0IGRlbGV0ZVJlc2VydmVCeUlkRnggPSBjcmVhdGVFZmZlY3Q8bnVtYmVyLCBBeGlvc1Jlc3BvbnNlPGFueT4sIEVycm9yPihkZWxldGVSZXNlcnZlKVxyXG5cclxuY29uc3QgZGVsZXRlQWxsUmVzZXJ2ZXNGeCA9IGNyZWF0ZUVmZmVjdChkZWxldGVBbGxSZXNlcnZlcylcclxuY29uc3QgZGVsZXRlU2VsZWN0ZWRSZXNlcnZlc0Z4ID0gY3JlYXRlRWZmZWN0PEFycmF5PG51bWJlcj4sIEF4aW9zUmVzcG9uc2U8YW55PiwgRXJyb3I+KGRlbGV0ZVNlbGVjdGVkUmVzZXJ2ZXMpXHJcblxyXG5jb25zdCBtb2RpZnlVc2VyID0gYXN5bmMgKHsgaWQsIC4uLnVzZXIgfTogVFVzZXIpID0+IGF3YWl0IGJvb2tpbmdBUElJbnN0YW5jZS5wYXRjaChgL3VzZXJzLyR7aWR9YCwgeyAuLi51c2VyIH0pXHJcblxyXG5leHBvcnQgY29uc3QgQm9va2luZ0FQSSA9IHtcclxuICAgIGdldE1lLFxyXG4gICAgbG9naW4sXHJcbiAgICBsb2dvdXQsXHJcbiAgICBtb2RpZnlVc2VyLFxyXG4gICAgZ2V0UmVzZXJ2ZSxcclxuICAgIGdldFJlc2VydmVzLFxyXG4gICAgZ2V0VGFibGVzRngsXHJcbiAgICByZWdpc3RyYXRpb24sXHJcbiAgICBwb3N0UmVzZXJ2ZUZ4LFxyXG4gICAgZ2V0SGFsbHBsYW5lc0Z4LFxyXG4gICAgZGVsZXRlUmVzZXJ2ZUJ5SWRGeCxcclxuICAgIGRlbGV0ZUFsbFJlc2VydmVzRngsXHJcbiAgICBkZWxldGVTZWxlY3RlZFJlc2VydmVzRngsXHJcbn1cclxuIiwiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IGNyZWF0ZUVmZmVjdCB9IGZyb20gXCJlZmZlY3RvclwiXHJcbmltcG9ydCB7IEJvb2tpbmdBUEkgfSBmcm9tIFwic2hhcmVkL2xpYi9hcGlcIlxyXG5pbXBvcnQgdHlwZSB7IFRBY2Nlc3NUb2tlbiwgVENyZWRlbnRpYWxVc2VyLCBUUmVnaXN0cmF0aW9uQ3JlZGVudGlhbCB9IGZyb20gXCIuL21vZGVsc1wiXHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5GeCA9IGNyZWF0ZUVmZmVjdDxUQ3JlZGVudGlhbFVzZXIsIEF4aW9zUmVzcG9uc2U8VEFjY2Vzc1Rva2VuPiwgRXJyb3I+KEJvb2tpbmdBUEkubG9naW4pXHJcblxyXG5leHBvcnQgY29uc3QgY2hlY2tBdXRoRnggPSBjcmVhdGVFZmZlY3QoQm9va2luZ0FQSS5nZXRNZSlcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RyYXRpb25GeCA9IGNyZWF0ZUVmZmVjdDxUUmVnaXN0cmF0aW9uQ3JlZGVudGlhbCwgQXhpb3NSZXNwb25zZTxzdHJpbmc+LCBFcnJvcj4oXHJcbiAgICBCb29raW5nQVBJLnJlZ2lzdHJhdGlvblxyXG4pXHJcblxyXG5leHBvcnQgY29uc3QgbG9nb3V0RnggPSBjcmVhdGVFZmZlY3QoQm9va2luZ0FQSS5sb2dvdXQpXHJcblxyXG5leHBvcnQgY29uc3QgbW9kaWZ5VXNlckZ4ID0gY3JlYXRlRWZmZWN0KEJvb2tpbmdBUEkubW9kaWZ5VXNlcilcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vbW9kZWxzXCJcclxuZXhwb3J0ICogYXMgQVBJIGZyb20gXCIuL2FwaVwiXHJcbiIsImltcG9ydCB7IGNyZWF0ZURvbWFpbiwgc2FtcGxlIH0gZnJvbSBcImVmZmVjdG9yXCJcclxuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiZWZmZWN0b3ItcmVhY3RcIlxyXG5pbXBvcnQgeyBhcHBNb2RlbCB9IGZyb20gXCJlbnRpdGllcy9hcHBcIlxyXG5pbXBvcnQgeyBwb3VwdXBNb2RlbCB9IGZyb20gXCJmZWF0dXJlcy9wb3VwdXBcIlxyXG5pbXBvcnQgeyBkZWxheSwgcmVzZXQgfSBmcm9tIFwicGF0cm9udW1cIlxyXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50IH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgQVBJLCBUQ3JlZGVudGlhbFVzZXIsIFRSZWdpc3RyYXRpb25DcmVkZW50aWFsLCBUVXNlciB9IGZyb20gXCIuLi9saWJcIlxyXG5pbXBvcnQgeyBjaGVja0F1dGhGeCwgbG9naW5GeCwgbG9nb3V0RngsIHJlZ2lzdHJhdGlvbkZ4IH0gZnJvbSBcIi4uL2xpYi9hcGlcIlxyXG5cclxuY29uc3QgQXV0aERvbWFpbiA9IGNyZWF0ZURvbWFpbihcImF1dGhEb21haW5cIilcclxuY29uc3QgY2hhbmdlVXNlclZhbHVlcyA9IEF1dGhEb21haW4uY3JlYXRlRXZlbnQ8Q2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4+KClcclxuY29uc3QgJHVzZXIgPSBBdXRoRG9tYWluLmNyZWF0ZVN0b3JlPG51bGwgfCBUVXNlcj4obnVsbCkub24oY2hhbmdlVXNlclZhbHVlcywgKHVzZXIsIGV2ZW50KSA9PiAoe1xyXG4gICAgLi4udXNlciEsXHJcbiAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcbn0pKVxyXG5cclxuY29uc3QgJGFjY2Vzc1Rva2VuID0gQXV0aERvbWFpbi5jcmVhdGVTdG9yZTxzdHJpbmcgfCBudWxsPihudWxsKVxyXG5cclxuY29uc3Qgc2V0Q3JlZGVudGlhbCA9IEF1dGhEb21haW4uY3JlYXRlRXZlbnQ8Q2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4+KClcclxuY29uc3QgJGNyZWRlbnRpYWwgPSBBdXRoRG9tYWluLmNyZWF0ZVN0b3JlPFRDcmVkZW50aWFsVXNlcj4oe1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxufSBhcyBUQ3JlZGVudGlhbFVzZXIpLm9uKHNldENyZWRlbnRpYWwsIChzdGF0ZSwgZXZlbnQpID0+ICh7XHJcbiAgICAuLi5zdGF0ZSxcclxuICAgIFtldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZSxcclxufSkpXHJcblxyXG5jb25zdCBsb2dpbiA9IEF1dGhEb21haW4uY3JlYXRlRXZlbnQ8Rm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4+KClcclxuXHJcbmxvZ2luLndhdGNoKChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXHJcblxyXG5zYW1wbGUoe1xyXG4gICAgY2xvY2s6IGxvZ2luLFxyXG4gICAgc291cmNlOiAkY3JlZGVudGlhbCxcclxuICAgIGZuOiAoY3JlZCwgXykgPT4gY3JlZCxcclxuICAgIHRhcmdldDogbG9naW5GeCxcclxufSlcclxuXHJcbnNhbXBsZSh7XHJcbiAgICBjbG9jazogbG9naW5GeC5kb25lRGF0YSxcclxuICAgIGZuOiAocmVzKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCByZXMuZGF0YS5hY2Nlc3NUb2tlbilcclxuICAgICAgICByZXR1cm4gcmVzLmRhdGEuYWNjZXNzVG9rZW5cclxuICAgIH0sXHJcbiAgICB0YXJnZXQ6ICRhY2Nlc3NUb2tlbixcclxufSlcclxuXHJcbmNvbnN0ICRhdXRoRXJyb3IgPSBBdXRoRG9tYWluLmNyZWF0ZVN0b3JlPHN0cmluZyB8IG51bGw+KG51bGwpXHJcbnNhbXBsZSh7XHJcbiAgICBjbG9jazogbG9naW5GeC5mYWlsRGF0YSxcclxuICAgIGZuOiAocmVzKSA9PiByZXMubWVzc2FnZSxcclxuICAgIHRhcmdldDogJGF1dGhFcnJvcixcclxufSlcclxuXHJcbmNvbnN0IGNoZWNrQXV0aCA9IEF1dGhEb21haW4uY3JlYXRlRXZlbnQoKVxyXG5cclxuc2FtcGxlKHtcclxuICAgIGNsb2NrOiBjaGVja0F1dGgsXHJcbiAgICB0YXJnZXQ6IGNoZWNrQXV0aEZ4LFxyXG59KVxyXG5zYW1wbGUoe1xyXG4gICAgY2xvY2s6ICRhY2Nlc3NUb2tlbixcclxuICAgIGZpbHRlcjogKHRva2VuKSA9PiB0b2tlbiAhPT0gbnVsbCAmJiB0b2tlbi5sZW5ndGggPiAwLFxyXG5cclxuICAgIHRhcmdldDogY2hlY2tBdXRoLFxyXG59KVxyXG5cclxuc2FtcGxlKHtcclxuICAgIGNsb2NrOiBjaGVja0F1dGhGeC5kb25lRGF0YSxcclxuICAgIGZuOiAocmVzKSA9PiByZXMuZGF0YSxcclxuICAgIHRhcmdldDogJHVzZXIsXHJcbn0pXHJcblxyXG5jb25zdCAkaXNBdXRoID0gQXV0aERvbWFpbi5jcmVhdGVTdG9yZTxib29sZWFuIHwgbnVsbD4obnVsbClcclxuICAgIC5vbihjaGVja0F1dGhGeC5kb25lRGF0YSwgKCkgPT4gdHJ1ZSlcclxuICAgIC5vbihjaGVja0F1dGhGeC5mYWlsLCAoKSA9PiBmYWxzZSlcclxuXHJcbmNvbnN0ICRwZW5kaW5nID0gQXV0aERvbWFpbi5jcmVhdGVTdG9yZTxib29sZWFuPihmYWxzZSkub24oY2hlY2tBdXRoRngucGVuZGluZywgKF8sIHN0YXRlKSA9PiBzdGF0ZSlcclxuXHJcbnNhbXBsZSh7XHJcbiAgICBjbG9jazogJGlzQXV0aCxcclxuICAgIGZpbHRlcjogKGF1dGgpID0+IGF1dGggIT09IG51bGwsXHJcblxyXG4gICAgdGFyZ2V0OiBhcHBNb2RlbC5ldmVudHMuc3RhcnRlZEFwcCxcclxufSlcclxuXHJcbmNvbnN0IHNldFJlZ2lzdHJhdGlvbkNyZWRlbnRpYWwgPSBBdXRoRG9tYWluLmNyZWF0ZUV2ZW50PENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+PigpXHJcbmNvbnN0ICRyZWdpc3RyYXRpb25DcmVkZW50aWFsID0gQXV0aERvbWFpbi5jcmVhdGVTdG9yZTxUUmVnaXN0cmF0aW9uQ3JlZGVudGlhbD4oe1xyXG4gICAgcm9sZUlkOiAxLFxyXG59IGFzIFRSZWdpc3RyYXRpb25DcmVkZW50aWFsKS5vbihzZXRSZWdpc3RyYXRpb25DcmVkZW50aWFsLCAoc3RhdGUsIGV2ZW50KSA9PiAoe1xyXG4gICAgLi4uc3RhdGUsXHJcbiAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWUsXHJcbn0pKVxyXG5cclxuY29uc3QgcmVnaXN0cmF0aW9uID0gQXV0aERvbWFpbi5jcmVhdGVFdmVudDxGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pj4oKVxyXG5jb25zdCAkcmVnaXN0cmF0aW9uQ29tcGxpdGVkID0gQXV0aERvbWFpbi5jcmVhdGVTdG9yZTxib29sZWFuPihmYWxzZSkucmVzZXQoW3NldFJlZ2lzdHJhdGlvbkNyZWRlbnRpYWwsIHNldENyZWRlbnRpYWxdKVxyXG5zYW1wbGUoe1xyXG4gICAgY2xvY2s6IHJlZ2lzdHJhdGlvbixcclxuICAgIHNvdXJjZTogJHJlZ2lzdHJhdGlvbkNyZWRlbnRpYWwsXHJcbiAgICB0YXJnZXQ6IHJlZ2lzdHJhdGlvbkZ4LFxyXG59KVxyXG5cclxuc2FtcGxlKHtcclxuICAgIGNsb2NrOiByZWdpc3RyYXRpb25GeC5kb25lRGF0YSxcclxuICAgIHRhcmdldDogJHJlZ2lzdHJhdGlvbkNvbXBsaXRlZCxcclxuICAgIGZuOiAoKSA9PiB0cnVlLFxyXG59KVxyXG5cclxucmVnaXN0cmF0aW9uLndhdGNoKChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXHJcblxyXG5jb25zdCBsb2dvdXQgPSBBdXRoRG9tYWluLmNyZWF0ZUV2ZW50KClcclxuXHJcbnNhbXBsZSh7XHJcbiAgICBjbG9jazogbG9nb3V0LFxyXG4gICAgdGFyZ2V0OiBsb2dvdXRGeCxcclxufSlcclxuXHJcbnJlc2V0KHtcclxuICAgIGNsb2NrOiBbbG9nb3V0RnguZmluYWxseV0sXHJcbiAgICB0YXJnZXQ6IFskdXNlciwgJGlzQXV0aCwgJGFjY2Vzc1Rva2VuXSxcclxufSlcclxucmVzZXQoe1xyXG4gICAgY2xvY2s6IFskaXNBdXRoLCBsb2dpbkZ4LmZpbmFsbHksIGxvZ291dEZ4LmZpbmFsbHldLFxyXG4gICAgdGFyZ2V0OiBbJGNyZWRlbnRpYWwsICRyZWdpc3RyYXRpb25DcmVkZW50aWFsLCAkcmVnaXN0cmF0aW9uQ29tcGxpdGVkXSxcclxufSlcclxuXHJcbnJlc2V0KHsgY2xvY2s6IFtsb2dpbiwgc2V0Q3JlZGVudGlhbF0sIHRhcmdldDogJGF1dGhFcnJvciB9KVxyXG5cclxucmVzZXQoeyBjbG9jazogbG9naW5GeC5mYWlsLCB0YXJnZXQ6ICRhY2Nlc3NUb2tlbiB9KVxyXG5cclxuZGVsYXkoe1xyXG4gICAgc291cmNlOiBzYW1wbGUoe1xyXG4gICAgICAgIGNsb2NrOiBjaGVja0F1dGgsXHJcbiAgICAgICAgZm46ICgpID0+IFwic3RhcnQgY2hlY2tpbmcgYXV0aG9yaXphdGlvblwiLFxyXG4gICAgfSksXHJcbiAgICB0aW1lb3V0OiAxMDAwLFxyXG4gICAgdGFyZ2V0OiBhcHBNb2RlbC5ldmVudHMuc2V0RXZlbnRNZXNzYWdlLFxyXG59KVxyXG5cclxuZGVsYXkoe1xyXG4gICAgc291cmNlOiBzYW1wbGUoe1xyXG4gICAgICAgIGNsb2NrOiBjaGVja0F1dGhGeC5kb25lLFxyXG4gICAgICAgIGZuOiAoKSA9PiBcImF1dGhvcml6YXRpb24gY29tcGxpdGVcIixcclxuICAgIH0pLFxyXG4gICAgdGltZW91dDogMTAwMCxcclxuICAgIHRhcmdldDogYXBwTW9kZWwuZXZlbnRzLnNldEV2ZW50TWVzc2FnZSxcclxufSlcclxuXHJcbmRlbGF5KHtcclxuICAgIHNvdXJjZTogc2FtcGxlKHtcclxuICAgICAgICBjbG9jazogY2hlY2tBdXRoRnguZmFpbCxcclxuICAgICAgICBmbjogKCkgPT4gXCJhdXRob3JpemF0aW9uIGZhaWxlZFwiLFxyXG4gICAgfSksXHJcbiAgICB0aW1lb3V0OiAxMDAwLFxyXG4gICAgdGFyZ2V0OiBhcHBNb2RlbC5ldmVudHMuc2V0RXZlbnRNZXNzYWdlLFxyXG59KVxyXG5cclxuY29uc3QgbW9kaWZ5VXNlciA9IEF1dGhEb21haW4uY3JlYXRlRXZlbnQoKVxyXG5cclxuc2FtcGxlKHtcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgY2xvY2s6IG1vZGlmeVVzZXIsXHJcbiAgICBzb3VyY2U6ICR1c2VyLFxyXG4gICAgZmlsdGVyOiAodXNlciwgXykgPT4gdXNlciAhPT0gbnVsbCxcclxuICAgIGZuOiAodXNlciwgXykgPT4gdXNlcixcclxuICAgIHRhcmdldDogQVBJLm1vZGlmeVVzZXJGeCxcclxufSlcclxuXHJcbnNhbXBsZSh7XHJcbiAgICBjbG9jazogQVBJLm1vZGlmeVVzZXJGeC5kb25lRGF0YSxcclxuXHJcbiAgICBmbjogKHJlcykgPT4gSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEpLFxyXG5cclxuICAgIHRhcmdldDogcG91cHVwTW9kZWwuZXZlbnRzLnNldE1lc3NhZ2UsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xyXG4gICAgbG9naW4sXHJcbiAgICBsb2dvdXQsXHJcbiAgICBjaGVja0F1dGgsXHJcbiAgICBtb2RpZnlVc2VyLFxyXG5cclxuICAgIHJlZ2lzdHJhdGlvbixcclxuICAgIHNldENyZWRlbnRpYWwsXHJcbiAgICBjaGFuZ2VVc2VyVmFsdWVzLFxyXG4gICAgc2V0UmVnaXN0cmF0aW9uQ3JlZGVudGlhbCxcclxufVxyXG5cclxuY29uc3QgdXNlVXNlciA9ICgpID0+IHVzZVN0b3JlKCR1c2VyKVxyXG5jb25zdCB1c2VJc0F1dGggPSAoKSA9PiB1c2VTdG9yZSgkaXNBdXRoKVxyXG5jb25zdCB1c2VQZW5kaW5nID0gKCkgPT4gdXNlU3RvcmUoJHBlbmRpbmcpXHJcbmNvbnN0IHVzZUF1dGhFcnJvciA9ICgpID0+IHVzZVN0b3JlKCRhdXRoRXJyb3IpXHJcbmNvbnN0IHVzZUNyZWRlbnRpYWwgPSAoKSA9PiB1c2VTdG9yZSgkY3JlZGVudGlhbClcclxuY29uc3QgdXNlQWNjZXNzVG9rZW4gPSAoKSA9PiB1c2VTdG9yZSgkYWNjZXNzVG9rZW4pXHJcbmNvbnN0IHVzZVJlZ2lzdHJhdGlvbkNvbWxpdGVkID0gKCkgPT4gdXNlU3RvcmUoJHJlZ2lzdHJhdGlvbkNvbXBsaXRlZClcclxuXHJcbmNvbnN0IHVzZVJlZ2lzdHJhdGlvbkNyZWRlbnRpYWwgPSAoKSA9PiB1c2VTdG9yZSgkcmVnaXN0cmF0aW9uQ3JlZGVudGlhbClcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XHJcbiAgICB1c2VVc2VyLFxyXG4gICAgdXNlSXNBdXRoLFxyXG4gICAgdXNlUGVuZGluZyxcclxuICAgIHVzZUF1dGhFcnJvcixcclxuICAgIHVzZUNyZWRlbnRpYWwsXHJcbiAgICB1c2VBY2Nlc3NUb2tlbixcclxuICAgIHVzZVJlZ2lzdHJhdGlvbkNvbWxpdGVkLFxyXG4gICAgdXNlUmVnaXN0cmF0aW9uQ3JlZGVudGlhbCxcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFdmVudCB9IGZyb20gXCJlZmZlY3Rvci1yZWFjdFwiXHJcbmltcG9ydCB7IElucHV0SFRNTEF0dHJpYnV0ZXMsIFJlYWN0Tm9kZSwgbWVtbyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGF1dGhNb2RlbCB9IGZyb20gXCIuLlwiXHJcbmltcG9ydCB7IGV2ZW50cywgc2VsZWN0b3JzIH0gZnJvbSBcIi4uL21vZGVsXCJcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUV2ZW50KGV2ZW50cy5sb2dpbilcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUV2ZW50KGV2ZW50cy5zZXRDcmVkZW50aWFsKVxyXG4gICAgY29uc3QgY3JlZGVudGlhbCA9IHNlbGVjdG9ycy51c2VDcmVkZW50aWFsKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgbWF4LXcteGwgZmxleC1jb2wgc3BhY2UteS00IHJvdW5kZWQtbGcgYmctZ3JheS0xMDAgc2hhZG93LXNtXCI+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCIgcm91bmRlZC10LWxnIGJnLXdoaXRlIHAtMiB0ZXh0LWNlbnRlciBmaXJzdC1sZXR0ZXI6dXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICDQsNCy0YLQvtGA0LjQt9Cw0YbQuNGPXHJcbiAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00IHAtNCBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRGaWxlZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwibG9naW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NyZWRlbnRpYWwuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRGaWxlZFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbC5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIGJnLWdyZWVuLTYwMCBweC00IHB5LTIgdGV4dC13aGl0ZSBkdXJhdGlvbi0xNTAgaG92ZXI6YmctZ3JlZW4tNTAwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICDQstC+0LnRgtC4XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8QXV0aEVycm9yIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmludGVyZmFjZSBJbnB1dEZpbGVkUHJvcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcclxuICAgIGxhYmVsPzogc3RyaW5nIHwgUmVhY3ROb2RlXHJcbn1cclxuXHJcbmNvbnN0IElucHV0RmlsZWQgPSBtZW1vKCh7IGxhYmVsLCAuLi5wcm9wcyB9OiBJbnB1dEZpbGVkUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0yIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHsuLi5wcm9wc30gY2xhc3NOYW1lPVwicm91bmRlZC1sZyBib3JkZXItMiBwLTJcIiAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICApXHJcbn0pXHJcblxyXG5jb25zdCBBdXRoRXJyb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhdXRoRXJyb3IgPSBzZWxlY3RvcnMudXNlQXV0aEVycm9yKClcclxuXHJcbiAgICByZXR1cm4gPGRpdj57YXV0aEVycm9yfTwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUmVnaXN0cmF0aW9uRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNyZWRlbnRpYWwgPSBhdXRoTW9kZWwuc2VsZWN0b3JzLnVzZVJlZ2lzdHJhdGlvbkNyZWRlbnRpYWwoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUV2ZW50KGF1dGhNb2RlbC5ldmVudHMuc2V0UmVnaXN0cmF0aW9uQ3JlZGVudGlhbClcclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IHVzZUV2ZW50KGF1dGhNb2RlbC5ldmVudHMucmVnaXN0cmF0aW9uKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBtYXgtdy14bCBmbGV4LWNvbCBzcGFjZS15LTQgcm91bmRlZC1sZyBiZy1ncmF5LTEwMCBzaGFkb3ctc21cIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIiByb3VuZGVkLXQtbGcgYmctd2hpdGUgcC0yIHRleHQtY2VudGVyIGZpcnN0LWxldHRlcjp1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgINGA0LXQs9C40YHRgtGA0LDRhtC40Y9cclxuICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTQgcC00IFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEZpbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbC5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJbnB1dEZpbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y3JlZGVudGlhbC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPElucHV0RmlsZWRcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NyZWRlbnRpYWwucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBiZy1ncmVlbi02MDAgcHgtNCBweS0yIHRleHQtd2hpdGUgZHVyYXRpb24tMTUwIGhvdmVyOmJnLWdyZWVuLTUwMFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0LLQvtC50YLQuFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgKiBhcyBhdXRoTW9kZWwgZnJvbSBcIi4vbW9kZWxcIlxyXG5leHBvcnQgKiBhcyBhdXRoTGliIGZyb20gXCIuL2xpYlwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL3VpXCJcclxuIiwiaW1wb3J0IHsgdXNlRXZlbnQgfSBmcm9tIFwiZWZmZWN0b3ItcmVhY3RcIlxyXG5pbXBvcnQgeyBhdXRoTW9kZWwgfSBmcm9tIFwiZW50aXRpZXMvYXV0aFwiXHJcbmltcG9ydCBqd3REZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIlxyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uLCB1c2VOYXZpZ2F0ZSB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IHsgZGF5c0pTIH0gZnJvbSBcInNoYXJlZC9saWIvYXBpXCJcclxuXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmludGVyZmFjZSBBdXRoUHJvdmlkZXJQcm9wcyB7fVxyXG5jb25zdCBBdXRoUHJvdmlkZXIgPSAocHJvcHM6IEF1dGhQcm92aWRlclByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBsb2dpbiA9IHVzZUV2ZW50KGF1dGhNb2RlbC5ldmVudHMubG9naW4pXHJcbiAgICBjb25zdCBsb2dvdXQgPSB1c2VFdmVudChhdXRoTW9kZWwuZXZlbnRzLmxvZ291dClcclxuICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9IHVzZUV2ZW50KGF1dGhNb2RlbC5ldmVudHMucmVnaXN0cmF0aW9uKVxyXG4gICAgY29uc3QgY2hlY2tBdXRoID0gdXNlRXZlbnQoYXV0aE1vZGVsLmV2ZW50cy5jaGVja0F1dGgpXHJcbiAgICBjb25zdCBpc0F1dGggPSBhdXRoTW9kZWwuc2VsZWN0b3JzLnVzZUlzQXV0aCgpXHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXHJcblxyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXHJcblxyXG4gICAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIilcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuOiB7IGV4cDogbnVtYmVyIH0gPSBqd3REZWNvZGUodG9rZW4hKVxyXG5cclxuICAgICAgICAgICAgaWYgKGRlY29kZWRUb2tlbi5leHAgPD0gZGF5c0pTKCkudW5peCgpKSBjaGVja0F1dGgoKVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtsb2NhdGlvbl0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjaGVja0F1dGgoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIWlzQXV0aCkgbmF2aWdhdGUoXCIvYXV0aFwiLCB7IHN0YXRlOiB7IGZyb206IGxvY2F0aW9uIH0gfSlcclxuICAgIH0sIFtpc0F1dGhdKVxyXG5cclxuICAgIHJldHVybiA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbG9naW4sIGxvZ291dCwgcmVnaXN0cmF0aW9uLCBpc0F1dGgsIGNoZWNrQXV0aCB9fSB7Li4ucHJvcHN9IC8+XHJcbn1cclxuXHJcbmNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxyXG5cclxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyLCB1c2VBdXRoIH1cclxuIiwiaW1wb3J0IHsgbWVtbywgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuXHJcbmludGVyZmFjZSBOYXZDYXJkUHJvcHMge1xyXG4gICAgaWNvbjogUmVhY3ROb2RlXHJcbiAgICB0aXRsZTogc3RyaW5nXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXHJcbiAgICBocmVmOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkNhcmQgPSBtZW1vKCh7IHRpdGxlLCBpY29uLCBocmVmLCBkZXNjcmlwdGlvbiB9OiBOYXZDYXJkUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE5hdkxpbmsgdG89e2hyZWZ9PlxyXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJyb3VuZGVkIGJnLWdyYXktMjAwIHAtNCBzaGFkb3ctc20gZHVyYXRpb24tMTUwIGhvdmVyOmJnLWFtYmVyLTYwMCBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOnNoYWRvdy14bCBcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkXCI+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAge2ljb259XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21cIj57ZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgKVxyXG59KVxyXG5cclxuTmF2Q2FyZC5kaXNwbGF5TmFtZSA9IFwiTmF2Q2FyZFwiXHJcbiIsImltcG9ydCB7IENhbGN1bGF0b3JJY29uLCBDbG9ja0ljb24sIFdpZmlJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiXHJcbmltcG9ydCB7IE5hdkNhcmQgfSBmcm9tIFwic2hhcmVkL3VpL25hdi1jYXJkXCJcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcHgtMTAgcHktNVwiPlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+0JPQu9Cw0LLQvdCw0Y8g0YHRgtGA0LDQvdC40YbQsDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yMCBncmlkIGl0ZW1zLXN0cmV0Y2ggZ2FwLTQgbWQ6bWItMCBtZDpncmlkLWNvbHMtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiYm9va2luZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYm9va2luZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwi0YDQtdC30LXRgNCy0LjRgNC+0LLQsNC90LjQtVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249ezxDYWxjdWxhdG9ySWNvbiBjbGFzc05hbWU9XCJoLTEwIHctMTAgXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cImFkZCBuZXcgcmVzZXJ2ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvYm9va2luZy9hZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cItGB0L7Qt9C00LDRgtGMINGA0LXQt9C10YDQslwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249ezxDbG9ja0ljb24gY2xhc3NOYW1lPVwiaC0xMCB3LTEwIFwiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkNhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJzY2hlZHVsbGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9ib29raW5nL3NjaGVkdWxsZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cItGA0LDRgdC/0LjRgdCw0L3QuNC1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17PFdpZmlJY29uIGNsYXNzTmFtZT1cImgtMTAgdy0xMCBcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgdHlwZSB7IFRSb3V0ZSB9IGZyb20gXCIuL21vZGVsc1wiXHJcblxyXG5leHBvcnQgY29uc3Qgcm91dGVzOiBUUm91dGVbXSA9IFtcclxuICAgIHsgaWQ6IDEsIHBhdGg6IFwiL1wiLCB0aXRsZTogXCLQs9C70LDQstC90LDRj1wiIH0sXHJcbiAgICAvLyB7IGlkOiAyLCBwYXRoOiBcIi9jYWxjdWxhdG9yXCIsIHRpdGxlOiBcItC60LDQu9GM0LrRg9C70Y/RgtC+0YBcIiB9LFxyXG4gICAgLy8geyBpZDogMywgcGF0aDogXCIvdGltZXJcIiwgdGl0bGU6IFwi0YLQsNC50LzQtdGAXCIgfSxcclxuICAgIC8vIHsgaWQ6IDQsIHBhdGg6IFwiY2hlc3NcIiwgdGl0bGU6IFwiQ2hlc3NcIiB9LFxyXG4gICAgLy8geyBpZDogNSwgcGF0aDogXCIvYW5pbWF0ZS1pY29uc1wiLCB0aXRsZTogXCLQsNC90LjQvNC40YDQvtCy0LDQvdC90YvQtSDQuNC60L7QvdC60LhcIiB9LFxyXG4gICAgLy8geyBpZDogNiwgcGF0aDogXCIveG9cIiwgdGl0bGU6IFwi0LrRgNC10YHRgtC40LrQuC3QvdC+0LvQuNC60LgocHJvY2Nlc3MpXCIgfSxcclxuICAgIHsgaWQ6IDcsIHBhdGg6IFwiL2Jvb2tpbmdcIiwgdGl0bGU6IFwi0LHRgNC+0L3QuNGA0L7QstCw0L3QuNC1IChwcm9jY2VzcylcIiB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcHJpdmF0ZVJvdXRlczogVFJvdXRlW10gPSBbXHJcbiAgICAvLyB7IGlkOiAxLCBwYXRoOiBcIi9kYXJrLXN0b3JlXCIsIHRpdGxlOiBcIkRhcmsgU3RvcmVcIiB9LFxyXG4gICAgLy8geyBpZDogMiwgcGF0aDogXCIvcml0bS1zdHlsZVwiLCB0aXRsZTogXCJSaXRtIFN0eWxlXCIgfSxcclxuICAgIC8vIHsgaWQ6IDIsIHBhdGg6IFwiL2FkbWluL2Rhc2hib2FyZFwiLCB0aXRsZTogXCJEYXNoYm9hcmRcIiB9LFxyXG4gICAgLy8geyBpZDogMywgcGF0aDogXCIvYWRtaW4vbGtcIiwgdGl0bGU6IFwiTEtcIiB9LFxyXG5dXHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL2hlbHBlcnNcIlxyXG5leHBvcnQgKiBmcm9tIFwiLi9tb2RlbHNcIlxyXG4iLCJpbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiXHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5cclxuaW50ZXJmYWNlIE5hdkxpbmtQcm9wcyB7XHJcbiAgICBocmVmOiBzdHJpbmdcclxuICAgIHRpdGxlOiBzdHJpbmdcclxuICAgIHZlcnRpY2FsPzogYm9vbGVhblxyXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOYXZMaW5rID0gbWVtbyhcclxuICAgICh7IGhyZWYsIHRpdGxlLCB2ZXJ0aWNhbCwgc2VsZWN0ZWQgfTogTmF2TGlua1Byb3BzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17Y2xzeCh2ZXJ0aWNhbCAmJiBcImZsZXggdy1mdWxsXCIpfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89e2hyZWZ9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcInJvdW5kZWQgcC0yIGR1cmF0aW9uLTE1MCBmaXJzdC1sZXR0ZXI6dXBwZXJjYXNlIGhvdmVyOmJnLWdyYXktMjAwIGhvdmVyOnRleHQtZ3JheS05MDAgYWN0aXZlOmJnLXdoaXRlIGFjdGl2ZTp0ZXh0LWdyYXktOTAwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsICYmIFwidy1mdWxsIHRleHQtY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkICYmIFwidW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG4pXHJcblxyXG5OYXZMaW5rLmRpc3BsYXlOYW1lID0gXCJOYXZMaW5rXCJcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vbmF2bGlua1wiXHJcbiIsImltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCJcclxuaW1wb3J0IHsgbWVtbyB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgdHlwZSB7IFRSb3V0ZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvbGliXCJcclxuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCIuLi8uLi9zaGFyZWQvdWlcIlxyXG5cclxuaW50ZXJmYWNlIE5hdlByb3BzIHtcclxuICAgIHJvdXRlczogVFJvdXRlW11cclxuICAgIHZlcnRpYWNhbD86IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdiA9IG1lbW8oKHsgcm91dGVzLCB2ZXJ0aWFjYWwgfTogTmF2UHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bmF2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgIHZlcnRpYWNhbCA/IFwiZmxleC1jb2wgaXRlbXMtY2VudGVyIHNwYWNlLXktNFwiIDogXCJmbGV4LXJvdyBpdGVtcy1jZW50ZXIgc3BhY2UteC00IGRpdmlkZS14LTJcIixcclxuICAgICAgICAgICAgICAgIFwiICAgIGRpdmlkZS1ncmF5LTIwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJmbGV4XCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpYWNhbCA/IFwidy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzcGFjZS15LTQgcHgtMlwiIDogXCJmbGV4LXJvdyBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4IFwiXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cm91dGVzLm1hcCgocm91dGUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TmF2TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtyb3V0ZS5wYXRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cm91dGUudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cm91dGUuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtsb2NhdGlvbi5wYXRobmFtZSA9PT0gcm91dGUucGF0aH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICApXHJcbn0pXHJcbk5hdi5kaXNwbGF5TmFtZSA9IFwiTmF2XCJcclxuIiwiaW1wb3J0IHsgRGlhbG9nLCBUcmFuc2l0aW9uIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCJcclxuaW1wb3J0IHsgTWVudUljb24sIFhJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiXHJcbmltcG9ydCB7IHVzZUV2ZW50IH0gZnJvbSBcImVmZmVjdG9yLXJlYWN0XCJcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IGRyYXdlck1vZGVsIH0gZnJvbSBcIi4uXCJcclxuaW1wb3J0IHsgcm91dGVzIH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9saWJcIlxyXG5pbXBvcnQgeyBOYXYgfSBmcm9tIFwiLi4vLi4vLi4vd2lkZ2V0cy9uYXZpZ2F0aW9uc1wiXHJcblxyXG5leHBvcnQgY29uc3QgQnVyZ2VyQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSB1c2VFdmVudChkcmF3ZXJNb2RlbC5ldmVudHMudG9nZ2xlRHJhd2VyKVxyXG4gICAgY29uc3QgaXNPcGVuZWQgPSBkcmF3ZXJNb2RlbC5zZWxlY3RvcnMudXNlT3BlbmVkRHJhd2VyKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImJsb2NrIGxnOmhpZGRlblwiPlxyXG4gICAgICAgICAgICB7aXNPcGVuZWQgPyA8WEljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+IDogPE1lbnVJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IERyYXdlciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlzT3BlbmVkID0gZHJhd2VyTW9kZWwuc2VsZWN0b3JzLnVzZU9wZW5lZERyYXdlcigpXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IHVzZUV2ZW50KGRyYXdlck1vZGVsLmV2ZW50cy50b2dnbGVEcmF3ZXIpXHJcbiAgICBjb25zdCBjb21wbGV0ZUJ1dHRvblJlZiA9IHVzZVJlZihudWxsKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VHJhbnNpdGlvbi5Sb290IHNob3c9e2lzT3BlbmVkfSBhcz17RnJhZ21lbnR9PlxyXG4gICAgICAgICAgICA8RGlhbG9nXHJcbiAgICAgICAgICAgICAgICBhcz1cImFzaWRlXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICBpbml0aWFsRm9jdXM9e2NvbXBsZXRlQnV0dG9uUmVmfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgb3ZlcmZsb3ctaGlkZGVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2UtaW4tb3V0IGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaWFsb2cuT3ZlcmxheSBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYXktNTAwIGJnLW9wYWNpdHktNzUgdHJhbnNpdGlvbi1vcGFjaXR5XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24uQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGZpeGVkIGluc2V0LXktMCByaWdodC0wIGZsZXggbWF4LXctZnVsbCBwbC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvbi5DaGlsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI9XCJ0cmFuc2Zvcm0gdHJhbnNpdGlvbiBlYXNlLWluLW91dCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJGcm9tPVwidHJhbnNsYXRlLXgtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlclRvPVwidHJhbnNsYXRlLXgtMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZT1cInRyYW5zZm9ybSB0cmFuc2l0aW9uIGVhc2UtaW4tb3V0IGR1cmF0aW9uLTMwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZUZyb209XCJ0cmFuc2xhdGUteC0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlVG89XCJ0cmFuc2xhdGUteC1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1hdXRvIHJlbGF0aXZlIHctc2NyZWVuIG1heC13LW1kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYW5zaXRpb24uQ2hpbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZyYWdtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRlcj1cImVhc2UtaW4tb3V0IGR1cmF0aW9uLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPVwiZWFzZS1pbi1vdXQgZHVyYXRpb24tNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIC1tbC04IGZsZXggcHQtNCBwci0yIHNtOi1tbC0xMCBzbTpwci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtjb21wbGV0ZUJ1dHRvblJlZn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3ZlcjphbmltYXRlLWNyb3NzLXNwaW4gZ3JvdXAgdy04IHAtMSB0ZXh0LVsjMmEyZTM3XSBtYXJrZXI6aC04IGhvdmVyOnJvdW5kZWQtZnVsbCBob3ZlcjpiZy1bIzJhMmUzN11cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5DbG9zZSBwYW5lbDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8WEljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBkdXJhdGlvbi0xNTAgIGdyb3VwLWhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uLkNoaWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgZmxleC1jb2wgZGl2aWRlLXkgb3ZlcmZsb3cteS1zY3JvbGwgYmctd2hpdGUgcHktNiBzaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteS0yIHB4LTQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLlRpdGxlIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWJsdWUtNTAwIG1kOnRleHQtNHhsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQm9va2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaWFsb2cuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGlhbG9nLkRlc2NyaXB0aW9uPtCh0LjRgdGC0LXQvNCwINGA0LXQt9C10YDQstC40YDQvtCy0LDQvdC40Y88L0RpYWxvZy5EZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYgcm91dGVzPXtyb3V0ZXN9IHZlcnRpYWNhbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHJhbnNpdGlvbi5DaGlsZD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0RpYWxvZz5cclxuICAgICAgICA8L1RyYW5zaXRpb24uUm9vdD5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVFdmVudCwgY3JlYXRlU3RvcmUgfSBmcm9tIFwiZWZmZWN0b3JcIlxyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJlZmZlY3Rvci1yZWFjdFwiXHJcblxyXG5jb25zdCB0b2dnbGVEcmF3ZXIgPSBjcmVhdGVFdmVudCgpXHJcbmNvbnN0ICRpc09wZW5lZERyYXdlciA9IGNyZWF0ZVN0b3JlPGJvb2xlYW4+KGZhbHNlKS5vbihcclxuICAgIHRvZ2dsZURyYXdlcixcclxuICAgIChzdGF0ZSwgXykgPT4gIXN0YXRlXHJcbilcclxuXHJcbmV4cG9ydCBjb25zdCBldmVudHMgPSB7XHJcbiAgICB0b2dnbGVEcmF3ZXIsXHJcbn1cclxuXHJcbmNvbnN0IHVzZU9wZW5lZERyYXdlciA9ICgpID0+IHVzZVN0b3JlKCRpc09wZW5lZERyYXdlcilcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XHJcbiAgICB1c2VPcGVuZWREcmF3ZXIsXHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vZHJhd2VyXCJcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vdWlcIlxyXG5leHBvcnQgKiBhcyBkcmF3ZXJNb2RlbCBmcm9tIFwiLi9tb2RlbFwiXHJcbiIsImltcG9ydCB7IENvbXBvbmVudFByb3BzLCBmb3J3YXJkUmVmLCBGb3J3YXJkZWRSZWYgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuY29uc3QgU3ByaXRlSWNvbnMgPSAocHJvcHM6IENvbXBvbmVudFByb3BzPFwic3ZnXCI+LCBzdmdSZWY6IEZvcndhcmRlZFJlZjxTVkdTVkdFbGVtZW50PikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzggMzhcIlxyXG4gICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICByZWY9e3N2Z1JlZn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPVwiOC4wNDIlXCIgeTE9XCIwJVwiIHgyPVwiNjUuNjgyJVwiIHkyPVwiMjMuODY1JVwiIGlkPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cImN1cnJlbnRDb2xvclwiIHN0b3BPcGFjaXR5PVwiMFwiIG9mZnNldD1cIjAlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCJjdXJyZW50Q29sb3JcIiBzdG9wT3BhY2l0eT1cIi42MzFcIiBvZmZzZXQ9XCI2My4xNDYlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCJjdXJyZW50Q29sb3JcIiBvZmZzZXQ9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgPGcgZmlsbD1cIm5vbmVcIiBmaWxsUnVsZT1cImV2ZW5vZGRcIj5cclxuICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxIDEpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiT3ZhbC0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwidXJsKCNhKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJvdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tPVwiMCAxOCAxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz1cIjM2MCAxOCAxOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cj1cIjAuOXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPGNpcmNsZSBmaWxsPVwiY3VycmVudENvbG9yXCIgY3g9XCIzNlwiIGN5PVwiMThcIiByPVwiMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YW5pbWF0ZVRyYW5zZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicm90YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb209XCIwIDE4IDE4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiMzYwIDE4IDE4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyPVwiMC45c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvY2lyY2xlPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGNvbnN0IFNwaW5lckxvYWRlciA9IGZvcndhcmRSZWYoU3ByaXRlSWNvbnMpXHJcbiIsImV4cG9ydCBjb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZmxleCBweC00IHB5LTIgYmctb2NlYW4gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICA8ZGl2PmZvb3RlcjwvZGl2PlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZUV2ZW50IH0gZnJvbSBcImVmZmVjdG9yLXJlYWN0XCJcclxuaW1wb3J0IHsgYXV0aE1vZGVsIH0gZnJvbSBcImVudGl0aWVzL2F1dGhcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBMaW5rLCBOYXZMaW5rIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgeyBCdXJnZXJCdXR0b24gfSBmcm9tIFwiLi4vLi4vZmVhdHVyZXMvZHJhd2VyXCJcclxuXHJcbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XHJcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlXHJcbiAgICB0aXRsZTogc3RyaW5nIHwgUmVhY3ROb2RlXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoeyBjaGlsZHJlbiwgdGl0bGUgfTogSGVhZGVyUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUxvZ091dCA9IHVzZUV2ZW50KGF1dGhNb2RlbC5ldmVudHMubG9nb3V0KVxyXG4gICAgY29uc3QgdXNlciA9IGF1dGhNb2RlbC5zZWxlY3RvcnMudXNlVXNlcigpXHJcbiAgICBjb25zdCBpc0F1dGggPSBhdXRoTW9kZWwuc2VsZWN0b3JzLnVzZVVzZXIoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYmctb2NlYW4gcHgtNCBweS0yIHRleHQtd2hpdGUgc2hhZG93LW1kIGR1cmF0aW9uLTE1MCAgaG92ZXI6c2hhZG93LWxnIHNtOnNwYWNlLXgtMTIgbWQ6cHgtOFwiPlxyXG4gICAgICAgICAgICA8TmF2TGluayB0bz1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgZHVyYXRpb24tMTUwIGZpcnN0LWxldHRlcjp1cHBlcmNhc2UgaG92ZXI6ZHJvcC1zaGFkb3cteGxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpncm93XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJ0ZzovL3Jlc29sdmU/ZG9tYWluPVdpbGRlREpcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbCBiZy13aGl0ZSBmaWxsLW9jZWFuIHAtMlwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIk0yMi4wNSAxLjU3N2MtLjM5My0uMDE2LS43ODQuMDgtMS4xMTcuMjM1LS40ODQuMTg2LTQuOTIgMS45MDItOS40MSAzLjY0LTIuMjYuODczLTQuNTE4IDEuNzQ2LTYuMjU2IDIuNDE1LTEuNzM3LjY3LTMuMDQ1IDEuMTY4LTMuMTE0IDEuMTkyLS40Ni4xNi0xLjA4Mi4zNjItMS42MS45ODQtLjEzMy4xNTUtLjI2Ny4zNTQtLjMzNS42MjhzLS4wMzguNjIyLjA5NS44OTVjLjI2NS41NDcuNzE0Ljc3MyAxLjI0NC45NzYgMS43Ni41NjQgMy41OCAxLjEwMiA1LjA4NyAxLjYwOC41NTYgMS45NiAxLjA5IDMuOTI3IDEuNjE4IDUuODkuMTc0LjM5NC41NTMuNTQuOTQ0LjU0NGwtLjAwMi4wMnMuMzA3LjAzLjYwNi0uMDQyYy4zLS4wNy42NzctLjI0NCAxLjAyLS41NjUuMzc3LS4zNTQgMS40LTEuMzYgMS45OC0xLjkyOGw0LjM3IDMuMjI2LjAzNS4wMnMuNDg0LjM0IDEuMTkyLjM4OGMuMzU0LjAyNC44Mi0uMDQ0IDEuMjItLjMzNy40MDMtLjI5NC42Ny0uNzY3Ljc5NS0xLjMwNy4zNzQtMS42MyAyLjg1My0xMy40MjcgMy4yNzYtMTUuMzhsLS4wMTIuMDQ2Yy4yOTYtMS4xLjE4Ny0yLjEwOC0uNDk2LTIuNzA1LS4zNDItLjI5Ny0uNzM2LS40MjctMS4xMy0uNDQ0em0tLjExOCAxLjg3NGMuMDI3LjAyNS4wMjUuMDI1LjAwMi4wMjctLjAwNy0uMDAyLjA4LjExOC0uMDkuNzU1bC0uMDA3LjAyNC0uMDA1LjAyMmMtLjQzMiAxLjk5Ny0yLjkzNiAxMy45LTMuMjcgMTUuMzU2LS4wNDYuMTk2LS4wNjUuMTgyLS4wNTQuMTctLjEtLjAxNS0uMjg1LS4wOTQtLjMtLjFsLTcuNDgtNS41MjVjMi41NjItMi40NjcgNS4xODItNC43IDcuODI3LTcuMDguNDY4LS4yMzUuMzktLjk2LS4xNy0uOTcyLS41OTQuMTQtMS4wOTUuNTY3LTEuNjQuODQtMy4xMzIgMS44NTgtNi4zMzIgMy40OTItOS40MyA1LjQwNi0xLjU5LS41NTMtMy4xNzctMS4wMTItNC42NDMtMS40NjcgMS4yNzItLjUxIDIuMjgzLS44ODYgMy4yNzgtMS4yNyAxLjczOC0uNjcgMy45OTYtMS41NCA2LjI1Ni0yLjQxNSA0LjUyMi0xLjc0OCA5LjA3LTMuNTEgOS40NjUtMy42NjJsLjAzMi0uMDEzLjAzLS4wMTNjLjExLS4wNS4xNzMtLjA1NS4yMDItLjA1NyAwIDAtLjAxLS4wMzMtLjAwMi0uMDI2ek0xMC4wMiAxNi4wMTZsMS4yMzQuOTEyYy0uNTMyLjUyLTEuMDM1IDEuMDEtMS4zOTggMS4zNnpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIjZmZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9SYXN0cmFwb25vdmljaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctd2hpdGUgZmlsbC1vY2VhbiBwLTJcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTEyIDJDNi40NzcgMiAyIDYuNDYzIDIgMTEuOTdjMCA0LjQwNCAyLjg2NSA4LjE0IDYuODM5IDkuNDU4LjUuMDkyLjY4Mi0uMjE2LjY4Mi0uNDggMC0uMjM2LS4wMDgtLjg2NC0uMDEzLTEuNjk1LTIuNzgyLjYwMi0zLjM2OS0xLjMzNy0zLjM2OS0xLjMzNy0uNDU0LTEuMTUxLTEuMTEtMS40NTgtMS4xMS0xLjQ1OC0uOTA4LS42MTguMDY5LS42MDYuMDY5LS42MDYgMS4wMDMuMDcgMS41MzEgMS4wMjcgMS41MzEgMS4wMjcuODkyIDEuNTI0IDIuMzQxIDEuMDg0IDIuOTEuODI4LjA5Mi0uNjQzLjM1LTEuMDgzLjYzNi0xLjMzMi0yLjIyLS4yNTEtNC41NTUtMS4xMDctNC41NTUtNC45MjcgMC0xLjA4OC4zOS0xLjk3OSAxLjAyOS0yLjY3NS0uMTAzLS4yNTItLjQ0Ni0xLjI2Ni4wOTgtMi42MzggMCAwIC44NC0uMjY4IDIuNzUgMS4wMjJBOS42MDYgOS42MDYgMCAwMTEyIDYuODJjLjg1LjAwNCAxLjcwNS4xMTQgMi41MDQuMzM2IDEuOTA5LTEuMjkgMi43NDctMS4wMjIgMi43NDctMS4wMjIuNTQ2IDEuMzcyLjIwMiAyLjM4Ni4xIDIuNjM4LjY0LjY5NiAxLjAyOCAxLjU4NyAxLjAyOCAyLjY3NSAwIDMuODMtMi4zMzkgNC42NzMtNC41NjYgNC45Mi4zNTkuMzA3LjY3OC45MTUuNjc4IDEuODQ2IDAgMS4zMzItLjAxMiAyLjQwNy0uMDEyIDIuNzM0IDAgLjI2Ny4xOC41NzcuNjg4LjQ4QzE5LjEzNyAyMC4xMDcgMjIgMTYuMzczIDIyIDExLjk2OSAyMiA2LjQ2MyAxNy41MjIgMiAxMiAyelwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID48L3BhdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9wcm9maWxlXCIgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7aXNBdXRoICYmIHVzZXIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ091dH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLWxnIGJnLWdyYXktMjAwIHB4LTQgcHktMiB1cHBlcmNhc2UgdGV4dC1ncmF5LTkwMCBkdXJhdGlvbi0xNTAgaG92ZXI6YmctYmx1ZS02MDAgaG92ZXI6dGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAg0LLRi9GF0L7QtFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHshaXNBdXRoICYmIChcclxuICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgdG89XCIvYXV0aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC1sZyBiZy1ncmF5LTIwMCBweC00IHB5LTIgdXBwZXJjYXNlIHRleHQtZ3JheS05MDAgZHVyYXRpb24tMTUwIGhvdmVyOmJnLWJsdWUtNjAwIGhvdmVyOnRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgINCy0YXQvtC0L9GA0LXQs9C40YHRgtGA0LDRhtC40Y9cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxCdXJnZXJCdXR0b24gLz5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCJcclxuaW1wb3J0IHsgYXBwTW9kZWwgfSBmcm9tIFwiZW50aXRpZXMvYXBwXCJcclxuaW1wb3J0IHsgRHJhd2VyIH0gZnJvbSBcImZlYXR1cmVzL2RyYXdlclwiXHJcbmltcG9ydCB7IFBvdXB1cCB9IGZyb20gXCJmZWF0dXJlcy9wb3VwdXBcIlxyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgT3V0bGV0LCB1c2VMb2NhdGlvbiB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IHsgU3BpbmVyTG9hZGVyIH0gZnJvbSBcInNoYXJlZC91aS9zcGlubmVyLWxvYWRpbmdcIlxyXG5pbXBvcnQgeyByb3V0ZXMgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2xpYlwiXHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9mb290ZXJcIlxyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vaGVhZGVyXCJcclxuaW1wb3J0IHsgTmF2IH0gZnJvbSBcIi4uL25hdmlnYXRpb25zXCJcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluTGF5b3V0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXNBcHBTdGFydGVkID0gYXBwTW9kZWwuc2VsZWN0b3JzLnVzZUFwcFN0YXJ0ZWQoKVxyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxyXG5cclxuICAgIGNvbnN0IHBhZ2VOYW1lID0gdXNlTWVtbygoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZXMgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdChcIi9cIilcclxuICAgICAgICByZXR1cm4gbmFtZXNbbmFtZXMubGVuZ3RoIC0gMV1cclxuICAgIH0sIFtsb2NhdGlvbl0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyIHRpdGxlPXtwYWdlTmFtZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBsZzpmbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdiByb3V0ZXM9e3JvdXRlc30gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0hlYWRlcj5cclxuICAgICAgICAgICAgPERyYXdlciAvPlxyXG4gICAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IGdyb3cgZmxleC1jb2xcIj57IWlzQXBwU3RhcnRlZCA/IDxGaXJzdExvYWRlciAvPiA6IDxPdXRsZXQgLz59PC9tYWluPlxyXG4gICAgICAgICAgICA8UG91cHVwIC8+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgRmlyc3RMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtZXNzYWdlcyA9IGFwcE1vZGVsLnNlbGVjdG9ycy51c2VFdmVudE1lc3NhZ2VzKClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHNwYWNlLXktMiBvdmVyZmxvdy1jbGlwIGJnLXdoaXRlXCI+XHJcbiAgICAgICAgICAgIDxTcGluZXJMb2FkZXIgY2xhc3NOYW1lPVwiaC0yMCB3LTIwXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktMiBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC1sZyBiZy1ncmF5LTIwMCBwLTEwIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cImRpdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17RGF0ZS5ub3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdz17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZWFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyRnJvbT1cIm9wYWNpdHktMCAtdHJhbnNsYXRlLXktZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyPVwiZHVyYXRpb24tNzAwIHRyYW5zZm9ybSBvcGFjaXR5IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyVG89XCJvcGFjaXR5LTEwMCB0cmFuc2xhdGUteS0wXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHR5cGUgeyBUUmVzZXJ2ZSwgVERpY3QsIFRQcmVwYXkgfSBmcm9tIFwiLi9tb2RlbHNcIlxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IF9oYWxsUGxhbmVzXzogQXJyYXk8VEhhbGxwbGFuZT4gPSBbXHJcbi8vICAgICB7IGlkOiAxLCBuYW1lOiBcItC+0YHQvdC+0LLQvdC+0LlcIiwgaXNBY3RpdmU6IHRydWUsIGltYWdlOiBcImhhbGwuanBlZ1wiIH0sXHJcbi8vICAgICB7IGlkOiAyLCBuYW1lOiBcItCy0LjQv1wiLCBpc0FjdGl2ZTogdHJ1ZSwgaW1hZ2U6IFwidmlwLmpwZWdcIiB9LFxyXG4vLyAgICAgeyBpZDogMywgbmFtZTogXCLQstGC0L7RgNC+0Lkg0LfQsNC7XCIsIGlzQWN0aXZlOiB0cnVlLCBpbWFnZTogXCJzZWNvbmQuanBnXCIgfSxcclxuLy8gICAgIHsgaWQ6IDQsIG5hbWU6IFwi0YLQtdGA0YDQsNGB0LBcIiwgaXNBY3RpdmU6IHRydWUsIGltYWdlOiBcInRlcnJhY2UuanBlZ1wiIH0sXHJcbi8vICAgICB7IGlkOiA1LCBuYW1lOiBcItGB0LvRg9C20LXQsdC90YvQuVwiLCBpc0FjdGl2ZTogdHJ1ZSwgaW1hZ2U6IFwicmVzZXJ2ZS5qcGVnXCIgfSxcclxuLy8gXVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IF90YWJsZXNfOiBUVGFibGVbXSA9IFtcclxuLy8gICAgIHsgaWQ6IDEsIG5hbWU6IFwi0YHRgtC+0LsgMVwiLCBoYWxscGxhbmVJZDogMSwgaXNBY3RpdmU6IHRydWUgfSxcclxuLy8gICAgIHsgaWQ6IDIsIG5hbWU6IFwi0YHRgtC+0LsgMlwiLCBoYWxscGxhbmVJZDogMSwgaXNBY3RpdmU6IHRydWUgfSxcclxuLy8gICAgIHsgaWQ6IDMsIG5hbWU6IFwi0YHRgtC+0LsgM1wiLCBoYWxscGxhbmVJZDogMSwgaXNBY3RpdmU6IHRydWUgfSxcclxuLy8gICAgIHsgaWQ6IDQsIG5hbWU6IFwi0YHRgtC+0LsgNFwiLCBoYWxscGxhbmVJZDogMSwgaXNBY3RpdmU6IHRydWUgfSxcclxuLy8gICAgIHsgaWQ6IDUsIG5hbWU6IFwi0YHRgtC+0LsgNVwiLCBoYWxscGxhbmVJZDogMywgaXNBY3RpdmU6IHRydWUgfSxcclxuLy8gICAgIHsgaWQ6IDYsIG5hbWU6IFwi0YHRgtC+0LsgNlwiLCBoYWxscGxhbmVJZDogMywgaXNBY3RpdmU6IHRydWUgfSxcclxuLy8gICAgIHsgaWQ6IDcsIG5hbWU6IFwi0YHRgtC+0LsgN1wiLCBoYWxscGxhbmVJZDogMywgaXNBY3RpdmU6IHRydWUgfSxcclxuLy8gICAgIHsgaWQ6IDgsIG5hbWU6IFwi0LLQuNC/IDFcIiwgaGFsbHBsYW5lSWQ6IDIsIGlzQWN0aXZlOiB0cnVlIH0sXHJcbi8vICAgICB7IGlkOiA5LCBuYW1lOiBcItCy0LjQvyAyXCIsIGhhbGxwbGFuZUlkOiAyLCBpc0FjdGl2ZTogdHJ1ZSB9LFxyXG4vLyAgICAgeyBpZDogMTAsIG5hbWU6IFwi0YPQu9C40YbQsCAxXCIsIGhhbGxwbGFuZUlkOiA0LCBpc0FjdGl2ZTogdHJ1ZSB9LFxyXG4vLyAgICAgeyBpZDogMTEsIG5hbWU6IFwi0YPQu9C40YbQsCAyXCIsIGhhbGxwbGFuZUlkOiA0LCBpc0FjdGl2ZTogdHJ1ZSB9LFxyXG4vLyAgICAgeyBpZDogMTIsIG5hbWU6IFwi0YPQu9C40YbQsCAzXCIsIGhhbGxwbGFuZUlkOiA0LCBpc0FjdGl2ZTogdHJ1ZSB9LFxyXG4vLyAgICAgeyBpZDogMTMsIG5hbWU6IFwi0YHQu9GD0LbQtdCx0L3Ri9C5IDFcIiwgaGFsbHBsYW5lSWQ6IDUsIGlzQWN0aXZlOiB0cnVlIH0sXHJcbi8vIF1cclxuXHJcbmV4cG9ydCBjb25zdCBfc3RhdHVzZXNfOiBURGljdFtdID0gW1xyXG4gICAgeyBpZDogMSwgbmFtZTogXCLRgdCy0L7QsdC+0LTQtdC9XCIsIHZhbHVlOiBcImZyZWVcIiB9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogXCLQt9Cw0L3Rj9GCXCIsIHZhbHVlOiBcIm9yZGVyZWRcIiB9LFxyXG4gICAgeyBpZDogMywgbmFtZTogXCLQvdC10LTQvtGB0YLRg9C/0LXQvVwiLCB2YWx1ZTogXCJvdXRPZlNlcnZpZVwiIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBfZGVmYXVsdFJlc2VydmVfOiBUUmVzZXJ2ZSA9IHtcclxuICAgIGlkOiAwLFxyXG4gICAgdGFibGU6IHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBuYW1lOiBcItCy0YvQsdC10YDQuNGC0LUg0YHRgtC+0LtcIixcclxuICAgICAgICBoYWxscGxhbmVJZDogMCxcclxuICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICByZXNlcnZlczogW10sXHJcbiAgICB9LFxyXG4gICAgaGFsbHBsYW5lOiB7XHJcbiAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgbmFtZTogXCLQstGL0LHQuNGA0LjRgtC1INC30LDQu1wiLFxyXG4gICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIGltYWdlOiBcImhhbGwuanBlZ1wiLFxyXG4gICAgfSxcclxuICAgIGhhbGxwbGFuZUlkOiAwLFxyXG4gICAgdGFibGVJZDogMCxcclxuICAgIHByZXBheTogMCxcclxuICAgIGd1ZXN0czogMCxcclxuICAgIHN0YXR1czogeyBpZDogMSwgbmFtZTogXCLRgdCy0L7QsdC+0LTQtdC9XCIsIHZhbHVlOiBcImZyZWVcIiB9LFxyXG4gICAgc3RhcnREYXRlOiBEYXRlLm5vdygpLFxyXG4gICAgZW5kRGF0ZTogRGF0ZS5ub3coKSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IF9wcmVwYXlzRGljdF86IFRQcmVwYXlbXSA9IFtcclxuICAgIHsgaWQ6IDAsIG5hbWU6IFwi0LHQtdC3INGE0LjQu9GM0YLRgNCw0YbQuNC4XCIsIHZhbHVlOiBbXSB9LFxyXG4gICAgeyBpZDogMSwgbmFtZTogXCLQsdC10Lcg0L/RgNC10LTQvtC/0LvQsNGCXCIsIHZhbHVlOiBbMF0gfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6IFwi0L7RgiAxMDAwINC00L4gMjAwMFwiLCB2YWx1ZTogWzEwMDAsIDIwMDBdIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiBcItC+0YIgMjAwMCDQtNC+IDUwMDBcIiwgdmFsdWU6IFsyMDAwLCA1MDAwXSB9LFxyXG4gICAgeyBpZDogNCwgbmFtZTogXCLQvtGCIDUwMDAg0LTQviAxMDAwMFwiLCB2YWx1ZTogWzUwMDAsIDEwMDAwXSB9LFxyXG4gICAgeyBpZDogNSwgbmFtZTogXCLQvtGCIDEwMDAwXCIsIHZhbHVlOiBbMTAwMDBdIH0sXHJcbl1cclxuIiwiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IGF0dGFjaCwgY3JlYXRlRWZmZWN0LCBzYW1wbGUgfSBmcm9tIFwiZWZmZWN0b3JcIlxyXG5pbXBvcnQgeyBCb29raW5nQVBJIH0gZnJvbSBcInNoYXJlZC9saWIvYXBpXCJcclxuaW1wb3J0IHsgVFJlc2VydmUsIFRSZXNlcnZlc1BhcmFtcyB9IGZyb20gXCIuL21vZGVsc1wiXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UmVzZXJ2ZXNGeCA9IGNyZWF0ZUVmZmVjdDxUUmVzZXJ2ZXNQYXJhbXMsIEF4aW9zUmVzcG9uc2U8W0FycmF5PFRSZXNlcnZlPiwgbnVtYmVyXSwgRXJyb3I+PihcclxuICAgIEJvb2tpbmdBUEkuZ2V0UmVzZXJ2ZXNcclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEZsaXRlcmVkUmVzZXJ2ZXNGeCA9IGNyZWF0ZUVmZmVjdDxUUmVzZXJ2ZXNQYXJhbXMsIEF4aW9zUmVzcG9uc2U8W0FycmF5PFRSZXNlcnZlPiwgbnVtYmVyXSwgRXJyb3I+PihcclxuICAgIEJvb2tpbmdBUEkuZ2V0UmVzZXJ2ZXNcclxuKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJlc2VydmVGeCA9IGNyZWF0ZUVmZmVjdDxudW1iZXIsIEF4aW9zUmVzcG9uc2U8VFJlc2VydmU+PihCb29raW5nQVBJLmdldFJlc2VydmUpXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGFibGVzRnggPSBhdHRhY2goe1xyXG4gICAgZWZmZWN0OiBCb29raW5nQVBJLmdldFRhYmxlc0Z4LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEhhbGxQbGFuZXNGeCA9IGF0dGFjaCh7XHJcbiAgICBlZmZlY3Q6IEJvb2tpbmdBUEkuZ2V0SGFsbHBsYW5lc0Z4LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RSZXNlcnZlRnggPSBhdHRhY2goe1xyXG4gICAgZWZmZWN0OiBCb29raW5nQVBJLnBvc3RSZXNlcnZlRngsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlUmVzZXJ2ZUJ5SWQgPSBhdHRhY2goe1xyXG4gICAgZWZmZWN0OiBCb29raW5nQVBJLmRlbGV0ZVJlc2VydmVCeUlkRngsXHJcbn0pXHJcblxyXG5zYW1wbGUoe1xyXG4gICAgY2xvY2s6IFtcclxuICAgICAgICBCb29raW5nQVBJLnBvc3RSZXNlcnZlRnguZG9uZURhdGEsXHJcbiAgICAgICAgQm9va2luZ0FQSS5kZWxldGVSZXNlcnZlQnlJZEZ4LmRvbmVEYXRhLFxyXG4gICAgICAgIEJvb2tpbmdBUEkuZGVsZXRlQWxsUmVzZXJ2ZXNGeC5kb25lRGF0YSxcclxuICAgICAgICBCb29raW5nQVBJLmRlbGV0ZVNlbGVjdGVkUmVzZXJ2ZXNGeC5kb25lRGF0YSxcclxuICAgIF0sXHJcbiAgICBmbjogKCkgPT4gKHt9KSxcclxuICAgIHRhcmdldDogZ2V0UmVzZXJ2ZXNGeCxcclxufSlcclxuIiwiZXhwb3J0ICogZnJvbSBcIi4vaGVscGVyc1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL21vZGVsc1wiXHJcbmV4cG9ydCAqIGFzIEFQSSBmcm9tIFwiLi9hcGlcIlxyXG4iLCJpbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJlZmZlY3Rvci1yZWFjdFwiXHJcbmltcG9ydCB7IGNyZWF0ZURvbWFpbiwgY3JlYXRlU3RvcmUsIHNhbXBsZSB9IGZyb20gXCJlZmZlY3RvclwiXHJcblxyXG5pbXBvcnQgeyB0eXBlIFRSZXNlcnZlLCBfZGVmYXVsdFJlc2VydmVfLCBBUEksIFRUYWJsZSwgVEhhbGxwbGFuZSB9IGZyb20gXCIuLi9saWJcIlxyXG5cclxuY29uc3QgcGFnZURvbWFpbiA9IGNyZWF0ZURvbWFpbihcInBhZ2VEb21haW5cIilcclxuXHJcbmV4cG9ydCBjb25zdCAkd2l0aERlbGV0ZWQgPSBwYWdlRG9tYWluLmNyZWF0ZVN0b3JlPGJvb2xlYW4+KHRydWUpXHJcblxyXG5jb25zdCBpbml0UGFnZSA9IHBhZ2VEb21haW4uY3JlYXRlRXZlbnQoKVxyXG5cclxuY29uc3QgJHBhZ2VNb3VudGVkID0gcGFnZURvbWFpbi5jcmVhdGVTdG9yZTxib29sZWFuPihmYWxzZSlcclxuZXhwb3J0IGNvbnN0ICRyZXNlcnZlID0gcGFnZURvbWFpbi5jcmVhdGVTdG9yZTxUUmVzZXJ2ZT4oX2RlZmF1bHRSZXNlcnZlXylcclxuXHJcbmNvbnN0IGdldFRhYmxlcyA9IHBhZ2VEb21haW4uY3JlYXRlRXZlbnQoKVxyXG5cclxuc2FtcGxlKHtcclxuICAgIGNsb2NrOiBnZXRUYWJsZXMsXHJcbiAgICB0YXJnZXQ6IEFQSS5nZXRUYWJsZXNGeCxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCAkdGFibGVzID0gcGFnZURvbWFpbi5jcmVhdGVTdG9yZTxBcnJheTxUVGFibGU+PihbXSkub24oQVBJLmdldFRhYmxlc0Z4LmRvbmVEYXRhLCAoXywgcmVzKSA9PiByZXMuZGF0YVswXSlcclxuXHJcbmNvbnN0IGdldEhhbGxwbGFuZXMgPSBwYWdlRG9tYWluLmNyZWF0ZUV2ZW50KClcclxuc2FtcGxlKHtcclxuICAgIGNsb2NrOiBnZXRIYWxscGxhbmVzLFxyXG4gICAgdGFyZ2V0OiBBUEkuZ2V0SGFsbFBsYW5lc0Z4LFxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0ICRoYWxscGxhbmVzID0gcGFnZURvbWFpblxyXG4gICAgLmNyZWF0ZVN0b3JlPEFycmF5PFRIYWxscGxhbmU+PihbXSlcclxuICAgIC5vbihBUEkuZ2V0SGFsbFBsYW5lc0Z4LmRvbmVEYXRhLCAoXywgcmVzKSA9PiByZXMuZGF0YVswXSlcclxuXHJcbmNvbnN0IGdldFJlc2VydmVzID0gcGFnZURvbWFpbi5jcmVhdGVFdmVudCgpXHJcblxyXG5zYW1wbGUoe1xyXG4gICAgY2xvY2s6IGdldFJlc2VydmVzLFxyXG4gICAgc291cmNlOiAkd2l0aERlbGV0ZWQsXHJcbiAgICBmbjogKHdpdGhEZWxldGVkLCBfKSA9PiAoeyB3aXRoRGVsZXRlZCB9KSxcclxuICAgIHRhcmdldDogQVBJLmdldFJlc2VydmVzRngsXHJcbn0pXHJcbmV4cG9ydCBjb25zdCAkcmVzZXJ2ZXMgPSBwYWdlRG9tYWluXHJcbiAgICAuY3JlYXRlU3RvcmU8QXJyYXk8VFJlc2VydmU+PihbXSlcclxuICAgIC5vbihBUEkuZ2V0UmVzZXJ2ZXNGeC5kb25lRGF0YSwgKF8sIHBheWxvYWQpID0+IHBheWxvYWQuZGF0YVswXSlcclxuXHJcbmNvbnN0IHNlbGVjdFJlc2VydmUgPSBwYWdlRG9tYWluLmNyZWF0ZUV2ZW50PFRSZXNlcnZlW1wiaWRcIl0+KClcclxuZXhwb3J0IGNvbnN0ICRzZWxlY3RlZFJlc2VydmVzID0gcGFnZURvbWFpbi5jcmVhdGVTdG9yZTxBcnJheTxUUmVzZXJ2ZVtcImlkXCJdPj4oW10pLm9uKHNlbGVjdFJlc2VydmUsIChyZXNlcnZlcywgaWQpID0+IHtcclxuICAgIGNvbnN0IGNhbmRpZGF0ZSA9IHJlc2VydmVzLnNvbWUoKHIpID0+IHIgPT09IGlkKVxyXG5cclxuICAgIGlmIChjYW5kaWRhdGUpIHJldHVybiByZXNlcnZlcy5maWx0ZXIoKHIpID0+IHIgIT09IGlkKVxyXG5cclxuICAgIHJldHVybiBbLi4ucmVzZXJ2ZXMsIGlkXVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0ICRjb21wYWN0ZWQgPSBwYWdlRG9tYWluLmNyZWF0ZVN0b3JlKGZhbHNlKVxyXG5cclxuY29uc3QgJHNlbGVjdGVkUmVzZXJ2ZXNDb3VudCA9ICRzZWxlY3RlZFJlc2VydmVzLm1hcCgoaXRlbSkgPT4gaXRlbS5sZW5ndGgpXHJcblxyXG5leHBvcnQgY29uc3QgJHJlc2VydmVzQ291bnQgPSBwYWdlRG9tYWluLmNyZWF0ZVN0b3JlPG51bWJlcj4oMCkub24oQVBJLmdldFJlc2VydmVzRnguZG9uZURhdGEsIChfLCByZXMpID0+IHJlcy5kYXRhWzFdKVxyXG5cclxuZXhwb3J0IGNvbnN0ICRmaWx0ZXJlZFJlc2VydmVzID0gY3JlYXRlU3RvcmU8QXJyYXk8VFJlc2VydmU+PihbXSlcclxuICAgIC5vbihBUEkuZ2V0RmxpdGVyZWRSZXNlcnZlc0Z4LmRvbmVEYXRhLCAoXywgcmVzKSA9PiByZXMuZGF0YVswXSlcclxuICAgIC5vbigkcmVzZXJ2ZXMsIChfLCByKSA9PiByKVxyXG5cclxuJHNlbGVjdGVkUmVzZXJ2ZXMucmVzZXQoJGZpbHRlcmVkUmVzZXJ2ZXMpXHJcblxyXG5jb25zdCAkZmlsdGVyZWRSZXNlcnZlc0NvdW50ID0gJHJlc2VydmVzQ291bnRcclxuICAgIC5tYXAoKHF1YW50aXR5KSA9PiBxdWFudGl0eSlcclxuICAgIC5vbihBUEkuZ2V0RmxpdGVyZWRSZXNlcnZlc0Z4LmRvbmVEYXRhLCAoXywgcmVzKSA9PiByZXMuZGF0YVsxXSlcclxuXHJcbmNvbnN0ICRpc0xvYWRpbmdSZXNlcnZlcyA9IGNyZWF0ZVN0b3JlPGJvb2xlYW4+KGZhbHNlKS5vbihcclxuICAgIFtBUEkuZ2V0RmxpdGVyZWRSZXNlcnZlc0Z4LnBlbmRpbmcsIEFQSS5nZXRSZXNlcnZlc0Z4LnBlbmRpbmddLFxyXG4gICAgKF8sIHN0YXRlKSA9PiBzdGF0ZVxyXG4pXHJcbmNvbnN0IHVzZUNvbXBhY3RMaXN0ID0gKCkgPT4gdXNlU3RvcmUoJGNvbXBhY3RlZClcclxuY29uc3QgdXNlUGFnZU1vdW50ZWQgPSAoKSA9PiB1c2VTdG9yZSgkcGFnZU1vdW50ZWQpXHJcbmNvbnN0IHVzZVJlc2VydmVzID0gKCkgPT4gdXNlU3RvcmUoJGZpbHRlcmVkUmVzZXJ2ZXMpXHJcbmNvbnN0IHVzZVJlc2VydmVzQ291bnQgPSAoKSA9PiB1c2VTdG9yZSgkcmVzZXJ2ZXNDb3VudClcclxuY29uc3QgdXNlU2VsZWN0ZWRSZXNlcnZlcyA9ICgpID0+IHVzZVN0b3JlKCRzZWxlY3RlZFJlc2VydmVzKVxyXG5jb25zdCB1c2VJc0xvYWRpbmdSZXNlcnZlcyA9ICgpID0+IHVzZVN0b3JlKCRpc0xvYWRpbmdSZXNlcnZlcylcclxuY29uc3QgdXNlRmlsdGVyZWRSZXNlcnZlc0NvdW50ID0gKCkgPT4gdXNlU3RvcmUoJGZpbHRlcmVkUmVzZXJ2ZXNDb3VudClcclxuY29uc3QgdXNlU2VsZWN0ZWRSZXNlcnZlc0NvdW50ID0gKCkgPT4gdXNlU3RvcmUoJHNlbGVjdGVkUmVzZXJ2ZXNDb3VudClcclxuXHJcbnNhbXBsZSh7XHJcbiAgICBjbG9jazogaW5pdFBhZ2UsXHJcbiAgICB0YXJnZXQ6IFtnZXRIYWxscGxhbmVzLCBnZXRSZXNlcnZlcywgZ2V0VGFibGVzXSxcclxufSlcclxuXHJcbnNhbXBsZSh7XHJcbiAgICBjbG9jazogW0FQSS5nZXRIYWxsUGxhbmVzRnguZmFpbCwgQVBJLmdldFJlc2VydmVzRnguZmFpbCwgQVBJLmdldFRhYmxlc0Z4LmZhaWxdLFxyXG4gICAgZm46ICgpID0+IGZhbHNlLFxyXG4gICAgdGFyZ2V0OiAkcGFnZU1vdW50ZWQsXHJcbn0pXHJcblxyXG5zYW1wbGUoe1xyXG4gICAgY2xvY2s6IFtBUEkuZ2V0SGFsbFBsYW5lc0Z4LmRvbmVEYXRhLCBBUEkuZ2V0UmVzZXJ2ZXNGeC5kb25lRGF0YSwgQVBJLmdldFRhYmxlc0Z4LmRvbmVEYXRhXSxcclxuICAgIGZuOiAoKSA9PiB0cnVlLFxyXG4gICAgdGFyZ2V0OiAkcGFnZU1vdW50ZWQsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0b3JzID0ge1xyXG4gICAgdXNlUmVzZXJ2ZXMsXHJcbiAgICB1c2VDb21wYWN0TGlzdCxcclxuICAgIHVzZVBhZ2VNb3VudGVkLFxyXG4gICAgdXNlUmVzZXJ2ZXNDb3VudCxcclxuICAgIHVzZVNlbGVjdGVkUmVzZXJ2ZXMsXHJcbiAgICB1c2VJc0xvYWRpbmdSZXNlcnZlcyxcclxuICAgIHVzZVNlbGVjdGVkUmVzZXJ2ZXNDb3VudCxcclxuICAgIHVzZUZpbHRlcmVkUmVzZXJ2ZXNDb3VudCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IHtcclxuICAgIGluaXRQYWdlLFxyXG4gICAgZ2V0VGFibGVzLFxyXG4gICAgZ2V0UmVzZXJ2ZXMsXHJcbiAgICBzZWxlY3RSZXNlcnZlLFxyXG59XHJcbiIsImV4cG9ydCAqIGFzIGJvb2tpbmdMaWIgZnJvbSBcIi4vbGliXCJcclxuZXhwb3J0ICogYXMgYm9va2luZ01vZGVsIGZyb20gXCIuL21vZGVsXCJcclxuLy8gZXhwb3J0ICogZnJvbSBcIi4vdWlcIlxyXG4iLCJpbXBvcnQgeyBjb21iaW5lLCBjcmVhdGVEb21haW4sIGNyZWF0ZUV2ZW50LCBzYW1wbGUgfSBmcm9tIFwiZWZmZWN0b3JcIlxyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJlZmZlY3Rvci1yZWFjdFwiXHJcbmltcG9ydCB7IGJvb2tpbmdMaWIsIGJvb2tpbmdNb2RlbCB9IGZyb20gXCJlbnRpdGllcy9ib29raW5nXCJcclxuaW1wb3J0IHsgVEhhbGxwbGFuZSwgVFByZXBheSwgVFJlc2VydmVzUGFyYW1zLCBfcHJlcGF5c0RpY3RfIH0gZnJvbSBcImVudGl0aWVzL2Jvb2tpbmcvbGliXCJcclxuXHJcbmNvbnN0IGZpbHRlcnNEb21haW4gPSBjcmVhdGVEb21haW4oXCJmaWx0ZXJzRG9tYWluXCIpXHJcblxyXG5jb25zdCB0b2dnbGVWaXNpYmxlZEZpbHRlcnNDbGlja2VkID0gZmlsdGVyc0RvbWFpbi5jcmVhdGVFdmVudCgpXHJcbmNvbnN0ICR2aXNpYmxlZEZpbHRlcnMgPSBmaWx0ZXJzRG9tYWluXHJcbiAgICAuY3JlYXRlU3RvcmU8Ym9vbGVhbj4oZmFsc2UpXHJcbiAgICAub24odG9nZ2xlVmlzaWJsZWRGaWx0ZXJzQ2xpY2tlZCwgKHN0YXRlLCBfKSA9PiAhc3RhdGUpXHJcblxyXG5jb25zdCB0b2dnbGVXaXRoRGVsZXRlZCA9IGNyZWF0ZUV2ZW50KClcclxuY29uc3QgJHdpdGhEZWxldGVkID0gZmlsdGVyc0RvbWFpbi5jcmVhdGVTdG9yZTxib29sZWFuPih0cnVlKS5vbih0b2dnbGVXaXRoRGVsZXRlZCwgKHN0YXRlLCBfKSA9PiAhc3RhdGUpXHJcblxyXG5jb25zdCAkaGFsbHBsYW5lcyA9IGNvbWJpbmUoYm9va2luZ01vZGVsLiRoYWxscGxhbmVzLCAoaGFsbHBsYW5lcykgPT4ge1xyXG4gICAgcmV0dXJuIFt7IGlkOiAwLCBuYW1lOiBcItCx0LXQtyDRhNC40LvRjNGC0YDQsNGG0LjQuFwiLCB2YWx1ZTogXCJcIiB9LCAuLi5oYWxscGxhbmVzXVxyXG59KVxyXG5cclxuY29uc3Qgc2VsZWN0SGFsbFBsYW5lID0gZmlsdGVyc0RvbWFpbi5jcmVhdGVFdmVudDxUSGFsbHBsYW5lPigpXHJcbmV4cG9ydCBjb25zdCAkc2VsZWN0ZWRIYWxsUGxhbmVzID0gZmlsdGVyc0RvbWFpblxyXG4gICAgLmNyZWF0ZVN0b3JlPFRIYWxscGxhbmU+KHtcclxuICAgICAgICBpZDogMCxcclxuICAgICAgICBuYW1lOiBcItCx0LXQtyDRhNC40LvRjNGC0YDQsNGG0LjQuFwiLFxyXG4gICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgfSlcclxuICAgIC5vbihzZWxlY3RIYWxsUGxhbmUsIChfLCBwYXlsb2FkKSA9PiBwYXlsb2FkKVxyXG5cclxuY29uc3QgJHByZXBheXMgPSBmaWx0ZXJzRG9tYWluLmNyZWF0ZVN0b3JlPEFycmF5PFRQcmVwYXk+PihfcHJlcGF5c0RpY3RfKVxyXG5cclxuY29uc3Qgc2VsZWN0UHJlcGF5ID0gZmlsdGVyc0RvbWFpbi5jcmVhdGVFdmVudDxUUHJlcGF5PigpXHJcbmV4cG9ydCBjb25zdCAkc2VsZWN0ZWRQcmVwYXkgPSBmaWx0ZXJzRG9tYWluXHJcbiAgICAuY3JlYXRlU3RvcmU8VFByZXBheT4oX3ByZXBheXNEaWN0X1swXSlcclxuICAgIC5vbihzZWxlY3RQcmVwYXksIChfLCBwYXlsb2FkKSA9PiBwYXlsb2FkKVxyXG5cclxuc2FtcGxlKHtcclxuICAgIGNsb2NrOiBbJHNlbGVjdGVkSGFsbFBsYW5lcywgJHNlbGVjdGVkUHJlcGF5LCAkd2l0aERlbGV0ZWRdLFxyXG5cclxuICAgIHNvdXJjZTogWyRzZWxlY3RlZEhhbGxQbGFuZXMsICRzZWxlY3RlZFByZXBheSwgJHdpdGhEZWxldGVkXSxcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgZm46IChbZmlsdGVyZWRIYWxsUGxhbmVzLCBwcmVwYXlzLCB3aXRoRGVsZXRlZF06IFtUSGFsbHBsYW5lLCBUUHJlcGF5LCBib29sZWFuXSwgXyk6IFRSZXNlcnZlc1BhcmFtcyA9PiB7XHJcbiAgICAgICAgaWYgKGZpbHRlcmVkSGFsbFBsYW5lcy5pZCAhPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAocHJlcGF5cy5pZCAhPT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFsbHBsYW5lSWQ6IGZpbHRlcmVkSGFsbFBsYW5lcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICBwcmVwYXlUeXBlOiBwcmVwYXlzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhEZWxldGVkLFxyXG4gICAgICAgICAgICAgICAgfSBhcyBUUmVzZXJ2ZXNQYXJhbXNcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGhhbGxwbGFuZUlkOiBmaWx0ZXJlZEhhbGxQbGFuZXMuaWQsXHJcbiAgICAgICAgICAgICAgICB3aXRoRGVsZXRlZCxcclxuICAgICAgICAgICAgfSBhcyBUUmVzZXJ2ZXNQYXJhbXNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmVwYXlzLnZhbHVlLmxlbmd0aCAhPT0gMCkgcmV0dXJuIHsgcHJlcGF5VHlwZTogcHJlcGF5cy5pZCwgd2l0aERlbGV0ZWQgfSBhcyBUUmVzZXJ2ZXNQYXJhbXNcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgd2l0aERlbGV0ZWQgfVxyXG4gICAgfSxcclxuXHJcbiAgICB0YXJnZXQ6IGJvb2tpbmdMaWIuQVBJLmdldEZsaXRlcmVkUmVzZXJ2ZXNGeCxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBldmVudHMgPSB7XHJcbiAgICBzZWxlY3RIYWxsUGxhbmUsXHJcbiAgICBzZWxlY3RQcmVwYXksXHJcbiAgICB0b2dnbGVXaXRoRGVsZXRlZCxcclxuICAgIHRvZ2dsZVZpc2libGVkRmlsdGVyc0NsaWNrZWQsXHJcbn1cclxuXHJcbmNvbnN0IHVzZVByZXBheXMgPSAoKSA9PiB1c2VTdG9yZSgkcHJlcGF5cylcclxuY29uc3QgdXNlSGFsbFBsYW5lcyA9ICgpID0+IHVzZVN0b3JlKCRoYWxscGxhbmVzKVxyXG5jb25zdCB1c2VXaXRoRGVsZXRlZCA9ICgpID0+IHVzZVN0b3JlKCR3aXRoRGVsZXRlZClcclxuY29uc3QgdXNlU2VsZWN0ZWRQcmVwYXkgPSAoKSA9PiB1c2VTdG9yZSgkc2VsZWN0ZWRQcmVwYXkpXHJcbmNvbnN0IHVzZVZpc2libGVkRmlsdGVycyA9ICgpID0+IHVzZVN0b3JlKCR2aXNpYmxlZEZpbHRlcnMpXHJcbmNvbnN0IHVzZVNlbGVjdGVkSGFsbFBsYW5lID0gKCkgPT4gdXNlU3RvcmUoJHNlbGVjdGVkSGFsbFBsYW5lcylcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XHJcbiAgICB1c2VQcmVwYXlzLFxyXG4gICAgdXNlSGFsbFBsYW5lcyxcclxuICAgIHVzZVdpdGhEZWxldGVkLFxyXG4gICAgdXNlU2VsZWN0ZWRQcmVwYXksXHJcbiAgICB1c2VWaXNpYmxlZEZpbHRlcnMsXHJcbiAgICB1c2VTZWxlY3RlZEhhbGxQbGFuZSxcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi9yZXNlcnZlcy1maWx0ZXJzXCJcclxuIiwiZXhwb3J0ICogYXMgcmVzZXJ2ZXNGaWx0ZXJNb2RlbCBmcm9tIFwiLi9tb2RlbFwiXHJcbiIsImltcG9ydCB7IGNyZWF0ZUV2ZW50LCBzYW1wbGUgfSBmcm9tIFwiZWZmZWN0b3JcIlxyXG5pbXBvcnQgeyBib29raW5nTW9kZWwgfSBmcm9tIFwiZW50aXRpZXMvYm9va2luZ1wiXHJcbmltcG9ydCB0eXBlIHsgVFJlc2VydmUgfSBmcm9tIFwiZW50aXRpZXMvYm9va2luZy9saWJcIlxyXG5pbXBvcnQgeyByZXNlcnZlc0ZpbHRlck1vZGVsIH0gZnJvbSBcImZlYXR1cmVzL3Jlc2VydmVzLWZpbHRlcnNcIlxyXG5pbXBvcnQgeyBCb29raW5nQVBJIH0gZnJvbSBcInNoYXJlZC9saWIvYXBpXCJcclxuXHJcbmV4cG9ydCBjb25zdCB0b2dnbGVDb21hY3RDbGlja2VkID0gY3JlYXRlRXZlbnQoKVxyXG5cclxuYm9va2luZ01vZGVsLiRjb21wYWN0ZWQub24odG9nZ2xlQ29tYWN0Q2xpY2tlZCwgKHN0YXRlLCBfKSA9PiAhc3RhdGUpXHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlQWxsUmVzZXJ2ZXNDbGlja2VkID0gY3JlYXRlRXZlbnQoKVxyXG5cclxuc2FtcGxlKHtcclxuICAgIGNsb2NrOiBkZWxldGVBbGxSZXNlcnZlc0NsaWNrZWQsXHJcbiAgICB0YXJnZXQ6IEJvb2tpbmdBUEkuZGVsZXRlQWxsUmVzZXJ2ZXNGeCxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVTZWxlY3RlZFJlc2VydmVzQ2xpY2tlZCA9IGNyZWF0ZUV2ZW50KClcclxuXHJcbnNhbXBsZSh7XHJcbiAgICBjbG9jazogZGVsZXRlU2VsZWN0ZWRSZXNlcnZlc0NsaWNrZWQsXHJcbiAgICBzb3VyY2U6IGJvb2tpbmdNb2RlbC4kc2VsZWN0ZWRSZXNlcnZlcyxcclxuICAgIGZuOiAoc2VsZWN0ZWQsIF8pID0+IHNlbGVjdGVkLFxyXG4gICAgdGFyZ2V0OiBCb29raW5nQVBJLmRlbGV0ZVNlbGVjdGVkUmVzZXJ2ZXNGeCxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCByZXNldEFsbEZpbHRlcnNDbGlja2VkID0gY3JlYXRlRXZlbnQoKVxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdEFsbFJlc2VydmVzQ2xpY2tlZCA9IGNyZWF0ZUV2ZW50KClcclxuXHJcbnNhbXBsZSh7XHJcbiAgICBjbG9jazogc2VsZWN0QWxsUmVzZXJ2ZXNDbGlja2VkLFxyXG4gICAgc291cmNlOiBbYm9va2luZ01vZGVsLiRmaWx0ZXJlZFJlc2VydmVzLCBib29raW5nTW9kZWwuJHNlbGVjdGVkUmVzZXJ2ZXNdLFxyXG4gICAgLy9AdHMtaWdub3JlXHJcbiAgICBmbjogKFtmaWx0ZXJlZFJlc2VydmVzLCBzZWxlY3RlZFJlc2VydmVzXTogW0FycmF5PFRSZXNlcnZlPiwgQXJyYXk8bnVtYmVyPl0sIF8pID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEFsbCA9IGZpbHRlcmVkUmVzZXJ2ZXMubGVuZ3RoID09PSBzZWxlY3RlZFJlc2VydmVzLmxlbmd0aFxyXG5cclxuICAgICAgICBpZiAoc2VsZWN0ZWRBbGwpIHJldHVybiBbXVxyXG5cclxuICAgICAgICByZXR1cm4gZmlsdGVyZWRSZXNlcnZlcy5tYXAoKHJlc2VydmUpID0+IHJlc2VydmUuaWQpXHJcbiAgICB9LFxyXG5cclxuICAgIHRhcmdldDogYm9va2luZ01vZGVsLiRzZWxlY3RlZFJlc2VydmVzLFxyXG59KVxyXG5cclxuYm9va2luZ01vZGVsLiRzZWxlY3RlZFJlc2VydmVzLnJlc2V0KFtcclxuICAgIEJvb2tpbmdBUEkuZGVsZXRlUmVzZXJ2ZUJ5SWRGeC5kb25lRGF0YSxcclxuICAgIEJvb2tpbmdBUEkuZGVsZXRlQWxsUmVzZXJ2ZXNGeC5kb25lRGF0YSxcclxuICAgIHJlc2V0QWxsRmlsdGVyc0NsaWNrZWQsXHJcbl0pXHJcblxyXG5yZXNlcnZlc0ZpbHRlck1vZGVsLiRzZWxlY3RlZEhhbGxQbGFuZXMucmVzZXQocmVzZXRBbGxGaWx0ZXJzQ2xpY2tlZClcclxucmVzZXJ2ZXNGaWx0ZXJNb2RlbC4kc2VsZWN0ZWRQcmVwYXkucmVzZXQocmVzZXRBbGxGaWx0ZXJzQ2xpY2tlZClcclxuIiwiaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIlxyXG5pbXBvcnQgeyBSZWFjdE5vZGUsIG1lbW8gfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VFdmVudCB9IGZyb20gXCJlZmZlY3Rvci1yZWFjdFwiXHJcblxyXG5pbXBvcnQgeyBib29raW5nTW9kZWwgfSBmcm9tIFwiZW50aXRpZXMvYm9va2luZ1wiXHJcbmltcG9ydCB7IHNlbGVjdEFsbFJlc2VydmVzQ2xpY2tlZCwgdG9nZ2xlQ29tYWN0Q2xpY2tlZCB9IGZyb20gXCIuLi9tb2RlbFwiXHJcblxyXG5pbXBvcnQgeyBkZWxldGVBbGxSZXNlcnZlc0NsaWNrZWQsIGRlbGV0ZVNlbGVjdGVkUmVzZXJ2ZXNDbGlja2VkLCByZXNldEFsbEZpbHRlcnNDbGlja2VkIH0gZnJvbSBcIi4uL21vZGVsXCJcclxuXHJcbmltcG9ydCB7XHJcbiAgICBUcmFzaEljb24sXHJcbiAgICBYQ2lyY2xlSWNvbixcclxuICAgIFhJY29uLFxyXG4gICAgQ2hlY2tJY29uLFxyXG4gICAgVmlld0dyaWRJY29uLFxyXG4gICAgVmlld0xpc3RJY29uLFxyXG4gICAgRmlsdGVySWNvbixcclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCJcclxuXHJcbmltcG9ydCB7IEZpbHRlckljb24gYXMgRmlsdGVySWNvblNvbGlkIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvc29saWRcIlxyXG5pbXBvcnQgeyBldmVudHMsIHNlbGVjdG9ycyB9IGZyb20gXCJmZWF0dXJlcy9yZXNlcnZlcy1maWx0ZXJzL21vZGVsXCJcclxuXHJcbmV4cG9ydCBjb25zdCBBY3Rpb25QYW5lbCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgc3BhY2UteS0yIHJvdW5kZWQgYm9yZGVyICBiZy1ncmF5LTEwMCBwLTIgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyICBtZDpzcGFjZS15LTAgbWQ6c3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgIDxEZWxldGVBbGxSZXNlcnZlc0J1dHRvbiAvPlxyXG5cclxuICAgICAgICAgICAgPERlbGV0ZVNlbGVjdGVkUmVzZXJ2ZXNCdXR0b24gLz5cclxuICAgICAgICAgICAgPFNlbGVjdEFsbEJ1dHRvbiAvPlxyXG5cclxuICAgICAgICAgICAgPFJlc2V0RmlsdGVyc0J1dHRvbiAvPlxyXG4gICAgICAgICAgICA8VG9nZ2xlQ29tcGFjdEJ1dHRvbiAvPlxyXG4gICAgICAgICAgICA8U2hvd0ZpbHRlcnNCdXR0b24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuaW50ZXJmYWNlIEFjdGlvbkJ1dHRvblByb3BzIGV4dGVuZHMgUmVhY3QuQnV0dG9uSFRNTEF0dHJpYnV0ZXM8SFRNTEJ1dHRvbkVsZW1lbnQ+IHtcclxuICAgIGNoaWxkcmVuPzogUmVhY3ROb2RlXHJcbiAgICBjYXB0aW9uPzogc3RyaW5nIHwgUmVhY3ROb2RlXHJcbn1cclxuXHJcbmNvbnN0IEFjdGlvbkJ1dHRvbiA9IG1lbW8oKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgY2FwdGlvbiwgLi4ucHJvcHMgfTogQWN0aW9uQnV0dG9uUHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBzZWxmLXN0YXJ0IHJvdW5kZWQtbGcgcHktMiBwbC00IHByLTIgdGV4dC13aGl0ZSBzaGFkb3ctbWQgZHVyYXRpb24tMTUwIGhvdmVyOnNoYWRvdy1sZyBkaXNhYmxlZDpvcGFjaXR5LTUwXCIsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWVcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuPntjYXB0aW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgKVxyXG59KVxyXG5BY3Rpb25CdXR0b24uZGlzcGxheU5hbWUgPSBcIkFjdGlvbkJ1dHRvblwiXHJcblxyXG5jb25zdCBTZWxlY3RBbGxCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5sZGVTZWxlY3RBbGxSZXNlcnZlc0NsaWNrZWQgPSB1c2VFdmVudChzZWxlY3RBbGxSZXNlcnZlc0NsaWNrZWQpXHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWRSZXNlcnZlc0NvdW50ID0gYm9va2luZ01vZGVsLnNlbGVjdG9ycy51c2VTZWxlY3RlZFJlc2VydmVzQ291bnQoKVxyXG4gICAgY29uc3QgZmlsdGVyZWRPcmRlcnNDb3VudCA9IGJvb2tpbmdNb2RlbC5zZWxlY3RvcnMudXNlRmlsdGVyZWRSZXNlcnZlc0NvdW50KClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBY3Rpb25CdXR0b25cclxuICAgICAgICAgICAgY2FwdGlvbj17c2VsZWN0ZWRSZXNlcnZlc0NvdW50ID09PSBmaWx0ZXJlZE9yZGVyc0NvdW50ID8gXCLRgdC90Y/RgtGMINCy0YvQtNC10LvQtdC90LjQtVwiIDogXCLQstGL0LHRgNCw0YLRjCDQstGB0LVcIn1cclxuICAgICAgICAgICAgb25DbGljaz17aGFubGRlU2VsZWN0QWxsUmVzZXJ2ZXNDbGlja2VkfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi02MDBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAge3NlbGVjdGVkUmVzZXJ2ZXNDb3VudCA9PT0gZmlsdGVyZWRPcmRlcnNDb3VudCA/IChcclxuICAgICAgICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxDaGVja0ljb24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9BY3Rpb25CdXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFRvZ2dsZUNvbXBhY3RCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGVDb21hY3RDbGlja2VkID0gdXNlRXZlbnQodG9nZ2xlQ29tYWN0Q2xpY2tlZClcclxuICAgIGNvbnN0IGNvbXBhY3QgPSBib29raW5nTW9kZWwuc2VsZWN0b3JzLnVzZUNvbXBhY3RMaXN0KClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZyBiZy13aGl0ZSBwLTIgdGV4dC1ncmF5LTUwMCBzaGFkb3ctbWQgaG92ZXI6dGV4dC1ncmF5LTkwMCBhY3RpdmU6dGV4dC1ncmF5LTUwMFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZUNvbWFjdENsaWNrZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y29tcGFjdCA/IDxWaWV3R3JpZEljb24gY2xhc3NOYW1lPVwiaC01IHctNVwiIC8+IDogPFZpZXdMaXN0SWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz59XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IERlbGV0ZUFsbFJlc2VydmVzQnV0dG9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlRGVsZXRlQWxsUmVzZXJ2ZXNDbGlja2VkID0gdXNlRXZlbnQoZGVsZXRlQWxsUmVzZXJ2ZXNDbGlja2VkKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFjdGlvbkJ1dHRvbiBjbGFzc05hbWU9XCJiZy1yb3NlLTYwMFwiIGNhcHRpb249XCLQvtGC0YfQuNGB0YLQuNGC0Ywg0LLRgdC1XCIgb25DbGljaz17aGFuZGxlRGVsZXRlQWxsUmVzZXJ2ZXNDbGlja2VkfT5cclxuICAgICAgICAgICAgPFRyYXNoSWNvbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgICA8L0FjdGlvbkJ1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgRGVsZXRlU2VsZWN0ZWRSZXNlcnZlc0J1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZURlbGV0ZVNlbGVjdGVkUmVzZXJ2ZXNDbGlja2VkID0gdXNlRXZlbnQoZGVsZXRlU2VsZWN0ZWRSZXNlcnZlc0NsaWNrZWQpXHJcbiAgICBjb25zdCBzZWxlY3RlZFJlc2VydmVzQ291bnQgPSBib29raW5nTW9kZWwuc2VsZWN0b3JzLnVzZVNlbGVjdGVkUmVzZXJ2ZXNDb3VudCgpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QWN0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJvc2UtNjAwXCJcclxuICAgICAgICAgICAgY2FwdGlvbj17PHNwYW4+0L7RgtGH0LjRgdGC0LjRgtGMIHtzZWxlY3RlZFJlc2VydmVzQ291bnQgPiAwICYmIFwiOiBcIiArIHNlbGVjdGVkUmVzZXJ2ZXNDb3VudH08L3NwYW4+fVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEZWxldGVTZWxlY3RlZFJlc2VydmVzQ2xpY2tlZH1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9e3NlbGVjdGVkUmVzZXJ2ZXNDb3VudCA9PT0gMH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxUcmFzaEljb24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgPC9BY3Rpb25CdXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFJlc2V0RmlsdGVyc0J1dHRvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVJlc2V0RmlsdGVyc0NsaWNrZWQgPSB1c2VFdmVudChyZXNldEFsbEZpbHRlcnNDbGlja2VkKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFjdGlvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVSZXNldEZpbHRlcnNDbGlja2VkfSBjYXB0aW9uPVwi0YHQsdGA0L7RgdC40YLRjCDRhNC40LvRjNGC0YDRi1wiIGNsYXNzTmFtZT1cImJnLXJvc2UtNjAwXCI+XHJcbiAgICAgICAgICAgIDxYQ2lyY2xlSWNvbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgICA8L0FjdGlvbkJ1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgU2hvd0ZpbHRlcnNCdXR0b24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVUb2dnbGVWaXNpYmxlZENsaWNrZWQgPSB1c2VFdmVudChldmVudHMudG9nZ2xlVmlzaWJsZWRGaWx0ZXJzQ2xpY2tlZClcclxuICAgIGNvbnN0IHZpc2libGVkID0gc2VsZWN0b3JzLnVzZVZpc2libGVkRmlsdGVycygpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgYmctd2hpdGUgcC0yIHRleHQtZ3JheS01MDAgc2hhZG93LW1kIGhvdmVyOnRleHQtZ3JheS05MDAgYWN0aXZlOnRleHQtZ3JheS01MDBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGVWaXNpYmxlZENsaWNrZWR9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7dmlzaWJsZWQgPyA8RmlsdGVySWNvbiBjbGFzc05hbWU9XCJoLTUgdy01XCIgLz4gOiA8RmlsdGVySWNvblNvbGlkIGNsYXNzTmFtZT1cImgtNSB3LTVcIiAvPn1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG4iLCJleHBvcnQgKiBmcm9tIFwiLi91aVwiXHJcbmV4cG9ydCAqIGZyb20gXCIuL21vZGVsXCJcclxuIiwiaW1wb3J0IHsgRnJhZ21lbnQsIEhUTUxBdHRyaWJ1dGVzLCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBMaXN0Ym94LCBUcmFuc2l0aW9uIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCJcclxuaW1wb3J0IHsgQ2hlY2tJY29uLCBTZWxlY3Rvckljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiXHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCJcclxuXHJcbmludGVyZmFjZSBTZWxlY3RQcm9wczxUPiB7XHJcbiAgICBpdGVtczogVFtdXHJcbiAgICBvblNlbGVjdChpdGVtOiBUKTogdm9pZFxyXG4gICAgc2VsZWN0ZWQ6IFRcclxuICAgIGxhYmVsPzogc3RyaW5nIHwgUmVhY3ROb2RlXHJcbiAgICBkaXNhYmxlZD86IGJvb2xlYW5cclxuICAgIGNvbnRhaW5lckNsYXNzTmFtZT86IEhUTUxBdHRyaWJ1dGVzPGFueT5bXCJjbGFzc05hbWVcIl1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNlbGVjdCA9IDxUID0gYW55LD4oe1xyXG4gICAgaXRlbXMsXHJcbiAgICBvblNlbGVjdCxcclxuICAgIGRpc2FibGVkLFxyXG4gICAgc2VsZWN0ZWQsXHJcbiAgICBsYWJlbCxcclxuICAgIGNvbnRhaW5lckNsYXNzTmFtZSxcclxufTogU2VsZWN0UHJvcHM8VCB8IGFueT4pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzTmFtZX0+XHJcbiAgICAgICAgICAgIDxMaXN0Ym94IHZhbHVlPXtzZWxlY3RlZH0gb25DaGFuZ2U9e29uU2VsZWN0fSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxyXG4gICAgICAgICAgICAgICAge2xhYmVsICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdGJveC5MYWJlbCBjbGFzc05hbWU9XCJmb3VjdXM6dGV4dC1ncmF5LTkwMCBtYi0yIHB4LTEgZmlyc3QtbGV0dGVyOnVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Ym94LkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdGJveC5CdXR0b24gY2xhc3NOYW1lPVwiZ3JvdXAgcmVsYXRpdmUgdy1mdWxsIGN1cnNvci1wb2ludGVyIHJvdW5kZWQtbGcgYmctd2hpdGUgcHktMiBwbC0zIHByLTEwIHRleHQtbGVmdCBzaGFkb3ctbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzLXZpc2libGU6Ym9yZGVyLWluZGlnby01MDAgZm9jdXMtdmlzaWJsZTpyaW5nLTIgZm9jdXMtdmlzaWJsZTpyaW5nLXdoaXRlIGZvY3VzLXZpc2libGU6cmluZy1vcGFjaXR5LTc1IGZvY3VzLXZpc2libGU6cmluZy1vZmZzZXQtMiBmb2N1cy12aXNpYmxlOnJpbmctb2Zmc2V0LW9yYW5nZS0zMDAgZGlzYWJsZWQ6Y3Vyc29yLWRlZmF1bHQgZGlzYWJsZWQ6b3BhY2l0eS0zMCBzbTp0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRydW5jYXRlXCI+e3NlbGVjdGVkPy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgaW5zZXQteS0wIHJpZ2h0LTAgZmxleCBpdGVtcy1jZW50ZXIgcHItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0b3JJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGgtNSB3LTUgdGV4dC1ncmF5LTQwMCBkdXJhdGlvbi0zMDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTUwMCBncm91cC1hY3RpdmU6dGV4dC1ncmF5LTkwMCBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Ym94LkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz17RnJhZ21lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdGJveC5PcHRpb25zIGNsYXNzTmFtZT1cImFic29sdXRlIHotNTAgbXQtMSBtYXgtaC02MCB3LWZ1bGwgb3ZlcmZsb3ctYXV0byByb3VuZGVkLW1kIGJnLXdoaXRlIHB5LTEgdGV4dC1iYXNlIHNoYWRvdy1sZyByaW5nLTEgcmluZy1ibGFjayByaW5nLW9wYWNpdHktNSBmb2N1czpvdXRsaW5lLW5vbmUgc206dGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaXRlbUlkeCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Ym94Lk9wdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW1JZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17KHsgYWN0aXZlIH0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgcmVsYXRpdmUgY3Vyc29yLWRlZmF1bHQgc2VsZWN0LW5vbmUgcHktMiBwbC0xMCBwci00ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJiZy1hbWJlci0xMDAgdGV4dC1hbWJlci05MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTkwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh7IHNlbGVjdGVkIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYmxvY2sgdHJ1bmNhdGUgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImZvbnQtbWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZm9udC1ub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWxlY3RlZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteS0wIGxlZnQtMCBmbGV4IGl0ZW1zLWNlbnRlciBwbC0zIHRleHQtYW1iZXItNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC01IHctNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdGJveC5PcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0Ym94Lk9wdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UcmFuc2l0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGlzdGJveD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBBZGp1c3RtZW50c0ljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCJcclxuaW1wb3J0IHsgdXNlRXZlbnQgfSBmcm9tIFwiZWZmZWN0b3ItcmVhY3RcIlxyXG5pbXBvcnQgdHlwZSB7IFREaWN0LCBUUHJlcGF5IH0gZnJvbSBcImVudGl0aWVzL2Jvb2tpbmcvbGliXCJcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcInNoYXJlZC91aS9zZWxlY3RcIlxyXG5pbXBvcnQgeyBldmVudHMsIHNlbGVjdG9ycyB9IGZyb20gXCIuLi9tb2RlbFwiXHJcblxyXG5leHBvcnQgY29uc3QgRmlsdGVycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByZXBheXMgPSBzZWxlY3RvcnMudXNlUHJlcGF5cygpXHJcbiAgICBjb25zdCBoYWxscGxhbmVzID0gc2VsZWN0b3JzLnVzZUhhbGxQbGFuZXMoKVxyXG4gICAgY29uc3Qgd2l0aERlbGV0ZWQgPSBzZWxlY3RvcnMudXNlV2l0aERlbGV0ZWQoKVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRQcmVwYXkgPSBzZWxlY3RvcnMudXNlU2VsZWN0ZWRQcmVwYXkoKVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRIYWxscGxhbmUgPSBzZWxlY3RvcnMudXNlU2VsZWN0ZWRIYWxsUGxhbmUoKVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdFByZXBheSA9IHVzZUV2ZW50KGV2ZW50cy5zZWxlY3RQcmVwYXkpXHJcbiAgICBjb25zdCB0b2dnbGVXaXRoRGVsZXRlZCA9IHVzZUV2ZW50KGV2ZW50cy50b2dnbGVXaXRoRGVsZXRlZClcclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdEhhbGxwbGFuZSA9IHVzZUV2ZW50KGV2ZW50cy5zZWxlY3RIYWxsUGxhbmUpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS00IHJvdW5kZWQgYmctZ3JheS0xMDAgcHgtMiBweS00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgZmlyc3QtbGV0dGVyOnVwcGVyY2FzZSBzbTp0ZXh0LWJhc2VcIj7RhNC40LvRjNGC0YDRizwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxBZGp1c3RtZW50c0ljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHNwYWNlLXktNCBtZDpmbGV4LXJvdyBtZDpzcGFjZS14LTQgbWQ6c3BhY2UteS0wXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZmxleCBncm93IGZsZXgtY29sIGl0ZW1zLXN0YXJ0IHNwYWNlLXktMiBtZDpmbGV4LXJvdyBtZDppdGVtcy1jZW50ZXIgbWQ6c3BhY2UteC00IG1kOnNwYWNlLXktMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPtGD0LTQsNC70LXQvdC90YvQtTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17d2l0aERlbGV0ZWR9IG9uQ2hhbmdlPXt0b2dnbGVXaXRoRGVsZXRlZH0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3JvdyBmbGV4LWNvbCBpdGVtcy1zdGFydCBzcGFjZS15LTIgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIG1kOnNwYWNlLXgtNCBtZDpzcGFjZS15LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Qv9C+INC30LDQu9Cw0Lw6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxlY3Q8VERpY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtoYWxscGxhbmVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17aGFuZGxlU2VsZWN0SGFsbHBsYW5lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRIYWxscGxhbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT1cImdyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ3JvdyBmbGV4LWNvbCBpdGVtcy1zdGFydCBzcGFjZS15LTIgbWQ6ZmxleC1yb3cgbWQ6aXRlbXMtY2VudGVyIG1kOnNwYWNlLXgtNCBtZDpzcGFjZS15LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Qv9C+INC/0YDQtdC00L7Qv9C70LDRgtC1Ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8U2VsZWN0PFRQcmVwYXk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtwcmVwYXlzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17c2VsZWN0UHJlcGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRQcmVwYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzTmFtZT1cImdyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiXHJcbmltcG9ydCB7IFJlYWN0Tm9kZSwgbWVtbyB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbnRlcmZhY2UgU2NhbGVzQ29tcG9uZW50QW5pbWF0aW9uUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2NhbGVzQ29tcG9uZW50QW5pbWF0aW9uID0gbWVtbygoeyBjaGlsZHJlbiB9OiBTY2FsZXNDb21wb25lbnRBbmltYXRpb25Qcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VHJhbnNpdGlvblxyXG4gICAgICAgICAgICBzaG93PXt0cnVlfVxyXG4gICAgICAgICAgICBhcz1cImRpdlwiXHJcbiAgICAgICAgICAgIGFwcGVhclxyXG4gICAgICAgICAgICBlbnRlcj1cInRyYW5zaXRpb24tW3RyYW5zZm9ybV9vcGFjaXR5XSBkdXJhdGlvbi01MDAgXCJcclxuICAgICAgICAgICAgZW50ZXJGcm9tPVwic2NhbGUtMTUwIG9wYWNpdHktMFwiXHJcbiAgICAgICAgICAgIGVudGVyVG89XCJzY2FsZS0xIG9wYWNpdHktMTAwXCJcclxuICAgICAgICAgICAgbGVhdmU9XCJ0cmFuc2l0aW9uLVt0cmFuc2Zvcm1fb3BhY2l0eV0gZHVyYXRpb24tNTAwIFwiXHJcbiAgICAgICAgICAgIGxlYXZlRnJvbT1cInNjYWxlLTEgb3BhY2l0eS0xMDBcIlxyXG4gICAgICAgICAgICBsZWF2ZVRvPVwib3BhY2l0eS0wIHNjYWxlLTcwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1RyYW5zaXRpb24+XHJcbiAgICApXHJcbn0pXHJcbiIsImltcG9ydCB7IFVzZXJzSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIlxyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiXHJcbmltcG9ydCB7IG1lbW8gfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBkYXlzSlMgfSBmcm9tIFwic2hhcmVkL2xpYi9hcGlcIlxyXG5pbXBvcnQgeyBTcGluZXJMb2FkZXIgfSBmcm9tIFwic2hhcmVkL3VpL3NwaW5uZXItbG9hZGluZ1wiXHJcbmltcG9ydCB7IGJvb2tpbmdNb2RlbCB9IGZyb20gXCIuLlwiXHJcbmltcG9ydCB7IFRSZXNlcnZlIH0gZnJvbSBcIi4uL2xpYlwiXHJcblxyXG5pbnRlcmZhY2UgUmVzZXJ2ZUNhcmRQcm9wcyB7XHJcbiAgICByZXNlcnZlOiBUUmVzZXJ2ZVxyXG4gICAgb25DbGljayhpZDogVFJlc2VydmVbXCJpZFwiXSk6IHZvaWRcclxuICAgIHNlbGVjdGVkOiBib29sZWFuXHJcbiAgICBjb21wYWN0PzogYm9vbGVhblxyXG59XHJcbmV4cG9ydCBjb25zdCBSZXNlcnZlQ2FyZCA9IG1lbW8oKHsgcmVzZXJ2ZSwgb25DbGljaywgc2VsZWN0ZWQsIGNvbXBhY3QgfTogUmVzZXJ2ZUNhcmRQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgcmVzZXJ2ZS5kZWxldGVkQXQgPT09IFwiXCIgJiYgb25DbGljayhyZXNlcnZlLmlkKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICFjb21wYWN0ID8gYHVybCgvYXNzZXRzL2Jvb2tpbmcvJHtyZXNlcnZlLmhhbGxwbGFuZS5pbWFnZX0pYCA6IFwiXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICBcImdyb3VwICByZWxhdGl2ZSBiZy13aGl0ZSBiZy1jb3ZlciBiZy1uby1yZXBlYXQgYmctb3JpZ2luLWJvcmRlciB0ZXh0LXdoaXRlXCIsXHJcbiAgICAgICAgICAgICAgICByZXNlcnZlLmRlbGV0ZWRBdCAmJiBcIm9wYWNpdHktMzBcIixcclxuICAgICAgICAgICAgICAgIGNvbXBhY3QgPyBcImZsZXgtcm93IHRleHQtZ3JheS05MDBcIiA6IFwiaC1bMjAwcHhdIHctWzIwMHB4XSBmbGV4LWNvbFwiLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQgJiYgXCIgIHNoYWRvdy1ibHVlLTEwMC81MCByaW5nLTIgcmluZy1ibHVlLTUwMC81MCByaW5nLW9mZnNldC0xIHJpbmctb2Zmc2V0LWN1cnJlbnQgXCIsXHJcbiAgICAgICAgICAgICAgICBcInRleHQtbWQgZmxleCAgIGp1c3RpZnktYmV0d2VlbiByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgIHAtNCBmb250LWxpZ2h0IHNoYWRvdy1sZyBkdXJhdGlvbi0xNTAgIGhvdmVyOnNoYWRvdy0yeGxcIlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgeyFjb21wYWN0ICYmIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCAgYmctYmxhY2svMzBcIj48L2Rpdj59XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChcInotMTAgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIiwgY29tcGFjdCAmJiBcIm9yZGVyLTIgc3BhY2UteC0yIFwiKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjb21wYWN0ID8gXCJmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIiA6IFwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTFcIiwgXCJ0ZXh0LXNtXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgdHJ1bmNhdGUgZHJvcC1zaGFkb3cteGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMge2RheXNKUyhOdW1iZXIocmVzZXJ2ZS5zdGFydERhdGUpKS5mb3JtYXQoXCJERC5NTS5ZWVlZIEhIOm1tXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgdHJ1bmNhdGUgZHJvcC1zaGFkb3cteGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINC/0L4ge2RheXNKUyhOdW1iZXIocmVzZXJ2ZS5lbmREYXRlKSkuZm9ybWF0KFwiREQuTU0uWVlZWSBISDptbVwiKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXNlcnZlLnN0YXR1cy52YWx1ZSA9PT0gXCJvdXRPZlNlcnZpZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICA/IFwiYmctcm9zZS02MDAgcmluZy0yIHJpbmctcm9zZS0zMDAgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIDogXCJiZy1ncmVlbi0xMDAgcmluZy0yIHJpbmctZ3JlZW4tMzAwIFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImgtMyB3LTMgYW5pbWF0ZS1wdWxzZSByb3VuZGVkLWZ1bGwgYm9yZGVyLTIgIGJvcmRlci13aGl0ZSAgXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNvbXBhY3QgJiYgXCJvcmRlci0xXCIsIFwiei0xMCBmbGV4IGZsZXgtY29sXCIpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGNvbXBhY3QgJiYgXCJzcGFjZS14LTRcIiwgXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIil9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmaXJzdC1sZXR0ZXI6dXBwZXJjYXNlXCI+e3Jlc2VydmUuaGFsbHBsYW5lLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZnRlcjptbC0xIGFmdGVyOmNvbnRlbnQtWyfRgCddXCI+e3Jlc2VydmUucHJlcGF5fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY29tcGFjdCAmJiBcInNwYWNlLXgtM1wiLCBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gZmlyc3QtbGV0dGVyOnVwcGVyY2FzZSBiZWZvcmU6bXItMSBiZWZvcmU6Y29udGVudC1bJ+KEliddXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZXNlcnZlLnRhYmxlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2Vyc0ljb24gY2xhc3NOYW1lPVwiaC0zIHctMyBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cmVzZXJ2ZS5ndWVzdHN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59KVxyXG5cclxuUmVzZXJ2ZUNhcmQuZGlzcGxheU5hbWUgPSBcIlJlc2VydmVDYXJkXCJcclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBib29raW5nTW9kZWwuc2VsZWN0b3JzLnVzZUlzTG9hZGluZ1Jlc2VydmVzKClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtpc0xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIHotNTAgZmxleCBncm93IGp1c3RpZnktY2VudGVyIGJnLWJsYWNrLzMwIHB0LVsyNSVdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5lckxvYWRlciBjbGFzc05hbWU9XCJoLTIwIHctMjBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgQ2FsZW5kYXJJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiXHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCJcclxuaW1wb3J0IHsgdXNlRXZlbnQsIHVzZUxpc3QgfSBmcm9tIFwiZWZmZWN0b3ItcmVhY3RcIlxyXG5pbXBvcnQgeyBBY3Rpb25QYW5lbCB9IGZyb20gXCJmZWF0dXJlcy9yZXNlcnZlcy1hY3Rpb24tcGFuZWxcIlxyXG5pbXBvcnQgeyBGaWx0ZXJzIH0gZnJvbSBcImZlYXR1cmVzL3Jlc2VydmVzLWZpbHRlcnMvdWlcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgU2NhbGVzQ29tcG9uZW50QW5pbWF0aW9uIH0gZnJvbSBcInNoYXJlZC91aS9zY2FsZS1hbmltYXRpb24td3JhcHBlclwiXHJcbmltcG9ydCB7IFJlc2VydmVDYXJkIH0gZnJvbSBcIi5cIlxyXG5pbXBvcnQgeyBib29raW5nTW9kZWwgfSBmcm9tIFwiLi5cIlxyXG5pbXBvcnQgeyBldmVudHMsIHNlbGVjdG9ycyB9IGZyb20gXCIuLi9tb2RlbFwiXHJcblxyXG5jb25zdCBSZXNlcnZlc0xpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmaWx0ZXJlZE9yZGVycyA9IHNlbGVjdG9ycy51c2VSZXNlcnZlcygpXHJcbiAgICBjb25zdCBjb21wYWN0ID0gYm9va2luZ01vZGVsLnNlbGVjdG9ycy51c2VDb21wYWN0TGlzdCgpXHJcbiAgICBjb25zdCBzZWxlY3RlZFJlc2VydmVzID0gYm9va2luZ01vZGVsLnNlbGVjdG9ycy51c2VTZWxlY3RlZFJlc2VydmVzKClcclxuXHJcbiAgICBjb25zdCBpc0xvYWRpbmcgPSBzZWxlY3RvcnMudXNlSXNMb2FkaW5nUmVzZXJ2ZXMoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdEJvb2tpbmcgPSB1c2VFdmVudChldmVudHMuc2VsZWN0UmVzZXJ2ZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICBjb21wYWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPyBcImZsZXggZmxleC1jb2wgc3BhY2UteS0yXCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwiZ3JpZCBqdXN0aWZ5LWNlbnRlciBnYXAtNCBweS0yIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIG1kOmp1c3RpZnktc3RhcnQgbWQ6Z2FwLTMgbGc6Z3JpZC1jb2xzLTUgeGw6Z3JpZC1jb2xzLTZcIlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgey8qIHt1c2VMaXN0KGJvb2tpbmdNb2RlbC4kZmlsdGVyZWRSZXNlcnZlcywge1xyXG4gICAgICAgICAgICAgICAga2V5czogW2lzTG9hZGluZywgZmlsdGVyZWRPcmRlcnMsIHNlbGVjdGVkUmVzZXJ2ZXNdLFxyXG4gICAgICAgICAgICAgICAgZm46IChyZXNlcnZlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNjYWxlc0NvbXBvbmVudEFuaW1hdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlc2VydmVDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNlcnZlPXtyZXNlcnZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0Qm9va2luZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhY3Q9e2NvbXBhY3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRSZXNlcnZlcy5zb21lKChpZCkgPT4gaWQgPT09IHJlc2VydmUuaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2NhbGVzQ29tcG9uZW50QW5pbWF0aW9uPlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgfSl9ICovfVxyXG4gICAgICAgICAgICB7ZmlsdGVyZWRPcmRlcnMubWFwKChyZXNlcnZlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8U2NhbGVzQ29tcG9uZW50QW5pbWF0aW9uIGtleT17cmVzZXJ2ZS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlc2VydmVDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVzZXJ2ZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXJ2ZT17cmVzZXJ2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VsZWN0Qm9va2luZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFjdD17Y29tcGFjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkUmVzZXJ2ZXMuc29tZSgoaWQpID0+IGlkID09PSByZXNlcnZlLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9TY2FsZXNDb21wb25lbnRBbmltYXRpb24+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUmVzZXJ2ZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZXNlcnZlc0NvdW50ID0gc2VsZWN0b3JzLnVzZVJlc2VydmVzQ291bnQoKVxyXG5cclxuICAgIGNvbnN0IGZpbHRlcmVkUmVzZXJ2ZXNDb3VudCA9IHNlbGVjdG9ycy51c2VGaWx0ZXJlZFJlc2VydmVzQ291bnQoKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTIgYmctZ3JheS0yMDAgcC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiIW15LTQgdGV4dC0yeGwgZm9udC1ib2xkIGZpcnN0LWxldHRlcjp1cHBlcmNhc2Ugc206dGV4dC14bFwiPtGB0L/QuNGB0L7QuiDRgNC10LfQtdGA0LLQvtCyPC9oND5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmaWx0ZXJlZFJlc2VydmVzQ291bnR9IC8ge3Jlc2VydmVzQ291bnR9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXJJY29uIGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBzcGFjZS15LTIgdGV4dC1iYXNlIHNtOnRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgIDxBY3Rpb25QYW5lbCAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxGaWx0ZXJzIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWRSZXNlcnZlc0NvdW50ID09PSAwICYmIDxzcGFuIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciB0ZXh0LTR4bCBcIj7QsdGA0L7QvdC10Lkg0L3QtdGCPC9zcGFuPn1cclxuICAgICAgICAgICAgPFJlc2VydmVzTGlzdCAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIClcclxufVxyXG4iLCJpbXBvcnQgeyBtZW1vLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuaW1wb3J0IHsgUmVzZXJ2ZXMgfSBmcm9tIFwiZW50aXRpZXMvYm9va2luZy91aS9yZXNlcnZlcy1saXN0XCJcclxuXHJcbmltcG9ydCB7IHVzZUV2ZW50IH0gZnJvbSBcImVmZmVjdG9yLXJlYWN0XCJcclxuaW1wb3J0IHsgYm9va2luZ01vZGVsIH0gZnJvbSBcImVudGl0aWVzL2Jvb2tpbmdcIlxyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tIFwiZW50aXRpZXMvYm9va2luZy91aVwiXHJcbmltcG9ydCB7IE5hdkxpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcblxyXG5leHBvcnQgY29uc3QgQm9va2luZ1BhZ2UgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0UGFnZSA9IHVzZUV2ZW50KGJvb2tpbmdNb2RlbC5ldmVudHMuaW5pdFBhZ2UpXHJcbiAgICBjb25zdCBwYWdlTW91bnRlZCA9IGJvb2tpbmdNb2RlbC5zZWxlY3RvcnMudXNlUGFnZU1vdW50ZWQoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5pdFBhZ2UoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB6LTUwIGZsZXggZ3JvdyBmbGV4LWNvbCBzcGFjZS15LTIgcHgtNCBweS0yIGZvbnQtc2FucyBtZDpzcGFjZS15LTQgbWQ6cHgtMTAgbWQ6cHktNVwiPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9ib29raW5nXCI+0JPQu9Cw0LLQvdCw0Y88L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICA8TmF2TGluayB0bz1cIi9ib29raW5nL3NjaGVkdWxsZXJcIj7QoNCw0YHQv9C40YHQsNC90LjQtTwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgIHsvKiB7cGFnZU1vdW50ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkIGJnLXNsYXRlLTEwMCBwLTQgbWQ6cC04IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYi00IHRleHQteGwgZm9udC1zZW1pYm9sZCBzbTp0ZXh0LWJhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQm9va2luZyBDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgIGdhcC0yIG1kOmdyaWQtY29scy0yIG1kOmdhcC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNlcnZlUHJldmlldyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVzZXJ2ZUZvcm0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgKX0gKi99XHJcblxyXG4gICAgICAgICAgICA8UmVzZXJ2ZXMgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuaW50ZXJmYWNlIENvZGVHZW5lcmF0b3JQcm9wcyB7XHJcbiAgICBmaWx0ZXJlZGhhbGxQbGFuZXNJZDogbnVtYmVyXHJcbiAgICBwcmVwYXlzSWQ6IG51bWJlclxyXG4gICAgLy8gcGFyYW1zPzpBcnJheTxzdHJpbmc+XHJcbn1cclxuLy9yZWZhY3RvcmluZyBuZWVkZGVkIHRvIGFjY2VwdCBwYXJhbXMgYXJyYXlcclxuY29uc3QgQ29kZUdlbmVyYXRvciA9IG1lbW8oKHsgZmlsdGVyZWRoYWxsUGxhbmVzSWQsIHByZXBheXNJZCB9OiBDb2RlR2VuZXJhdG9yUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IFtcclxuICAgICAgICBmaWx0ZXJlZGhhbGxQbGFuZXNJZCAhPT0gMCAmJiBgaGFsbElkPSR7ZmlsdGVyZWRoYWxsUGxhbmVzSWR9YCxcclxuICAgICAgICBwcmVwYXlzSWQgIT09IDAgJiYgYHByZXBheXNJZD0ke3ByZXBheXNJZH1gLFxyXG4gICAgXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTQgYmctdGVhbC02MDAgcHgtNCBweS04XCI+XHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC13aGl0ZSBzbTp0ZXh0LXhsXCI+YXBpIHF1ZXJ5IGdlbmVyYXRvcjwvaDQ+XHJcblxyXG4gICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cInJvdW5kZWQgYmctZ3JheS0zMDAgcC00IHRleHQtc21cIj5cclxuICAgICAgICAgICAgICAgIDxwPtC00LvRjyDQv9C+0LvRg9GH0LXQvdC40Y8g0LTQsNC90L3Ri9GFINCy0YvQv9C+0LvQvdC40Lwg0LfQsNC/0YDQvtGBPC9wPlxyXG4gICAgICAgICAgICAgICAgPGNvZGU+R0VUOiAvYXBpL29yZGVycz97cGFyYW1zLmpvaW4oXCImXCIpfTwvY29kZT5cclxuICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59KVxyXG5cclxuQ29kZUdlbmVyYXRvci5kaXNwbGF5TmFtZSA9IFwiQ29kZUdlbmVyYXRvclwiXHJcbiIsImltcG9ydCB0eXBlIHsgVERheU9mV2VlayB9IGZyb20gXCIuL21vZGVsc1wiXHJcblxyXG5leHBvcnQgY29uc3QgZGF5czogQXJyYXk8VERheU9mV2Vlaz4gPSBbXHJcbiAgICB7IGlkOiAxLCBkYXlPZldlZWs6IDEgfSxcclxuICAgIHsgaWQ6IDIsIGRheU9mV2VlazogMiB9LFxyXG4gICAgeyBpZDogMywgZGF5T2ZXZWVrOiAzIH0sXHJcbiAgICB7IGlkOiA0LCBkYXlPZldlZWs6IDQgfSxcclxuICAgIHsgaWQ6IDUsIGRheU9mV2VlazogNSB9LFxyXG4gICAgeyBpZDogNiwgZGF5T2ZXZWVrOiA2IH0sXHJcbiAgICB7IGlkOiA3LCBkYXlPZldlZWs6IDcgfSxcclxuXVxyXG4iLCJpbXBvcnQgeyBhdHRhY2ggfSBmcm9tIFwiZWZmZWN0b3JcIlxyXG5pbXBvcnQgeyBCb29raW5nQVBJIH0gZnJvbSBcInNoYXJlZC9saWIvYXBpXCJcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUYWJsZXNGeCA9IGF0dGFjaDxudW1iZXIsIHR5cGVvZiBCb29raW5nQVBJLmdldFRhYmxlc0Z4Pih7XHJcbiAgICBlZmZlY3Q6IEJvb2tpbmdBUEkuZ2V0VGFibGVzRngsXHJcbiAgICBtYXBQYXJhbXM6IChpZCkgPT4gaWQsXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SGFsbHBsYW5lc0Z4ID0gYXR0YWNoKHtcclxuICAgIGVmZmVjdDogQm9va2luZ0FQSS5nZXRIYWxscGxhbmVzRngsXHJcbn0pXHJcbiIsImV4cG9ydCAqIGZyb20gXCIuL21vZGVsc1wiXHJcbmV4cG9ydCAqIGZyb20gXCIuL2hlbHBlcnNcIlxyXG5leHBvcnQgKiBhcyBBUEkgZnJvbSBcIi4vYXBpXCJcclxuIiwiaW1wb3J0IHsgY29tYmluZSwgY3JlYXRlRXZlbnQsIGNyZWF0ZVN0b3JlLCBzYW1wbGUgfSBmcm9tIFwiZWZmZWN0b3JcIlxyXG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gXCJlZmZlY3Rvci1yZWFjdFwiXHJcbmltcG9ydCB7IGJvb2tpbmdNb2RlbCB9IGZyb20gXCJlbnRpdGllcy9ib29raW5nXCJcclxuaW1wb3J0IHsgVEhhbGxwbGFuZSwgVFRhYmxlIH0gZnJvbSBcImVudGl0aWVzL2Jvb2tpbmcvbGliXCJcclxuaW1wb3J0IHsgZGF5c0pTIH0gZnJvbSBcInNoYXJlZC9saWIvYXBpXCJcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL2xpYlwiXHJcblxyXG5jb25zdCBzZXRDdXJyZW50V2VlayA9IGNyZWF0ZUV2ZW50PG51bWJlcj4oKVxyXG5jb25zdCAkY3VycmVudFdlZWsgPSBjcmVhdGVTdG9yZTxudW1iZXI+KGRheXNKUygpLndlZWsoKSkub24oXHJcbiAgICBzZXRDdXJyZW50V2VlayxcclxuICAgIChfLCBwYXlsb2FkKSA9PiBwYXlsb2FkXHJcbilcclxuXHJcbmNvbnN0IHByZXZXZWVrQ2xpY2tlZCA9IGNyZWF0ZUV2ZW50KClcclxuXHJcbnNhbXBsZSh7XHJcbiAgICBjbG9jazogcHJldldlZWtDbGlja2VkLFxyXG4gICAgc291cmNlOiAkY3VycmVudFdlZWssXHJcblxyXG4gICAgZm46ICh3ZWVrLCBfKSA9PiB7XHJcbiAgICAgICAgaWYgKHdlZWsgPiAwKSByZXR1cm4gd2VlayAtIDFcclxuICAgICAgICByZXR1cm4gNTNcclxuICAgIH0sXHJcbiAgICB0YXJnZXQ6ICRjdXJyZW50V2VlayxcclxufSlcclxuY29uc3QgbmV4dFdlZWtDbGlja2VkID0gY3JlYXRlRXZlbnQoKVxyXG5cclxuc2FtcGxlKHtcclxuICAgIGNsb2NrOiBuZXh0V2Vla0NsaWNrZWQsXHJcbiAgICBzb3VyY2U6ICRjdXJyZW50V2VlayxcclxuXHJcbiAgICBmbjogKHdlZWssIF8pID0+IHtcclxuICAgICAgICBpZiAod2VlayA9PT0gNTMpIHJldHVybiAwXHJcbiAgICAgICAgcmV0dXJuIHdlZWsgKyAxXHJcbiAgICB9LFxyXG4gICAgdGFyZ2V0OiAkY3VycmVudFdlZWssXHJcbn0pXHJcblxyXG5jb25zdCBnZXRIYWxsUGxhbmVzID0gY3JlYXRlRXZlbnQoKVxyXG5cclxuc2FtcGxlKHtcclxuICAgIGNsb2NrOiBnZXRIYWxsUGxhbmVzLFxyXG4gICAgdGFyZ2V0OiBBUEkuZ2V0SGFsbHBsYW5lc0Z4LFxyXG59KVxyXG5cclxuY29uc3QgJGhhbGxwbGFuZXMgPSBjcmVhdGVTdG9yZTxBcnJheTxUSGFsbHBsYW5lPj4oW10pXHJcbiAgICAub24oQVBJLmdldEhhbGxwbGFuZXNGeC5kb25lRGF0YSwgKF8sIHJlcykgPT4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgIG5hbWU6IFwi0LHQtdC3INGE0LjQu9GM0YLRgNCw0YbQuNC4XCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC4uLnJlcy5kYXRhWzBdLFxyXG4gICAgXSlcclxuICAgIC5vbihib29raW5nTW9kZWwuJGhhbGxwbGFuZXMsIChfLCBoYWxscykgPT4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICAgIG5hbWU6IFwi0LHQtdC3INGE0LjQu9GM0YLRgNCw0YbQuNC4XCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIlwiLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIC4uLmhhbGxzLFxyXG4gICAgXSlcclxuXHJcbmNvbnN0IHNlbGVjdEhhbGxwbGFuZSA9IGNyZWF0ZUV2ZW50PFRIYWxscGxhbmU+KClcclxuY29uc3QgJHNlbGVjdGVkSGFsbHBsYW5lID0gJGhhbGxwbGFuZXNcclxuICAgIC5tYXAoKGhwKSA9PiBocFswXSlcclxuICAgIC5vbihzZWxlY3RIYWxscGxhbmUsIChfLCBwYXlsb2FkKSA9PiBwYXlsb2FkKVxyXG5cclxuY29uc3QgZ2V0VGFibGVzID0gY3JlYXRlRXZlbnQ8bnVtYmVyPigpXHJcblxyXG5zYW1wbGUoe1xyXG4gICAgY2xvY2s6ICRzZWxlY3RlZEhhbGxwbGFuZSxcclxuICAgIGZuOiAoc2VsZWN0ZWQpID0+IHNlbGVjdGVkLmlkLFxyXG4gICAgdGFyZ2V0OiBnZXRUYWJsZXMsXHJcbn0pXHJcblxyXG5zYW1wbGUoe1xyXG4gICAgY2xvY2s6IGdldFRhYmxlcyxcclxuICAgIGZuOiAoaWQpID0+IGlkLFxyXG4gICAgdGFyZ2V0OiBBUEkuZ2V0VGFibGVzRngsXHJcbn0pXHJcblxyXG5jb25zdCAkdGFibGVzID0gY3JlYXRlU3RvcmU8QXJyYXk8VFRhYmxlPj4oW10pLm9uKFxyXG4gICAgQVBJLmdldFRhYmxlc0Z4LmRvbmVEYXRhLFxyXG4gICAgKF8sIHJlcykgPT4gcmVzLmRhdGFbMF1cclxuKVxyXG5cclxuY29uc3QgJHJlY29yZHMgPSBjb21iaW5lKCRjdXJyZW50V2VlaywgJHRhYmxlcywgKGN1cnJlbnRXZWVrLCB0YWJsZXMpID0+IHtcclxuICAgIHJldHVybiB0YWJsZXMubWFwKCh0YWJsZSkgPT4gKHtcclxuICAgICAgICAuLi50YWJsZSxcclxuICAgICAgICByZXNlcnZlczogdGFibGUucmVzZXJ2ZXMuZmlsdGVyKFxyXG4gICAgICAgICAgICAocmVzZXJ2ZSkgPT5cclxuICAgICAgICAgICAgICAgIGRheXNKUyhOdW1iZXIocmVzZXJ2ZS5zdGFydERhdGUpKS53ZWVrKCkgPT09IGN1cnJlbnRXZWVrXHJcbiAgICAgICAgKSxcclxuICAgIH0pKVxyXG59KVxyXG5cclxuY29uc3QgdXNlUmVjb3JkcyA9ICgpID0+IHVzZVN0b3JlKCRyZWNvcmRzKVxyXG5jb25zdCB1c2VIYWxscGxhbmVzID0gKCkgPT4gdXNlU3RvcmUoJGhhbGxwbGFuZXMpXHJcbmNvbnN0IHVzZUN1cnJlbnRXZWVrID0gKCkgPT4gdXNlU3RvcmUoJGN1cnJlbnRXZWVrKVxyXG5jb25zdCB1c2VTZWxlY3RlZEhhbGxwbGFuZSA9ICgpID0+IHVzZVN0b3JlKCRzZWxlY3RlZEhhbGxwbGFuZSlcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RvcnMgPSB7XHJcbiAgICB1c2VSZWNvcmRzLFxyXG4gICAgdXNlSGFsbHBsYW5lcyxcclxuICAgIHVzZUN1cnJlbnRXZWVrLFxyXG4gICAgdXNlU2VsZWN0ZWRIYWxscGxhbmUsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudHMgPSB7XHJcbiAgICBnZXRIYWxsUGxhbmVzLFxyXG4gICAgc2VsZWN0SGFsbHBsYW5lLFxyXG4gICAgbmV4dFdlZWtDbGlja2VkLFxyXG4gICAgcHJldldlZWtDbGlja2VkLFxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBDYWxlbmRhckljb24sXHJcbiAgICBDaGV2cm9uTGVmdEljb24sXHJcbiAgICBDaGV2cm9uUmlnaHRJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIlxyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiXHJcbmltcG9ydCB7IG1lbW8sIHVzZUVmZmVjdCwgdXNlTWVtbywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwic2hhcmVkL3VpL3NlbGVjdFwiXHJcbmltcG9ydCB7IFRIYWxscGxhbmUsIFRSZXNlcnZlLCBUVGFibGUgfSBmcm9tIFwiZW50aXRpZXMvYm9va2luZy9saWJcIlxyXG5cclxuaW1wb3J0IHsgZGF5cyB9IGZyb20gXCIuLi9saWJcIlxyXG5pbXBvcnQgeyBldmVudHMsIHNlbGVjdG9ycyB9IGZyb20gXCIuLi9tb2RlbFwiXHJcbmltcG9ydCB7IHVzZUV2ZW50IH0gZnJvbSBcImVmZmVjdG9yLXJlYWN0XCJcclxuaW1wb3J0IHsgZGF5c0pTIH0gZnJvbSBcInNoYXJlZC9saWIvYXBpXCJcclxuXHJcbmV4cG9ydCBjb25zdCBSZXNlcnZlc1NoZWR1bGVyID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFdlZWsgPSBzZWxlY3RvcnMudXNlQ3VycmVudFdlZWsoKVxyXG5cclxuICAgIGNvbnN0IHJlY29yZHMgPSBzZWxlY3RvcnMudXNlUmVjb3JkcygpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvcncgZmxleCBmbGV4LWNvbCBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciAgXCI+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBmaXJzdC1sZXR0ZXI6dXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0YDQsNGB0L/QuNGB0LDQvdC40LVcclxuICAgICAgICAgICAgICAgIDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXJJY29uIGNsYXNzTmFtZT1cIm14LTIgaC02IHctNlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICAgICAgICA8V2Vla1NlbGVjdG9yIC8+XHJcbiAgICAgICAgICAgICAgICA8SGFsbHBsYW5lc0ZpbHRlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgb3ZlcmZsb3cteC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlci1jb2xsYXBzZSBvdmVyZmxvdy1hdXRvIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1zbGF0ZS00MDAgdGV4dC1zbSBmb250LW5vcm1hbCB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgYmctc2xhdGUtMzAwIHAtMiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc3BhY2UteS0xIGRpdmlkZS15IGRpdmlkZS1ncmF5LTkwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7QtNC90Lgg0L3QtdC00LXQu9C4PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7RgdGC0L7Qu9GLPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXlzLm1hcCgoZGF5KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI9e2RheS5kYXlPZldlZWt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGF5LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWVrPXtjdXJyZW50V2Vla31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWNvcmRzLm1hcCgocmVjb3JkKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FsZW5kYXJSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4ucmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cmVjb3JkLmlkICsgcmVjb3JkLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0Zm9vdD48L3Rmb290PlxyXG4gICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuaW50ZXJmYWNlIENhbGVuZGFyUm93UHJvcHMgZXh0ZW5kcyBUVGFibGUge31cclxuXHJcbmNvbnN0IENlbGwgPSBtZW1vKCh7IHJlc2VydmVzIH06IHsgcmVzZXJ2ZXM6IEFycmF5PFRSZXNlcnZlW1wiaWRcIl0+IH0pID0+IHtcclxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc2VydmVzLmxlbmd0aCkgY29uc29sZS5sb2cocmVzZXJ2ZXMpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dGRcclxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgYmctZ3JlZW4tNjAwIHB5LTIgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJcIj57cmVzZXJ2ZXMubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICA8L3RkPlxyXG4gICAgKVxyXG59KVxyXG5DZWxsLmRpc3BsYXlOYW1lID0gXCJDZWxsXCJcclxuXHJcbmNvbnN0IENhbGVuZGFyUm93ID0gbWVtbygoeyByZXNlcnZlcywgaWQsIG5hbWUgfTogQ2FsZW5kYXJSb3dQcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dHIga2V5PXtpZH0+XHJcbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCBiZy1ncmF5LTIwMCBweS0yIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAge2RheXMubWFwKChkYXkpID0+XHJcbiAgICAgICAgICAgICAgICByZXNlcnZlcy5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgIChyZXNlcnZlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXlzSlMoTnVtYmVyKHJlc2VydmUuc3RhcnREYXRlKSkuZGF5KCkgPT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheS5kYXlPZldlZWtcclxuICAgICAgICAgICAgICAgICkgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtkYXkuZGF5T2ZXZWVrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNlcnZlcz17cmVzZXJ2ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc2VydmUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheXNKUyhOdW1iZXIocmVzZXJ2ZS5zdGFydERhdGUpKS5kYXkoKSA9PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF5LmRheU9mV2Vla1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoaXRlbSkgPT4gaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17ZGF5LmRheU9mV2Vla31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgYmctZ3JheS0yMDAgcHktMiB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktOTAwXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvdHI+XHJcbiAgICApXHJcbn0pXHJcbkNhbGVuZGFyUm93LmRpc3BsYXlOYW1lID0gXCJDYWxlbmRhclJvd1wiXHJcblxyXG5pbnRlcmZhY2UgRGF5UHJvcHMge1xyXG4gICAgbnVtYmVyOiBudW1iZXJcclxuICAgIHdlZWs6IG51bWJlclxyXG59XHJcbmNvbnN0IERheSA9IG1lbW8oKHsgbnVtYmVyLCB3ZWVrIH06IERheVByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbY3VycmVudERheSwgc3RyaW5naWZ5RGF5XSA9IHVzZUN1cnJlbnREYXkobnVtYmVyLCB3ZWVrKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRoXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChcclxuICAgICAgICAgICAgICAgIGN1cnJlbnREYXkgJiYgXCJiZy1ncmVlbi02MDAgdGV4dC13aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgXCJib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCBwLTIgXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuPntzdHJpbmdpZnlEYXl9PC9zcGFuPlxyXG4gICAgICAgIDwvdGg+XHJcbiAgICApXHJcbn0pXHJcblxyXG5EYXkuZGlzcGxheU5hbWUgPSBcIkRheVwiXHJcblxyXG5jb25zdCB1c2VDdXJyZW50RGF5ID0gKGRheW9mV2VlazogbnVtYmVyLCB3ZWVrTnVtYmVyOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IFtpc0N1cnJlbnREYXksIHNldElzQ3VycmVudERheV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtzdHJpbmdpZnlEYXksIHNldFN0cmluZ2lmeURheV0gPSB1c2VTdGF0ZShcIlwiKVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRJc0N1cnJlbnREYXkoXHJcbiAgICAgICAgICAgIGRheXNKUygpLndlZWsod2Vla051bWJlcikuZGF5KGRheW9mV2VlaykuZm9ybWF0KFwiREQuTU0uWVlcIikgPT09XHJcbiAgICAgICAgICAgICAgICBkYXlzSlMoKS5mb3JtYXQoXCJERC5NTS5ZWVwiKVxyXG4gICAgICAgIClcclxuICAgICAgICBzZXRTdHJpbmdpZnlEYXkoXHJcbiAgICAgICAgICAgIGRheXNKUygpLndlZWsod2Vla051bWJlcikuZGF5KGRheW9mV2VlaykuZm9ybWF0KFwiZGQgREQuTU0uWVlcIilcclxuICAgICAgICApXHJcbiAgICB9LCBbZGF5b2ZXZWVrLCB3ZWVrTnVtYmVyXSlcclxuXHJcbiAgICByZXR1cm4gdXNlTWVtbyhcclxuICAgICAgICAoKSA9PiBbaXNDdXJyZW50RGF5LCBzdHJpbmdpZnlEYXldLFxyXG4gICAgICAgIFtpc0N1cnJlbnREYXksIHN0cmluZ2lmeURheV1cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgV2Vla1NlbGVjdG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY3VycmVudFdlZWsgPSBzZWxlY3RvcnMudXNlQ3VycmVudFdlZWsoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVByZXZXZWVrQ2xpY2tlZCA9IHVzZUV2ZW50KGV2ZW50cy5wcmV2V2Vla0NsaWNrZWQpXHJcbiAgICBjb25zdCBoYW5kbGVOZXh0V2Vla0NsaWNrZWQgPSB1c2VFdmVudChldmVudHMubmV4dFdlZWtDbGlja2VkKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBzbTpzZWxmLWVuZFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctZ3JheS0yMDAgcC0yIHNoYWRvdy1zbSBkdXJhdGlvbi0xNTAgaG92ZXI6YmctYmx1ZS02MDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpzaGFkb3ctbWQgYWN0aXZlOm9wYWNpdHktNzVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUHJldldlZWtDbGlja2VkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2hldnJvbkxlZnRJY29uIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgIHJvdW5kZWQgYm9yZGVyIHB5LTIgcHgtNCB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FsZW5kYXJJY29uIGNsYXNzTmFtZT1cIm1yLTIgaC02IHctNlwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiIGFmdGVyOm14LTEgYWZ0ZXI6Y29udGVudC1bJy0nXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXlzSlMoKS53ZWVrKGN1cnJlbnRXZWVrKS5kYXkoMCkuZm9ybWF0KFwiREQuTU0uWVlcIil9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJteC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RheXNKUygpLndlZWsoY3VycmVudFdlZWspLmRheSg2KS5mb3JtYXQoXCJERC5NTS5ZWVwiKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgYmctZ3JheS0yMDAgcC0yIHNoYWRvdy1zbSBkdXJhdGlvbi0xNTAgaG92ZXI6YmctYmx1ZS02MDAgaG92ZXI6dGV4dC13aGl0ZSBob3ZlcjpzaGFkb3ctbWQgYWN0aXZlOm9wYWNpdHktNzVcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dFdlZWtDbGlja2VkfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q2hldnJvblJpZ2h0SWNvbiBjbGFzc05hbWU9XCJoLTQgdy00XCIgLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IEhhbGxwbGFuZXNGaWx0ZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoYWxscGxhbmVzID0gc2VsZWN0b3JzLnVzZUhhbGxwbGFuZXMoKVxyXG4gICAgY29uc3Qgc2VsZWN0ZWRIYWxscGxhbmUgPSBzZWxlY3RvcnMudXNlU2VsZWN0ZWRIYWxscGxhbmUoKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdEhhbGxwbGFuZSA9IHVzZUV2ZW50KGV2ZW50cy5zZWxlY3RIYWxscGxhbmUpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgdGV4dC1iYXNlIHNtOnRleHQtc21cIj5cclxuICAgICAgICAgICAgPHNwYW4+0L/QviDQt9Cw0LvQsNC8Ojwvc3Bhbj5cclxuICAgICAgICAgICAgPFNlbGVjdDxUSGFsbHBsYW5lPlxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2hhbGxwbGFuZXN9XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdD17aGFuZGxlU2VsZWN0SGFsbHBsYW5lfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkSGFsbHBsYW5lfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3NOYW1lPVwiZ3Jvd1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcbmltcG9ydCB7IFJlc2VydmVzU2hlZHVsZXIgfSBmcm9tIFwiZmVhdHVyZXMvcmVzZXJ2ZXMtc2hlZHVsbGVyL3VpXCJcclxuaW1wb3J0IHsgdXNlRXZlbnQgfSBmcm9tIFwiZWZmZWN0b3ItcmVhY3RcIlxyXG5pbXBvcnQgeyBib29raW5nTW9kZWwgfSBmcm9tIFwiZW50aXRpZXMvYm9va2luZ1wiXHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gXCJlbnRpdGllcy9ib29raW5nL3VpXCJcclxuaW1wb3J0IHsgTmF2TGluaywgdXNlTG9jYXRpb24sIG1hdGNoUGF0aCB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFNjaGVkdWxsZXJQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW5pdFBhZ2UgPSB1c2VFdmVudChib29raW5nTW9kZWwuZXZlbnRzLmluaXRQYWdlKVxyXG4gICAgY29uc3QgcGFnZU1vdW50ZWQgPSBib29raW5nTW9kZWwuc2VsZWN0b3JzLnVzZVBhZ2VNb3VudGVkKClcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5pdFBhZ2UoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXHJcblxyXG4gICAgY29uc3QgbGlua3MgPSB1c2VNZW1vKCgpID0+IGxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KFwiL1wiKSwgW2xvY2F0aW9uLnBhdGhuYW1lXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHotNTAgZmxleCBncm93IGZsZXgtY29sIHNwYWNlLXktMiBweC00IHB5LTIgZm9udC1zYW5zIG1kOnNwYWNlLXktNCBtZDpweC0xMCBtZDpweS01XCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobGluaywgaWR4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpZHh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtgLyR7bGlua31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHggIT09IGxpbmtzLmxlbmd0aCAtIDEgJiYgXCJhZnRlcjpteC00IGFmdGVyOmNvbnRlbnQtWyc+J11cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoUGF0aChsb2NhdGlvbi5wYXRobmFtZSwgbGluaykgJiYgXCJ1bmRlcmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lkeCA9PT0gMCA/IFwiSG9tZVwiIDogbGlua31cclxuICAgICAgICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9uYXY+XHJcblxyXG4gICAgICAgICAgICA8TG9hZGVyIC8+XHJcblxyXG4gICAgICAgICAgICB7cGFnZU1vdW50ZWQgJiYgPFJlc2VydmVzU2hlZHVsZXIgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgQXV0aEZvcm0sIGF1dGhNb2RlbCwgUmVnaXN0cmF0aW9uRm9ybSB9IGZyb20gXCJlbnRpdGllcy9hdXRoXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IExvY2F0aW9uLCBOYXZpZ2F0ZSwgdXNlTG9jYXRpb24sIHVzZU5hdmlnYXRlIH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaXNBdXRoID0gYXV0aE1vZGVsLnNlbGVjdG9ycy51c2VJc0F1dGgoKVxyXG4gICAgY29uc3QgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpXHJcbiAgICBjb25zdCByZWdpc3RyYXRpb25Db21saXRlZCA9IGF1dGhNb2RlbC5zZWxlY3RvcnMudXNlUmVnaXN0cmF0aW9uQ29tbGl0ZWQoKVxyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uOiBMb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcclxuICAgIC8vQHRzLWlnbm9yZVxyXG4gICAgY29uc3QgZnJvbVBhZ2UgPSBsb2NhdGlvbi5zdGF0ZT8uZnJvbT8ucGF0aG5hbWUgfHwgXCIvXCJcclxuXHJcbiAgICBjb25zdCBbd2luZCwgc2V0V2luZF0gPSB1c2VTdGF0ZShcImF1dGhcIilcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZXRXaW5kb3cgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmQgPT09IFwiYXV0aFwiKSByZXR1cm4gc2V0V2luZChcInJlZ1wiKVxyXG5cclxuICAgICAgICByZXR1cm4gc2V0V2luZChcImF1dGhcIilcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBdXRoKSByZXR1cm4gPE5hdmlnYXRlIHRvPXtmcm9tUGFnZX0gcmVwbGFjZSAvPlxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdyb3cgZmxleC1jb2wgc3BhY2UteS0yIHB4LTQgcHktMiBmb250LXNhbnMgbWQ6c3BhY2UteS00IG1kOnB4LTEwIG1kOnB5LTVcIj5cclxuICAgICAgICAgICAge2Zyb21QYWdlfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNldFdpbmRvd30+dG9nZ2xlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS00IHJvdW5kZWQtbGcgYmctZ3JheS0yMDAgcC00XCI+XHJcbiAgICAgICAgICAgICAgICB7cmVnaXN0cmF0aW9uQ29tbGl0ZWQgPyA8ZGl2PtC+0Lkg0LrRgNCw0YHQsNCy0LAhPC9kaXY+IDogd2luZCA9PT0gXCJhdXRoXCIgPyA8QXV0aEZvcm0gLz4gOiA8UmVnaXN0cmF0aW9uRm9ybSAvPn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCJcclxuXHJcbmV4cG9ydCBjb25zdCBOb3RGb3VuZFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZsZXggZ3JvdyBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgc3BhY2UteS00IHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIGZvbnQtYm9sZCBmaXJzdC1sZXR0ZXI6dXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICDRgdGC0YDQsNC90LjRhtCwINC90LUg0L3QsNC50LTQtdC90LBcclxuICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIHRvPVwiL1wiXHJcbiAgICAgICAgICAgICAgICByZXBsYWNlXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIGJnLWdyYXktMjAwIHB4LTEwIHB5LTUgc2hhZG93LWxnIGR1cmF0aW9uLTE1MCBmaXJzdC1sZXR0ZXI6dXBwZXJjYXNlIGhvdmVyOmJnLWdyZWVuLTYwMCBob3Zlcjp0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg0LTQvtC80LDRiNC90Y/RjyDRgdGC0YDQsNC90LjRhtCwXHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApXHJcbn1cclxuIiwiaW1wb3J0IHsgUGVuY2lsSWNvbiwgU2F2ZUljb24sIFVzZXJDaXJjbGVJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiXHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCJcclxuaW1wb3J0IHsgdXNlRXZlbnQgfSBmcm9tIFwiZWZmZWN0b3ItcmVhY3RcIlxyXG5pbXBvcnQgeyBhdXRoTW9kZWwgfSBmcm9tIFwiZW50aXRpZXMvYXV0aFwiXHJcbmltcG9ydCB7IElucHV0SFRNTEF0dHJpYnV0ZXMsIG1lbW8sIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVQYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IGF1dGhNb2RlbC5zZWxlY3RvcnMudXNlVXNlcigpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2F2ZVVzZXIgPSB1c2VFdmVudChhdXRoTW9kZWwuZXZlbnRzLm1vZGlmeVVzZXIpXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VVc2VyID0gdXNlRXZlbnQoYXV0aE1vZGVsLmV2ZW50cy5jaGFuZ2VVc2VyVmFsdWVzKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNhdmVDbGlja2VkID0gdXNlQ2FsbGJhY2soKCkgPT4gaGFuZGxlU2F2ZVVzZXIoKSwgW10pXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soaGFuZGxlQ2hhbmdlVXNlciwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmbGV4IGdyb3cgZmxleC1jb2wgaXRlbXMtY2VudGVyIHB4LTEwIHB5LTVcIj5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZ3JvdyBmbGV4LWNvbCBpdGVtcy1zdGFydCBzcGFjZS15LTQgcm91bmRlZC1sZyBiZy1ncmF5LTEwMCBweC0xMFwiXHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJDaXJjbGVJY29uIGNsYXNzTmFtZT1cImgtNDAgdy00MCBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlciEubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC00eGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TYXZlQ2xpY2tlZD17aGFuZGxlU2F2ZUNsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFVzZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlciEucm9sZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyb2xlW25hbWVdXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2F2ZUNsaWNrZWQ9e2hhbmRsZVNhdmVDbGlja2VkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxVc2VySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXIhLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbGlnaHQgaXRhbGljXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2F2ZUNsaWNrZWQ9e2hhbmRsZVNhdmVDbGlja2VkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxVc2VySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyIS5wYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25TYXZlQ2xpY2tlZD17aGFuZGxlU2F2ZUNsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG59XHJcblxyXG5pbnRlcmZhY2UgVXNlcklucHV0UHJvcHMgZXh0ZW5kcyBJbnB1dEhUTUxBdHRyaWJ1dGVzPEhUTUxJbnB1dEVsZW1lbnQ+IHtcclxuICAgIG9uU2F2ZUNsaWNrZWQoKTogdm9pZFxyXG59XHJcbmNvbnN0IFVzZXJJbnB1dCA9IG1lbW8oXHJcbiAgICAoeyBvblNhdmVDbGlja2VkLCAuLi5wcm9wcyB9OiBVc2VySW5wdXRQcm9wcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IFtkaXNhYmxlZEZpZWxkLCBzZXREaXNhYmxlZEZpZWxkXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICAgICAgY29uc3QgcmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsPihudWxsKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlbmRlciwgXCIsIHByb3BzPy5uYW1lKVxyXG5cclxuICAgICAgICBjb25zdCB0b2dnbGVkRGlzYWJsZWRGaWVsZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgc2V0RGlzYWJsZWRGaWVsZCgocHJldikgPT4gIXByZXYpXHJcblxyXG4gICAgICAgICAgICByZWYuY3VycmVudD8uZm9jdXMoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgcmVmLmN1cnJlbnQ/LmZvY3VzKClcclxuICAgICAgICB9LCBbZGlzYWJsZWRGaWVsZF0pXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZSBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5jbGFzc05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIGZvY3VzOnJpbmctbm9uZSBmb3Vjczp1bmRlcmxpbmUgYmctdHJhbnNwYXJlbnQgZm9jdXM6Ym9yZGVyLWIgZm9jdXM6Ym9yZGVyLWItYmxhY2sgZm9jdXM6b3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVkRGlzYWJsZWRGaWVsZH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWJzb2x1dGUgcmlnaHQtMCBoaWRkZW4gcm91bmRlZCBiZy1ncmF5LTIwMCBwLTJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRGaWVsZCAmJiBcImdyb3VwLWhvdmVyOmJsb2NrXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQZW5jaWxJY29uIGNsYXNzTmFtZT1cImgtNCB3LTRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uU2F2ZUNsaWNrZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFwiYWJzb2x1dGUgcmlnaHQtMCAgcm91bmRlZCBiZy1ncmF5LTIwMCBwLTJcIiwgIWRpc2FibGVkRmllbGQgPyBcImJsb2NrXCIgOiBcImhpZGRlblwiKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2F2ZUljb24gY2xhc3NOYW1lPVwiaC00IHctNFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICApXHJcbiAgICB9LFxyXG4gICAgKHByZXYsIG5leHQpID0+IHtcclxuICAgICAgICBpZiAocHJldi52YWx1ZSAhPT0gbmV4dC52YWx1ZSkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuKVxyXG4iLCJpbXBvcnQgeyBSb3V0ZXMsIFJvdXRlLCBOYXZpZ2F0ZSwgT3V0bGV0IH0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIlxyXG5pbXBvcnQgeyBIb21lIH0gZnJvbSBcIi4uLy4uL3BhZ2VzL2hvbWVcIlxyXG5pbXBvcnQgeyBNYWluTGF5b3V0IH0gZnJvbSBcIi4uLy4uL3dpZGdldHMvbWFpbi1sYXlvdXRcIlxyXG5pbXBvcnQgeyBCb29raW5nUGFnZSB9IGZyb20gXCJwYWdlcy9ib29raW5nXCJcclxuaW1wb3J0IHsgU2NoZWR1bGxlclBhZ2UgfSBmcm9tIFwicGFnZXMvYm9va2luZy9zY2hlZHVsbGVyXCJcclxuaW1wb3J0IHsgQXV0aFBhZ2UgfSBmcm9tIFwicGFnZXMvYXV0aFwiXHJcbmltcG9ydCB7IGF1dGhNb2RlbCB9IGZyb20gXCJlbnRpdGllcy9hdXRoXCJcclxuaW1wb3J0IHsgTm90Rm91bmRQYWdlIH0gZnJvbSBcInBhZ2VzLzQwNFwiXHJcbmltcG9ydCB7IFByb2ZpbGVQYWdlIH0gZnJvbSBcInBhZ2VzL3Byb2ZpbGVcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJvdXRlcz5cclxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZWxlbWVudD17PE1haW5MYXlvdXQgLz59PlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaXZhdGVSb3V0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIb21lIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpdmF0ZVJvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cImF1dGhcIiBlbGVtZW50PXs8QXV0aFBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cImJvb2tpbmdcIiBlbGVtZW50PXs8UHJpdmF0ZU91dGxldCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGluZGV4IGVsZW1lbnQ9ezxCb29raW5nUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cInNjaGVkdWxsZXJcIiBlbGVtZW50PXs8U2NoZWR1bGxlclBhZ2UgLz59IC8+XHJcbiAgICAgICAgICAgICAgICA8L1JvdXRlPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlXHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aD1cInByb2ZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpdmF0ZVJvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVQYWdlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpdmF0ZVJvdXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIqXCIgZWxlbWVudD17PE5vdEZvdW5kUGFnZSAvPn0gLz5cclxuICAgICAgICAgICAgPC9Sb3V0ZT5cclxuICAgICAgICA8L1JvdXRlcz5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgUHJpdmF0ZU91dGxldCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlzQXV0aCA9IGF1dGhNb2RlbC5zZWxlY3RvcnMudXNlSXNBdXRoKClcclxuXHJcbiAgICByZXR1cm4gaXNBdXRoID8gPE91dGxldCAvPiA6IDxOYXZpZ2F0ZSB0bz1cIi9hdXRoXCIgLz5cclxufVxyXG5pbnRlcmZhY2UgUHJpdmF0ZVJvdXRlUHJvcHMge1xyXG4gICAgY2hpbGRyZW46IEpTWC5FbGVtZW50XHJcbn1cclxuY29uc3QgUHJpdmF0ZVJvdXRlID0gKHsgY2hpbGRyZW4gfTogUHJpdmF0ZVJvdXRlUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGlzQXV0aCA9IGF1dGhNb2RlbC5zZWxlY3RvcnMudXNlSXNBdXRoKClcclxuXHJcbiAgICBpZiAoIWlzQXV0aCkgcmV0dXJuIDxOYXZpZ2F0ZSB0bz1cIi9hdXRoXCIgcmVwbGFjZSAvPlxyXG4gICAgcmV0dXJuIGNoaWxkcmVuXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlRXZlbnQgfSBmcm9tIFwiZWZmZWN0b3ItcmVhY3RcIlxyXG5pbXBvcnQgeyBhcHBNb2RlbCB9IGZyb20gXCJlbnRpdGllcy9hcHBcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwid2lkZ2V0cy9hdXRoLWNvbnRleHRcIlxyXG5pbXBvcnQgXCIuL0FwcC5jc3NcIlxyXG5cclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4vcm91dGVyXCJcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGluaXRBcHAgPSB1c2VFdmVudChhcHBNb2RlbC5ldmVudHMuaW5pdEFwcClcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaW5pdEFwcCgpXHJcbiAgICB9LCBbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgICAgICAgPFJvdXRlciAvPlxyXG4gICAgICAgIDwvQXV0aFByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuIiwiZXhwb3J0IGNvbnN0IHJlcG9ydFdlYlZpdGFscyA9IChvblBlcmZFbnRyeT86IGFueSkgPT4ge1xyXG4gICAgaWYgKG9uUGVyZkVudHJ5ICYmIG9uUGVyZkVudHJ5IGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcclxuICAgICAgICBpbXBvcnQoXCJ3ZWItdml0YWxzXCIpLnRoZW4oXHJcbiAgICAgICAgICAgICh7IGdldENMUywgZ2V0RklELCBnZXRGQ1AsIGdldExDUCwgZ2V0VFRGQiB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBnZXRDTFMob25QZXJmRW50cnkpXHJcbiAgICAgICAgICAgICAgICBnZXRGSUQob25QZXJmRW50cnkpXHJcbiAgICAgICAgICAgICAgICBnZXRGQ1Aob25QZXJmRW50cnkpXHJcbiAgICAgICAgICAgICAgICBnZXRMQ1Aob25QZXJmRW50cnkpXHJcbiAgICAgICAgICAgICAgICBnZXRUVEZCKG9uUGVyZkVudHJ5KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIlxyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiXHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiXHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vYXBwXCJcclxuaW1wb3J0IHsgcmVwb3J0V2ViVml0YWxzIH0gZnJvbSBcIi4vcmVwb3J0V2ViVml0YWxzXCJcclxuXHJcbmNvbnN0IHJvb3QgPSBSZWFjdERPTS5jcmVhdGVSb290KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSEpXHJcbnJvb3QucmVuZGVyKFxyXG4gICAgPFJlYWN0LlN0cmljdE1vZGU+XHJcbiAgICAgICAgPEJyb3dzZXJSb3V0ZXI+XHJcbiAgICAgICAgICAgIDxBcHAgLz5cclxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICA8L1JlYWN0LlN0cmljdE1vZGU+XHJcbilcclxuXHJcbi8vIElmIHlvdSB3YW50IHRvIHN0YXJ0IG1lYXN1cmluZyBwZXJmb3JtYW5jZSBpbiB5b3VyIGFwcCwgcGFzcyBhIGZ1bmN0aW9uXHJcbi8vIHRvIGxvZyByZXN1bHRzIChmb3IgZXhhbXBsZTogcmVwb3J0V2ViVml0YWxzKGNvbnNvbGUubG9nKSlcclxuLy8gb3Igc2VuZCB0byBhbiBhbmFseXRpY3MgZW5kcG9pbnQuIExlYXJuIG1vcmU6IGh0dHBzOi8vYml0Lmx5L0NSQS12aXRhbHNcclxucmVwb3J0V2ViVml0YWxzKClcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9