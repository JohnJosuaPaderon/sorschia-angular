import { FullNameBuilderService } from './full-name-builder.service';

export class NameBase {
    public FirstName: string;
    public MiddleName: string;
    public LastName: string;
    public NameExtension: string;
    public FullName: string;

    public GetFullName(builder: FullNameBuilderService): string {
        return builder.Build(this.FirstName, this.MiddleName, this.LastName, this.NameExtension);
    }
}
