import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    UserLoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    UserLoginComponent
  ]
})
export class SystemCoreModule { }
