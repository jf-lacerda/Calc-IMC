function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    function capturaMeusEventos(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome')
        const peso = parseFloat(form.querySelector('.peso').value);
        const altura = parseFloat(form.querySelector('.altura').value);
        const imc = peso / (altura * altura);


        if (imc <= 18.5) {
            console.log(imc)
            resultado.innerHTML = `<p>${nome.value}, sua altura é ${altura.toFixed(2)}m e pesa ${peso}kg<br>
            O seu IMC é ${imc.toFixed(1)}, você está<br>Abaixo do peso.</p>`;
        } else if(imc > 18.5 && imc < 24.9){
            console.log(imc)
            resultado.innerHTML = `<p>${nome.value}, sua altura é ${altura.toFixed(2)}m e pesa ${peso}kg<br>
            O seu IMC é ${imc.toFixed(1)} e você está com o Peso normal</p>`;
        } else if(imc >= 25 && imc < 30) {
            console.log(imc)
            resultado.innerHTML = `<p>${nome.value}, sua altura é ${altura.toFixed(2)}m e pesa ${peso}kg<br>
            O seu IMC é ${imc.toFixed(1)}, você está com<br> Sobrepeso.</p>`;
        } else if (imc > 29.9 && imc < 35) {
            console.log(imc)
            resultado.innerHTML = `<p>${nome.value}, sua altura é ${altura.toFixed(2)}m e pesa ${peso}kg<br>
            O seu IMC é ${imc.toFixed(1)}, você está com<br> Obesidade grau 1.</p>`;
        } else if(imc > 34.9 && imc < 40) {
            console.log(imc)
            resultado.innerHTML = `<p>${nome.value}, sua altura é ${altura.toFixed(2)}m e pesa ${peso}kg<br>
            O seu IMC é ${imc.toFixed(1)}, você está com<br> Obesidade grau 2.</p>`;
        } else if(imc > 34.9) {
            console.log(imc)
            resultado.innerHTML = `<p>${nome.value}, sua altura é ${altura.toFixed(2)}m e pesa ${peso}kg<br>
            O seu IMC é ${imc.toFixed(1)}, você está com<br> Obesidade grau 3.</p>`;
        }

    }

    form.addEventListener('submit', capturaMeusEventos);
}
meuEscopo();



var peso = 97;
var altura = 1.80;

console.log(peso/(altura*altura))