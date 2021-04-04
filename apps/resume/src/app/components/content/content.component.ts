import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'resume-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  @Input() visibleMenu!: boolean;
  @Output() visibleMenuChange = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // this.appHeight();

    // window.addEventListener('resize', event => {
    //   this.appHeight();
    // });
    
  }

  appHeight() {
    const doc = document.documentElement;
    doc.style.setProperty('--content-height', `${window.innerHeight}px`);
  }

  closeMenu() {
    this.visibleMenuChange.emit(false);
    this.visibleMenu = false;
  }
}
