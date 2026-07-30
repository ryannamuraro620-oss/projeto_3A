const form = document.getElementById("formCadastro");
const nome = document.getElementById("nome");
const idade = document.getElementById("idade");
const tbody = document.getElementById("tabelaCadastros");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeValor = nome.value.trim();
    const idadeValor = idade.value;

    if (nomeValor === "" || idadeValor === "") {
        alert("Preencha todos os campos.");
        return;
    }

    // Cria uma nova linha
    const linha = document.createElement("tr");

    // Colunas da linha
    const colunaNome = document.createElement("td");
    colunaNome.textContent = nomeValor;

    const colunaIdade = document.createElement("td");
    colunaIdade.textContent = idadeValor;

    const colunaAcoes = document.createElement("td");

    // Botão Excluir
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.type = "button";

    // Remove a linha correspondente
    botaoExcluir.addEventListener("click", function () {
        linha.remove();
    });

    colunaAcoes.appendChild(botaoExcluir);

    linha.appendChild(colunaNome);
    linha.appendChild(colunaIdade);
    linha.appendChild(colunaAcoes);

    tbody.appendChild(linha);

    // Limpa o formulário
    form.reset();

    // Coloca o foco no campo Nome
    nome.focus();
});