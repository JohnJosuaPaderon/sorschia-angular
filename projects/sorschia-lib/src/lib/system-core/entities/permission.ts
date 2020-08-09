import { PermissionGroup } from './permission-group';
import { PermissionGroupRepositoryService } from '../repositories/permission-group-repository.service';

export class Permission {
    public Id: number;
    public Description: string;
    public IsApiPermission: boolean;
    public ApiDomain: string;
    public ApiController: string;
    public ApiAction: string;
    public IsDatabasePermission: boolean;
    public DatabaseSchema: string;
    public DatabaseProcedure: string;
    public GroupId: number;
    public Group: PermissionGroup;

    public async GetGroup(repository: PermissionGroupRepositoryService): Promise<PermissionGroup> {

        if (this.GroupId !== 0) {
            this.Group = await repository.Get(this.GroupId);
        }

        return this.Group;
    }
}
