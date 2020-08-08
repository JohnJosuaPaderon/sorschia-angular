import { Platform } from './platform';
import { Observable } from 'rxjs';
import { PlatformRepositoryService } from '../repositories/platform-repository.service';

export class Application {
    public Id: number;
    public Name: string;
    public PlatformId: number;
    public Platform: Platform;

    public GetPlatform(repository: PlatformRepositoryService): Observable<Platform> {
        return repository.Get(this.PlatformId);
    }
}
