const en = ['roxo', 'rosa', 'vermelho'];  
document.getElementById('entries01').innerHTML = '<strong>Lista:</strong> ' + en;
for (let [indice, cor] of en.entries()) {
    document.getElementById('entries02').innerHTML += `Cor na posição ${indice}: ${cor}<br>`;
}

const cores = ['vermelho', 'azul', 'verde'];
const obj = Object.fromEntries(cores.entries());
console.log(obj);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();
for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}