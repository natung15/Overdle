const heros =[   
    {"ANA"://ANA
        {"name":"ANA", "sex":"F", "age":60, "role":"SUPPORT", "nationality":"EGYPTIAN", "cc":true, "healing":true}
    },
   { "ASHE"://ASHE
        {"name":"ASHE", "sex":"F", "age":39, "role":"DAMAGE", "nationality":"AMERICAN", "cc":true, "healing":false}
   }
]

let Random = Math.floor(Math.random() * 2);
let RandomHero = heros[Random];
console.log(RandomHero);

for(let i=0;i<heros.length;i++){
    if(heros[i] == userGuess){//this checks for a correct input from the user. After this we can check if it matches the answer. If not then have it check for matching values 
        console.log("z")
    }
}

//figure out how i can input a name and see the similarities between the inputted character and the character that answer like if the answer is 
//ANA and I input Ashe how will i pull the information on ashe from the heros array and then compare them with ANA