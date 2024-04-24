import { Routes } from '@angular/router';
import { MainJorgeComponent } from './pages/jorge/main-jorge/main-jorge.component';
import { HomeComponent } from './shared/home/home.component';
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
        path: 'ibra', component: MainIbraComponent
},
    {
        path: 'oubaid', component: MainOubaidComponent
    },
];
