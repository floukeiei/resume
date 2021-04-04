import { Component, OnInit } from '@angular/core';
import { getAge } from '../../utils/utils';

@Component({
  selector: 'resume-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  job1date !: {
    years:number;
    months:number;
    days:number;
  };

  job2date !: {
    years:number;
    months:number;
    days:number;
  };

  constructor() { }

  ngOnInit(): void {
    this.job1date = getAge(new Date(2015,5,1) , new Date(2018,8,1));
    this.job2date = getAge(new Date(2018,8,1));
  }

  gotoLinkin(){
    window.open('https://www.linkedin.com/in/piyapong-klongbunjong-26570b203/');
  }

}
