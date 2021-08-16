export class User {
  public id: string;

  public name: string;
  public email: string;
  public password: string;
  
  constructor(props: Omit<User, 'id'>){
    Object.assign(this, props);
  }
}