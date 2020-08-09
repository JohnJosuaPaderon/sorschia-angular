import { PermissionGroupRepositoryService } from '../repositories/permission-group-repository.service';

export class PermissionGroup {
    public Id: number;
    public Name: string;
    public ParentId: number;
    public Parent: PermissionGroup;

    public async GetParent(repository: PermissionGroupRepositoryService): Promise<PermissionGroup> {

        if (this.ParentId !== 0) {
            this.Parent = await repository.Get(this.ParentId);
        }

        return this.Parent;
    }
}
