import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {State,NewsState} from '../../pages/news/news.reducer';
import * as newsActions from '../../pages/news/news.actions';
import {Subject} from 'rxjs/Subject';
import "rxjs/add/operator/takeUntil";

@Component({
  selector: 'pager',
  templateUrl: 'pager.html',
  styleUrls: ['./pager.scss']
})
export class PagerComponent {

  feed = null;
  feedType: string = "";
  loading: boolean = true;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(public store: Store<State>){

    this.store.select(state => state.newsState)
              .takeUntil(this.destroy$)
              .subscribe((newsState: NewsState)=>{
                  this.loading  = newsState.loading;
                  this.feedType = newsState.currentFeed;
                  if(!this.loading && newsState[this.feedType] ){
                      this.feed =  newsState[this.feedType];
                  }
                      
              });
  }

  fetchNext(currentPage: number){
    this.fetchPage(++currentPage);
  }

  fetchPrev(currentPage: number){
    this.fetchPage(--currentPage);
  }


  fetchPage(pageNumber: number){

      this.store.dispatch({
          type: newsActions.LOAD_FEEDS,
          payload: <newsActions.feedQuery>{
            type: this.feedType,
            pageNumber: pageNumber
          } 
        });
  }

  ionViewWillLeave(){
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
