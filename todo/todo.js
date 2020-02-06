var novoItem = document.getElementById('novo-item').value; // string do novo item
var plusBotao = document.getElementsByTagName('button')[0]; // primeiro botão - de add
var paraFazer = document.getElementById('para-fazer'); // itens para fazer
var completado = document.getElementById('completado'); // itens completados

function novoElemento(novoItem) {

    console.log("entrou na função de add");

    var elemento = document.createElement('li');
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    var texto = document.createElement('input');
    var botaoEditar = document.createElement('button');
    var botaoDeletar = document.createElement('button');

    checkbox.type = 'checkBox';
    texto.type = 'text';

    botaoEditar.innerText = 'Editar';
    botaoDeletar.innerText ='Deletar';
    label.innerText = novoItem;

    botaoEditar.className = 'edit';
    botaoDeletar.className = 'delete';

    elemento.appendChild(checkbox);
    elemento.appendChild(label);
    elemento.appendChild(texto);
    elemento.appendChild(botaoEditar);
    elemento.appendChild(botaoDeletar);

    console.log(elemento)

    paraFazer.appendChild(elemento);
}
