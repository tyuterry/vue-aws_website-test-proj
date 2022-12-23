import { AccountOptData } from "./AccountOptionData.model";

export interface AccountOption extends AccountOptData {
  id: string;
  hover: boolean;
  zindex: number;
  childs: AccountOption[];
}

export class AccountOption extends AccountOptData {
  constructor(accountData: AccountOptData, id: string) {
    super(accountData.name, accountData.link, accountData.childs);
    this.id = id;
    this.hover = false;
    this.zindex = 0;
    this.childs = accountData.childs.map((e, index) => {
      return new AccountOption(e, id + index);
    });
  }
}
