import {NgModule} from '@angular/core';
import {IonicModule} from 'ionic-angular';
import {PagerComponent} from './pager';

@NgModule({
    declarations:[
        PagerComponent,
    ],
    imports:[
        IonicModule,
    ],
    exports:[
        PagerComponent
    ]
})
export class PagerModule{}