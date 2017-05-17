export class Patient {

  private _id: number;
  private _name: string;
  private _surname: string;
  private _pesel: string;
  private _email: string;
  private _policyNum: string;

  constructor(ids: number, names: string, surnames: string, pesels: string,  emails: string, policyNums: string) {
    this._id = ids;
    this._name = names;
    this._surname = surnames;
    this._pesel = pesels;
    this._email = emails;
    this._policyNum = policyNums;
  }



  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }
  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }
  get pesel(): string {
    return this._pesel;
  }

  set pesel(value: string) {
    this._pesel = value;
  }
  get policyNum(): string {
    return this._policyNum;
  }

  set policyNum(value: string) {
    this._policyNum = value;
  }
  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

}
