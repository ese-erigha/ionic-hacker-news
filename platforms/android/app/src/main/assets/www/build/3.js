webpackJsonp([3],{

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BestPageModule", function() { return BestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_news_list_news_list_module__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__best__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BestPageModule = /** @class */ (function () {
    function BestPageModule() {
    }
    BestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__best__["a" /* BestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__best__["a" /* BestPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_news_list_news_list_module__["a" /* NewsListModule */]
            ],
        })
    ], BestPageModule);
    return BestPageModule;
}());

//# sourceMappingURL=best.module.js.map

/***/ }),

/***/ 429:
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

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_list__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewsListModule = /** @class */ (function () {
    function NewsListModule() {
    }
    NewsListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news_list__["a" /* NewsListComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__news_list__["a" /* NewsListComponent */],
            ]
        })
    ], NewsListModule);
    return NewsListModule;
}());

//# sourceMappingURL=news-list.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_news_news_actions__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__(129);
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







var NewsListComponent = /** @class */ (function () {
    function NewsListComponent(store, notificationService, loadingController) {
        this.store = store;
        this.notificationService = notificationService;
        this.loadingController = loadingController;
        this.feedType = null;
        this.feeds = [];
        this.pageNumber = 1;
        this.infiniteScroll = null;
        this.initial = false;
        this.spinner = null;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
    }
    NewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.spinner = this.loadingController.create({ content: "Loading news", spinner: "crescent" });
        this.store
            .select(function (state) { return state.newsState; })
            .takeUntil(this.destroy$)
            .subscribe(function (newsState) {
            _this.displayData(newsState);
        });
        this.notificationService.dispatchError$
            .takeUntil(this.destroy$)
            .subscribe(function (error) {
            //error.title
            //error.text
        });
        if (this.feedType) {
            this.initial = true;
            this.feeds = [];
            this.triggerFetch(this.feedType, 1);
        }
    };
    NewsListComponent.prototype.displayData = function (newsState) {
        console.log(newsState);
        if (!newsState.loading) {
            if (this.initial) {
                this.initial = false;
                this.spinner.dismiss();
            }
            this.feeds = this.feeds.concat(newsState.feeds);
            if (this.infiniteScroll) {
                this.infiniteScroll.complete();
                var feed = newsState[this.feedType];
                if (this.pageNumber === feed.totalPages) {
                    this.infiniteScroll.enable(false);
                }
            }
        }
    };
    NewsListComponent.prototype.loadMore = function (infiniteScroll) {
        ++this.pageNumber;
        this.triggerFetch(this.feedType, this.pageNumber, infiniteScroll);
    };
    NewsListComponent.prototype.triggerFetch = function (feedType, pageNumber, infiniteScroll) {
        if (infiniteScroll === void 0) { infiniteScroll = null; }
        if (this.initial) {
            this.spinner.present();
        }
        this.infiniteScroll = infiniteScroll;
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_3__pages_news_news_actions__["a" /* LOAD_FEEDS */],
            payload: {
                type: feedType,
                pageNumber: pageNumber
            }
        });
    };
    NewsListComponent.prototype.viewUser = function (feed) {
        console.log(feed);
    };
    NewsListComponent.prototype.viewFeed = function (feed) {
        if (feed.url) {
            console.log(feed.url);
        }
        console.log(feed);
    };
    NewsListComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("feedType"),
        __metadata("design:type", String)
    ], NewsListComponent.prototype, "feedType", void 0);
    NewsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "news-list",template:/*ion-inline-start:"C:\dev\ionic-hacker-news\src\components\news-list\news-list.html"*/'<ion-content>\n    <ion-list>\n        <ion-item (click)="viewFeed(feed)" class="feed" *ngFor="let feed of feeds; let i = index;">\n            <div class="feed-index" item-content>{{ i + 1}}</div>\n            <div class="feed-metadata" item-content>\n                <h2 class="feed-header">\n                    <a class="feed-header-title" (click)="viewFeed(feed)">{{ feed?.title }}</a>\n                </h2>\n                <div item-content>\n                    <span>Posted by</span>\n                    <a (click)="viewUser(feed)">{{ feed?.by }}</a> |\n                    <span>{{feed?.kids?.length || 0}} comments</span>\n                </div>\n            </div>\n        </ion-item>\n    </ion-list>\n    <ion-infinite-scroll (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content loadingSpinner="crescent">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"C:\dev\ionic-hacker-news\src\components\news-list\news-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */]])
    ], NewsListComponent);
    return NewsListComponent;
}());

