const caixas = ['camisa', 'calça', 'boné'];
const novaPrateleira = caixas.with(1, 'moletom');
document.getElementById('with02').innerHTML ='Nova lista: '+ novaPrateleira; // ['camisa', 'moletom', 'boné']
document.getElementById('with01').innerHTML = 'Lista original: '+caixas;         // ['camisa', 'calça', 'boné'] (original intacto!)


const series = ['The 100', 'Solo Leveling', 'Round 6'];
const novasTarefas = tarefas.with(0, 'Greys Anatomy');
console.log(novasTarefas); // ['Greys Anatomy', 'Solo Leveling', 'Round 6']
console.log(tarefas);      // ['The 100', 'Solo Leveling', 'Round 6']
