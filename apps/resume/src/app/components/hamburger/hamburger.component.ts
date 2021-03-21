import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'resume-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss']
})
export class HamburgerComponent {
  visible = false;

  statusChange = new EventEmitter();

  toggleMenu(){
    this.visible = !this.visible;
    this.statusChange.emit( this.visible );
  }

}
