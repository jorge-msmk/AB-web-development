import { Routes } from '@angular/router';
import { MainJorgeComponent } from './pages/jorge/main-jorge/main-jorge.component';
import { HomeComponent } from './shared/home/home.component';
import { MainRamonComponent } from './pages/ramon/main-ramon/main-ramon.component';
import { MainMarcoComponent } from './pages/marco/main-marco/main-marco.component';
import { MainSebasComponent } from './pages/Sebas/main-sebas/main-sebas.component';
import { MainMarcosbcComponent } from './pages/MarcosBC/main-marcosbc/main-marcosbc.component';
import { MainIbraComponent } from './pages/ibra/main-ibra/main-ibra.component';
import { MainOubaidComponent } from './pages/oubaid/main-oubaid/main-oubaid.component';


export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'jorge', component: MainJorgeComponent
    },
    {
        path: 'ramon', component: MainRamonComponent
      },
    {
        path: 'marco', component: MainMarcoComponent
       },
    {
        path: 'sebas', component: MainSebasComponent
    },
        path: 'marcos', component: MainMarcosbcComponent
    },
    {
        path: 'ibra', component: MainIbraComponent
    },
    {
        path: 'oubaid', component: MainOubaidComponent
    },
];
