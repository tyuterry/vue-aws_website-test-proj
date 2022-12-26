import { SummaryWithTitleLink } from "./SummaryWithTitleLink.model";

export interface SummaryWithTitleImgLink extends SummaryWithTitleLink {
  imgUrl: string;
}

export class SummaryWithTitleImgLink extends SummaryWithTitleLink {
  constructor() {
    super();
    this.imgUrl = "";
  }
}
