import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { SystemCoreModule } from './system-core/system-core.module';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { ScaffoldHeaderComponent } from './scaffold-header/scaffold-header.component';

@NgModule({
  declarations: [
    ScaffoldComponent, 
    ScaffoldHeaderComponent
  ],
  imports: [
    MaterialModule,
    SystemCoreModule
  ],
  exports: [
    ScaffoldComponent,
    ScaffoldHeaderComponent,
    SystemCoreModule,
    MaterialModule
  ]
})
export class SorschiaUiLibModule { }
