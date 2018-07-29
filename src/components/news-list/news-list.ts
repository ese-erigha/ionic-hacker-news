import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Store } from "@ngrx/store";
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { LoadingController, NavController,App } from 'ionic-angular';
import { State, NewsState } from "../../pages/news/news.reducer";
import { Feed } from "../../store/models/feed.model";
import { CustomError } from "../../store/models/custom-error.model";
import * as newsActions from "../../pages/news/news.actions";
import { NotificationService } from "../../shared/services/notification.service";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil";


@Component({
  selector: "news-list",
  templateUrl: "news-list.html"
})
export class NewsListComponent implements OnInit, OnDestroy {
  @Input("feedType") feedType: string = null;
  feeds: Array<Feed> = [];
  pageNumber: number = 1;
  infiniteScroll: any = null;
  initial: boolean = false;
  spinner: any = null;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    public store: Store<State>,
    public notificationService: NotificationService,
    public loadingController: LoadingController,
    public iab: InAppBrowser,
    public navCtrl: NavController,
    public appCtrl: App
  ) {}

  ngOnInit() {


    this.spinner = this.loadingController.create({content: "Loading news",spinner: "crescent"});

    this.store
      .select(state => state.newsState)
      .takeUntil(this.destroy$)
      .subscribe((newsState: NewsState) => {
        this.displayData(newsState);
      });

    this.notificationService.dispatchError$
      .takeUntil(this.destroy$)
      .subscribe((error: CustomError) => {
        //error.title
        //error.text
      });

    if (this.feedType) {
      this.initial = true;
      this.feeds = [];
      this.triggerFetch(this.feedType, 1);
    }
  }

  displayData(newsState: NewsState) {

    console.log(newsState);
    if (!newsState.loading) {

      if(this.initial){
        this.initial = false;
        this.spinner.dismiss();
      }

      this.feeds = [...this.feeds, ...newsState.feeds];
      if (this.infiniteScroll) {
        this.infiniteScroll.complete();
        let feed = newsState[this.feedType];

        if (this.pageNumber === feed.totalPages) {
          this.infiniteScroll.enable(false);
        }
      }
    }
  }

  loadMore(infiniteScroll?) {
    ++this.pageNumber;
    this.triggerFetch(this.feedType, this.pageNumber, infiniteScroll);
  }

  triggerFetch(feedType: string, pageNumber: number, infiniteScroll = null) {

    if(this.initial){
      this.spinner.present();
    }
    this.infiniteScroll = infiniteScroll;
    this.store.dispatch({
      type: newsActions.LOAD_FEEDS,
      payload: <newsActions.feedQuery>{
        type: feedType,
        pageNumber: pageNumber
      }
    });
  }

  viewUser(feed:Feed,event){

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    console.log(feed);

  }

  viewFeed(feed:Feed,event){

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    if(feed.url){
      console.log(feed.url);
      const browser = this.iab.create(feed.url,'_self',{location:'no'});

    }else{

      this.appCtrl.getRootNav().push('FeedPage',{id: feed.id});

    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
