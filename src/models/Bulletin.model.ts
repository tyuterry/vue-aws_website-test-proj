import type { ResourcesWithTitleLink } from "./NavResources.model";

export interface Bulletin {
  text: string;
  categorys: ResourcesWithTitleLink[];
}

export class Bulletin {
  constructor() {
    this.text = "";
    this.categorys = [];
  }
}
