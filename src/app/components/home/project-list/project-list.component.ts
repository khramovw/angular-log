import { Component, OnInit, Input } from '@angular/core';

// Services
import { ProjectsService } from "../../../services/projects.service";

// Models
import { Log } from "../../../models/Log";
import { Project } from "../../../models/Project";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  @Input() projects: Project[];

  constructor( public projectsServices: ProjectsService ) { }

  ngOnInit() {
    // this.projects = this.projectsServices.getAllProject();
    // console.log(this.projects);
  }

}
