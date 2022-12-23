import { CarouselData } from "./CarouselData.mode";

export interface Carousel {
  [id: string]: string;
}

export class Carousel extends CarouselData {
  constructor() {
    super();
    this.id = "";
  }
}
