import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { HamburgerModule } from '../hamburger/hamburger.module';


@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    HamburgerModule
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
