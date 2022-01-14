import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-calificar-servicio',
  templateUrl: './calificar-servicio.component.html',
  styleUrls: [
    './calificar-servicio.component.css',
    '../../../shared/css/modal-two.css',
  ]
})
export class CalificarServicioComponent implements OnInit {

  form: FormGroup;

  @Input() ver: boolean = false;
  @Output() cerrar = new EventEmitter<boolean>();

  constructor(
    private fb: FormBuilder,
    private alert: AlertService
  ) {
    this.form = this.fb.group(
      {
        comentario: ['', [Validators.required]],
        calificacion: [0],
      }
    );
  }

  ngOnInit(): void {
  }

  calificar(valor: number) {
    this.form.controls['calificacion'].setValue(valor);
  }

}
