import { Component } from '@angular/core';
import { Stade } from '../model/stade.model';
import { CommonModule, DatePipe } from '@angular/common';
import { Pays } from '../model/pays.model';
import { FormsModule } from '@angular/forms';
import { StadeService } from '../services/stade';

@Component({
  selector: 'app-recherche-par-pays',
  imports: [DatePipe, FormsModule, CommonModule],
  templateUrl: './recherche-par-pays.html',
  styles: ``,
})
export class RechercheParPays {
  
  IdPay!: number;
  pays!: Pays[];
  stades!: Stade[];

  constructor(private stadeService: StadeService) { }

  ngOnInit(): void {
    this.stadeService.listePays().
      subscribe(pays => {
        this.pays = pays._embedded.payses;
        console.log(pays);
      });
  }
  onChange() {
    this.stadeService.rechercherParPays(this.IdPay).
      subscribe(stades => {
        this.stades = stades;
        console.log(stades);
      });
  }

  }


