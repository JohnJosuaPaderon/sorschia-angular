import { Injectable } from '@angular/core';
import { Permission } from '../entities/permission';

@Injectable({
  providedIn: 'root'
})
export abstract class PermissionRepositoryService {
  public abstract Get(id: number): Promise<Permission>;
}
