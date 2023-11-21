import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class CampusService{
  URLJSON = './assets/campus.json';
  constructor(private http: HttpClient) {
  }

  public getCampus(): Observable<Array<any>>{
    return this.http.get<any>(this.URLJSON);
  }
}
