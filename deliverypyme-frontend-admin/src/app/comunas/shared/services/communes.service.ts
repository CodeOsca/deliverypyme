import { environment } from "./../../../../environments/environment";
import { Commune } from "./../interfaces/commune.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { pluck } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class CommunesService {
  private API = environment.API + "communes/";
  private httpOptions: any = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor(private http: HttpClient) {}

  create(commune: Commune) {
    return this.http.post(this.API, commune);
  }

  getAll() {
    return this.http.get<Commune[]>(this.API);
  }

  toDisabled(communes: Commune[]): Observable<string> {
    return this.changeStatus(communes, false).pipe(pluck("message"));
  }

  toEnable(communes: Commune[]): Observable<string> {
    return this.changeStatus(communes, true).pipe(pluck("message"));
  }

  delete(communes: Commune[]): Observable<string> {
    const _ids = communes.map((commune) => commune._id);
    this.httpOptions["body"] = { _ids };
    return this.http.delete(this.API, this.httpOptions).pipe(pluck("message"));
  }

  update(commune: Commune): Observable<string> {
    return this.http.put(this.API, commune).pipe(pluck("message"));
  }

  private changeStatus(communes: Commune[], status: boolean) {
    const _ids = communes.map((commue) => commue._id);
    return this.http.put(this.API + "change-status", { status, _ids });
  }
}
