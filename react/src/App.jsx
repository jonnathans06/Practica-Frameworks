
import { useState } from 'react';
import { Search, Star } from 'lucide-react';

import './App.css';
import reactIcono from './assets/react-icono.svg';

function App() {
    const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

    return (
        <>
            <header className="encabezado">
                <section className="contenido-encabezado">
                    <img src={reactIcono} alt="React" className="icono-react" />

                    <span className="separador"></span>

                    <section className="titulo-encabezado">
                        <h1>Gestión de Usuarios</h1>
                        <p>React</p>
                    </section>
                </section>
            </header>

            <main className="principal">
                <section className="gestor">
                    <header className="encabezado-gestor">
                        <h2>Usuarios</h2>
                        <p>Consulta y administra tus usuarios favoritos.</p>
                    </header>

                    <form className="formulario-busqueda">
                        <label htmlFor="buscar-usuario" className="campo-busqueda">
                            <Search size={20} aria-hidden="true" />

                            <span className="solo-lectores">
                                Buscar por nombre
                            </span>

                            <input
                                type="search"
                                id="buscar-usuario"
                                placeholder="Buscar por nombre..."
                            />
                        </label>
                    </form>

                    <section className="encabezado-lista">
                        <h3>Todos los usuarios</h3>

                        <button
                            type="button"
                            className={`boton-favoritos ${mostrarFavoritos ? 'activo' : ''}`}
                            aria-pressed={mostrarFavoritos}
                            onClick={() => setMostrarFavoritos(!mostrarFavoritos)}
                        >
                            <Star size={17} fill="currentColor" />
                            Favoritos: 0
                        </button>
                    </section>
                </section>
            </main>
        </>
    );
}

export default App;