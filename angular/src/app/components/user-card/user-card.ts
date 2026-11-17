import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Usuario } from '../../models/usuario.interface';

import {
    LucideUserRound,
    LucideMapPin,
    LucideStar
} from '@lucide/angular';

@Component({
    selector: 'app-user-card',
    imports: [
        LucideUserRound,
        LucideMapPin,
        LucideStar
    ],
    templateUrl: './user-card.html',
    styleUrl: './user-card.css'
})
export class UserCard {

    @Input() usuario!: Usuario;
    @Input() esFavorito: boolean = false;

    @Output() cambiarFavorito = new EventEmitter<number>();

}