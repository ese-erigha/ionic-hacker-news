import { Injectable } from "@angular/core";
import { Store, Action } from "@ngrx/store";
import { Actions, Effect} from "@ngrx/effects";
import { Observable} from "rxjs/Observable";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/withLatestFrom";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/of";
import * as newsActions from "./news.actions";
import {State} from './news.reducer';
import {NewsService} from './news.service';


@Injectable()
export class NewsEffects {
  constructor(public actions$: Actions,public store$: Store<State>,public newsService: NewsService) {}

  @Effect()
  loadFeeds$: Observable<Action> = this.actions$.ofType(newsActions.LOAD_FEEDS)
                                        
                                            .do((action)=> new newsActions.LoadFeedsPendingAction({currentFeed: action['payload'].type}))
                                            .withLatestFrom(this.store$)
                                            .map(([action,state])=> {

                                                
                                                
                                                return {feed: state.newsState[action['payload'].type], payload: action['payload'] };
                                            })
                                            .switchMap(actionAndState =>{

                                                if(!Object.keys(actionAndState.feed).length || actionAndState.payload.pageNumber === 1 ){ //If feed type data is empty

                                                    return this.newsService.getFeedIds(this.newsService.getFeedKey(actionAndState.payload.type))
                                                                
                                                                    .do((response)=>{
                                                                        
                                                                    })
                                                                    .map((feedIds: any)=> {
                                                                        
                                                                        return this.newsService.paginateFeedIds(feedIds)
                                                                    })
                                                                    .switchMap((feedType: any) =>{
                                    
                                                                       return this.newsService.getItems(feedType[actionAndState.payload.pageNumber])
                                                                                    
                                                                                        .map((feeds: Array<any>)=> {
                                                                                            
                                                                                            return {
                                                                                                [actionAndState.payload.type] : feedType,
                                                                                                feeds: feeds,
                                                                                                currentFeed: actionAndState.payload.type
                                                                                            }
                                                                                        })
                                                                                    
                                                                    })
                                                                
                                                }else{
                                                    
                                                    return this.newsService.getItems(actionAndState.feed[actionAndState.payload.pageNumber])
                                                               
                                                                    .map((feeds: Array<any>)=> {
                                                                        
                                                                        
                                                                        let feedData = actionAndState.feed;
                                                                        feedData['pageNumber'] = actionAndState.payload.pageNumber;

                                                                        return {
                                                                            feeds: feeds,
                                                                            currentFeed: actionAndState.payload.type,
                                                                            [actionAndState.payload.type]: feedData
                                                                        }
                                                                    })            
                                                 }
                                    
                                            })

                                            .map((partialState: {})=> new newsActions.LoadFeedsSuccessAction(partialState))
                                            .catch( err => Observable.of(new newsActions.LoadFeedsErrorAction({feeds:[]})))   
                                        



 @Effect()
  loadItem$: Observable<Action> = this.actions$.ofType(newsActions.LOAD_ITEM)
                                               
                                                .do((action) => new newsActions.LoadItemPendingAction({story:{}}))
                                                .switchMap((action)=>{
                                                        return this.newsService.getItem(action['payload'].id);
                                                })
                                                .switchMap((story)=>{
                                                        
                                                        if(story['kids'].length){
                                                            return this.newsService.getItems(story['kids'])
                                                                                    .map((comments: Array<any>)=>{

                                                                                        story['kids'] = Object.assign([],comments);
                                                                                        return {story: story};
                                                                                    })
                                                                                
                                                        }else{
                                                            return Observable.of({story: story});
                                                        }
                                                    })
                                                    .map((partialState: {})=> new newsActions.LoadItemSuccessAction (partialState))
                                                    .catch( err => Observable.of(new newsActions.LoadItemErrorAction(err))) 
                                               
                                        

}
