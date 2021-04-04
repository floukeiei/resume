import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resume-skill-item',
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.scss']
})
export class SkillItemComponent implements OnInit {

  @Input() path!:string;
  @Input() label!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
