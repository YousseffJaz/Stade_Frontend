import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Stade } from '../model/stade.model';
import { StadeService } from '../services/stade';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-stades',
  imports: [CommonModule, RouterModule],
  templateUrl: './stades.html',
})
export class Stades {

  stades : Stade[];


  constructor(private stadeService : StadeService,public auth: Auth) { 
    this.stades = [];
  }

  listeStades(): Stade[] {
    return this.stades;
  }
  ngOnInit() {

    //this.stades = this.stadeService.listeStades();
    this.chargerStades();
  }
  supprimerStade(stade: Stade) {
    //console.log("Suppression du stade :", stade);

   {
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.stadeService.supprimerStade(stade.idStade).subscribe(() => {
console.log("stade supprimé");
this.chargerStades();
});
} }
  chargerStades() {
    this.stadeService.listeStades().subscribe(stades => {
      console.log(stades);
      this.stades = stades;
    });
  }

     

}
