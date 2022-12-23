import type { Bulletin } from "./Bulletin.model";
import type { TitleLink } from "./TitleLink.model";

export interface NavReInventViewData {
  title: string;
  sublink: TitleLink[];
  bulletins: Bulletin[];
}

export class NavReInventViewData {
  constructor() {
    this.title = "";
    this.sublink = [];
    this.bulletins = [];
  }
}
