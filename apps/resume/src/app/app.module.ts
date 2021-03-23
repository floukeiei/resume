import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentModule } from './components/content/content.module';
import { HamburgerModule } from './components/hamburger/hamburger.module';
import { HeaderModule } from './components/header/header.module';
import { OutsideModule } from './components/outside/outside.module';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, OutsideModule, ContentModule, HamburgerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
