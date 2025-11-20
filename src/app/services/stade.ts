import { Injectable } from '@angular/core';
import { Stade } from '../model/stade.model';
import { Pays } from '../model/pays.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaysWrapper } from '../model/PaysWrapped.model';
import { apiURL } from '../config';
import { Auth } from './auth';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class StadeService {
  apiURLPays: string = 'http://localhost:8080/stades/pays';
  apiURL: string = 'http://localhost:8080/stades/api';
  stades!: Stade[]; //un tableau de Stade 
  stade!: Stade;
  pays!: Pays[];

  // pays : Pays[];

  constructor(private http: HttpClient, private auth: Auth) {
    // this.pays = [
    //   { idPay : 1,  nomPay : "France"},
    //   { idPay : 2,  nomPay : "Espagne"},
    //   { idPay : 3,  nomPay :"Italie"}
    // ];
    /* this.stades = [
      {
        idStade: 1, nomStade: "Stade de France", prixStade: 3000.600,
        dateCreation: new Date("01/14/2011"), pays: { idPay: 1, nomPay: "France" }
      },
      {
        idStade: 2, nomStade: "Stade Vélodrome", prixStade: 450,
        dateCreation: new Date("12/17/2010"), pays: { idPay: 2, nomPay: "Espagne" }
      },
      {
        idStade: 3, nomStade: "Stade Pierre-Mauroy", prixStade: 900.123,
        dateCreation: new Date("02/20/2020"), pays: { idPay: 3, nomPay: "Italie" }
      }
    ]; */
  }

  listeStades(): Observable<Stade[]> {
   return this.http.get<Stade[]>(apiURL+"/all");
  }

 ajouterStade(stade: Stade): Observable<Stade> {
  return this.http.post<Stade>(this.apiURL + "/addstade", stade);
}

supprimerStade(id: number) {
  const url = `${this.apiURL}/delstade/${id}`;
  return this.http.delete(url);
}

consulterStade(id: number): Observable<Stade> {
  const url = `${this.apiURL}/getbyid/${id}`;
  return this.http.get<Stade>(url);
}

updateStade(stade: Stade): Observable<Stade> {
  return this.http.put<Stade>(this.apiURL + "/updatestade", stade);
}

listePays(): Observable<PaysWrapper> {
  return this.http.get<PaysWrapper>(this.apiURLPays);
}

rechercherParPays(idPay: number): Observable<Stade[]> {
  const url = `${this.apiURL}/stadespay/${idPay}`;
  return this.http.get<Stade[]>(url);
}

rechercherParNom(nom: string): Observable<Stade[]> {
  const url = `${this.apiURL}/stadesByName/${nom}`;
  return this.http.get<Stade[]>(url);
}

ajouterPays(pay: Pays): Observable<Pays> {
  return this.http.post<Pays>(this.apiURLPays, pay);
}
}
export { Stade };