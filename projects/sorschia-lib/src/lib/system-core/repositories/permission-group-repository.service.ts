import { Injectable } from '@angular/core';
import { PermissionGroup } from '../entities/permission-group';

@Injectable({
  providedIn: 'root'
})
export abstract class PermissionGroupRepositoryService {
  public abstract Get(id: number): Promise<PermissionGroup>;
}
