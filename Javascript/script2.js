//Essa função irá fazer os cálculos dos números inseridos pelos usuários
    function result() {

    //primeira equação first-equation
    var a1 = parseFloat(document.getElementById("a1").value);
    var b1 = parseFloat(document.getElementById("b1").value);
    var result1 = parseFloat(document.getElementById("result1").value);
    
    //segunda equação second-equation
    var a2 = parseFloat(document.getElementById("a2").value);
    var b2 = parseFloat(document.getElementById("b2").value);
    var result2 = parseFloat(document.getElementById("result2").value);
    
    //se nada for inserido ou não for um número
    if (isNaN(a1) || isNaN(b1) || isNaN(result1) || isNaN(a2) || isNaN(b2)  || isNaN(result2) ) {
   alert("Por favor, preencha todos os campos corretamente!");
   return;
}
    // Calcula o determinante
    var detA = (a1 * b2) - (a2 * b1);
    
    // Calcula os resultados de X e Y
    var x, y;
    if (detA != 0) {
        x = ((result1 * b2) - (result2 * b1)) / detA;
        y = ((a1 * result2) - (a2 * result1)) / detA;
    } else {
        x = "Indeterminado";
        y = "Indeterminado";
    }
    
    // Exibe os resultados na página
    document.getElementById("x-result").innerText = x;
    document.getElementById("y-result").innerText = y;
    document.getElementById("Det-A").innerText = detA;

    
    // Determina a classificação do sistema linear
    var classification;
    if (detA != 0) {
        classification = "Sistema Determinado";
    } else if (a1 / a2 === b1 / b2 && a1 / a2 === result1 / result2 && b1 / b2 === result1 / result2) {
        classification = "Sistema Possível e Indeterminado";
    } else {
        classification = "Sistema Impossível";
    }

    // Exibe a classificação na página
    document.getElementById("solution-type").innerText = classification;
}
  
function clearData() {
    // Essa função limpa os dados que foram inseridos
    document.getElementById("a1").value = "";
    document.getElementById("b1").value = "";
    document.getElementById("result1").value = "";
    document.getElementById("a2").value = "";
    document.getElementById("b2").value = "";
    document.getElementById("result2").value = "";
    
    document.getElementById("x-result").innerText = "";
    document.getElementById("y-result").innerText = "";
    document.getElementById("Det-A").innerText = "";
    document.getElementById("solution-type").innerText = "";
}
