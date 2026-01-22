import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LandingComponent } from "./features/landing/landing.component";
import { AboutComponent } from "./features/about/about.component";
import { SkillsComponent } from "./features/skills/skills.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, LandingComponent, AboutComponent, SkillsComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "project-portfolio";
}
