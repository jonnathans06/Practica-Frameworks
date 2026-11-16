import { Star, UserRound } from 'lucide-react';

import './UserCard.css';

function UserCard({ usuario, cambiarFavorito, esFavorito }) {
    return (
        <article className="tarjeta-usuario">
            <div className="icono-usuario">
                <UserRound size={24} />
            </div>

            <div className="informacion-usuario">
                <h3>{usuario.name}</h3>
                <p>{usuario.email}</p>
                <p>{usuario.address.city}</p>
            </div>

            <button
                type="button"
                className={`boton-favorito ${esFavorito ? 'activo' : ''}`}
                onClick={() => cambiarFavorito(usuario.id)}
            >
                <Star size={20} fill={esFavorito ? 'currentColor' : 'none'} />
            </button>
        </article>
    );
}

export default UserCard;
