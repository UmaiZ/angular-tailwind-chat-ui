import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './shared/components/side-menu/side-menu.component';
import { FullContentComponent } from './views/full-content/full-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    FullContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
