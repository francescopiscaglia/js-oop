const veicoli = [
    new Automobile('Fiat', 2019, 'blu', 4, 'benzina'),
    new Automobile('Opel', 2020, 'nera', 4, 'benzina'),
    new Automobile('Toyota', 2018, 'bianca', 5, 'diesel'),
    new Automobile('Ford', 2017, 'rossa', 3, 'elettrica')
];


/*

crea un array di veicoli
cicla nell'array usando un forEach
cicla nell'array usando un for
crea una nuova array che contenga solo il nome dei veicoli
crea una nuova array con solo i veicoli elettriche

*/

// cicla nell'array usando un forEach

const veicoliEl = document.querySelector(".veicoli");

veicoli.forEach(veicolo => {

    let markup = `
        <div class="veicolo">
            <p>${veicolo.marca}</p>
        </div>
    `;

    veicoliEl.innerHTML += markup;
});


for (let i = 0; i < veicoli.length; i++) {
    const singleVeicolo = veicoli[i];

    console.log(singleVeicolo); 
};

const nomeDeiVeicoli = veicoli.map(veicolo => {
    return veicolo.marca;
})
console.log(nomeDeiVeicoli)


const veicoliElettrici = veicoli.filter((veicolo) => {
    if (veicolo.carburante === "elettrica") {
        return true;
    };
    return false;
}) 
console.log(veicoliElettrici)

