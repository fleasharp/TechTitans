import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/switchMap';

import { Titan } from '../shared/titan.model';
import { TitanService } from '../shared/titan.service';

@Component({
    moduleId: module.id,
    selector: 'app-titan',
    templateUrl: './titan.component.html'
})

export class TitanComponent implements OnInit {

    @Input()
    titan: Titan;
    titanId: number;
    isUpdate: string;
    isAdd: string;
    isError: boolean;
    errorMessage: string;
    private sub: any;

    constructor(private titanService: TitanService, private route: ActivatedRoute, private location: Location, private router: Router) { }

    ngOnInit(): void {

        this.sub = this.route.params.subscribe(params => {
            this.titanId = +params['id']; // (+) converts string 'id' to a number
        });

        if (isNaN(this.titanId)) {
            this.isUpdate = "none";
            this.isAdd = "inline";

            this.titan = new Titan();

        } else {
            this.isUpdate = "inline";
            this.isAdd = "none";
            this.route.params
                .switchMap((params: Params) => this.titanService.getTitan(+params['id']))
                .subscribe(titan => this.titan = titan);
        }
    }

    update(): void {
        this.titanService.update(this.titan).subscribe(
            titan => this.updateSuccess(titan),
            error => this.handleError(error)
        );
    }

    add() {
        this.titanService.add(this.titan).subscribe(
            titan => this.addSuccess(titan),
            error => this.handleError(error)
        );
    }

    updateSuccess(titan: Titan) {

    }

    addSuccess(titan: Titan) {
        let link = ['/titans/detail', titan.id];
        this.router.navigate(link);
    }

    goBack(): void {
        this.location.back();
    }

    displayMessage(): void {
        console.log("Successfully Saved!");
    }

    handleError(err: any) {
        this.isError = true;
        this.errorMessage = err.exceptionMessage;
    }

}