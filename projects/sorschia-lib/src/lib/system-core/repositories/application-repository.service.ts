import { Injectable } from '@angular/core';
import { Application } from '../entities/application';

@Injectable({
  providedIn: 'root'
})
export abstract class ApplicationRepositoryService {
  public abstract Get(id: number): Promise<Application>;
}
