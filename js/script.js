let adicionar = document.querySelector("#adicionar-tarefa")
let inputTarefa = document.querySelector("#tarefa-digitada")
let divTarefas = document.querySelector("#tarefas")

/*## Criar uma função chamada (criarTarefa) que deve exibir um
alerta " Tarefa Criada" e essa função de executada quando
usuario fazer um click botão de adicionar no footer */

function addAcaoDeFinalizarTarefa(){
    let listaDeBotoes = document.querySelectorAll('.botao-tarefa')

    for(let i = 0; i < listaDeBotoes.length; i++){
        let botao = listaDeBotoes[i];

        botao.addEventListener('click', function(){
            if(window.confirm("você tem certeza quer excluir?")){
                botao.parentElement.parentElement.remove()
            }
        })
    }
}

addAcaoDeFinalizarTarefa()

function criarTarefa() {
    if(inputTarefa.value == ""){
        return alert("você deve tirar uma tarefa primeiro!")
    }
    let tarefa = ` 
<div class="col-md-4 mb-4">
    <div class="card-tarefa">
        <div class="texto-tarefa">
            ${inputTarefa.value}
        </div>
        <div class="botao-tarefa">
                <img src="img/check.png" width="32" alt="Botão para finalizar tarefa" title="Botão para finalizar tarefa">
        </div>
    </div>
</div>
`
    //divTarefas.innerHTML = divTarefas.innerHTML + tarefa
    divTarefas.innerHTML += tarefa;
    //alert("Tarefa Criada: " + inputTarefa.value)
    //Limpar o input para nova tarefa
    inputTarefa.value = ""
    addAcaoDeFinalizarTarefa()
}

adicionar.addEventListener('click', criarTarefa)
inputTarefa.addEventListener('keypress', function(event){
    if(event.key =="Enter"){
        criarTarefa()
    }
})
