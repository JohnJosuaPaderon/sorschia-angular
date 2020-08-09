import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class ProcessBaseService<T> {
  public abstract Execute(): Promise<T>;
}
