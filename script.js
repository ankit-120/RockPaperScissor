let userScore = 0;
let compScore = 0;
document.getElementById('userLiveScore').innerText = userScore;
document.getElementById('compLiveScore').innerText = compScore;

const getResult = (v,r) =>{
    if((v==0)&&(r==2) || (v==1)&&(r==0) || (v==2)&&(r==1)){
        document.getElementById('response').innerText = "user + 1";
        userScore++;
        if(userScore>5){
            document.write("You win!!!");
        }
        document.getElementById('userLiveScore').innerText = userScore;
    }
    else if((v==0)&&(r==0) || (v==1)&&(r==1) || (v==2)&&(r==2)){
        document.getElementById('response').innerText = "no result";
    }
    else{
        document.getElementById('response').innerText = "computer + 1";
        compScore++;
        if(compScore>5){
            document.write("You loose!!!");
        }
        document.getElementById('compLiveScore').innerText = compScore;
    }
}
const mapValue = (value) =>{
    if(value==0){
        return 'rock';
    }
    if(value==1){
        return 'paper';
    }
    if(value==2){
        return 'scissor';
    }
}
const clickedRock = () =>{
    let value = document.getElementById('rock').value;
    let rand = Math.floor(Math.random()*3);
    document.getElementById('userChoise').innerText = mapValue(value); 
    document.getElementById('compChoise').innerText = mapValue(rand); 
    getResult(value,rand);
}
const clickedPaper = () =>{
    let value = document.getElementById('paper').value;
    let rand = Math.floor(Math.random()*3);
    document.getElementById('userChoise').innerText = mapValue(value); 
    document.getElementById('compChoise').innerText = mapValue(rand); 
    getResult(value,rand);
    
}
const clickedScissor = () =>{
    let value = document.getElementById('scissor').value;
    let rand = Math.floor(Math.random()*3);
    document.getElementById('userChoise').innerText = mapValue(value); 
    document.getElementById('compChoise').innerText = mapValue(rand); 
    getResult(value,rand);
}
