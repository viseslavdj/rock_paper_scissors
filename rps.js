const buttons = document.querySelectorAll('.btn');
const output = document.querySelector('#output');
const ps = document.querySelector('#ps');
const cs = document.querySelector('#cs');
const container = document.querySelector('.container')
let p;
let c;
let brComp = 0;
let brPlayer = 0;

buttons.forEach((button) =>
    button.addEventListener('click', () =>{
        p = button.id;


        if (brComp <= 5 && brPlayer <= 5){
            playRound();
            if (brComp === 5){
                output.textContent ="Computer wins, please refresh to play again.";
                brComp = 6;;
            }
            else if (brPlayer === 5){
                output.textContent = "Player wins, please refresh to play again.";
                brPlayer = 6;
                //break;
            }
                
        }

        else {
            return;
        }
        
    })
);





function computerPlay(){
    const opt = ["rock","paper", "scissors"];
    let z =  opt[Math.floor(Math.random()* opt.length)];
    return z;
}


function playRound(){
    
    let poruka = '';
    
     c = computerPlay().toLowerCase();
   
     if (p === 'rock' && c === 'paper' || 
        p === 'paper' && c === 'scissors' ||
        p === 'scissors' && c === 'rock'){
            brComp = brComp +1;
            output.textContent = `You Lose, ${c} beats ${p}.`;
            cs.textContent = `Computer (live): ${brComp}`;
            ps.textContent = `Player (live): ${brPlayer}`;
            
            poruka = `You Lose, ${c} beats ${p}
            Computer score: ${brComp}
            Player score: ${brPlayer}
            FINAL`;
        }
    else if (p === 'rock' && c === 'scissors' || 
            p === 'paper' && c === 'rock' ||
            p === 'scissors' && c === 'paper'){
                brPlayer = brPlayer +1;
                output.textContent = `You Win, ${p} beats ${c}.`;
                cs.textContent = `Computer (live): ${brComp}`;
                ps.textContent = `Player (live): ${brPlayer}`;
                
                poruka = `You Win, ${p} beats ${c}.
                Computer score: ${brComp}
                Player score: ${brPlayer}
                FINAL`;
    } 
    else {
        output.textContent = "It's Tie";
        cs.textContent = `Computer (live): ${brComp}`;
        ps.textContent = `Player (live): ${brPlayer}`;
    }
    return poruka;
}

