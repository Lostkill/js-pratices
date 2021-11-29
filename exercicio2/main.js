const calcular = document.getElementById('btn_calcular');

function calc_imc() {
  const name = document.getElementById('nome').value;
  const height = document.getElementById('altura').value;
  const weight = document.getElementById('peso').value;
  const result = document.getElementById('resultado');

  if (name && height && weight) {

    const imc_value = (weight / (height * height)).toFixed(1);

    let imc_classification = '';

    if (imc_value < 18.5) {
      imc_classification = 'abaixo do peso.';
    } else if (imc_value < 25) {
      imc_classification = 'com peso ideal.';
    } else if (imc_value < 30) {
      imc_classification = 'levemente acima do peso.';
    } else if (imc_value < 35) {
      imc_classification = 'com obesidade grau I.';
    } else if (imc_value < 40) {
      imc_classification = 'com obesidade grau II';
    } else {
      imc_classification = 'com obesidade grau III';
    }

    result.textContent = `${name} seu IMC é de ${imc_value} e você está ${imc_classification}`;

  } else {
    result.textContent = 'Por favor, preencha todos os campos!';
  }

}

calcular.addEventListener('click', calc_imc);