import { Component } from "@angular/core";
import { HeaderComponent } from "../../shared/components/header/header.component";
import { bannerTexts } from "../../data/landing-data";

@Component({
  selector: "app-landing",
  imports: [HeaderComponent],
  templateUrl: "./landing.component.html",
  styleUrl: "./landing.component.scss",
})
export class LandingComponent {
  bannerTexts = bannerTexts;

  repeatedBannerTexts = [
    ...this.bannerTexts,
    ...this.bannerTexts,
    ...this.bannerTexts,
  ];
}
