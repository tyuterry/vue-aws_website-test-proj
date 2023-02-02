import type { ResourcesWithTitleLink } from "./ResourcesWithTitleLink.model";
import type { SummaryWithTitleLink } from "./SummaryWithTitleLink.model";

export interface NavItem {
  text: string;
  link: string;
  childs: SummaryWithTitleLink[];
  resources: ResourcesWithTitleLink[];
  icon?: string;
}

export class NavItem {
  constructor() {
    this.text = "";
    this.link = "";
    this.childs = [];
    this.resources = [];
  }
}
