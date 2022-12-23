export interface SummaryWithTitleLink {
  title: string;
  text: string;
  link: string;
}

export class SummaryWithTitleLink {
  constructor() {
    this.title = "";
    this.text = "";
    this.link = "";
  }
}
