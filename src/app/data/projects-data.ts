export interface Project {
  name: string;
  skills: string[];
  image: string;
}

export const projectsData: Project[] = [
  {
    name: "Join",
    skills: ["HTML", "CSS", "JavaScript"],
    image: "assets/images/join-img.svg",
  },
  {
    name: "El Pollo Loco",
    skills: ["HTML", "CSS", "JavaScript"],
    image: "assets/images/el-pollo-loco.svg",
  },
];
