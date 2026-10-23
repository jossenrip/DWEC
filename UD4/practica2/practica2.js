const contarPalabras = (palabras) => {
    const mapa = new Map();

    palabras.forEach((palabra) => {
        mapa.set(palabra, (mapa.get(palabra) || 0) + 1);
    });

    return mapa;
};

const palabras = pedirPalabras();

const mapa = contarPalabras(palabras);

mostrarResultado([...mapa].map(([palabra, veces]) => `${palabra}: ${veces}`));
