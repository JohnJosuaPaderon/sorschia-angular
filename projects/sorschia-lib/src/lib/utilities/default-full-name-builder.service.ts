import { Injectable } from '@angular/core';
import { FullNameBuilderService } from './full-name-builder.service';
import { StringUtility } from './string-utility';

@Injectable({
  providedIn: 'root'
})
export class DefaultFullNameBuilderService extends FullNameBuilderService {
  
  Build(firstName: string, middleName: string, lastName: string, nameExtension: string): string {
    let result: string = '';
    var hasFirstName: boolean = !StringUtility.isNullOrWhitespace(firstName);
    var hasMiddleName: boolean = !StringUtility.isNullOrWhitespace(middleName);
    var hasLastName: boolean = !StringUtility.isNullOrWhitespace(lastName);
    var hasNameExtension: boolean = !StringUtility.isNullOrWhitespace(nameExtension);

    if (hasLastName) {
      result = lastName.trim();

      if (hasFirstName || hasNameExtension || hasMiddleName)
        result = `${result}, `;
    }

    if (hasFirstName) {
      result = `${result} ${firstName.trim()}`;

      if (hasNameExtension || hasMiddleName) {
        result = `${result} `;
      }
    }

    if (hasNameExtension) {
      result = `${result} ${nameExtension.trim()}`;

      if (hasMiddleName) {
        result = `${result} `;
      }
    }

    if (hasMiddleName) {
      result = `${result} ${middleName.trim()}`;
    }
    
    return result;
  }

}
