import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillComponent } from './skill.component';
import { SkillItemComponent } from './skill-item/skill-item.component';



@NgModule({
  declarations: [SkillComponent, SkillItemComponent],
  imports: [
    CommonModule
  ],
  exports: [SkillComponent]
})
export class SkillModule { }
