import { NameBase } from '../../utilities/name-base';

export class User extends NameBase {
    public Id: number;
    public Username: string;
    public Password: string;
    public IsActive: boolean;
    public IsPasswordChangeRequired: boolean;
}
