import { Injectable } from '@angular/core';
import { DeletePlatformModel } from './delete-platform-model';
import { ObservableProcessService } from '../../processes/observable-process.service';

@Injectable({
  providedIn: 'root'
})
export abstract class DeletePlatformService extends ObservableProcessService<boolean> {
  public Model: DeletePlatformModel;
}
