import { Component, EventEmitter, Input, Output, OnInit, AfterContentInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "src/app/usuario/shared/interfaces/user.interface";

@Component({
  selector: "app-editar-perfil",
  templateUrl: "./editar-perfil.component.html",
  styleUrls: ["./editar-perfil.component.css", "../../../shared/css/modal-two.css", "../../../shared/css/form.css"],
})
export class EditarPerfilComponent implements OnInit {
  form: FormGroup;
  @Input() ver: boolean = false;
  @Input() user: User;
  @Output() cerrar = new EventEmitter<boolean>();
  @Output() userReturn = new EventEmitter<User>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.form = this.fb.group({
      email: [this.user.email, [Validators.required]],
      name: [this.user.name, [Validators.required]],
      phone: [this.user.phone, [Validators.required, Validators.pattern(/^[0-9+]+$/)]],
    });
  }

  onSubmit() {
    this.form.valid ? this.updateUser() : this.setTouchedInputs();
  }

  setTouchedInputs() {
    const controls = this.form.controls;
    Object.values(controls).forEach((control) => control.markAsTouched());
  }

  updateUser() {
    const { value } = this.form;
    value._id = this.user._id;
    this.userReturn.emit(value);
    this.cerrar.emit(false);
  }

  verificarInput(value: string) {
    return this.form.get(value)?.invalid && (this.form.get(value)?.dirty || this.form.get(value)?.touched);
  }
}
