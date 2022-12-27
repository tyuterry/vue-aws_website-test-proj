import type { TitleLink } from "./TitleLink.model";

export interface FooterData {
  text: string;
  links: TitleLink[];
}

export class FooterData {
  constructor() {
    this.text = "";
    this.links = [];
  }
}
