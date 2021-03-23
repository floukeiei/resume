import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'resume-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Input() visibleMenu!:boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
