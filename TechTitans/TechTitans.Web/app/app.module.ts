import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { TitansComponent } from './titans/titans.component';
import { TitanComponent } from './titans/titan/titan.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitanService } from './titans/shared/titan.service';

import './rxjs-extensions';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        TitansComponent,
        TitanComponent,
        DashboardComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        TitanService
    ]
})
export class AppModule { }