//# sourceMappingURL=news-list.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export InAppBrowserObject */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InAppBrowser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_core__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * @hidden
 */
var InAppBrowserObject = (function () {
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param {string} url     The URL to load.
     * @param {string} [target="self"]  The target in which to load the URL, an optional parameter that defaults to _self.
     *                 _self: Opens in the WebView if the URL is in the white list, otherwise it opens in the InAppBrowser.
     *                 _blank: Opens in the InAppBrowser.
     *                 _system: Opens in the system's web browser.
     * @param {string | InAppBrowserOptions} [options] Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     */
    function InAppBrowserObject(url, target, options) {
        try {
            if (options && typeof options !== 'string') {
                options = Object.keys(options).map(function (key) { return key + "=" + options[key]; }).join(',');
            }
            this._objectInstance = cordova.InAppBrowser.open(url, target, options);
        }
        catch (e) {
            window.open(url, target);
            console.warn('Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.');
        }
    }
    /**
     * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
     * if the InAppBrowser was already visible.
     */
    /**
       * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
       * if the InAppBrowser was already visible.
       */
    InAppBrowserObject.prototype.show = /**
       * Displays an InAppBrowser window that was opened hidden. Calling this has no effect
       * if the InAppBrowser was already visible.
       */
    function () { };
    /**
     * Closes the InAppBrowser window.
     */
    /**
       * Closes the InAppBrowser window.
       */
    InAppBrowserObject.prototype.close = /**
       * Closes the InAppBrowser window.
       */
    function () { };
    /**
     * Hides an InAppBrowser window that is currently shown. Calling this has no effect
     * if the InAppBrowser was already hidden.
     */
    /**
       * Hides an InAppBrowser window that is currently shown. Calling this has no effect
       * if the InAppBrowser was already hidden.
       */
    InAppBrowserObject.prototype.hide = /**
       * Hides an InAppBrowser window that is currently shown. Calling this has no effect
       * if the InAppBrowser was already hidden.
       */
    function () { };
    /**
     * Injects JavaScript code into the InAppBrowser window.
     * @param script {Object} Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    /**
       * Injects JavaScript code into the InAppBrowser window.
       * @param script {Object} Details of the script to run, specifying either a file or code key.
       * @returns {Promise<any>}
       */
    InAppBrowserObject.prototype.executeScript = /**
       * Injects JavaScript code into the InAppBrowser window.
       * @param script {Object} Details of the script to run, specifying either a file or code key.
       * @returns {Promise<any>}
       */
    function (script) { return; };
    /**
     * Injects CSS into the InAppBrowser window.
     * @param css {Object} Details of the script to run, specifying either a file or code key.
     * @returns {Promise<any>}
     */
    /**
       * Injects CSS into the InAppBrowser window.
       * @param css {Object} Details of the script to run, specifying either a file or code key.
       * @returns {Promise<any>}
       */
    InAppBrowserObject.prototype.insertCSS = /**
       * Injects CSS into the InAppBrowser window.
       * @param css {Object} Details of the script to run, specifying either a file or code key.
       * @returns {Promise<any>}
       */
    function (css) { return; };
    /**
     * A method that allows you to listen to events happening in the browser.
     * @param event {string} Name of the event
     * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
     */
    /**
       * A method that allows you to listen to events happening in the browser.
       * @param event {string} Name of the event
       * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
       */
    InAppBrowserObject.prototype.on = /**
       * A method that allows you to listen to events happening in the browser.
       * @param event {string} Name of the event
       * @returns {Observable<InAppBrowserEvent>} Returns back an observable that will listen to the event on subscribe, and will stop listening to the event on unsubscribe.
       */
    function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
            _this._objectInstance.addEventListener(event, observer.next.bind(observer));
            return function () { return _this._objectInstance.removeEventListener(event, observer.next.bind(observer)); };
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InAppBrowserObject.prototype, "show", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InAppBrowserObject.prototype, "close", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaInstance */])({ sync: true }),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InAppBrowserObject.prototype, "hide", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], InAppBrowserObject.prototype, "executeScript", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["b" /* CordovaInstance */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], InAppBrowserObject.prototype, "insertCSS", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["d" /* InstanceCheck */])(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"])
    ], InAppBrowserObject.prototype, "on", null);
    return InAppBrowserObject;
}());

