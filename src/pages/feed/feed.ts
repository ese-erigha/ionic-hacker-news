import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from "@ngrx/store";
import { State, NewsState } from "../../pages/news/news.reducer";
import { Feed } from "../../store/models/feed.model";
import { CustomError } from "../../store/models/custom-error.model";
import * as newsActions from "../../pages/news/news.actions";
import { NotificationService } from "../../shared/services/notification.service";
import { Subject } from "rxjs/Subject";
import "rxjs/add/operator/takeUntil";

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  id: number = null;
  loading: boolean = false;
  spinner: any = null;
  destroy$: Subject<boolean> = new Subject<boolean>();
  feed: any = null;
  navFeed: Feed = null;

  constructor(
    public navParams: NavParams,
    public store: Store<State>,
    public notificationService: NotificationService,
    public navCtrl: NavController) {
    this.navFeed = this.navParams.get('feed');
  }

  ionViewWillEnter(){

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


      if(this.navFeed && this.navFeed.id){
        this.feed = null; 
        this.loading = true;
        this.triggerFetch(this.navFeed.id);
      }
    
  }


  displayData(newsState: NewsState){
    //console.log(newsState);
    if (newsState && !newsState.loading) {

      this.loading = false;
      console.log(newsState.story);
      this.feed = newsState.story;
    }
  }

  triggerFetch(itemId: number) {
    this.store.dispatch({
      type: newsActions.LOAD_ITEM,
      payload: <newsActions.itemQuery>{
        id: itemId
      }
    });
  }


  viewUser(userId:string){

  }

  ionViewWillLeave(){
    this.feed = null;
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
