import { pluck } from "rxjs/operators";
import { environment } from "./../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Photo } from "./../interfaces/photos.interface";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PhotosService {
  private API = environment.API + "photos/";
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Photo[]>(this.API);
  }

  upload(files: FileList) {
    const data = this.getFormData(files);
    return this.http.post(this.API + "upload", data);
  }

  delete(photo: Photo): Observable<string> {
    return this.http.delete(this.API + photo._id).pipe(pluck("message"));
  }

  private getFormData(files: FileList) {
    const fileData = new FormData();
    Array.from(files).forEach((file) => {
      fileData.append("files", file);
    });
    return fileData;
  }
}
