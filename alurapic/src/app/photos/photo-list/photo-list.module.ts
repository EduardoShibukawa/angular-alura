import { NgModule } from '@angular/core';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotoListComponent } from './photo-list.component';
import { PhotoComponent } from './photos/photo.component';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotoComponent,
        LoadButtonComponent
    ]
})
export class PhotoListModule {}