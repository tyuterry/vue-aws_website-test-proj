export interface CarouselData {
  title: string;
  text: string;
  urlTitle: string;
  url: string;
  imgUrl: string;
}
export class CarouselData {
  constructor() {
    this.title = "";
    this.text = "";
    this.urlTitle = "";
    this.url = "";
    this.imgUrl = "";
  }
}
