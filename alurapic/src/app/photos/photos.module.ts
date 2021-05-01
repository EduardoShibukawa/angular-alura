import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { FilterByDescription } from './photo-list/filter-by-description.pipe';
import { LoadButtonComponent } from './photo-list/load-button/load-button.component';

@NgModule({
    declarations: [
        PhotoComponent, 
        PhotoListComponent, 
        PhotoFormComponent, 
        PhotoComponent,
        FilterByDescription,
        LoadButtonComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ]
})
export class PhotosModule { }