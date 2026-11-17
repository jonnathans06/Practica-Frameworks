import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Usuario } from '../models/usuario.interface';

@Injectable({
    providedIn: 'root'
})
export class UsuariosService {

    private API_URL = 'https://jsonplaceholder.typicode.com/users';

    constructor(private http: HttpClient) {}

    obtenerUsuarios(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.API_URL);
    }
}