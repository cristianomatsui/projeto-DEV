import {NgModule} from '@angular/core';
import {FormLoginComponent} from './form-login/form-login.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {WMessageModule} from '../shared/wmessage/wmessage.module';


@NgModule({
  declarations:
    [
      FormLoginComponent
    ],
  exports:
  [
      FormLoginComponent
  ],
  imports:
    [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      WMessageModule
    ]
})
export class FormModule{ }
