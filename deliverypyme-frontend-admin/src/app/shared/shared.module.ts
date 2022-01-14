import { EditPriceComponent } from "./components/edit-price/edit-price.component";
import { RouterModule } from "@angular/router";
import { MaterialModule } from "./../material/material.module";
import { LOCALE_ID, NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { ImageCropperModule } from "ngx-image-cropper";
import localeEs from "@angular/common/locales/es";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeEs, "es");
import { ReactiveFormsModule } from "@angular/forms";
import { QuicklinkModule } from "ngx-quicklink";

import { HeaderComponent } from "./components/header/header.component";
import { NavComponent } from "./components/nav/nav.component";
import { AlertComponent } from "./components/alert/alert.component";
import { SeleccionarImagenComponent } from "./modal/seleccionar-imagen/seleccionar-imagen.component";
import { CalificarServicioComponent } from "./modal/calificar-servicio/calificar-servicio.component";
import { CalendarioComponent } from "./components/calendario/calendario.component";
import { NotificacionesComponent } from "./components/notificaciones/notificaciones.component";
import { ConfiguracionesComponent } from "./components/configuraciones/configuraciones.component";
import { ConfirmarComponent } from "./modal/confirmar/confirmar.component";
import { LoaderComponent } from "./components/loader/loader.component";
import { TableComponent } from "./components/table/table.component";
import { SocketIoModule } from "ngx-socket-io";
import { InputGooglePlaceComponent } from "./components/input-google-place/input-google-place.component";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoaderInterceptor } from "./interceptors/loader.interceptor";
import { CaptureComponent } from "./components/capture/capture.component";
import { ButtonPrimaryComponent } from "./components/button-primary/button-primary.component";
import { CardComponent } from "./components/card/card.component";
import { TitleComponent } from "./components/card/title/title.component";

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    AlertComponent,
    SeleccionarImagenComponent,
    CalificarServicioComponent,
    CalendarioComponent,
    NotificacionesComponent,
    ConfiguracionesComponent,
    ConfirmarComponent,
    LoaderComponent,
    TableComponent,
    InputGooglePlaceComponent,
    CaptureComponent,
    EditPriceComponent,
    ButtonPrimaryComponent,
    CardComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ImageCropperModule,
    ReactiveFormsModule,
    QuicklinkModule,
    GooglePlaceModule,
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    AlertComponent,
    SeleccionarImagenComponent,
    CalificarServicioComponent,
    CalendarioComponent,
    NotificacionesComponent,
    ConfiguracionesComponent,
    LoaderComponent,
    TableComponent,
    QuicklinkModule,
    ConfirmarComponent,
    SocketIoModule,
    InputGooglePlaceComponent,
    CaptureComponent,
    EditPriceComponent,
    CardComponent,
    ButtonPrimaryComponent
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es" },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
    },
    DatePipe,
  ],
})
export class SharedModule {}
