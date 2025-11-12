import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pays } from '../model/pays.model';
import { FormsModule } from '@angular/forms';

@Component({

  selector: 'app-update-pays',
  imports: [FormsModule],
  templateUrl: './update-pays.html',
  styles: ``,
})
export class UpdatePays {
  @Input()
  ajout!: boolean;

  savePays() {
    this.paysUpdated.emit(this.pays);
  }
  @Output()
  paysUpdated = new EventEmitter<Pays>();

  @Input()
  pays!: Pays;

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdatePays ", this.pays);
  }
}
