import { Routes } from '@angular/router';
import { MainJorgeComponent } from './pages/jorge/main-jorge/main-jorge.component';
import { HomeComponent } from './shared/home/home.component';
import { MainMarcosbcComponent } from './pages/MarcosBC/main-marcosbc/main-marcosbc.component';

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
        path: 'marcos', component: MainMarcosbcComponent
    },
];
