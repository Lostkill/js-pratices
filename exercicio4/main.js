
const btnGenerate = document.getElementById('btn_generate');

function get_first_last_name () {
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const resultado = document.getElementById('resultado');

    resultado.textContent = ` Seu nome é ${nome}  ${sobrenome}`;

}

btnGenerate.addEventListener('click', get_first_last_name);