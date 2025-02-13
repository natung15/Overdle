const ANA = {"name":"ANA", "sex":"F", "age":60, "role":"SUPPORT", "type":["HUMAN","HUMAN"], "cc":true, "healing":true};
const ASHE = {"name":"ASHE", "sex":"F", "age":39, "role":"DPS", "type":["HUMAN","HUMAN"], "cc":true, "healing":false};
const BAPTISTE = {"name":"BAPTISTE", "sex":"M", "age":36, "role":"SUPPORT", "type":["HUMAN","MODIFIED"], "cc":false, "healing":true};
const BASTION = {"name":"BASTION", "sex":"N/A", "age":30, "role":"DPS", "type":["OMNIC","OMNIC"], "cc":true, "healing":false};
const BRIGITTE = {"name":"BRIGITTE", "sex":"F", "age":23, "role":"SUPPORT", "type":["HUMAN","HUMAN"], "cc":true, "healing":true};
const CASSIDY = {"name":"CASSIDY", "sex":"M", "age":37, "role":"DPS", "type":["HUMAN","MODIFIED"], "cc":false, "healing":false};
const DVA = {"name":"DVA", "sex":"F", "age":19, "role":"TANK", "type":["HUMAN","HUMAN"], "cc":true, "healing":false};
const DOOMFIST = {"name":"DOOMFIST", "sex":"M", "age":45, "role":"TANK", "type":["HUMAN", "MODIFIED"], "cc":true, "healing":false};
const ECHO = {"name":"ECHO", "sex":"F", "age":29, "role":"DPS", "type":["OMNIC","OMNIC"], "cc":false, "healing":false}; // fix age bc unknown
const GENJI = {"name":"GENJI", "sex":"M", "age":35, "role":"DPS", "type":["HUMAN", "MODIFIED"], "cc":false, "healing":false};
const HANZO = {"name":"HANZO", "sex":"M", "age":38, "role":"DPS", "type":["HUMAN","HUMAN"], "cc":false, "healing":false};
const JUNKER_QUEEN = {"name":"JUNKER_QUEEN", "sex":"F", "age":35, "role":"TANK", "type":["HUMAN", "MODIFIED"], "cc":true, "healing":true};//modified?
const JUNKRAT = {"name":"JUNKRAT", "sex":"M", "age":25, "role":"DPS", "type":["HUMAN", "MODIFIED"], "cc":true, "healing":false};
const KIRIKO = {"name":"KIRIKO", "sex":"F", "age":23, "role":"SUPPORT", "type":["HUMAN","HUMAN"], "cc":true, "healing":true};
const LUCIO = {"name":"LUCIO", "sex":"M", "age":26, "role":"SUPPORT", "type":["HUMAN","HUMAN"], "cc":true, "healing":true};
const MEI = {"name":"MEI", "sex":"F", "age":31, "role":"DPS", "type":["HUMAN","HUMAN"], "cc":true, "healing":true};
const MERCY = {"name":"MERCY", "sex":"F", "age":37, "role":"SUPPORT", "type":["HUMAN", "ENHANCED"], "cc":false, "healing":true};
const MOIRA = {"name":"MOIRA", "sex":"F", "age":48, "role":"SUPPORT", "type":["HUMAN", "ENHANCED"], "cc":false, "healing":true};
const ORISA = {"name":"ORISA", "sex":"F", "age":1, "role":"TANK", "type":["OMNIC","OMNIC"], "cc":true, "healing":false};
const PHARAH = {"name":"PHARAH", "sex":"F", "age":32, "role":"DPS", "type":["HUMAN","HUMAN"], "cc":true, "healing":false};
//heros list
let heros = [ANA,ASHE,BAPTISTE, BASTION,BRIGITTE,CASSIDY,DVA,DOOMFIST,ECHO,GENJI,HANZO,JUNKER_QUEEN,JUNKRAT,KIRIKO,
LUCIO,MEI,MERCY,MOIRA,ORISA,PHARAH];
//console log of whats in the choices

console.log("your Options to choose from: ");
for(let i = 0; i < heros.length; i++){
console.log(heros[i].name);
}
let Random = Math.floor(Math.random() * heros.length);
let RandomHero = heros[Random];
console.log(RandomHero);//answer






let RandomHeroSex = RandomHero.sex;
let RandomHeroAge = RandomHero.age;
let RandomHeroRole = RandomHero.role;
let RandomHeroType = RandomHero.type;
let RandomHeroCC = RandomHero.cc;
let RandomHeroHealing = RandomHero.healing; 
let userGuess;
let databaseName;
let isHero = false;
let guessCount = 0;
let gamewinner = false;
let typeKeeper = "";
var table = document.getElementById("guessTable");
var row = table.insertRow(1);
var insertName = row.insertCell(0);
var insertGender = row.insertCell(1);
var insertAge = row.insertCell(2);
var insertRole = row.insertCell(3);
var insertType = row.insertCell(4);
var insertCC = row.insertCell(5);
var insertHealing = row.insertCell(6);
let guessName;
let guessGender;
let guessAge;
let guessRole;
let guessType;
let guessCC;
let guessHealing;






//ENTER PRESS
var input = document.getElementById("myText"); // when enter is pressed call the click function
input.addEventListener("keypress", function(event) {
    if(event.key === "Enter") {
        document.getElementById("myButton").click();
    }
});

// SUBMIT BUTTON 
document.getElementById("myButton").onclick = function(){//when the button is pressed
    isHero = false;
        userGuess = document.getElementById("myText").value;//userGuess = the input that they put in
        document.getElementById("myText").value = "";
    if(gamewinner == false){
        for(i=0;i<heros.length;i++){  
            if(heros[i].name == userGuess.toUpperCase()){//This checks if the guess is in the hero database
                isHero = true;
    
                if (userGuess.toUpperCase() == RandomHero.name) {//This checks if it matches the answer
                    typeKeeper = "";
                    console.log("WINNER!");
                    document.getElementById("h2").innerHTML = "Winner!";
                    document.getElementById("nameGuess").innerHTML = heros[i].name;
                    document.getElementById("genderGuess").innerHTML = "Same Sex";
                    document.getElementById("ageGuess").innerHTML = "Same Age";
                    document.getElementById("roleGuess").innerHTML = "They are a " + heros[i].role ;
                    if(heros[i].type[0] != heros[i].type[1]){
                        typeKeeper += heros[i].type[0];
                        typeKeeper += ", ";
                        typeKeeper += heros[i].type[1];
                        typeKeeper += " GREEN";
                    }
                }
            }
        }
    }
}


//REFRESH BUTTON
document.getElementById("refreshButton").onclick = function(){
    location.reload();
}
