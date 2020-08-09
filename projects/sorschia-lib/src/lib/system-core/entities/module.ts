import { Application } from './application';
import { ApplicationRepositoryService } from '../repositories/application-repository.service';

export class Module {
    public Id: number;
    public Name: string;
    public OrdinalNumber: number;
    public ApplicationId: number;
    public Application: Application;

    public async GetApplication(repository: ApplicationRepositoryService): Promise<Application> {
        
        if (this.ApplicationId !== 0) {
            this.Application = await repository.Get(this.ApplicationId);
        }

        return this.Application;
    }
}
