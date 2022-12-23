import type { SummaryWithTitleLink } from "./SummaryWithTitleLink.model";

export interface ResourcesWithTitleLink {
  title: string;
  childs: SummaryWithTitleLink[];
  imgUrl?: string;
}
export class ResourcesWithTitleLink {
  constructor() {
    this.title = "";
    this.childs = [];
  }
}
