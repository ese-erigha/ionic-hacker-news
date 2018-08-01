webpackJsonp([4],{

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPageModule", function() { return JobsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_news_list_news_list_module__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jobs__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobsPageModule = /** @class */ (function () {
    function JobsPageModule() {
    }
    JobsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__jobs__["a" /* JobsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__jobs__["a" /* JobsPage */]),
                __WEBPACK_IMPORTED_MODULE_0__components_news_list_news_list_module__["a" /* NewsListModule */],
            ],
        })
    ], JobsPageModule);
    return JobsPageModule;
}());

//# sourceMappingURL=jobs.module.js.map

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

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news_list__ = __webpack_require__(433);
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
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */],
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

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_news_news_actions__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_notification_service__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_takeUntil__);
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
    function NewsListComponent(store, notificationService, loadingController, iab, navCtrl, appCtrl) {
        this.store = store;
        this.notificationService = notificationService;
        this.loadingController = loadingController;
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.appCtrl = appCtrl;
        this.feedType = null;
        this.feeds = [];
        this.pageNumber = 0;
        this.totalPages = 100; //dummy value
        this.infiniteScroll = null;
        this.initial = false;
        this.destroy$ = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
    }
    NewsListComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            this.pageNumber = 1;
            this.triggerFetch(this.feedType, this.pageNumber);
        }
    };
    NewsListComponent.prototype.displayData = function (newsState) {
        if (newsState && !newsState.loading) {
            if (this.initial) {
                this.initial = false;
                //this.spinner.dismiss();
            }
            this.feeds = this.feeds.concat(newsState.feeds);
            var feed = newsState[this.feedType];
            this.pageNumber = feed.pageNumber;
            this.totalPages = feed.totalPages;
            if (this.infiniteScroll) {
                this.infiniteScroll.complete();
                if (this.pageNumber === this.totalPages) {
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
        this.infiniteScroll = infiniteScroll;
        this.store.dispatch({
            type: __WEBPACK_IMPORTED_MODULE_4__pages_news_news_actions__["a" /* LOAD_FEEDS */],
            payload: {
                type: feedType,
                pageNumber: pageNumber
            }
        });
    };
    NewsListComponent.prototype.viewUser = function (feed, event) {
        this.handleDefaults(event);
        this.appCtrl.getRootNav().push('UserPage', { id: feed.by });
    };
    NewsListComponent.prototype.handleDefaults = function (event) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
    };
    NewsListComponent.prototype.viewComments = function (feed, event) {
        this.handleDefaults(event);
        this.appCtrl.getRootNav().push('FeedPage', { feed: feed });
    };
    NewsListComponent.prototype.viewFeed = function (feed, event) {
        this.handleDefaults(event);
        if (feed.url) {
            var browser = this.iab.create(feed.url, '_self', { location: 'no' });
        }
        else {
            if (this.feedType === 'job') {
                return false;
            }
            this.appCtrl.getRootNav().push('FeedPage', { feed: feed });
        }
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
            selector: "news-list",template:/*ion-inline-start:"/Users/Ese/Documents/dev/ionic-hacker-news/src/components/news-list/news-list.html"*/'<ion-content *ngIf="!initial">\n    <ion-list>\n            <ion-item class="feed" *ngFor="let feed of feeds; let i = index;">\n                <div class="feed-index" item-content>{{ i + 1}}</div>\n                <div class="feed-metadata" item-content>\n                    <h2 class="feed-header">\n                        <a class="feed-header-title" (click)="viewFeed(feed,$event)">{{ feed?.title }}</a>\n                    </h2>\n                    <div item-content>\n                        <span>By </span>\n                        <a (click)="viewUser(feed,$event)">{{ feed?.by }}</a>\n                        <a *ngIf="feedType !== \'job\'" (click)="viewComments(feed,$event)"> | {{feed?.kids?.length || 0}} comments</a>\n                        <span> | {{feed?.score || 0}} points</span>\n                    </div>\n                </div>\n            </ion-item>\n    </ion-list>\n\n    <ion-infinite-scroll *ngIf="pageNumber !== totalPages" (ionInfinite)="loadMore($event)">\n        <ion-infinite-scroll-content loadingSpinner="dots">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n\n<ion-content class="content-wrapper" *ngIf="initial">\n    <ion-spinner name="dots"></ion-spinner>\n</ion-content>'/*ion-inline-end:"/Users/Ese/Documents/dev/ionic-hacker-news/src/components/news-list/news-list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__shared_services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_services_notification_service__["a" /* NotificationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* App */]) === "function" && _f || Object])
    ], NewsListComponent);
    return NewsListComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=news-list.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsPage; });
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


var JobsPage = /** @class */ (function () {
    function JobsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.feedType = "job";
    }
    JobsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobsPage');
    };
    JobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jobs',template:/*ion-inline-start:"/Users/Ese/Documents/dev/ionic-hacker-news/src/pages/jobs/jobs.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-buttons left>\n            <button ion-button menuToggle>\n                <ion-icon name="menu"></ion-icon>\n            </button>\n        </ion-buttons>\n        <ion-title>Jobs</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n    <news-list [feedType]="feedType"></news-list>\n</ion-content>\n'/*ion-inline-end:"/Users/Ese/Documents/dev/ionic-hacker-news/src/pages/jobs/jobs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], JobsPage);
    return JobsPage;
}());

//# sourceMappingURL=jobs.js.map

/***/ })

});
//# sourceMappingURL=4.js.map