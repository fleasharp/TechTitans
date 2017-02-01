import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitansComponent } from './titans/titans.component';
import { TitanComponent } from './titans/titan/titan.component';

const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'titans', component: TitansComponent },
    { path: 'titans/detail/:id', component: TitanComponent },
    { path: 'titans/detail', component: TitanComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { };