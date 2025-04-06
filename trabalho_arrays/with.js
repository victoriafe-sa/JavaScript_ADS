const caixas = ['camisa', 'calça', 'boné'];
const novaPrateleira = caixas.with(1, 'moletom');
document.getElementById('with02').innerHTML ='Nova lista: '+ novaPrateleira; // ['camisa', 'moletom', 'boné']
document.getElementById('with01').innerHTML = 'Lista original: '+caixas;         // ['camisa', 'calça', 'boné'] (original intacto!)


const tarefas = ['Estudar', 'Praticar', 'Revisar'];
const novasTarefas = tarefas.with(0, 'Ler');
console.log(novasTarefas); // ['Ler', 'Praticar', 'Revisar']
console.log(tarefas);      // ['Estudar', 'Praticar', 'Revisar']
