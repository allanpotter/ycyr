
document.getElementById("lang-en").onclick = function englishFruit(){
    document.body.style.backgroundColor = "white";
    document.getElementById("movi").style.display="block";
    document.getElementById("lang").style.display = "block";
    document.getElementById("skipMovie").style.display = "none"
    document.getElementById("title").innerHTML = "Fruit Guessr";
    document.getElementById("title").style.color = "blue";   
    document.getElementById("imagesMovie").style.display = "none"
    
    
    document.getElementById("lang").style.border = "transparent";
const fruitInput = document.getElementById("fruitInput");
const fruits = ["grapes","melon", "blueberry","apple","banana","watermelon","peach","coconut","strawberry","lemon","papaya","mango","orange","plum","pineapple", "kiwi", "barbados cherry","cherry","dragonfruit" ];
const fruitButton = document.getElementById("fruitButton");
const fruitLabel = document.getElementById("fruitLabel");
const fruitImages = document.getElementById("imagess");
const tryGuess = document.getElementById("tryGuess");
const images = [];
const numbers = [];
const labb = document.getElementById("labb");
let points = 0;
let fruitIndex  =  Math.floor(Math.random()* fruits.length); 

fruitButton.innerHTML = "Start";
tryGuess.innerHTML = "Guess";

fruitButton.addEventListener("click", function(){
    tryGuess.innerText = "Guess!";
    document.getElementById("skipMovie").disabled = false;
    tryGuess.disabled = false;
    fruitIndex =Math.floor(Math.random()* fruits.length); 
    images.push(`<img id="imagesFr" src="fruit_images/${(fruitIndex)}.jpg">`);
    fruitLabel.innerHTML = "";
    fruitImages.innerHTML = images;
    numbers.push(fruits[fruitIndex]);
    console.log(numbers);
    document.getElementById("attention").innerHTML = "";
    labb.style.backgroundColor = "transparent";
    labb.style.display = "none"
    document.getElementById("alert").style.display = "none"

    if(numbers.length >= 1){
        numbers.pop();
    }
    if(images.length >= 1){
        images.pop();
    }
    fruitButton.innerText = "Randomize!";
    fruitInput.value = "";
    
})

tryGuess.addEventListener("click", function(){
    if(fruitInput.value === fruits[fruitIndex]){
        points ++;
        fruitLabel.innerHTML = "You did it, " + "You have: " + points + " points";
        labb.style.display = "block"
        document.getElementById("alert").style.display = "none"

        fruitButton.innerText = "Next!";
        labb.style.backgroundColor = "green";
        if(points === 1){
            fruitLabel.innerHTML = "You did it, " + "You have: " + points + " point";
        }
        if(points ===10){
            fruitLabel.innerHTML = "Amazing! " + "You have: " + points + " points";
        }
        
    }
    else{
    fruitLabel.innerHTML = "You lost, " + "You made: " + points + " points";
    fruitButton.innerText = "Reset";
    points =0;
    labb.style.display = "block"
    labb.style.backgroundColor = "red";
    document.getElementById("attention").innerHTML = "Remember to write in lowercase";
    document.getElementById("alert").style.display = "block"

} 
})
}




document.getElementById("lang").onclick = function(){
    document.getElementById("band").style.scale = "1.5px";
    document.getElementById("lang-en").style.border = "transparent";
    document.getElementById("title").style.color = "green";   
    document.getElementById("lang").style.display = "block";
    const fruitInput = document.getElementById("fruitInput");
const fruits = ["uva","melão", "mirtilo","maçã","banana","melancia","pêssego","coco","morango","limão","mamão","manga","laranja","ameixa","abacaxi","kiwi", "acerola","cereja","pitaya" ];
const fruitButton = document.getElementById("fruitButton");
const fruitLabel = document.getElementById("fruitLabel");
const fruitImages = document.getElementById("imagess");
const tryGuess = document.getElementById("tryGuess");
const imagesMovies = [];
const numbers = [];
const labb = document.getElementById("labb");
let points = 0;
let fruitIndex  =  Math.floor(Math.random()* fruits.length); 


fruitButton.innerHTML = "Começar";
tryGuess.innerHTML = "Tentar";

fruitButton.addEventListener("click", function(){
    fruitIndex =Math.floor(Math.random()* fruits.length); 
    imagesMovies.push(`<img id="imagesFr" src="fruit_images/${(fruitIndex)}.jpg">`);
    fruitLabel.innerHTML = "";
    fruitImages.innerHTML = images;
    numbers.push(fruits[fruitIndex]);
    console.log(numbers);
    document.getElementById("attention").innerHTML = "";
    labb.style.backgroundColor = "transparent";
    labb.style.display = "none"
    document.getElementById("alert").style.display = "none"

    if(numbers.length >= 1){
        numbers.pop();
    }
    if(images.length >= 1){
        images.pop();
    }
    fruitButton.innerText = "Aleatório!";
    fruitInput.value = "";
    tryGuess.innerHTML = "Adivinhar"
    


})
tryGuess.addEventListener("click", function(){
    if(fruitInput.value === fruits[fruitIndex]){
        points ++;
        fruitLabel.innerHTML = "Você conseguiu, " + "Você tem: " + points + " pontos";
        labb.style.display = "block"
        fruitButton.innerText = "Proximo";
        labb.style.backgroundColor = "green";
        document.getElementById("alert").style.display = "none"

        if(points === 1){
            fruitLabel.innerHTML = "Você conseguiu, " + "Você tem: " + points + " ponto";
        }
        if(points ===10){
            fruitLabel.innerHTML = "Incrivel! " + "Você tem: " + points + " pontos";
        }
        
    }
    else{
    fruitLabel.innerHTML = "Você perdeu, " + "Você fez: " + points + " pontos";
    fruitButton.innerText = "Resetar";
    points =0;
    labb.style.display = "block"
    labb.style.backgroundColor = "red";
    document.getElementById("attention").innerHTML = "Lembre-se de escrever tudo minúsculo!";
    document.getElementById("alert").style.display = "block"

} 
})
}

