import { NewsListModule } from '../../components/news-list/news-list.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BestPage } from './best';

@NgModule({
  declarations: [
    BestPage,
  ],
  imports: [
    IonicPageModule.forChild(BestPage),
    NewsListModule
  ],
})
export class BestPageModule {}
