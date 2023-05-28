import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './components/popup/popup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { SectionComponent } from './components/section/section.component';

import { SkillComponent } from './components/skill/skill.component';

import { CardsComponent } from './components/cards/cards.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    NavbarComponent,
    ContainerComponent,
    SectionComponent,
    SkillComponent,
    CardsComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
