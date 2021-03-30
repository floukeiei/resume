import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resume-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gotoLinkin(){
    window.open('https://www.linkedin.com/in/piyapong-klongbunjong-26570b203/');
  }

}
