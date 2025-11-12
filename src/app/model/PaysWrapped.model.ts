import { Pays } from './pays.model';
export class PaysWrapper{
    _embedded!: {
      payses: Pays[]; pays: Pays[]
};
}