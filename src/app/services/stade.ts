import { Injectable } from '@angular/core';
import { Stade } from '../model/stade.model';
import { Pays } from '../model/pays.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PaysWrapper } from '../model/PaysWrapped.model';
import { apiURL } from '../config';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class StadeService {
  apiURLPays: string = 'http://localhost:8080/stades/pays';
  stades!: Stade[]; //un tableau de Stade 
  stade!: Stade;
  pays!: Pays[];

  // pays : Pays[];

  constructor(private http: HttpClient) {
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
    return this.http.get<Stade[]>(apiURL);
  }


  ajouterStade(stade: Stade): Observable<Stade> {
    return this.http.post<Stade>(apiURL, stade, httpOptions);
  }

  supprimerStade(id: number) {
    const url = `${apiURL}/${id}`;
    return this.http.delete(url, httpOptions);

  }
  consulterStade(id: number): Observable<Stade> {
    const url = `${apiURL}/${id}`;
    return this.http.get<Stade>(url);
  }
  //chercher le produit prod du tableau produits
  updateStade(stade: Stade): Observable<Stade> {
    return this.http.put<Stade>(apiURL, stade, httpOptions);
  }
  listePays(): Observable<PaysWrapper> {
    return this.http.get<PaysWrapper>(this.apiURLPays);
  }
  /*consulterPays(id: number): Pays {
      return this.pays.find((pay) => pay.idPay == id)!;

  }*/
  rechercherParPays(idPay: number): Observable<Stade[]> {
    const url = `${apiURL}/stadepay/${idPay}`;
    return this.http.get<Stade[]>(url);
  }

  rechercherParNom(nom: string): Observable<Stade[]> {
    const url = `${apiURL}/stadeByName/${nom}`;
    return this.http.get<Stade[]>(url);
  }

  ajouterPays(pays: Pays): Observable<Pays> {
    return this.http.post<Pays>(this.apiURLPays, pays, httpOptions);
  }
}
export { Stade };