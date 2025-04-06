const frutas = ['maçã', 'banana', 'laranja'];
document.getElementById('keys01').innerHTML = '<strong>Lista:</strong> ' + frutas;
const indices = frutas.keys(); // retorna um iterador
for (let i of indices) {
    document.getElementById('keys02').innerHTML +=  `Fruta na posição ${i}: ${frutas[i]}<br>`;
}

let doces = ['chocolate', 'doce de leite', 'fini'];
for (let i of doces.keys()) {
  console.log(`Fruta na posição ${i}: ${doces[i]}`);
}

