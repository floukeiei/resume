import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
@Component({
  selector: 'resume-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    console.log('init');
  }
  
  gotoSection(id: string){
    const elem = document.querySelector(`section#${id}`);
    const container = document.querySelector('.content-container');
    if(elem){
      gsap.to(window, {scrollTo: {y:`section#${id}`, offsetY:100}});
    }
  }
}
