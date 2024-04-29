function result() {
    var a1 = parseFloat(document.getElementById("a1").value);
    var b1 = parseFloat(document.getElementById("b1").value);
    var c1 = parseFloat(document.getElementById("c1").value);
    var result1 = parseFloat(document.getElementById("result1").value);
   
    
    var a2 = parseFloat(document.getElementById("a2").value);
    var b2 = parseFloat(document.getElementById("b2").value);
    var c2 = parseFloat(document.getElementById("c2").value);
    var result2 = parseFloat(document.getElementById("result2").value);
    
    var a3 = parseFloat(document.getElementById("a3").value);
    var b3 = parseFloat(document.getElementById("b3").value);
    var c3 = parseFloat(document.getElementById("c3").value); 
    var result3 = parseFloat(document.getElementById("result3").value);
    
    //se nada for inserido ou não for um número
    if (isNaN(a1) || isNaN(b1) || isNaN(c1) || isNaN(result1) || isNaN(a2) || isNaN(b2) || isNaN(c2) || isNaN(result2) || isNaN(a3) || isNaN(b3) || isNaN(c3)|| isNaN(result3)) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }
    
    // Calculo dos determinantes
    var detA = a1 * (b2 * c3 - b3 * c2) - b1 * (a2 * c3 - a3 * c2) + c1 * (a2 * b3 - a3 * b2);
    var detX = result1 * (b2 * c3 - b3 * c2) - b1 * (result2 * c3 - result3 * c2) + c1 * (result2 * b3 - result3 * b2);
    var detY = a1 * (result2 * c3 - result3 * c2) - result1 * (a2 * c3 - a3 * c2) + c1 * (a2 * result3 - a3 * result2);
    var detZ = a1 * (b2 * result3 - b3 * result2) - b1 * (a2 * result3 - a3 * result2) + result1 * (a2 * b3 - a3 * b2);
    
    // Calculo das Incóginitas de X, Y e Z
    var x, y, z;
    if (detA != 0) {
        x = detX / detA;
        y = detY / detA;
        z = detZ / detA;
    } else {
        x = "Indeterminado";
        y = "Indeterminado";
        z = "Indeterminado";
    }
 
    
    // Exibe os resultados na página
    document.getElementById("x-result").innerText = x;
    document.getElementById("y-result").innerText = y;
    document.getElementById("z-result").innerText = z;
    document.getElementById("Det-A").innerText = detA;
    document.getElementById("Det-X").innerText = detX;
    document.getElementById("Det-Y").innerText = detY;
    document.getElementById("Det-Z").innerText = detZ;


    // Determina a classificação do sistema linear
    var classification;
    if (detA !== 0) {
        classification = "Sistema Determinado";
    } else if(detA == 0 && detX == 0 || detY == 0) {
        classification= "Sistema Possível Indeterminado";
    }
    else {
        classification = "Sistema Impossível";
    }

    // Exibe a classificação na página
    document.getElementById("solution-type").innerText = classification;
}
  
function clearData() {
    // Limpa os campos de entrada e os resultados exibidos
    document.getElementById("a1").value = "";
    document.getElementById("b1").value = "";
    document.getElementById("c1").value = "";
    document.getElementById("result1").value = "";
    document.getElementById("a2").value = "";
    document.getElementById("b2").value = "";
    document.getElementById("c2").value = "";
    document.getElementById("result2").value = "";
    document.getElementById("a3").value = "";
    document.getElementById("b3").value = "";
    document.getElementById("c3").value = "";
    document.getElementById("result3").value = "";
    
    document.getElementById("x-result").innerText = "";
    document.getElementById("y-result").innerText = "";
    document.getElementById("z-result").innerText = "";
    document.getElementById("Det-A").innerText = "";
    document.getElementById("Det-X").innerText = "";
    document.getElementById("Det-Y").innerText = "";
    document.getElementById("Det-Z").innerText = "";
    document.getElementById("solution-type").innerText = "";
}