import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/Observable';
import {ApiService} from '../../shared/services/api.service';
import {HelperService} from '../../shared/services/helper.service';
import "rxjs/add/observable/forkJoin";


@Injectable()
export class NewsService {

  constructor(private apiService: ApiService, private helperService: HelperService) {

  }

  getItem(id: number){
    return this.apiService.getItem(id);
  }

  getItems(itemIds: Array<number>){

    const calls = [];
    itemIds.forEach(id =>{
        calls.push(this.apiService.getItem(id));
    });
    return Observable.forkJoin(calls);

  }

  getFeedIds(feed: string): Observable<any>{
    return this.apiService.getFeed(feed);
  }

  paginateFeedIds(feedIds: Array<number>,pageNumber: number = 1, pageSize: number = 15){
    return this.helperService.paginate(feedIds,pageNumber,pageSize);
  }

  getFeedKey(urlKey:string){

    let urlKeyToFeedKey = {

        new:'newstories',
        top: 'topstories',
        best: 'beststories',
        ask: 'askstories',
        show: 'showstories',
        job: 'jobstories'
    }
    return urlKeyToFeedKey[urlKey];
  }

}