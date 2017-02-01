import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Titan } from './titan.model';

const HOST = 'http://localhost:49415';
const URL_TITAN = `${HOST}/api/titans`;

@Injectable()
export class TitanService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private _http: Http) {
    }

    getTitans() {
        return this._http.get(URL_TITAN)
            .map((response: Response) => response.json()).share()
            .catch((res: Response) => this.handleError(res.json()));
    }

    getTitan(id: number): Promise<Titan> {
        const url = `${URL_TITAN}/${id}`;

        return this._http.get(url)
            .toPromise()
            .then(response => response.json() as Titan)
            .catch((res: Response) => this.handleError(res.json()));
    }

    update(titan: Titan): Observable<any> {
        return this._http.put(URL_TITAN, JSON.stringify(titan), { headers: this.headers })
            .map((res: Response) => titan)
            .share()
            .catch((res: Response) => this.handleError(res.json()));
    }

    add(titan: Titan): Observable<any> {
        return this._http.post(URL_TITAN, JSON.stringify(titan), { headers: this.headers })
            .map((res: Response) => res.json() as Titan)
            .share()
            .catch((res: Response) => this.handleError(res.json()));
    }

    handleError(err: any) {
        console.log(err);

        return Observable.throw(err);
    }
}