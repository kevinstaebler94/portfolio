import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LandingComponent } from "./features/landing/landing.component";
import { AboutComponent } from "./features/about/about.component";
import { SkillsComponent } from "./features/skills/skills.component";
import { ProjectsComponent } from "./features/projects/projects.component";

@Component({
  selector: "app-root",
  imports: [
    RouterOutlet,
    LandingComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "project-portfolio";
}
