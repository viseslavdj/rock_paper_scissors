
let brComp = 0;
let brPlayer = 0;



function computerPlay(){
    const opt = ["rock","paper", "scissors"];
    let z =  opt[Math.floor(Math.random()* opt.length)];
    return z;
}


function playRound(){
    let p;
    let c;
    
    let poruka = '';
    
    while(brComp < 5 && brPlayer < 5){
     p = prompt("Unesi izbor(paper, rock, scissors)").toLowerCase();
     c = computerPlay().toLowerCase();
     console.log("Player: " + p);
     console.log("Computer: " + c);
    
     if (p === 'rock' && c === 'paper' || 
        p === 'paper' && c === 'scissors' ||
        p === 'scissors' && c === 'rock'){
            brComp = brComp +1;
            console.log(`You Lose, ${c} beats ${p}.
            Computer (live): ${brComp}
            Player (live): ${brPlayer}`);
            

            poruka = `You Lose, ${c} beats ${p}
            Computer score: ${brComp}
            Player score: ${brPlayer}
            FINAL`;
        }
    else if (p === 'rock' && c === 'scissors' || 
            p === 'paper' && c === 'rock' ||
            p === 'scissors' && c === 'paper'){
                brPlayer = brPlayer +1;
                console.log(`You Win, ${p} beats ${c}.
                Computer (live): ${brComp}
                Player (live): ${brPlayer}`);

                poruka = `You Win, ${p} beats ${c}.
                Computer score: ${brComp}
                Player score: ${brPlayer}
                FINAL`;
    } 
    else {
        console.log("It's Tie")
    }
    }
    return poruka;
}

console.log(playRound());
