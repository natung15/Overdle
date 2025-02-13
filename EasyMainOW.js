//if human put human twice 
const ANA = {"name":"ANA", "sex":"F", "age":60, "role":"SUPPORT", "type":["HUMAN","HUMAN"], "cc":"Yes", "healing":"Yes"};
const ASHE = {"name":"ASHE", "sex":"F", "age":39, "role":"DPS", "type":["HUMAN","HUMAN"], "cc":"Yes", "healing":"No"};
const BAPTISTE = {"name":"BAPTISTE", "sex":"M", "age":36, "role":"SUPPORT", "type":["HUMAN","MODIFIED"], "cc":"No", "healing":"Yes"};
const BASTION = {"name":"BASTION", "sex":"N/A", "age":30, "role":"DPS", "type":["OMNIC","OMNIC"], "cc":"Yes", "healing":"No"};
const BRIGITTE = {"name":"BRIGITTE", "sex":"F", "age":23, "role":"SUPPORT", "type":["HUMAN","HUMAN"], "cc":"Yes", "healing":"Yes"};
const CASSIDY = {"name":"CASSIDY", "sex":"M", "age":37, "role":"DPS", "type":["HUMAN","MODIFIED"], "cc":"No", "healing":"No"};
const DVA = {"name":"DVA", "sex":"F", "age":19, "role":"TANK", "type":["HUMAN","HUMAN"], "cc":"Yes", "healing":"No"};
const DOOMFIST = {"name":"DOOMFIST", "sex":"M", "age":45, "role":"TANK", "type":["HUMAN", "MODIFIED"], "cc":"Yes", "healing":"No"};
const ECHO = {"name":"ECHO", "sex":"F", "age":29, "role":"DPS", "type":["OMNIC","OMNIC"], "cc":"No", "healing":"No"}; // fix age bc unknown
const GENJI = {"name":"GENJI", "sex":"M", "age":35, "role":"DPS", "type":["HUMAN", "MODIFIED"], "cc":"No", "healing":"No"};
const HANZO = {"name":"HANZO", "sex":"M", "age":38, "role":"DPS", "type":["HUMAN","HUMAN"], "cc":"No", "healing":"No"};
const JUNKER_QUEEN = {"name":"JUNKER QUEEN", "sex":"F", "age":35, "role":"TANK", "type":["HUMAN", "MODIFIED"], "cc":"Yes", "healing":"Yes"};//modified?
const JUNKRAT = {"name":"JUNKRAT", "sex":"M", "age":25, "role":"DPS", "type":["HUMAN", "MODIFIED"], "cc":"Yes", "healing":"No"};
const KIRIKO = {"name":"KIRIKO", "sex":"F", "age":23, "role":"SUPPORT", "type":["HUMAN","HUMAN"], "cc":"Yes", "healing":"Yes"};
const LUCIO = {"name":"LUCIO", "sex":"M", "age":26, "role":"SUPPORT", "type":["HUMAN","HUMAN"], "cc":"Yes", "healing":"Yes"};
const MEI = {"name":"MEI", "sex":"F", "age":31, "role":"DPS", "type":["HUMAN","HUMAN"], "cc":"Yes", "healing":"Yes"};
const MERCY = {"name":"MERCY", "sex":"F", "age":37, "role":"SUPPORT", "type":["HUMAN", "ENHANCED"], "cc":"No", "healing":"Yes"};
const MOIRA = {"name":"MOIRA", "sex":"F", "age":48, "role":"SUPPORT", "type":["HUMAN", "ENHANCED"], "cc":"No", "healing":"Yes"};
const ORISA = {"name":"ORISA", "sex":"F", "age":1, "role":"TANK", "type":["OMNIC","OMNIC"], "cc":"Yes", "healing":"No"};
const PHARAH = {"name":"PHARAH", "sex":"F", "age":32, "role":"DPS", "type":["HUMAN","HUMAN"], "cc":"Yes", "healing":"No"};
const RAMATTRA = {"name":"RAMATTRA", "sex":"M", "age":25, "role":"TANK", "type":["OMNIC","OMNIC"], "cc":"Yes", "healing":"No"};
const REAPER = {"name":"REAPER", "sex":"M", "age":58, "role":"DPS", "type":["HUMAN","ENHANCED"], "cc":"No", "healing":"Yes"};
const REINHARDT = {"name":"REINHARDT", "sex":"M", "age":61, "role":"TANK", "type":["HUMAN","HUMAN"], "cc":"Yes", "healing":"No"};
const ROADHOG = {"name":"ROADHOG", "sex":"M", "age":48, "role":"TANK", "type":["HUMAN","ENHANCED"], "cc":"Yes", "healing":"Yes"};
const SIGMA = {"name":"SIGMA", "sex":"M", "age":62, "role":"TANK", "type":["HUMAN","ENHANCED"], "cc":"Yes", "healing":"No"};
const SOJOURN = {"name":"SOJOURN", "sex":"F", "age":55, "role":"DPS", "type":["HUMAN","MODIFIED"], "cc":"No", "healing":"No"};//unknown age
const SOLDIER_76 = {"name":"SOLDIER 76", "sex":"M", "age":48, "role":"DPS", "type":["HUMAN","ENHANCED"], "cc":"Yes", "healing":"Yes"};
const SOMBRA = {"name":"SOMBRA", "sex":"F", "age":30, "role":"DPS", "type":["HUMAN","MODIFIED"], "cc":"Yes", "healing":"No"};
const SYMMETRA = {"name":"SYMMETRA", "sex":"F", "age":28, "role":"DPS", "type":["HUMAN","MODIFIED"], "cc":"Yes", "healing":"No"};
const TORBJORN = {"name":"TORBJORN", "sex":"M", "age":57, "role":"DPS", "type":["HUMAN","MODIFIED"], "cc":"No", "healing":"No"};
const TRACER = {"name":"TRACER", "sex":"F", "age":26, "role":"DPS", "type":["HUMAN","ENHANCED"], "cc":"No", "healing":"No"};
const WIDOWMAKER = {"name":"WIDOWMAKER", "sex":"F", "age":33, "role":"DPS", "type":["HUMAN","ENHANCED"], "cc":"No", "healing":"No"};
const WINSTON = {"name":"WINSTON", "sex":"M", "age":29, "role":"TANK", "type":["ANIMAL","ANIMAL"], "cc":"Yes", "healing":"No"};
const WRECKING_BALL = {"name":"WRECKING BALL", "sex":"M", "age":14, "role":"TANK", "type":["ANIMAL","ANIMAL"], "cc":"Yes", "healing":"No"};
const ZARYA = {"name":"ZARYA", "sex":"F", "age":28, "role":"TANK", "type":["HUMAN","HUMAN"], "cc":"Yes", "healing":"No"};
const ZENYATTA = {"name":"ZENYATTA", "sex":"M", "age":20, "role":"SUPPORT", "type":["OMNIC","OMNIC"], "cc":"Yes", "healing":"Yes"};