document.getElementById("movies").onclick = function (){
    document.getElementById("movi").style.display="none";    document.getElementById("skipMovie").style.display = "block"
    document.body.style.backgroundColor = "#0a0a23";
    document.getElementById("title").style.color = "white";
    document.getElementById("title").innerHTML = "Movie Guessr";
    document.getElementById("lang-en").style.border = "transparent";
    document.getElementById("lang-en").style.backgroundColor = "transparent";
    document.getElementById("lang").style.display = "none";
   
const fruitInput = document.getElementById("fruitInput");
const fruits = [
 "piratas do caribe", 
"harry potter e o calice de fogo", 
"senhor dos anéis",
"bastardos inglórios",
"trem bala",
 "o regresso", 
 "o rei leão",
 "irmão urso",
 "titanic",
 "o brilho eterno de uma mente sem lembranças",
 "mario",
 "tintin",
 "divertidamente",
 "jurassic park",
 "animais fantasticos",
 "de volta para o futuro",
 "vida de inseto","encanto", 
 "o lobo de wall street", 
 "não olhe para cima",
 "shrek para sempre",
 "clube da luta",
 "la la land",
 "harry potter e a pedra filosofal",
 "peter pan",
 "luca",
 "interstelar",
 "para todos os garotos que ja amei",
  "superbad", 
  "scott pilgrim",
  "capitão américa guerra civil"];
const fruitButton = document.getElementById("fruitButton");
const fruitLabel = document.getElementById("fruitLabel");
const fruitImages = document.getElementById("imagess");
const tryGuess = document.getElementById("tryGuess");
const images = [];
const numbers = [];


const labb = document.getElementById("labb");
let points = 0;
let fruitIndex  =  Math.floor(Math.random()* fruits.length); 
 document.getElementById("skipMovie").disabled = false;
tryGuess.disabled = false;
document.getElementById("alert").style.display = "none";
labb.style.display = "none"
fruitButton.innerHTML = "Começar";
tryGuess.innerHTML = "Adivinhar";


fruitButton.addEventListener("click", function(){
    tryGuess.innerText = "Adivinhar!";
     document.getElementById("skipMovie").disabled = false;
     tryGuess.disabled = false;
    fruitIndex =Math.floor(Math.random()* fruits.length); 
    images.push(`<img width="50px" id="imagesMovie" src="Filmes/${(fruitIndex)}.jpg">`);
    fruitLabel.innerHTML = "";
    fruitImages.innerHTML = images;
    numbers.push(fruits[fruitIndex]);
    console.log(numbers);
    document.getElementById("attention").innerHTML = "";
    labb.style.backgroundColor = "transparent";
    labb.style.display = "none"
    document.getElementById("alert").style.display = "none"
   

    if(numbers.length >= 1){
        numbers.pop();
    }
    if(images.length >= 1){
        images.pop();
    }
    fruitButton.innerText = "Resetar";
    fruitInput.value = "";
    
})
document.getElementById("skipMovie").addEventListener("click", function(){
    points--;
    fruitIndex =Math.floor(Math.random()* fruits.length); 
    images.push(`<img  id="imagesMovie" src="Filmes/${(fruitIndex)}.jpg">`);
    fruitLabel.innerHTML = "";
    fruitImages.innerHTML = images;
    numbers.push(fruits[fruitIndex]);
    console.log(numbers);
    document.getElementById("attention").innerHTML = "";
    labb.style.backgroundColor = "transparent";
    labb.style.display = "none"
    document.getElementById("alert").style.display = "none"

    if(numbers.length >= 1){
        numbers.pop();
    }
    if(images.length >= 1){
        images.pop();
    }
    fruitButton.innerText = "Pular";
    fruitInput.value = "";
})




tryGuess.addEventListener("click", function(){
    if(fruitInput.value === fruits[fruitIndex]){
        points ++;
        fruitLabel.innerHTML = "Boa!, " + "Você tem: " + points + " pontos";
        labb.style.display = "block"
        document.getElementById("alert").style.display = "none"

        fruitButton.innerText = "Proximo Filme!";
        
        labb.style.backgroundColor = "green";
        if(points === 1){
            fruitLabel.innerHTML = "Boa!, " + "Você tem: " + points + " ponto";
        }
        if(points ===10){
            fruitLabel.innerHTML = "Boa!, " + "Você tem: " + points + " ponto";
        }
        
    }
    else{
    fruitLabel.innerHTML = "Perdeu!, " + "Você fez: " + points + " pontos";
    fruitButton.innerText = "Resetar!";
    points = points;
    labb.style.display = "block"
    labb.style.backgroundColor = "red";
    document.getElementById("attention").innerHTML = "Lembre-se de escrever em letras minúsculas!";
    document.getElementById("alert").style.display = "block"
     tryGuess.innerText = "Resete o jogo!";
     document.getElementById("skipMovie").disabled = true;
     tryGuess.disabled = true;

}} )}