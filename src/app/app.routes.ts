import { Routes } from '@angular/router';
import { Stades } from './stades/stades';
import { AddStade } from './add-stade/add-stade';
import { UpdateStade } from './update-stade/update-stade';
import { RechercheParPays } from './recherche-par-pays/recherche-par-pays';
import { RechercheParNom } from './recherche-par-nom/recherche-par-nom';
import { ListePays } from './liste-pays/liste-pays';
import { Login } from './login/login';
import { Forbidden } from './forbidden/forbidden';
import { stadeGuard } from './stade-guard';

export const routes: Routes = [
    {path: "stades", component : Stades},
    {path: "add-stade", component : AddStade, canActivate:[stadeGuard]}, 
    {path: "updateStade/:id", component: UpdateStade},
    {path: "rechercheParPays", component : RechercheParPays},
    {path: "rechercheParNom", component : RechercheParNom},
    {path: "", redirectTo: "stades", pathMatch: "full"},
    {path: "listePays", component : ListePays} ,
    {path: 'login', component: Login},
    {path: 'app-forbidden', component: Forbidden},



];
