import { Component, ElementRef, EventEmitter, forwardRef, OnInit, Output, ViewChild } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";
import { Address } from "ngx-google-places-autocomplete/objects/address";
@Component({
  selector: "app-input-google-place",
  templateUrl: "./input-google-place.component.html",
  styleUrls: ["./input-google-place.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputGooglePlaceComponent),
      multi: true,
    },
  ],
})
export class InputGooglePlaceComponent implements OnInit {
  @Output() coordinates = new EventEmitter<{ latitude: number | null; longitude: number | null }>();
  @ViewChild("input") input: ElementRef<HTMLInputElement>;
  currentValue = "";
  _onChange: (_: any) => void;
  _onTouched: () => void;
  options: any = {
    types: [],
    componentRestrictions: { country: "CL" },
  };

  constructor() {}

  ngOnInit(): void {}

  public handleAddressChange(address: Address) {
    const { name } = address;
    this.changeValue(name);
    const latitude = address.geometry.location.lat();
    const longitude = address.geometry.location.lng();
    this.emitCoordinates({ latitude, longitude });
  }

  writeValue(value: string) {
    this.currentValue = value;
  }

  registerOnChange(fn: (_: any) => void) {
    this._onChange = fn;
  }
  registerOnTouched(fn: () => void) {
    this._onTouched = fn;
  }

  private changeValue(value: string) {
    this.currentValue = value;
    this._onTouched();
    this._onChange(this.currentValue);
  }

  private emitCoordinates(coordinates: { latitude: number | null; longitude: number | null }) {
    this.coordinates.emit(coordinates);
  }

  validate() {
    const value = this.input.nativeElement.value;
    if (!!value || value === "") {
      this.changeValue("");
      this.emitCoordinates({ latitude: null, longitude: null });
    }
  }
}
