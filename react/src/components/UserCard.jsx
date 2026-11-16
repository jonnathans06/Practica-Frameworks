
import { UserRound } from 'lucide-react';

import './UserCard.css';

function UserCard({ usuario }) {
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
        </article>
    );
}

export default UserCard;
