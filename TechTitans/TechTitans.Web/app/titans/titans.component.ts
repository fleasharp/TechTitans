import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { TitanService } from './shared/titan.service';
import { Titan } from './shared/titan.model';

@Component({
    moduleId: module.id,
    selector: 'app-titans',
    templateUrl: 'titans.component.html',
    providers: [TitanService]
})

export class TitansComponent implements OnInit {

    titans: any;
    errorMessage: string;
    constructor(private _titanService: TitanService, private router: Router) { }

    ngOnInit() {
        this.titans = this._titanService.getTitans()
            .catch((err) => {
                console.log(err);
                return Observable.of(true);
            });
    }

    gotoTitan(titan: Titan): void {

        if (titan != undefined) {
            // Coming in as an Update
            let link = ['/titans/detail', titan.id];
            this.router.navigate(link);
        } else {
            // Coming in as an Add
            let link = ['/titans/detail'];
            this.router.navigate(link);
        }
    }

    handleError(err: any) {
        console.log(err);

        return Observable.throw(err); // our opp to customize this error
    }
}