//heros list
let heros = [ANA,
ASHE,BAPTISTE, BASTION,BRIGITTE,CASSIDY,DVA,DOOMFIST,ECHO,GENJI,HANZO,JUNKER_QUEEN,JUNKRAT,KIRIKO,
LUCIO,MEI,MERCY,MOIRA,ORISA,PHARAH,RAMATTRA,REAPER,REINHARDT,ROADHOG,SIGMA,SOJOURN,SOLDIER_76,SOMBRA,SYMMETRA,TORBJORN,TRACER,
WIDOWMAKER,WINSTON,WRECKING_BALL,ZARYA,
ZENYATTA];
//console log of whats in the choices

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
let guessName;
let guessGender;
let guessAge;
let guessRole;
let guessType;
let guessCC;
let guessHealing;
let fullHeros = "";



console.log("your Options to choose from: ");
for(let i = 0; i < heros.length; i++){
console.log(heros[i].name);
fullHeros += heros[i].name + " ";
}


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
            if(guessCount > 0){
                var table = document.getElementById("guessTable");
                var row = table.insertRow(1);
                    var insertName = row.insertCell(0);
                    insertName.id = "insertName";
                    var insertGender = row.insertCell(1);
                    insertGender.id = "insertGender";
                    var insertAge = row.insertCell(2);
                    insertAge.id = "insertAge";
                    var insertRole = row.insertCell(3);
                    insertRole.id = "insertRole";
                    var insertType = row.insertCell(4);
                    insertType.id = "insertType";
                    var insertCC = row.insertCell(5);
                    insertCC.id = "insertCC";
                    var insertHealing = row.insertCell(6);
                    insertHealing.id = "insertHealing";

                    
            }
            if (userGuess.toUpperCase() == RandomHero.name) {//This checks if it matches the answer
                if(guessCount < 1){
                    typeKeeper = "";
                    console.log("WINNER!");
                    document.getElementById("h2").innerHTML = "Winner!";
                    document.getElementById("nameGuess").innerHTML = heros[i].name;
                    document.getElementById("nameGuess").style.backgroundColor = "green";
                    document.getElementById("genderGuess").innerHTML = heros[i].sex;
                    document.getElementById("genderGuess").style.backgroundColor = "green";
                    document.getElementById("ageGuess").innerHTML = "Same Age";
                    document.getElementById("ageGuess").style.backgroundColor = "green";
                    document.getElementById("roleGuess").innerHTML = heros[i].role;
                    document.getElementById("roleGuess").style.backgroundColor = "green";
                        if(heros[i].type[0] != heros[i].type[1]){
                            typeKeeper += heros[i].type[0];
                            typeKeeper += " ";
                            typeKeeper += heros[i].type[1];

                        }
                        else{
                            typeKeeper += heros[i].type[0];
                        }
                    document.getElementById("typeGuess").innerHTML = typeKeeper;
                    document.getElementById("typeGuess").style.backgroundColor = "green";
                    document.getElementById("ccGuess").innerHTML = heros[i].cc;
                    document.getElementById("ccGuess").style.backgroundColor = "green";
                    document.getElementById("healingGuess").innerHTML = "They have healing";
                    document.getElementById("healingGuess").style.backgroundColor = "green";
                    guessCount +=1;
                    document.getElementById("guessCount").innerHTML = guessCount;
                    gamewinner = true;
                    document.getElementById("playAgain").style.display = "inline";
                    }
                else{ // if not the first choice
                    typeKeeper = "";
                    console.log("WINNER!");
                    document.getElementById("h2").innerHTML = "Winner!";
                    insertName.innerHTML = heros[i].name;
                    document.getElementById("insertName").style.backgroundColor = "green";
                    insertGender.innerHTML = heros[i].sex;
                    document.getElementById("insertGender").style.backgroundColor = "green";
                    insertAge.innerHTML = heros[i].age;
                    document.getElementById("insertAge").style.backgroundColor = "green";
                    insertRole.innerHTML = heros[i].role;
                    document.getElementById("insertRole").style.backgroundColor = "green";
                    if(heros[i].type[0] != heros[i].type[1]){
                        typeKeeper += heros[i].type[0];
                        typeKeeper += " ";
                        typeKeeper += heros[i].type[1];
                    }
                    else{
                        typeKeeper += heros[i].type[0];

                    }
                    insertType.innerHTML = typeKeeper;
                    document.getElementById("insertType").style.backgroundColor = "green";
                    insertCC.innerHTML = heros[i].cc;
                    document.getElementById("insertCC").style.backgroundColor = "green";
                    insertHealing.innerHTML = heros[i].healing;
                    document.getElementById("insertHealing").style.backgroundColor = "green";
                    guessCount +=1;
                    document.getElementById("guessCount").innerHTML = guessCount;
                    gamewinner = true;
                    document.getElementById("playAgain").style.display = "inline";
                }
            }

            else{//if not the answer
                if(guessCount < 1){
                    guessCount +=1;
                    document.getElementById("guessCount").innerHTML = guessCount;
                    document.getElementById("nameGuess").innerHTML = heros[i].name; // change the chart values
                    document.getElementById("nameGuess").style.backgroundColor = "#8B0000";
                    //sex
                    if(RandomHero.sex == heros[i].sex){//checks matching sex
                        document.getElementById("genderGuess").innerHTML = heros[i].sex ;
                        document.getElementById("genderGuess").style.backgroundColor = "green";
                    }
                    else{
                        
                        document.getElementById("genderGuess").innerHTML = heros[i].sex ;
                        document.getElementById("genderGuess").style.backgroundColor = "#8B0000";
                    }
                    //age
                    if(RandomHero.age >= heros[i].age){//checks for age values and for greater and less than
                        if(RandomHero.age == heros[i].age){
                            document.getElementById("ageGuess").innerHTML = heros[i].age;
                            document.getElementById("ageGuess").style.backgroundColor = "green";
                        }
                        else{
                            document.getElementById("ageGuess").innerHTML = heros[i].age + " ↑ ";
                            document.getElementById("ageGuess").style.backgroundColor = "#8B0000";
                            }
                    }
                    else{
                        document.getElementById("ageGuess").innerHTML = heros[i].age + " ↓ ";
                        document.getElementById("ageGuess").style.backgroundColor = "#8B0000";
                    }
                    //role
                    if(RandomHero.role == heros[i].role){//checks for matching roles
                        document.getElementById("roleGuess").innerHTML = heros[i].role;
                        document.getElementById("roleGuess").style.backgroundColor = "green";
                        }
                    else{
                        document.getElementById("roleGuess").innerHTML = heros[i].role;
                        document.getElementById("roleGuess").style.backgroundColor = "#8B0000";
                    }
                    //type
                    typeKeeper = "";
                    let matches = 0;
                    for(let j = 0; j < heros[i].type.length; j++){
                        if((heros[i].type[j]) != (heros[i].type[j-1])){
                        typeKeeper += heros[i].type[j];
                        typeKeeper += " ";
                        }

                        if(RandomHero.type[j] == heros[i].type[j]){
                            matches += 1;
                        }
                    }
                    if(matches == RandomHero.type.length){
                        document.getElementById("typeGuess").style.backgroundColor = "green";
                    }
                    else if(matches > 0){
                        document.getElementById("typeGuess").style.backgroundColor = "#8B8000";
                    }
                    else{
                        document.getElementById("typeGuess").style.backgroundColor = "#8B0000";
                    }
                    document.getElementById("typeGuess").innerHTML = typeKeeper;
                    //cc
                    if(RandomHero.cc == heros[i].cc){//checks for matching roles
                        document.getElementById("ccGuess").innerHTML = heros[i].cc;
                        document.getElementById("ccGuess").style.backgroundColor = "green";
                    }
                    else{
                        document.getElementById("ccGuess").innerHTML = heros[i].cc ;
                        document.getElementById("ccGuess").style.backgroundColor = "#8B0000";
                    }
                    //healing
                    if(RandomHero.healing == heros[i].healing){//checks for matching roles
                        document.getElementById("healingGuess").innerHTML = heros[i].healing ;
                        document.getElementById("healingGuess").style.backgroundColor = "green";
                    }
                    else{
                        document.getElementById("healingGuess").innerHTML = heros[i].healing;
                        document.getElementById("healingGuess").style.backgroundColor = "#8B0000";
                    }
                    heros.splice(i,1);
                }
                else{// if not the answer second page
                    typeKeeper = "";
                    guessCount +=1;
                    document.getElementById("guessCount").innerHTML = guessCount;
                    insertName.innerHTML = heros[i].name;
                    document.getElementById("insertName").style.backgroundColor = "#8B0000";
                    if(RandomHero.sex == heros[i].sex){//checks matching sex
                        insertGender.innerHTML = heros[i].sex ;
                        document.getElementById("insertGender").style.backgroundColor = "green";
                    }
                    else{
                        insertGender.innerHTML = heros[i].sex;
                        document.getElementById("insertGender").style.backgroundColor = "#8B0000";
                    }

                    if(RandomHero.age >= heros[i].age){//checks for age values and for greater and less than
                        if(RandomHero.age == heros[i].age){
                            insertAge.innerHTML = heros[i].age ;
                            document.getElementById("insertAge").style.backgroundColor = "green";
                        }
                        else{
                            insertAge.innerHTML = heros[i].age + " ↑";
                            document.getElementById("insertAge").style.backgroundColor = "#8B0000";
                            }
                    }
                    else{
                        insertAge.innerHTML = heros[i].age + " ↓";
                        document.getElementById("insertAge").style.backgroundColor = "#8B0000";
                    }
                    if(RandomHero.role == heros[i].role){//checks for matching roles
                        insertRole.innerHTML = heros[i].role;
                        document.getElementById("insertRole").style.backgroundColor = "green";
                        }
                    else{
                        insertRole.innerHTML = heros[i].role;
                        document.getElementById("insertRole").style.backgroundColor = "#8B0000";
                    }
                    let matches = 0;
                    for(let j = 0; j < heros[i].type.length; j++){
                        if((heros[i].type[j]) != (heros[i].type[j-1])){
                        typeKeeper += heros[i].type[j];
                        typeKeeper += " ";
                        }

                        if(RandomHero.type[j] == heros[i].type[j]){
                            matches += 1;
                        }
                    }
                    if(matches == RandomHero.type.length){
                        document.getElementById("insertType").style.backgroundColor = "green";
                    }
                    else if(matches > 0){
                        document.getElementById("insertType").style.backgroundColor = "#8B8000";
                    }
                    else{
                        document.getElementById("insertType").style.backgroundColor = "#8B0000";
                    }
                    insertType.innerHTML = typeKeeper;
                     //cc
                     if(RandomHero.cc == heros[i].cc){//checks for matching roles
                        insertCC.innerHTML = heros[i].cc;
                        document.getElementById("insertCC").style.backgroundColor = "green";
                    }
                    else{
                        insertCC.innerHTML = heros[i].cc;
                        document.getElementById("insertCC").style.backgroundColor = "#8B0000";
                    }
                     //healing
                     if(RandomHero.healing == heros[i].healing){//checks for matching roles
                        insertHealing.innerHTML = heros[i].healing ;
                        document.getElementById("insertHealing").style.backgroundColor = "green";
                    }
                    else{
                        insertHealing.innerHTML = heros[i].healing ;
                        document.getElementById("insertHealing").style.backgroundColor = "#8B0000";
                    }
                    heros.splice(i,1);
                }
            }

        }
    }
    fullHeros = "";
    for(i=0;i<heros.length;i++){
        fullHeros += heros[i].name + " ";
    }
    //document.getElementById("h3").innerHTML = fullHeros;
    if(isHero == false){
        console.log("Invalid input!");
    } 
}  
 
    //document.getElementById("myLabel").innerHTML = "Incorrect, Guess Again.."
}
//REFRESH BUTTON
document.getElementById("refreshButton").onclick = function(){
    location.reload();
}

//show all characters
document.getElementById("revealButton").onclick = function(){
document.getElementById("revealButton").style.display = "none";
document.getElementById("h3").innerHTML = fullHeros;

}

//finishback button
document.getElementById("backButton").onclick = function(){

}





  