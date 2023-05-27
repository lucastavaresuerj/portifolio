import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './components/popup/popup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { SectionComponent } from './components/section/section.component';
import { ProjectCardComponent } from './components/project/project-card/project-card.component';
import { WorkCardComponent } from './components/work/work-card/work-card.component';
import { WorksComponent } from './components/work/works/works.component';
import { ProjectsComponent } from './components/project/projects/projects.component';
import { SkillComponent } from './components/skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    NavbarComponent,
    ContainerComponent,
    SectionComponent,
    ProjectCardComponent,
    WorkCardComponent,
    WorksComponent,
    ProjectsComponent,
    SkillComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
