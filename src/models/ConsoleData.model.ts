export interface ConsoleData {
  id: string;
  title: string;
  colSpan?: number;
  type: string;
  sortNumber: number;
  data: {
    content: any;
    option?: any;
  };
}
export class ConsoleData {
  constructor() {
    this.id = "";
    this.title = "";
    this.data = {
      content: "",
    };
    this.type = "";
    this.sortNumber = 0;
  }
}
