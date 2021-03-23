import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { HamburgerModule } from '../hamburger/hamburger.module';
import { SkillModule } from '../skill/skill.module';


@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    HamburgerModule,
    SkillModule
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
