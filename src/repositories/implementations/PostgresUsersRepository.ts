import { User } from './../../entities/User';
import { IUsersRepository } from './../IUsersRepository';
import { v4 as uuidv4 } from 'uuid';

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find( user => user.email == email);

    return user;
  }
  async save(user: User): Promise<void> {
    if(!user.id){
        user.id = uuidv4();
    }
    this.users.push(user);
  }
}