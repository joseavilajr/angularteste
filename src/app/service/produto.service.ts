import { iproduto } from './../produto';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry } from "rxjs";



@Injectable(
  {
    providedIn: "root"
  }
)

export default class MenuService
{

  constructor(private httpClient: HttpClient){}
  private url = "http://localhost:3000/produto/";

  public getProdutos() : Observable<iproduto[]>{
    return this.httpClient.get<iproduto[]>(this.url);
  }

  public getProdutoId(id:number): Observable<iproduto>{
    return this.httpClient.get<iproduto>(this.url+id);
  }

}
