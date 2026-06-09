function mostrarImpacto(tipo) {
    const resultado = document.getElementById('resultado');
    if(tipo === 'tradicional') {
        resultado.innerHTML = "<p>Impactos: erosão do solo, menor biodiversidade e maior uso de químicos.</p>";
    } else if(tipo === 'sustentavel') {
        resultado.innerHTML = "<p>Impactos: solo mais saudável, água preservada e maior biodiversidade.</p>";
    }
}

function responder(resposta) {
    const feedback = document.getElementById('feedback');
    if(resposta === 'certo') {
        feedback.innerHTML = "<p style='color: green;'>Correto! O plantio direto ajuda a conservar o solo.</p>";
    } else {
        feedback.innerHTML = "<p style='color: red;'>Errado. Desmatamento prejudica o solo e o meio ambiente.</p>";
    }
}