import { Component, OnInit, inject } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';
import { UserCard } from './components/user-card/user-card';
import { Usuario } from './models/usuario.interface';

import {
    LucideSearch
} from '@lucide/angular';

@Component({
    selector: 'app-root',
    imports: [
        UserCard,
        LucideSearch
    ],
    templateUrl: './app.html',
    styleUrl: './app.css',
})
export class App implements OnInit {

    private usuariosService = inject(UsuariosService);

    usuarios: Usuario[] = [];
    usuariosFavoritos: number[] = [];

    cargando: boolean = true;
    error: string | null = null;

    mostrarFavoritos: boolean = false;
    busqueda: string = '';

    ngOnInit(): void {
        this.usuariosService.obtenerUsuarios().subscribe({
            next: (datos) => {
                this.usuarios = datos;
            },
            error: () => {
                this.error = 'No se pudieron obtener los usuarios';
                this.cargando = false;
            },
            complete: () => {
                this.cargando = false;
            }
        });
    }

    cambiarFavorito(id: number): void {
        if (this.usuariosFavoritos.includes(id)) {
            this.usuariosFavoritos = this.usuariosFavoritos.filter(
                favorito => favorito !== id
            );
        } else {
            this.usuariosFavoritos = [...this.usuariosFavoritos, id];
        }
    }

    cambiarVistaFavoritos(): void {
        this.mostrarFavoritos = !this.mostrarFavoritos;
    }

    get usuariosFiltrados(): Usuario[] {
        return this.usuarios.filter(usuario =>
            (!this.mostrarFavoritos || this.usuariosFavoritos.includes(usuario.id)) &&
            usuario.name.toLowerCase().includes(this.busqueda.toLowerCase())
        );
    }
}