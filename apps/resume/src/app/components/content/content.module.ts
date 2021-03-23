import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { AboutMeModule } from '../about-me/about-me.module';


@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    AboutMeModule
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
