export class Patient {
  private _id: number;
  private _name: string;
  private _surname: string;

  constructor(ids?: number, names?: string, surnames?: string) {
    this._id = ids;
    this._name = names;
    this._surname = surnames;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  set id(value: number) {
    this._id = value;
  }

  set name(value: string) {
    this._name = value;
  }

  set surname(value: string) {
    this._surname = value;
  }
}
