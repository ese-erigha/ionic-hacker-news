import { NewsListModule } from '../../components/news-list/news-list.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TopPage } from './top';


@NgModule({
  declarations: [
    TopPage,
  ],
  imports: [
    IonicPageModule.forChild(TopPage),
    NewsListModule
  ],
})
export class TopPageModule {}
