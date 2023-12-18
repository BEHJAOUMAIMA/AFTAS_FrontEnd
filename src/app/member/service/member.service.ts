import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Member} from "../interface/member";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiUrl = "http://127.0.0.1:8080/api/v1";
  constructor( private http : HttpClient ) { }

  public getMembers():Observable<Member[]>{
    return this.http.get<Member[]>(`${this.apiUrl}/members`);
  }

  public addMember(newMember: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/members/save`, newMember);
  }
}
