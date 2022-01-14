import { HTTP_ERROR_INTERCEPTOR } from "./shared/interceptors/error.interceptor";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuicklinkModule } from "ngx-quicklink";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    QuicklinkModule,
    AuthModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [HTTP_ERROR_INTERCEPTOR],
  bootstrap: [AppComponent],
})
export class AppModule {}
