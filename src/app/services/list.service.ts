import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DadosModel } from '../core/models/dados.model';

@Injectable({
    providedIn: 'root'
})
export class ListService {

    private apiUrl = 'http://localhost:3000/daniel';

    constructor(
        private http: HttpClient
    ) { }

    getDados(): Observable<DadosModel> {
        return this.http.get<DadosModel>(this.apiUrl);
    }

}
