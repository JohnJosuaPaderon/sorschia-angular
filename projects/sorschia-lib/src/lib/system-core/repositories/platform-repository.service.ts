import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Platform } from '../entities/platform';

@Injectable({
  providedIn: 'root'
})
export abstract class PlatformRepositoryService {
  abstract Get(id: number): Observable<Platform>;
}
