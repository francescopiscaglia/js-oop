/*

Successivamente:
Creiamo una nuova istanza di veicolo che rappresenti una Fiat 2019 blu.
Otteniamo le informazioni della vettura utilizzando il metodo informazioni()
Calcoliamo l'età della vettura utilizzando il metodo calcolaEta()


*/

// creo una classe che rappresenta un veicolo
class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;

    constructor(marca, anno, colore, porte, carburante) {
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;
    };

    // metodo per ottenere le info della vettura
    informazioni() {
        return `E' una ${this.marca} del ${this.anno}, di colore ${this.colore}, con ${this.porte} porte che va a ${this.carburante}.`;
    };

    // metodo per calcolare l'anno della vettura
    calcolaEta() {
        // ottengo l anno attuale
        const annoAttuale = new Date().getFullYear();
        // faccio la differenza
        return `La macchina ha ${annoAttuale - this.anno} anni`;
    }
};

// creo un'instanza 
const veicoloOne = new Veicolo("Fiat", 2019, "blu", 4, "benzina");
console.log(veicoloOne.informazioni());
console.log(veicoloOne.calcolaEta());

