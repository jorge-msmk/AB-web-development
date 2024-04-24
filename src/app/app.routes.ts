import { Routes } from '@angular/router';
import { MainJorgeComponent } from './pages/jorge/main-jorge/main-jorge.component';
import { HomeComponent } from './shared/home/home.component';
import { MainMarcoComponent } from './pages/marco/main-marco/main-marco.component';

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
        path: 'marco', component: MainMarcoComponent
    },
];
