import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './components/popup/popup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    NavbarComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
