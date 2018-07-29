import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import {EffectsModule} from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {NewsEffects} from './news.effect';
import {reducer} from './news.reducer';
import {NewsService} from './news.service';


@NgModule({
  declarations: [
    NewsPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
    StoreModule.forFeature('newsState',reducer),
    EffectsModule.forFeature([NewsEffects])
  ],
  providers:[NewsService]
})
export class NewsPageModule {}
