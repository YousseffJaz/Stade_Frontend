import { Component, OnInit } from '@angular/core';
import { Stade, StadeService } from '../services/stade';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pays } from '../model/pays.model';

@Component({
  selector: 'app-update-stade',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-stade.html',
  styles: ``,
})
export class UpdateStade implements OnInit {

  currentStade = new Stade();
  pays!: Pays[];
  updateIdPay!: number;

  constructor(private activatedRoute: ActivatedRoute, private stadeService: StadeService, private router: Router) {

  }
  ngOnInit(): void {
    this.stadeService.listePays().
      subscribe(pays => {
        this.pays = pays._embedded.payses;
        console.log(pays);
      }
      );
    this.stadeService.consulterStade(this.activatedRoute.snapshot.params['id']).
      subscribe(stade => {
        this.currentStade = stade;
        this.updateIdPay = this.currentStade.pays?.idPay ?? 0;
      });

  }

  updateStade() {
    // this.currentStade.pays=this.stadeService.consulterPays(this.updateIdPay);
    //console.log(this.currentStade);
    this.currentStade.pays = this.pays.find(pay => pay.idPay == this.updateIdPay)!;
    this.stadeService.updateStade(this.currentStade).subscribe(stade => {
      this.router.navigate(['stades']);
    });


  }


}
