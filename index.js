window.onload = function() {

  let suits = ['&spades;', '&clubs;', '&hearts;', '&diams;'];
  let value = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
  let cardsNumbers = [];

  let drawBtn = document.querySelector("#draw");
  let sortBtn = document.querySelector("#sort");
  let cardLocation = document.querySelector("#cards");

  drawBtn.addEventListener("click", function() {

    cardsNumbers = [];
    let cardsLot = document.querySelector("#input").value;
    cardLocation.innerHTML = " ";

    for (let i = 0; i < cardsLot; i++) {
      
      let select = document.createElement("div");
      select.innerHTML ="<div class='cardHeader'></div><div class='cardContent'></div><div class='cardFooter'></div>";
      select.classList.add("card");
      cardLocation.appendChild(select);

      let randomSuits = Math.floor(Math.random() * suits.length );
      let randomValue = Math.floor(Math.random() * value.length);
      cardsNumbers.push(randomValue);

      let suitHeader = document.getElementsByClassName("cardHeader");
      let numberContent = document.getElementsByClassName("cardContent");
      let suitFooter = document.getElementsByClassName("cardFooter");

      if (randomSuits == 0) {
        let cardHeader = suits[randomSuits];
        let cardFooter = suits[randomSuits];
        let num = value[randomValue];
        
        suitHeader[i].innerHTML = cardHeader;
        numberContent[i].innerHTML = num;
        suitFooter[i].innerHTML = cardFooter;
        
      } 
      else if (randomSuits == 1) {
        cardHeader = suits[randomSuits];
        suitHeader[i].innerHTML = cardHeader;
        num = value[randomValue];
        numberContent[i].innerHTML = num;
        cardFooter = suits[randomSuits];
        suitFooter[i].innerHTML = cardFooter;
      } 
      else if (randomSuits == 2 || randomSuits == 3) {
        cardHeader = suits[randomSuits];
        suitHeader[i].innerHTML = cardHeader;
        num = value[randomValue];
        numberContent[i].innerHTML = num;
        cardFooter = suits[randomSuits];
        
        suitFooter[i].innerHTML = cardFooter;
        suitHeader[i].style.color = "red";
        suitFooter[i].style.color = "red";
        numberContent[i].style.color = "red";
      } 
    }
  });

  sortBtn.addEventListener("click", function() {
    bubbleSort(cardsNumbers);
  });

    function bubbleSort(arr) {
    
        for (let wall = arr.length - 1; wall > 0; wall--){
            for (let i = 0; i <= wall; i++) {
                if (arr[i] > arr[i + 1]) {
                    
                    let aux = arr[i + 1];
                    arr[i + 1] = arr[i];
                    arr[i] = aux;
                    
                    let aux2 = cardLocation.children[i + 1].innerHTML;
                    cardLocation.children[i + 1].innerHTML = cardLocation.children[i].innerHTML;
                    cardLocation.children[i].innerHTML = aux2;
                }
            }
        }  
    }
};