import type { ResourcesWithTitleLink } from "./NavResources.model";
import type { TitleLink } from "./TitleLink.model";

export interface NavItem {
  text: string;
  link: string;
  childs: TitleLink[];
  resources: ResourcesWithTitleLink[];
}

export class NavItem {
  constructor() {
    this.text = "";
    this.link = "";
    this.childs = [];
    this.resources = [];
  }
}
