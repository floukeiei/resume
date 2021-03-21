import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentModule } from './components/content/content.module';
import { HeaderModule } from './components/header/header.module';
import { OutsideModule } from './components/outside/outside.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule , OutsideModule , ContentModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
