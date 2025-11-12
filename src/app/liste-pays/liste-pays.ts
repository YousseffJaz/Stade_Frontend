import { Component, OnInit } from '@angular/core';
import { Pays } from '../model/pays.model';
import { StadeService } from '../services/stade';
import { UpdatePays } from "../update-pays/update-pays";

@Component({
  selector: 'app-liste-pays',
  imports: [UpdatePays],
  templateUrl: './liste-pays.html',
  styles: ``,
})
export class ListePays implements OnInit {
ajout:boolean=true;

  updatePays(pays: Pays) {
    this.updatedPays = pays;
    this.ajout=false; 
}
  paysUpdated(pays: Pays) {
    console.log("Pays updated event", pays);
    this.stadeService.ajouterPays(pays).
      subscribe(() => this.chargerPays());
  }
  chargerPays(): void {
    this.stadeService.listePays().
      subscribe(payses => {
        this.payses = payses._embedded.payses;
        console.log(payses);
      });
  }

  payses!: Pays[];
  updatedPays: Pays = { "idPay": null, "nomPay": "" };
  constructor(private stadeService: StadeService) { }
  ngOnInit(): void {
    this.chargerPays();
}

}