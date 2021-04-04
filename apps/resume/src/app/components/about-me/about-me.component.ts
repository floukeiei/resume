import { Component, OnInit } from '@angular/core';
import { getAge } from '../../utils/utils';

@Component({
  selector: 'resume-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  constructor() {}
  age !: {
    years:number;
    months:number;
    days:number;
  };
  ngOnInit(): void {
    this.age = getAge(new Date(1993,1,24));
  }


}
