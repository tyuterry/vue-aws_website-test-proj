export interface AccountOptData {
  name: string;
  link: string;
  childs: AccountOptData[];
}
export class AccountOptData implements AccountOptData {
  constructor(name?: string, link?: string, childs?: AccountOptData[]) {
    this.name = name != null ? name : "";
    this.link = link != null ? link : "";
    this.childs = childs != null ? childs : [];
  }
}
