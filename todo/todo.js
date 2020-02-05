var novoItem = document.getElementById("novo-item"); // new-task
var plusBotao = document.getElementsByTagName("button")[0];//first button
var paraFazer = document.getElementById("para-fazer"); //incomplete-tasks
var completado = document.getElementById("completado"); //completed-tasks

function novoElemento(itemString) {
    var elemento = document.createElement('li');
    var checkbox = document.createElement('input');
    var label = document.createElement('label');
    var texto = document.createElement('input');
    var botaoEditar = document.createElement('button');
    var botaoDeletar = document.createElement('button');

    checkbox.type = "checkBox";
    texto.type = "text";

    botaoEditar.innerText = "Editar";
    botaoDeletar.innerText = "Deletar";
    label.innerText = itemString;

    botaoEditar.className = "edit";
    botaoDeletar.className = "delete";

    elemento.appendChild(checkbox);
    elemento.appendChild(label);
    elemento.appendChild(texto);
    elemento.appendChild(botaoEditar);
    elemento.appendChild(botaoDeletar);

    return elemento;
}
