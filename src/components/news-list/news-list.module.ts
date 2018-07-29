import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import { NewsListComponent } from './news-list';

@NgModule({
    declarations:[
        NewsListComponent, 
    ],
    imports:[
        IonicModule,
    ],
    exports:[
        NewsListComponent, 
    ]
})
export class NewsListModule{}