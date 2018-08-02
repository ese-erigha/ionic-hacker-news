webpackJsonp([0],{

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_effect__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_reducer__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_service__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]),
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["d" /* StoreModule */].forFeature('newsState', __WEBPACK_IMPORTED_MODULE_6__news_reducer__["a" /* reducer */]),
                __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_5__news_effect__["a" /* NewsEffects */]])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__news_service__["a" /* NewsService */]]
        })
    ], NewsPageModule);
    return NewsPageModule;
}());

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOAD_FEEDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOAD_FEEDS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOAD_FEEDS_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOAD_FEEDS_ERROR; });
/* unused harmony export LoadFeedsAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LoadFeedsSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LoadFeedsPendingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LoadFeedsErrorAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOAD_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_ITEM_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LOAD_ITEM_PENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return LOAD_ITEM_ERROR; });
/* unused harmony export LoadItemAction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LoadItemSuccessAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LoadItemPendingAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LoadItemErrorAction; });
var LOAD_FEEDS = '[Load] Feeds';
var LOAD_FEEDS_SUCCESS = '[Load] Feeds Success';
var LOAD_FEEDS_PENDING = '[Load] Feeds Pending';
var LOAD_FEEDS_ERROR = '[Load] Feeds Error';
var LoadFeedsAction = /** @class */ (function () {
    function LoadFeedsAction(payload) {
        this.payload = payload;
        this.type = LOAD_FEEDS;
    }
    return LoadFeedsAction;
}());

var LoadFeedsSuccessAction = /** @class */ (function () {
    function LoadFeedsSuccessAction(payload) {
        this.payload = payload;
        this.type = LOAD_FEEDS_SUCCESS;
    }
    return LoadFeedsSuccessAction;
}());

var LoadFeedsPendingAction = /** @class */ (function () {
    function LoadFeedsPendingAction(payload) {
        this.payload = payload;
        this.type = LOAD_FEEDS_PENDING;
    }
    return LoadFeedsPendingAction;
}());

var LoadFeedsErrorAction = /** @class */ (function () {
    function LoadFeedsErrorAction(payload) {
        this.payload = payload;
        this.type = LOAD_FEEDS_ERROR;
    }
    return LoadFeedsErrorAction;
}());

var LOAD_ITEM = '[Load] Item';
var LOAD_ITEM_SUCCESS = '[Load] Item Success';
var LOAD_ITEM_PENDING = '[Load] Item Pending';
var LOAD_ITEM_ERROR = '[Load] Item Error';
var LoadItemAction = /** @class */ (function () {
    function LoadItemAction(payload) {
        this.payload = payload;
        this.type = LOAD_ITEM;
    }
    return LoadItemAction;
}());

var LoadItemSuccessAction = /** @class */ (function () {
    function LoadItemSuccessAction(payload) {
        this.payload = payload;
        this.type = LOAD_ITEM_SUCCESS;
    }
    return LoadItemSuccessAction;
}());

var LoadItemPendingAction = /** @class */ (function () {
    function LoadItemPendingAction(payload) {
        this.payload = payload;
        this.type = LOAD_ITEM_PENDING;
    }
    return LoadItemPendingAction;
}());

var LoadItemErrorAction = /** @class */ (function () {
    function LoadItemErrorAction(payload) {
        this.payload = payload;
        this.type = LOAD_ITEM_ERROR;
    }
    return LoadItemErrorAction;
}());

//# sourceMappingURL=news.actions.js.map

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

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_helper_service__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsService = /** @class */ (function () {
    function NewsService(apiService, helperService) {
        this.apiService = apiService;
        this.helperService = helperService;
    }
    NewsService.prototype.getItem = function (id) {
        return this.apiService.getItem(id);
    };
    NewsService.prototype.getItems = function (itemIds) {
        var _this = this;
        var calls = [];
        itemIds.forEach(function (id) {
            calls.push(_this.apiService.getItem(id));
        });
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].forkJoin(calls);
    };
    NewsService.prototype.getFeedIds = function (feed) {
        return this.apiService.getFeed(feed);
    };
    NewsService.prototype.paginateFeedIds = function (feedIds, pageNumber, pageSize) {
        if (pageNumber === void 0) { pageNumber = 1; }
        if (pageSize === void 0) { pageSize = 15; }
        return this.helperService.paginate(feedIds, pageNumber, pageSize);
    };
    NewsService.prototype.getFeedKey = function (urlKey) {
        var urlKeyToFeedKey = {
            new: 'newstories',
            top: 'topstories',
            best: 'beststories',
            ask: 'askstories',
            show: 'showstories',
            job: 'jobstories'
        };
        return urlKeyToFeedKey[urlKey];
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services_api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_helper_service__["a" /* HelperService */]])
    ], NewsService);
    return NewsService;
}());

