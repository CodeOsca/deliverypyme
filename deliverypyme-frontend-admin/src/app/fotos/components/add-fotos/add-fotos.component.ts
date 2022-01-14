import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-add-fotos",
  templateUrl: "./add-fotos.component.html",
  styleUrls: ["./add-fotos.component.css", "../../../shared/css/main.css"],
})
export class AddFotosComponent implements OnInit {

  formFile: FormGroup;
  fileImages: FileList | null = null;
  images: File[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddFotosComponent>,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.formFile = this.fb.group({
      files: [null],
    });
  }

  onNoClick() {
    this.dialogRef.close()
  }

  onUploadImages(event: any) {
    if (event) {
      this.fileImages = event.target.files;

      this.images = [];

      for (let file of Array.from(this.fileImages!)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (event: any) => this.images.push(event.target.result);
      }
    } else {
      this.formFile.reset();
    }
  }

  public resetImages() {
    this.fileImages = null;
    this.images = [];
    this.formFile.reset();
  }

}
