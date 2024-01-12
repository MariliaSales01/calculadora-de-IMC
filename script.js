const form = document.getElementById('form')

form.addEventListener('submit', function(event){
    event.preventDefault();
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = ''

    value.classList.add('atencao')

    document.getElementById('infos').classList.remove('hidden');

    if(bmi < 18.5){
        description = 'Você está a baixo do peso'
    }
    else if (bmi >= 18.5 && 24,9){
        description = 'Peso ideal, Parabéns!'
        value.classList.remove('atencao')
        value.classList.add('normal')
    }
    else if (bmi >= 25 && 29,9){
        description = 'Levemente acima do peso'
    }
    else if (bmi >= 30 && 34,9){
        description = 'Obesidade grau 1'
    }
    else if (bmi >= 35 && 39,9){
        description = 'Obesidade grau 2 (severa)'
    }
    else if (bmi < 40){
        description = 'Obesidade 3(mórbida)'
    }

    value.textContent = bmi.replace('.', ',')
    document.getElementById('description').textContent = description;

})