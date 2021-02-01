let cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let suits = ["&#9830", "&#9829", "&#9824", "&#9827"];



document.getElementById("ingresar"), addEventListener("click", function () {
    document.getElementById("zona").innerHTML = "";
    let numero = document.getElementById("generar").value;
    for (let i = 0; i < numero; i++) {
        let Randomcartas = Math.floor(Math.random() * 13);
        let Randomsuits = Math.floor(Math.random() * 4);
        let simbolo = suits[Randomsuits];
        let simbolo1 = cartas[Randomcartas];
        document.getElementById("zona").innerHTML += '<div class="carta" id="idcarta"><span class="suitesuperior" id="suits">' + simbolo + '</span><h2 class="numero" id="simbolo">' + simbolo1 + '</h2><span class="suiteinferior" id="suits1">' + simbolo + '</span></div>';

        /*document.getElementById("suits").innerHTML = simbolo;
        document.getElementById("simbolo").innerHTML = simbolo1;
        document.getElementById("suits1").innerHTML = simbolo;*/
        if (simbolo === "&#9830" || simbolo === "&#9829") {
            document.getElementById("suits").classList.add("redSuit");
            document.getElementById("suits1").classList.add("redSuit");
        } else if (simbolo === "&#9827" || simbolo === "&#9824") {
            document.getElementById("suits").classList.remove("redSuit");
            document.getElementById("suits1").classList.remove("redSuit");
            console.log(simbolo + " " + simbolo1);
        }

    }

});