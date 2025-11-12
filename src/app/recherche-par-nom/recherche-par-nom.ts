import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Stade } from '../model/stade.model';
import { StadeService } from '../services/stade';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-nom.html',
  styles: ``,
})
export class RechercheParNom implements OnInit {
  stades!: Stade[];
  nomStade: string = '';
  constructor(private stadeService: StadeService) { }

  ngOnInit(): void {
   /* this.stadeService.listeStades().subscribe(stades => {
      console.log(stades);
      this.stades = stades;
    });*/
    this.stades = [];
  }

  rechercherStade() {
    if (this.nomStade) {
      this.stadeService.rechercherParNom(this.nomStade).
        subscribe(stades => {
          console.log(stades);
          this.stades = stades;
        });
    }else{
      this.stadeService.listeStades().subscribe(stades => {
        console.log(stades);
        this.stades = stades;
      });
    }
  }





}