//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.topRoot = 'TopPage';
        this.bestRoot = 'BestPage';
        this.newRoot = 'NewPage';
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/Ese/Documents/dev/ionic-hacker-news/src/pages/news/news.html"*/'<ion-header>\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button menuToggle>\n              <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n      <ion-title>News</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-tabs [selectedIndex]="myIndex">\n      <ion-tab [root]="topRoot" tabTitle="Top" tabIcon="cube"></ion-tab>\n      <ion-tab [root]="bestRoot" tabTitle="Best" tabIcon="heart"></ion-tab>\n      <ion-tab [root]="newRoot" tabTitle="New" tabIcon="disc"></ion-tab>\n  </ion-tabs>\n</ion-content>\n'/*ion-inline-end:"/Users/Ese/Documents/dev/ionic-hacker-news/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsEffects; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_withLatestFrom__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_withLatestFrom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_withLatestFrom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__news_actions__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__news_service__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var NewsEffects = /** @class */ (function () {
    function NewsEffects(actions$, store$, newsService) {
        var _this = this;
        this.actions$ = actions$;
        this.store$ = store$;
        this.newsService = newsService;
        this.loadFeeds$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_10__news_actions__["a" /* LOAD_FEEDS */])
            .do(function (action) { return new __WEBPACK_IMPORTED_MODULE_10__news_actions__["j" /* LoadFeedsPendingAction */]({ currentFeed: action['payload'].type }); })
            .withLatestFrom(this.store$)
            .map(function (_a) {
            var action = _a[0], state = _a[1];
            return { feed: state.newsState[action['payload'].type], payload: action['payload'] };
        })
            .switchMap(function (actionAndState) {
            if (!Object.keys(actionAndState.feed).length || actionAndState.payload.pageNumber === 1) {
                return _this.newsService.getFeedIds(_this.newsService.getFeedKey(actionAndState.payload.type))
                    .do(function (response) {
                })
                    .map(function (feedIds) {
                    return _this.newsService.paginateFeedIds(feedIds);
                })
                    .switchMap(function (feedType) {
                    return _this.newsService.getItems(feedType[actionAndState.payload.pageNumber])
                        .map(function (feeds) {
                        return _a = {},
                            _a[actionAndState.payload.type] = feedType,
                            _a.feeds = feeds,
                            _a.currentFeed = actionAndState.payload.type,
                            _a;
                        var _a;
                    });
                });
            }
            else {
                return _this.newsService.getItems(actionAndState.feed[actionAndState.payload.pageNumber])
                    .map(function (feeds) {
                    var feedData = actionAndState.feed;
                    feedData['pageNumber'] = actionAndState.payload.pageNumber;
                    return _a = {
                            feeds: feeds,
                            currentFeed: actionAndState.payload.type
                        },
                        _a[actionAndState.payload.type] = feedData,
                        _a;
                    var _a;
                });
            }
        })
            .map(function (partialState) { return new __WEBPACK_IMPORTED_MODULE_10__news_actions__["k" /* LoadFeedsSuccessAction */](partialState); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_10__news_actions__["i" /* LoadFeedsErrorAction */]({ feeds: [] })); });
        this.loadItem$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_10__news_actions__["e" /* LOAD_ITEM */])
            .do(function (action) { return new __WEBPACK_IMPORTED_MODULE_10__news_actions__["m" /* LoadItemPendingAction */]({ story: {} }); })
            .switchMap(function (action) {
            return _this.newsService.getItem(action['payload'].id);
        })
            .switchMap(function (story) {
            if (story['kids'].length) {
                return _this.newsService.getItems(story['kids'])
                    .map(function (comments) {
                    story['kids'] = Object.assign([], comments);
                    return { story: story };
                });
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of({ story: story });
            }
        })
            .map(function (partialState) { return new __WEBPACK_IMPORTED_MODULE_10__news_actions__["n" /* LoadItemSuccessAction */](partialState); })
            .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(new __WEBPACK_IMPORTED_MODULE_10__news_actions__["l" /* LoadItemErrorAction */](err)); });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], NewsEffects.prototype, "loadFeeds$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"])
    ], NewsEffects.prototype, "loadItem$", void 0);
    NewsEffects = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */], __WEBPACK_IMPORTED_MODULE_11__news_service__["a" /* NewsService */]])
    ], NewsEffects);
    return NewsEffects;
}());

//# sourceMappingURL=news.effect.js.map

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(5);
var forkJoin_1 = __webpack_require__(261);
Observable_1.Observable.forkJoin = forkJoin_1.forkJoin;
//# sourceMappingURL=forkJoin.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__news_actions__ = __webpack_require__(431);
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
    loading: false,
    new: {},
    top: {},
    best: {},
    ask: {},
    show: {},
    job: {},
    feeds: [],
    error: {},
    currentFeed: "",
    story: {}
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    // Section 3
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__news_actions__["a" /* LOAD_FEEDS */]:
            return __assign({}, state, { loading: true });
        case __WEBPACK_IMPORTED_MODULE_0__news_actions__["c" /* LOAD_FEEDS_PENDING */]:
            return __assign({}, state, { loading: true }, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__news_actions__["d" /* LOAD_FEEDS_SUCCESS */]:
            return __assign({}, state, { loading: false }, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__news_actions__["b" /* LOAD_FEEDS_ERROR */]:
            return __assign({}, state, { loading: false }, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__news_actions__["e" /* LOAD_ITEM */]:
            return __assign({}, state, { loading: true });
        case __WEBPACK_IMPORTED_MODULE_0__news_actions__["g" /* LOAD_ITEM_PENDING */]:
            return __assign({}, state, { loading: true }, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__news_actions__["h" /* LOAD_ITEM_SUCCESS */]:
            return __assign({}, state, { loading: false }, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__news_actions__["f" /* LOAD_ITEM_ERROR */]:
            return __assign({}, state, { loading: false, story: {} });
        default:
            return state;
    }
}
//export const getFeedState = createFeatureSelector<FeedState>('feedState');
//export const getTop = createSelector(getFeedState,(state: FeedState) => state.top); 
//# sourceMappingURL=news.reducer.js.map

/***/ })

});
//# sourceMappingURL=0.js.map