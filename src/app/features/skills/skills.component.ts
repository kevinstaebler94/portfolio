import { Component } from "@angular/core";
import { skillsData } from "../../data/skills-data";

@Component({
  selector: "app-skills",
  imports: [],
  templateUrl: "./skills.component.html",
  styleUrl: "./skills.component.scss",
})
export class SkillsComponent {
  skills = skillsData;
}
