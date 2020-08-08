import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class ObservableProcessService<T> {
  abstract Execute(): Observable<T>;
}