import { Injectable } from '@angular/core';

//Models
import { Log } from "../models/Log";
import { Project } from "../models/Project";
import {current} from "codelyzer/util/syntaxKind";

@Injectable()
export class ProjectsService {

  projects: Project[];
  selectedProject: Project;

  constructor() {
    this.projects = [
      {
        projectId: '1',
        name: "EasyCode",
        logs: [
          {
            id: '1',
            text: 'Added component',
            date: '20.01.2018 15:21:12'
          },
          {
            id: '2',
            text: 'Added service',
            date: '20.01.2018 15:25:34'
          },
          {
            id: '3',
            text: 'Added model',
            date: '20.01.2018 15:44:18'
          }
        ]
      }
    ]
  }
  getAllProject() {
    return this.projects;
  }
  getProject(id) {

    this.projects.forEach((current, i) => {
      if ( current.projectId === id ){
        this.selectedProject = current;
      }
    });
    return this.selectedProject;
  }
}
