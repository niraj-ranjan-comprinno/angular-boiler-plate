import { NgModule , ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule , HttpClient} from '@angular/common/http';

import { AuthRouting } from  './auth.routing';
import { LoginComponent,RegisterComponent, ResetPasswordComponent } from './components/index';

@NgModule({
  imports: [
    AuthRouting,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  exports: [],
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent],
  providers: [],
})
export class AuthModule { 
  static forChild(): ModuleWithProviders {
    return {
      ngModule: AuthModule,
    };
  }
}
