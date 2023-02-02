export interface ConsoleData {
  id: string;
  styleClass?: string;
  data: {
    content: any;
    option?: any;
  };
  type: string;
}
export class ConsoleData {
  constructor() {
    this.id = "";
    this.data = {
      content: "",
    };
    this.type = "";
  }
}
