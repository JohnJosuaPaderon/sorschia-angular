import { Injectable } from '@angular/core';
import { ProcessBaseService } from '../../processes/process-base.service';

@Injectable({
  providedIn: 'root'
})
export abstract class DeletePlatformService extends ProcessBaseService<boolean> {
  public Model: DeletePlatformModel;
}

export class DeletePlatformModel {
  public Id: number;
  public IsCascaded: boolean;
}