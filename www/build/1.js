webpackJsonp([1],{

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPageModule", function() { return UserPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_effect__ = __webpack_require__(448);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_reducer__ = __webpack_require__(449);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserPageModule = /** @class */ (function () {
    function UserPageModule() {
    }
    UserPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user__["a" /* UserPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["d" /* StoreModule */].forFeature('userState', __WEBPACK_IMPORTED_MODULE_6__user_reducer__["a" /* reducer */]),
                __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_5__user_effect__["a" /* UserEffects */]])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */]
            ]
        })
    ], UserPageModule);
    return UserPageModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD_USER_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_USER_ERROR; });
/* unused harmony export LoadUserAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LoadUserSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LoadUserPendingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LoadUserErrorAction; });
var LOAD_USER = '[Load] User';
var LOAD_USER_SUCCESS = '[Load] User Success';
var LOAD_USER_PENDING = '[Load] User Pending';
var LOAD_USER_ERROR = '[Load] User Error';
var LoadUserAction = /** @class */ (function () {
    function LoadUserAction(payload) {
        this.payload = payload;
        this.type = LOAD_USER;
    }
    return LoadUserAction;
}());

var LoadUserSuccessAction = /** @class */ (function () {
    function LoadUserSuccessAction(payload) {
        this.payload = payload;
        this.type = LOAD_USER_SUCCESS;
    }
    return LoadUserSuccessAction;
}());

var LoadUserPendingAction = /** @class */ (function () {
    function LoadUserPendingAction(payload) {
        this.payload = payload;
        this.type = LOAD_USER_PENDING;
    }
    return LoadUserPendingAction;
}());

var LoadUserErrorAction = /** @class */ (function () {
    function LoadUserErrorAction(payload) {
        this.payload = payload;
        this.type = LOAD_USER_ERROR;
    }
    return LoadUserErrorAction;
}());

//# sourceMappingURL=user.actions.js.map

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(5);
var of_1 = __webpack_require__(132);
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(5);
var switchMap_1 = __webpack_require__(437);
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var switchMap_1 = __webpack_require__(133);
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return switchMap_1.switchMap(project, resultSelector)(this);
}
exports.switchMap = switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(5);
var withLatestFrom_1 = __webpack_require__(257);
Observable_1.Observable.prototype.withLatestFrom = withLatestFrom_1.withLatestFrom;
//# sourceMappingURL=withLatestFrom.js.map

/***/ }),

/***/ 439:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(5);
var map_1 = __webpack_require__(51);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(apiService) {
        this.apiService = apiService;
    }
    UserService.prototype.getUser = function (id) {
        return this.apiService.getUser(id);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_api_service__["a" /* ApiService */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_actions__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserPage = /** @class */ (function () {
    function UserPage(navParams, store, notificationService, navCtrl) {
        this.navParams = navParams;
        this.store = store;
        this.notificationService = notificationService;
        this.navCtrl = navCtrl;
        this.id = null;
        this.loading = false;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.user = null;
        this.id = this.navParams.get('id');
    }
    UserPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.store
            .select(function (state) { return state.userState; })
            .takeUntil(this.destroy$)
            .subscribe(function (userState) {
            _this.displayData(userState);
        });
        this.notificationService.dispatchError$
            .takeUntil(this.destroy$)
            .subscribe(function (error) {
            //error.title
            //error.text
        });
        if (this.id) {
            this.user = null;
            this.loading = true;
            this.fetchUser(this.id);
        }
    };
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage.prototype.fetchUser = function (userId) {
        console.log("fetching User: " + userId);
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3__user_actions__["a" /* LOAD_USER */],
            payload: {
                id: userId
            }
        });
    };
    UserPage.prototype.displayData = function (userState) {
        console.log(userState);
        if (userState && !userState.loading) {
            this.loading = false;
            console.log(userState.user);
            this.user = userState.user;
        }
    };
    UserPage.prototype.ionViewWillLeave = function () {
        this.user = null;
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/Ese/Documents/dev/ionic-hacker-news/src/pages/user/user.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-item>\n          <ion-avatar item-start>\n            <img src="https://cdn.pixabay.com/photo/2016/03/31/19/10/avatar-1294773_1280.png">\n          </ion-avatar>\n          <h5>{{id}}</h5>\n        </ion-item>\n  </ion-navbar>\n</ion-header>\n\n<ion-content *ngIf="!loading" padding>\n   <ion-item>\n      <div class="user" item-content>\n          <h2>{{ user?.id }}</h2>\n          <ul>\n              <li *ngIf="user?.created"> Joined {{ user?.created | date: \'short\' }}</li>\n              <li *ngIf="user?.karma"> Karma -  {{ user?.karma || 0 }} <span></span></li>\n          </ul>\n      </div>\n   </ion-item>\n</ion-content>\n\n<ion-content class="content-wrapper" *ngIf="loading">\n    <ion-spinner name="dots"></ion-spinner>\n</ion-content>\n'/*ion-inline-end:"/Users/Ese/Documents/dev/ionic-hacker-news/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_actions__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_withLatestFrom__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, userService) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.loadUser$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_2__user_actions__["a" /* LOAD_USER */])
            .do(function (action) { return new __WEBPACK_IMPORTED_MODULE_2__user_actions__["f" /* LoadUserPendingAction */]({ user: {} }); })
            .switchMap(function (action) {
            return _this.userService.getUser(action['payload'].id)
                .map(function (user) {
                return { user: user };
            });
        })
            .map(function (partialState) { return new __WEBPACK_IMPORTED_MODULE_2__user_actions__["g" /* LoadUserSuccessAction */](partialState); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_2__user_actions__["e" /* LoadUserErrorAction */](err)); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"])
    ], UserEffects.prototype, "loadUser$", void 0);
    UserEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], UserEffects);
    return UserEffects;
}());

//# sourceMappingURL=user.effect.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_actions__ = __webpack_require__(434);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

//section 2
var initialState = {
    loading: true,
    user: {
        id: 0,
        delay: 0,
        created: new Date(),
        karma: 0,
        about: "",
        submitted: []
    }
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    // Section 3
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__user_actions__["a" /* LOAD_USER */]:
            return __assign({}, state, { loading: true });
        case __WEBPACK_IMPORTED_MODULE_0__user_actions__["c" /* LOAD_USER_PENDING */]:
            return __assign({}, state, { loading: true }, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__user_actions__["d" /* LOAD_USER_SUCCESS */]:
            return __assign({}, state, { loading: false }, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__user_actions__["b" /* LOAD_USER_ERROR */]:
            return __assign({}, state, { loading: false, user: {} });
        default:
            return state;
    }
}
//export const getFeedState = createFeatureSelector<FeedState>('feedState');
//export const getTop = createSelector(getFeedState,(state: FeedState) => state.top); 
//# sourceMappingURL=user.reducer.js.map

/***/ })

});
//# sourceMappingURL=1.js.map