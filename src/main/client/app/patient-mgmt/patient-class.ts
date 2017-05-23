export class Patient {

  id: number;
  name: string;
  surname: string;
  pesel: string;
  email: string;
  policyNum: string;

  constructor(ids?: number, names?: string, surnames?: string, pesels?: string,  emails?: string, policyNums?: string) {
    this.id = ids;
    this.name = names;
    this.surname = surnames;
    this.pesel = pesels;
    this.email = emails;
    this.policyNum = policyNums;
  }

}
