import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { HTTP_JWT_INTERCEPTOR } from './shared/interceptors/jwt.interceptor';
import { LoginGuard } from './shared/guards/login.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { ModifyPasswordComponent } from './modify-password/modify-password.component';
import { LandingHomeModule } from '../landing-home/landing-home.module';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, RecoverPasswordComponent, ModifyPasswordComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, MaterialModule, SharedModule, LandingHomeModule],
  providers: [HTTP_JWT_INTERCEPTOR, LoginGuard],
})
export class AuthModule {}
