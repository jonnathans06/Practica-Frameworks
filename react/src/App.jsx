import { useEffect, useState } from 'react';
import { Search, Star } from 'lucide-react';
import './App.css';
import UserCard from './components/UserCard';
import { obtenerUsuarios } from './services/usuarios';
import reactIcono from './assets/react-icono.svg';

function App() {
    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

    useEffect(() => {
        async function cargarUsuarios() {
            try {
                const datos = await obtenerUsuarios();
                setUsuarios(datos);
            } catch (error) {
                setError(error.message);
            } finally {
                setCargando(false);
            }
        }

        cargarUsuarios();
    }, []);

    function cambiarVistaFavoritos() {
        setMostrarFavoritos(anterior => !anterior);
    }

    return (
        <>
            <header className="encabezado">
                <section className="contenido-encabezado">
                    <img src={reactIcono} alt="React" className="icono-react" />

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

                    <label className="campo-busqueda">
                        <Search size={20} />

                        <input
                            type="search"
                            placeholder="Buscar por nombre..."
                        />
                    </label>

                    <section className="encabezado-lista">
                        <h3>Todos los usuarios</h3>

                        <button
                            type="button"
                            className={`boton-favoritos ${mostrarFavoritos ? 'activo' : ''}`}
                            aria-pressed={mostrarFavoritos}
                            onClick={cambiarVistaFavoritos}
                        >
                            <Star size={17} fill="currentColor" />
                            Favoritos: 0
                        </button>
                    </section>

                    <section className="lista-usuarios">
                        {cargando ? (
                            <p>Cargando usuarios...</p>
                        ) : error ? (
                            <p>{error}</p>
                        ) : (
                            usuarios.map(usuario => (
                                <UserCard key={usuario.id} usuario={usuario} />
                            ))
                        )}
                    </section>
                </section>
            </main>
        </>
    );
}

export default App;