class Animal {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    mover(distancia: number=0) {
        console.log(`${this.nombre} se movio ${distancia}m.`);
    }
}

class Gato extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }
    
    mover(distancia: number=1) {
        console.log('Caminando y ronroneando...');
        super.mover(distancia);
    }
}

let miGato: Animal = new Gato('Misifu');
miGato.mover();