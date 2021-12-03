import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  apiUrl = environment.apiUrl;

  data() : Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}`)
  }
}
