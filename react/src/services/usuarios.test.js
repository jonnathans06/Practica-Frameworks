
import { describe, it, expect, vi, afterEach } from 'vitest';
import { obtenerUsuarios } from './usuarios';

afterEach(() => {
    vi.unstubAllGlobals();
});

describe('obtenerUsuarios', () => {

    it('debe devolver los usuarios cuando la respuesta es correcta', async () => {
        const usuarios = [
            {
                id: 1,
                name: 'Leanne Graham',
                email: 'leanne@example.com'
            }
        ];

        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: true,
            json: async () => usuarios
        }));

        const resultado = await obtenerUsuarios();

        expect(resultado).toEqual(usuarios);
        expect(fetch).toHaveBeenCalledOnce();
    });

    it('debe generar un error cuando la respuesta falla', async () => {
        vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
            ok: false
        }));

        await expect(obtenerUsuarios()).rejects.toThrow(
            'No se pudieron obtener los usuarios'
        );
    });

});