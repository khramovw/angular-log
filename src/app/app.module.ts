import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Components */
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

/* Modules */
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ProjectFormComponent } from './components/home/project-form/project-form.component';
import { ProjectListComponent } from './components/home/project-list/project-list.component';
import { LogsListComponent } from './components/project/logs-list/logs-list.component';
import { LogFormComponent } from './components/project/log-form/log-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectComponent,
    AboutComponent,
    NotFoundComponent,
    NavbarComponent,
    ProjectFormComponent,
    ProjectListComponent,
    LogsListComponent,
    LogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
