import type { Bulletin } from "./Bulletin.model";
import type { SubLink } from "./SubLink.model";

export interface NavReInventViewData {
  title: string;
  sublink: SubLink[];
  bulletins: Bulletin[];
}

export class NavReInventViewData {
  constructor() {
    this.title = "";
    this.sublink = [];
    this.bulletins = [];
  }
}
