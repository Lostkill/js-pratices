const generate = document.getElementById('btn_calcular');

function calc_equation_value() {
    const value_a = document.getElementById('value_a').value;
    const value_b = document.getElementById('value_b').value;
    const value_c = document.getElementById('value_c').value;
    const result = document.getElementById('result');

    let new_value_b = value_b * value_b;
    let delta = (new_value_b - 4) * value_a * value_c;

    if (delta < 0) {
        result.textContent = ("Ops... Não foi possível calcular pois o Delta é menor que zero.");
    }

    if (delta == 0) {
        result.textContent = ("Ops... O Delta é igual a zero, portando ambos os valores serão iguais.");
    }

    let _value = value_b * (-1);

    let deltaRoot = Math.sqrt(delta);

    let x1 = (_value + deltaRoot) / 2 * a;

    let x2 = (_value - deltaRoot) / 2 * a;
    result.textContent = `O valor de X1 é ${x1.toFixed(2)} e de X2 é ${x2.toFixed(2)}`;
}

generate.addEventListener('click', calc_equation_value);