import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutsideComponent } from './outside.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [OutsideComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [OutsideComponent]
})
export class OutsideModule { }
