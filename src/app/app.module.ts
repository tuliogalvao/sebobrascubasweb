import { TabViewModule } from 'primeng/tabview';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CarouselModule} from 'primeng/carousel';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopNewsComponent } from './top-news/top-news.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TopNewsComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