/**
 * @name In App Browser
 * @description Launches in app Browser
 * @usage
 * ```typescript
 * import { InAppBrowser } from '@ionic-native/in-app-browser';
 *
 * constructor(private iab: InAppBrowser) { }
 *
 *
 * ...
 *
 *
 * const browser = this.iab.create('https://ionicframework.com/');
 *
 * browser.executeScript(...);
 *
 * browser.insertCSS(...);
 * browser.on('loadstop').subscribe(event => {
 *    browser.insertCSS({ code: "body{color: red;" });
 * });
 *
 * browser.close();
 *
 * ```
 * @classes
 * InAppBrowserObject
 * @interfaces
 * InAppBrowserEvent
 * InAppBrowserOptions
 */
var InAppBrowser = (function (_super) {
    __extends(InAppBrowser, _super);
    function InAppBrowser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
     * @param  url {string}     The URL to load.
     * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
     * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
     *                 The options string must not contain any blank space, and each feature's
     *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
     * @returns {InAppBrowserObject}
     */
    /**
       * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
       * @param  url {string}     The URL to load.
       * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
       * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
       *                 The options string must not contain any blank space, and each feature's
       *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
       * @returns {InAppBrowserObject}
       */
    InAppBrowser.prototype.create = /**
       * Opens a URL in a new InAppBrowser instance, the current browser instance, or the system browser.
       * @param  url {string}     The URL to load.
       * @param  target {string}  The target in which to load the URL, an optional parameter that defaults to _self.
       * @param  options {string} Options for the InAppBrowser. Optional, defaulting to: location=yes.
       *                 The options string must not contain any blank space, and each feature's
       *                 name/value pairs must be separated by a comma. Feature names are case insensitive.
       * @returns {InAppBrowserObject}
       */
    function (url, target, options) {
        return new InAppBrowserObject(url, target, options);
    };
    InAppBrowser.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */] },
    ];
    /**
     * @name In App Browser
     * @description Launches in app Browser
     * @usage
     * ```typescript
     * import { InAppBrowser } from '@ionic-native/in-app-browser';
     *
     * constructor(private iab: InAppBrowser) { }
     *
     *
     * ...
     *
     *
     * const browser = this.iab.create('https://ionicframework.com/');
     *
     * browser.executeScript(...);
     *
     * browser.insertCSS(...);
     * browser.on('loadstop').subscribe(event => {
     *    browser.insertCSS({ code: "body{color: red;" });
     * });
     *
     * browser.close();
     *
     * ```
     * @classes
     * InAppBrowserObject
     * @interfaces
     * InAppBrowserEvent
     * InAppBrowserOptions
     */
    InAppBrowser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["f" /* Plugin */])({
            pluginName: 'InAppBrowser',
            plugin: 'cordova-plugin-inappbrowser',
            pluginRef: 'cordova.InAppBrowser',
            repo: 'https://github.com/apache/cordova-plugin-inappbrowser',
            platforms: ['AmazonFire OS', 'Android', 'Browser', 'iOS', 'macOS', 'Windows']
        })
    ], InAppBrowser);
    return InAppBrowser;
}(__WEBPACK_IMPORTED_MODULE_1__ionic_native_core__["e" /* IonicNativePlugin */]));

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BestPage = /** @class */ (function () {
    function BestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.feedType = "best";
    }
    BestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BestPage');
    };
    BestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-best',template:/*ion-inline-start:"C:\dev\ionic-hacker-news\src\pages\best\best.html"*/'<ion-content padding>\n\n    <news-list [feedType]="feedType"></news-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\ionic-hacker-news\src\pages\best\best.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], BestPage);
    return BestPage;
}());

//# sourceMappingURL=best.js.map

/***/ })

});
//# sourceMappingURL=3.js.map