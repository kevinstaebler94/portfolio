import { Component } from "@angular/core";
import { projectsData, Project } from "../../data/projects-data";

@Component({
  selector: "app-projects",
  imports: [],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  projects = projectsData;
}
