import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class FullNameBuilderService {
  abstract Build(firstName: string, middleName: string, lastName: string, nameExtension: string): string;
}
