import { Injectable } from '@angular/core';
import { Platform } from '../entities/platform';

@Injectable({
  providedIn: 'root'
})
export abstract class PlatformRepositoryService {
  public abstract Get(id: number): Promise<Platform>;
}
