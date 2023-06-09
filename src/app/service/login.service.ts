import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry } from "rxjs";
import { API_PATH } from "src/environment/environment";
import { iusuario } from "../usuario";



@Injectable(
  {
    providedIn: "root"
  }
)

export default class LoginService
{

  constructor(private httpClient: HttpClient){}
  private url = "http://localhost:3000/usuario/";

  getUsuarios() : Observable<iusuario>{
    return this.httpClient.get<iusuario>(this.url);
  }


  getLogin(user: string, pass: string) : Observable<iusuario[]> {
    return this.httpClient.get<iusuario[]>(this.url+'?user='+user+'&pass='+pass)
  }
 /* getLogin(user: string, pass: string){
    return this.httpClient.get(this.url+'?user='+user+'&pass='+pass).toPromise();
  }*/

}
