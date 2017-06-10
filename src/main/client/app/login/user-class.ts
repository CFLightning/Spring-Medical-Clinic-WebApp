export class User {

  id: number;
  username: string;
  password: string;

  constructor(ids?: number, usernames?: string, password?: string) {
    this.id = ids;
    this.username = usernames;
    this.password = password;
  }

}
