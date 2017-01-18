interface Figura {
    color: string;
    dibujar(): void;
}

interface Linea {
    grosor: number;
}

interface Cuadrado extends Figura, Linea {
    lado: number;
}

let cuadrado = <Cuadrado>{};
cuadrado.color = 'rojo';
cuadrado.grosor = 2;
cuadrado.lado = 50;
// cuadrado.dibujar();
console.log('cuadrado', cuadrado);