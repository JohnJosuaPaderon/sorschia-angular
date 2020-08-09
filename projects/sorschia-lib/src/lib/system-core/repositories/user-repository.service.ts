import { Injectable } from '@angular/core';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export abstract class UserRepositoryService {
  public abstract Get(id: number): Promise<User>;
}
