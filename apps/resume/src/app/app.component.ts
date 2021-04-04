import { Component } from '@angular/core';

@Component({
  selector: 'resume-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'resume';
  constructor() {
    let prevScrollpos = window.pageYOffset;
    window.onscroll =  () => {
      if(window.scrollY > 0){

        const currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          (document.querySelector('.outside-container') as any).style.top = '0';
        } else {
          (document.querySelector('.outside-container') as any).style.top = '-110px';
        }
        prevScrollpos = currentScrollPos;
      }
      
    };
  }
}
