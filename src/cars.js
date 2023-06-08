import { useState } from "react";


export const CarsComp = () => {

    const [cochesImportados, setCochesImportados] = useState([])
    const coches = [
        {
            name: "evory",
            imageUrl: "https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bk9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdA3g5gMEPvUZZEfSMJ6dESN8p_2SVTY7V2NgLwXUOmD4QPivs0XEwQPNjKtKAyQj6pufQSiOhMDPBfSffH1oxRbtdYGra9jWg4-jCFzjPRLolQAkGfKFRpjUcP9fTf0UrhthJr2CqqE1wHxEtL5RDKVruzixFab5ynnZHcpsHzCTzI5aLhV00bEFuWLjuVrjDPdXwkHs6HUQwCeYXZtYvDBHc",

        },
        {
            name: "hachiroku",
            imageUrl: "https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bk9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdA3g5gMEPvUZZEfSMJ6dESN8p_2SVTY7V2NgLwXUOmD4QPivs0XEwTeRvMMLUzw7u5-uAHXPyNWGUfXaKHwo-GeUPZ2_frDej7L6SE26fF-AlEAwGdfcC9WFNbJqBaxIjjsdc7We3hUB4DCkhf8RBdVLqzy1GZLl9nnkRcp1VnCPwc8HZhlpgOkZoDLzgUr7CZoGhkX1wCBozAeBEM53TtSdesNVlqQ"
        },
        {
            name: "spirit",
            imageUrl: "https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bk9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdA3g5gMEPvUZZEfSMJ6dESN8p_2SVTY7V2NgLwXUOmD4QPivs0XEwVvVlKsLShgz2oOWIQST2amfCLnKNSgs7T7VfPW-L-Dv05u2TEGyfQLl6Fw4AKaEH9G0fPZyXZVJqwtVUuWG9hXt0Excvd5gXdVbun3BLZ-Umn3dFcJxSzHHwJZHb119gPkJtXrrnX7zGbtPxxS9wQ1o5SLZcaYm3z9X7RQ"
        },
        {
            name: "reflect D",
            imageUrl: "https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bk9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdA3g5gMEPvUZZEfSMJ6dESN8p_2SVTY7V2NgLwXUOmD4QPivs0XEwV-BqNM7F1E7f5-uAHXPyNWPGLXfaSVprGLUKMWmK_mGn7L6TRD7BF-t_RQsAL6YD9jZObMuKOkMjjsdc7We3hUB4DCkhf8RBdVLqzy1GZLl9nnkRcp1VnCPwc8HZhlpgOkZoDLzgUr7CZoGhkX1wCBozAeBEM53TtSd3I2hRNQ"
        },
        {
            name: "reflect C",
            imageUrl: "https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bk9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdA3g5gMEPvUZZEfSMJ6dESN8p_2SVTY7V2NgLwXUOmD4QPivs0XEwV-BqNM7F1E7Y5-uAHXPyNTbGKSOLTgw7TOdZMTrb92L0tL-WQW3NFb4uRQtVfqNRpjYaOcuLaREjjsdc7We3hUB4DCkhf8RBdVLqzy1GZLl9nnkRcp1VnCPwc8HZhlpgOkZoDLzgUr7CZoGhkX1wCBozAeBEM53TtSeMOEObGw"
        },
        {
            name: "striker",
            imageUrl: "https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bk9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdA3g5gMEPvUZZEfSMJ6dESN8p_2SVTY7V2NgLwXUOmD4QPivs0XEwVvF-McDD0kPyrOOKGSmvbDWUfnaIRFhpRLQKMDrRqGH34--UFD2bRe4oSwpWfKoC9WYfb5vfIUh9g5FZpHe8klZCFxspdcAbIQrinyEXaet9y3ZEcp5VmXGlJpfchw1iahBuXbzlVrXCa4D3xHokCQQnQfcMIoaXgaOcWAU"
        },
        {
            name: "might",
            imageUrl: "https://steamcommunity-a.akamaihd.net/economy/image/IzMF03bk9WpSBq-S-ekoE33L-iLqGFHVaU25ZzQNQcXdA3g5gMEPvUZZEfSMJ6dESN8p_2SVTY7V2NgLwXUOmD4QPivs0XEwSOxrMN-AyQj6pufQRCD1OWDHfCKKRQc6S7BcPWCK_zGttriTFz-cF7stQgsHK6FSpGwbbtfTf0UrhthJr2CqqE1wHxEtL5RDKVruzixFab5ynnZHcpsHzCTzI5aLhV00bEFuWLjuVrjDPdXwkHs6HUQwCeYXZgiDiOGI"
        },
    
    ]





function map(val, minA, maxA, minB, maxB) {
  return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
}

function Card3D(card, ev) {
  let img = card.querySelector('img');
  let imgRect = card.getBoundingClientRect();
  let width = imgRect.width;
  let height = imgRect.height;
  let mouseX = ev.offsetX;
  let mouseY = ev.offsetY;
  let rotateY = map(mouseX, 0, 180, -25, 25);
  let rotateX = map(mouseY, 0, 250, 25, -25);
  let brightness = map(mouseY, 0, 250, 1.5, 0.5);
  
  img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  img.style.filter = `brightness(${brightness})`;
}

var cards = document.querySelectorAll('.card3d');

cards.forEach((card) => {
  card.addEventListener('mousemove', (ev) => {
    Card3D(card, ev);
  });
  
  card.addEventListener('mouseleave', (ev) => {
    let img = card.querySelector('img');
    
    img.style.transform = 'rotateX(0deg) rotateY(0deg)';
    img.style.filter = 'brightness(1)';
  });
});


const anyadiraCarro = (car) => {
    console.log(car)
    cochesImportados.push(car)
    console.log("coches:", cochesImportados)
}

const comprarCoches = () => {
    console.log(cochesImportados)
}


return (
    <div className="body">
      <h1>Coches</h1>

      <div className="tonto">
        {coches.map((car, index) => (
          <div className="card3d" key={index} onClick={() => anyadiraCarro(car)} >
            <img src={car.imageUrl} alt={car.name}  width="180" />
          </div>
        ))}
      </div>

      <button onClick={comprarCoches}>COMPRAR</button>
    </div>
    
  );
  

}