import type { TitleLink } from "./TitleLink.model";

export interface ResourcesWithTitleLink {
  title: string;
  childs: TitleLink[];
}
export class ResourcesWithTitleLink {
  constructor() {
    this.title = "";
    this.childs = [];
  }
}
