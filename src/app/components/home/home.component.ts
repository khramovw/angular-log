import { Component, OnInit } from '@angular/core';

// Service
import { ProjectsService } from "../../services/projects.service";

// Model
import {Project} from "../../models/Project";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  projects: Project [];

  constructor( public projectsService: ProjectsService ) { }

  ngOnInit() {

    this.projectsService.getAllProjects().subscribe( (projects) => {
      this.projects = projects;
    }, error => {
      console.error(error);
    });
    console.log(this.projects);
  }
}
