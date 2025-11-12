import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Stade } from '../model/stade.model';
import { StadeService } from '../services/stade';
import { Pays } from '../model/pays.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-stade',
  imports: [FormsModule],
  templateUrl: './add-stade.html',
})
export class AddStade implements OnInit {

  newStade: Stade = new Stade();
  message: any;
  pays! : Pays[];
  newIdPay! : number;
  newPays! : Pays;

  constructor(private stadeService: StadeService,private router: Router) {}
  ngOnInit() {
    //this.pays = this.stadeService.listePays();
   this.stadeService.listePays().
    subscribe(pays => {this.pays = pays._embedded.payses;
      this.pays = pays._embedded.payses;
      console.log(pays);
    });

  }

  addStade() {
   // this.newPays = this.stadeService.consulterPays(this.newIdPay);
    this.newStade.pays = this.pays.find(pay => pay.idPay == this.newIdPay)!;
    this.stadeService.ajouterStade(this.newStade)
      .subscribe(stade => {
        console.log(stade);
        this.router.navigate(['stades']);
      });
  }
  }
