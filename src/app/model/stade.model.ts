import { Pays } from "./pays.model";

export class Stade {
    idStade! : number;
    nomStade! : string;
    prixStade! : number;
    dateCreation! : Date ;
    pays? : Pays ;  
}

/*  export interface Stade {
    idStade? : number;
    nomStade? : string;
    prixStade? : number;
    dateCreation? : Date ;
} */