import { Injectable } from '@angular/core';
import { Module } from '../entities/module';

@Injectable({
  providedIn: 'root'
})
export abstract class ModuleRepositoryService {
  public abstract Get(id: number): Promise<Module>;
}
