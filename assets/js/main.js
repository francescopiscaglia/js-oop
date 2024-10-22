// creo una classe che rappresenta un veicolo
class Veicolo {
    marca;
    anno;
    colore;

    constructor(marca, anno, colore) {
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
    };

    // metodo per ottenere le info della vettura
    informazioni() {
        return `E' una ${this.marca} del ${this.anno}, di colore ${this.colore}.`;
    };

    // metodo per calcolare l'anno della vettura
    calcolaEta() {
        // ottengo l anno attuale
        const annoAttuale = new Date().getFullYear();
        // faccio la differenza
        return `La macchina ha ${annoAttuale - this.anno} anni`;
    };
};

// creo una classe figlia di Veicolo
class Automobile extends Veicolo {
    porte;
    carburante;

    constructor(marca, anno, colore, porte, carburante) {
        // super serve per richiamare il costruttore della classe genitore
        super(marca, anno, colore);
        this.porte = porte;
        this.carburante = carburante;
    }

    // metodo per ottenere le informazioni 
    informazioniAuto() {
        // posso richiamare il metodo del genitore
        return `${this.informazioni()} Ha ${this.porte} porte e va a ${this.carburante}`;
    }
}

// creo due instanze ovvero due oggetti dalla classe
const veicoloOne = new Veicolo("Fiat", 2019, "blu");
console.log(veicoloOne.informazioni());
console.log(veicoloOne.calcolaEta());

const veicoloTwo = new Automobile("Opel", 2020, "nera", 4, "benzina");
console.log(veicoloTwo.informazioniAuto());

