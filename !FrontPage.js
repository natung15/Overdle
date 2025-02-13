basic = "Welcome to Overdle! Choose a difficulty to play!";

document.getElementById("easyDifficulty").onmouseover = function(){
document.getElementById("difficultyDescription").innerHTML = "Easy: The easiest mode, meant for new players.";
//document.getElementById("easyDifficulty").style.backgroundColor = "grey";
//document.getElementById("difficultySelect").style.background = "grey";
//document.getElementById("easyDifficulty").style.borderColor = "grey";

}

document.getElementById("easyDifficulty").onmouseout = function(){
    document.getElementById("difficultyDescription").innerHTML = basic;
    //document.getElementById("easyDifficulty").style.backgroundColor = "rgb(54, 54, 64)";
    //document.getElementById("difficultySelect").style.background = "rgb(31, 31, 37)";
    //document.getElementById("easyDifficulty").style.borderColor = "rgb(54, 54, 64)";
}

document.getElementById("mediumDifficulty").onmouseover = function(){
    document.getElementById("difficultyDescription").innerHTML = "Medium: Moderate difficulty, meant for the casual Overwatch players.";
   // document.getElementById("mediumDifficulty").style.backgroundColor = "grey";
   // document.getElementById("difficultySelect").style.background = "grey";
   // document.getElementById("mediumDifficulty").style.borderColor = "grey";
}

document.getElementById("mediumDifficulty").onmouseout = function(){
    document.getElementById("difficultyDescription").innerHTML = basic;
   // document.getElementById("mediumDifficulty").style.backgroundColor = "rgb(54, 54, 64)";
   // document.getElementById("difficultySelect").style.background = "rgb(31, 31, 37)";
   // document.getElementById("mediumDifficulty").style.borderColor = "rgb(54, 54, 64)";

}

document.getElementById("hardDifficulty").onmouseover = function(){
    document.getElementById("difficultyDescription").innerHTML = "Hard: For a challenge, meant for the Overwatch lore wiz.";
   // document.getElementById("hardDifficulty").style.backgroundColor = "grey";
   // document.getElementById("difficultySelect").style.background = "grey";
   // document.getElementById("hardDifficulty").style.borderColor = "grey";
}

document.getElementById("hardDifficulty").onmouseout = function(){
    document.getElementById("difficultyDescription").innerHTML = basic;
  //  document.getElementById("hardDifficulty").style.backgroundColor = "rgb(54, 54, 64)";
    //document.getElementById("difficultySelect").style.background = "rgb(31, 31, 37)";
    //document.getElementById("hardDifficulty").style.borderColor = "rgb(54, 54, 64)";

}

document.getElementById("easyDifficulty").onclick = function(){
    location.href = "EasyOverdle.html";
}

document.getElementById("mediumDifficulty").onclick = function(){
    location.href = "MediumOverdle.html";
}

document.getElementById("hardDifficulty").onclick = function(){
    location.href = "HardOverdle.html";
}