import { Platform } from './platform';
import { PlatformRepositoryService } from '../repositories/platform-repository.service';

export class Application {
    public Id: number;
    public Name: string;
    public PlatformId: number;
    public Platform: Platform;

    public async GetPlatform(repository: PlatformRepositoryService): Promise<Platform> {
        
        if (this.PlatformId !== 0) {
            this.Platform = await repository.Get(this.PlatformId);
        }

        return this.Platform;
    }
}
