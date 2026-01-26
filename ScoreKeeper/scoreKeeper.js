const tennis=  document.getElementById("tennis");
const cricket=  document.getElementById("cricket");

const questions= document.createElement("div");
questions.className= "quickQuestions";

const heading= document.createElement("h2");
heading.innerText= "Quick Questions!";
questions.appendChild(heading);

const setsLabel= document.createElement("span");
const threeSets= document.createElement("button");
const fiveSets= document.createElement("button");
threeSets.id= "sets3Btn";
fiveSets.id= "sets5Btn";
setsLabel.innerText= "Number of Sets: ";
threeSets.innerText= "Best of 3";
fiveSets.innerText= "Best of 5";

questions.appendChild(setsLabel);
questions.appendChild(threeSets);
questions.appendChild(fiveSets);
questions.appendChild(document.createElement("br"));

const p1= document.createElement("span");
p1.innerText= "Player 1 Name: ";
// p1.for= "p1Name";
const p1Input= document.createElement("input");
p1Input.type= "text";
// p1Input.name= "p1Name";
p1Input.placeholder= "Player 1";
p1.appendChild(p1Input);
questions.appendChild(p1);
questions.appendChild(document.createElement("br"));
questions.appendChild(document.createElement("br"));

const p2= document.createElement("span");
p2.innerText= "Player 2 Name: ";
// p2.for= "p2Name";
const p2Input= document.createElement("input");
p2Input.type= "text";
// p2Input.name= "p2Name";
p2Input.placeholder= "Player 2";
p2.appendChild(p2Input);
questions.appendChild(p2);
questions.appendChild(document.createElement("br"));
questions.appendChild(document.createElement("br"));
questions.appendChild(document.createElement("br"));


const service= document.createElement("span");
service.innerText= "Who Serves First: ";
const p1ServiceBtn= document.createElement("button");
const p2ServiceBtn= document.createElement("button");
p1ServiceBtn.id= "p1ServiceBtn";
p2ServiceBtn.id= "p2ServiceBtn";
p1ServiceBtn.innerText= "Player 1 Serves";
p2ServiceBtn.innerText= "Player 2 Serves";

questions.appendChild(service);
questions.appendChild(p1ServiceBtn);
questions.appendChild(p2ServiceBtn);
questions.appendChild(document.createElement("br"));

const qSubmit= document.createElement("button");
qSubmit.id= "qSubmit1";
qSubmit.innerText= "Submit";

questions.appendChild(qSubmit);

tennis.addEventListener("click", function() {
    document.body.appendChild(questions);
    questions.scrollIntoView({behavior: "smooth" });
});


let numSets= 0;
threeSets.addEventListener("click", function() {
    numSets= 3;
    threeSets.id+= "Clicked";
    fiveSets.disabled= true;
});

fiveSets.addEventListener("click", function() {
    numSets= 5;
    fiveSets.id+= "Clicked";
    threeSets.disabled= true;
});

let currentServe;

p1ServiceBtn.addEventListener("click", function() {
    currentServe= 1;
    p1ServiceBtn.id+= "Clicked";
    p2ServiceBtn.disabled= true;
});

p2ServiceBtn.addEventListener("click", function() {
    currentServe= 2;
    p2ServiceBtn.id+= "Clicked";
    p1ServiceBtn.disabled= true;
});


const scoreboard= document.createElement("div");
scoreboard.id= "scoreboard";

const scoretable= document.createElement("table");

const topRow= document.createElement("tr");
// const bottomRow= document.createElement("tr");

const banner= document.createElement("td");
banner.colSpan= "2";

topRow.appendChild(banner);
// bottomRow.appendChild(banner.cloneNode(true));


const p1scores= document.createElement("tr");
const p2scores= document.createElement("tr");


const service1= document.createElement("td");
service1.id= "p1Service";
p1scores.appendChild(service1);

const service2= service1.cloneNode(true);
service2.id= "p2Service"
p2scores.appendChild(service2);


const p1NameDisplay= document.createElement("th");
p1scores.appendChild(p1NameDisplay);

const p2NameDisplay= document.createElement("th");
p2scores.appendChild(p2NameDisplay);


const p1set1= document.createElement("td");
p1set1.id= "p1Set1";
p1set1.innerText= "0";
p1scores.appendChild(p1set1);

const p2set1= document.createElement("td");
p2set1.id= "p2Set1";
p2set1.innerText= "0";
p2scores.appendChild(p2set1);

const p1pointsDisplay= document.createElement("td");
p1pointsDisplay.id= "p1Points";
p1pointsDisplay.innerText= "0";
p1scores.appendChild(p1pointsDisplay);

const p2pointsDisplay= document.createElement("td");
p2pointsDisplay.id= "p2Points";
p2pointsDisplay.innerText= "0";
p2scores.appendChild(p2pointsDisplay);


scoretable.appendChild(topRow);
scoretable.appendChild(p1scores);
scoretable.appendChild(p2scores);
// scoretable.appendChild(bottomRow);

scoreboard.appendChild(scoretable);

const scoreButtons= document.createElement("div");

scoreButtons.id= "scoreButtons";
const p1ScoreBtn= document.createElement("button");
p1ScoreBtn.id= "p1ScoreBtn";
p1ScoreBtn.innerText= "Player 1 Scores"
const p2ScoreBtn= document.createElement("button");
p2ScoreBtn.id= "p2ScoreBtn";
p2ScoreBtn.innerText= "Player 2 Scores"
const resetBtn= document.createElement("button");
resetBtn.id= "resetBtn";
resetBtn.innerText= "Reset Game";

scoreButtons.appendChild(p1ScoreBtn);
scoreButtons.appendChild(p2ScoreBtn);
scoreButtons.appendChild(resetBtn);



qSubmit.addEventListener("click", function() {
    if (!numSets || !currentServe) {
        alert("Please answer all questions before submitting.");
        return;
    }

    p1NameDisplay.innerHTML = p1Input.value || "Player 1";
    p2NameDisplay.innerHTML = p2Input.value || "Player 2";

    if(currentServe==1){
        service1.innerText= "🎾";
    }else{
        service2.innerText= "🎾";
    }

    document.body.appendChild(scoreboard);
    document.body.appendChild(scoreButtons);
    scoreboard.scrollIntoView({behavior: "smooth" });
});



const questions2= document.createElement("div");
questions2.className= "quickQuestions";

const heading2= document.createElement("h2");
heading2.innerText= "Quick Questions!";
questions2.appendChild(heading2);

const overLabel= document.createElement("span");
overLabel.innerHTML= "Choose Overs:"
const tenOs= document.createElement("button");
const twentyOs= document.createElement("button");
const fiftyOs= document.createElement("button");

tenOs.id= "tenOs";
twentyOs.id= "twentyOs";
fiftyOs.id= "fiftyOs";
tenOs.innerText= "10 Overs";
twentyOs.innerText= "20 Overs";
fiftyOs.innerText= "50 Overs";

questions2.appendChild(overLabel);
questions2.appendChild(tenOs);
questions2.appendChild(twentyOs);
questions2.appendChild(fiftyOs);
questions2.appendChild(document.createElement("br"));

const teamLabel= document.createElement("span");
teamLabel.innerHTML= "Choose Your Team:"
teamLabel.for= "teamName";

const dropDown= document.createElement("select");
dropDown.name= "teamName";
const ind= document.createElement("option");
const sa= document.createElement("option");
const eng= document.createElement("option");
const nz= document.createElement("option");
const aus= document.createElement("option");
const sl= document.createElement("option");
ind.innerText= "India";
sa.innerText= "South Africa";
eng.innerText= "England";
nz.innerText= "New Zealand";
aus.innerText= "Australia";
sl.innerText= "Sri Lanka";
ind.value= "INDIA";
sa.value= "SOUTH AFRICA";
eng.value= "ENGLAND";
nz.value= "NEW ZEALAND";
aus.value= "AUSTRALIA";
sl.value= "SRI LANKA";


dropDown.appendChild(ind);
dropDown.appendChild(sa);
dropDown.appendChild(eng);
dropDown.appendChild(nz);
dropDown.appendChild(aus);
dropDown.appendChild(sl);
questions2.appendChild(teamLabel);
questions2.appendChild(dropDown);
questions2.appendChild(document.createElement("br"));
questions2.appendChild(document.createElement("br"));

const b1= document.createElement("span");
b1.innerText= "Batter 1 Name: ";
const b1Input= document.createElement("input");
b1Input.type= "text";
// p1Input.name= "b1Name";
b1Input.placeholder= "Batter 1";

const b2= document.createElement("span");
b2.innerText= "Batter 2 Name: ";
const b2Input= document.createElement("input");
b2Input.type= "text";
// p1Input.name= "b1Name";
b2Input.placeholder= "Batter 2";


const striker= document.createElement("span");
striker.innerText= "First Strike:"

const b1StrikeBtn= document.createElement("button");
const b2StrikeBtn= document.createElement("button");
b1StrikeBtn.id= "b1StrikeBtn";
b2StrikeBtn.id= "b1StrikeBtn";
b1StrikeBtn.innerText= "Batter 1";
b2StrikeBtn.innerText= "Batter 2";


const bow= document.createElement("span");
bow.innerText= "Bowler Name: ";
const bowInput= document.createElement("input");
bowInput.type= "text";
bowInput.placeholder= "Bowler";

questions2.appendChild(b1);
questions2.appendChild(b1Input);
questions2.appendChild(document.createElement("br"));
questions2.appendChild(b2);
questions2.appendChild(b2Input);
questions2.appendChild(document.createElement("br"));
questions2.appendChild(document.createElement("br"));

questions2.appendChild(striker);
questions2.appendChild(b1StrikeBtn);
questions2.appendChild(b2StrikeBtn);
questions2.appendChild(document.createElement("br"));

questions2.appendChild(bow);
questions2.appendChild(bowInput);
questions2.appendChild(document.createElement("br"));
questions2.appendChild(document.createElement("br"));

const qSubmit2= document.createElement("button");
qSubmit2.id= "qSubmit2";
qSubmit2.innerText= "Submit";

questions2.appendChild(qSubmit2);

cricket.addEventListener("click", function(){
    document.body.appendChild(questions2);
    questions2.scrollIntoView({behavior: "smooth" });
});

let numOvers;
tenOs.addEventListener("click", function(){
    numOvers= 10;
    tenOs.id+= "Clicked";
    twentyOs.disabled= true;
    fiftyOs.disabled= true;
});

twentyOs.addEventListener("click", function(){
    numOvers= 20;
    twentyOs.id+= "Clicked";
    tenOs.disabled= true;
    fiftyOs.disabled= true;
});

fiftyOs.addEventListener("click", function(){
    numOvers= 50;
    fiftyOs.id+= "Clicked";
    tenOs.disabled= true;
    twentyOs.disabled= true;
});

let currentStrike;

b1StrikeBtn.addEventListener("click", function(){
    currentStrike= 1;
    b1StrikeBtn.id+= "Clicked";
    b2StrikeBtn.disabled= true;
});

b2StrikeBtn.addEventListener("click", function(){
    currentStrike= 1;
    b2StrikeBtn.id+= "Clicked";
    b1StrikeBtn.disabled= true;
});

let teamTotal= 0;
let teamWickets= 0;
let totalOvers= 0;
let b1Runs= 20;
let b1Balls= 10;
let b2Runs= 0;
let b2Balls= 0;

const scorecard= document.createElement("table");
scorecard.id= "scorecard";
const row1= document.createElement("tr");

const teamName= document.createElement("th");
teamName.rowSpan= "2";
const teamScore= document.createElement("th");
teamScore.innerText= teamTotal + " - " + teamWickets;
const strike1= document.createElement("td");
const batter1= document.createElement("th");
const b1Score= document.createElement("td");
b1Score.innerHTML= b1Runs + " " + "<sub>" + b1Balls + "</sub>";
const bowler= document.createElement("th");
const bowFig= document.createElement("td");
bowFig.innerHTML= "0 <sub>0</sub>"

row1.appendChild(teamName);
row1.appendChild(teamScore);
row1.appendChild(strike1);
row1.appendChild(batter1);
row1.appendChild(b1Score);
row1.appendChild(bowler);
row1.appendChild(bowFig);

const row2= document.createElement("tr");

const overs= document.createElement("th");
overs.innerText= totalOvers + " OVERS";
const strike2= document.createElement("td");
const batter2= document.createElement("th");
const b2Score= document.createElement("td");
b2Score.innerHTML= b2Runs + " " + "<sub>" + b2Balls + "</sub>";
const overballs= document.createElement("td");
overballs.colSpan= "2";

row2.appendChild(overs);
row2.appendChild(strike2);
row2.appendChild(batter2);
row2.appendChild(b2Score);
row2.appendChild(overballs);

scorecard.appendChild(row1);
scorecard.appendChild(row2);

qSubmit2.addEventListener("click", function() {
    if (!numOvers || !currentStrike) {
        alert("Please answer all questions before submitting.");
        return;
    }
    teamName.innerText= dropDown.value;
    batter1.innerText= b1Input.value.toUpperCase();
    batter2.innerText= b2Input.value.toUpperCase();
    bowler.innerText= bowInput.value.toUpperCase();
    if(currentStrike==1){
        strike1.innerText= "🏏";
    }else{
        strike2.innerText= "🏏";
    }
    document.body.appendChild(scorecard);
    scorecard.scrollIntoView({behavior: "smooth" });
});


function disableButtons(){
    p1ScoreBtn.disabled= true;
    p2ScoreBtn.disabled= true;
}

let tieBreaker= 0;
let p1points= 0;
let p2points= 0;
let p1games;
let p2games;
let p1wins= 0;
let p2wins= 0;


p1ScoreBtn.addEventListener("click", function(){
    if(tieBreaker){
        if(p1points<6){
            p1points++;
            p1pointsDisplay.innerText= p1points;
        }else{
            tieBreaker= 0;
            p1points= 0;
            p2points= 0;
            p1pointsDisplay.innerText= "0";
            p2pointsDisplay.innerText= "0";
            p1pointsDisplay.previousElementSibling.innerText = +p1pointsDisplay.previousElementSibling.innerText + 1;
        }
        return;      
    }

    if(p1pointsDisplay.innerText==""){
        p1pointsDisplay.innerText= "40";
        p2pointsDisplay.innerText= "40";
    }else if(p1pointsDisplay.innerText=="AD"){
        p1points= 0;
        p2points= 0;
        p1pointsDisplay.innerText= "0";
        p2pointsDisplay.innerText= "0";
        p1games= parseInt(p1pointsDisplay.previousElementSibling.innerText);
        p1games++;
        p1pointsDisplay.previousElementSibling.innerText= p1games;
        if(p1games==6){
            p2games= parseInt(p2pointsDisplay.previousElementSibling.innerText);
            if(p2games<5){
                // Set over. Add a new set if match is not over yet
                p1wins++;
                if(p1wins==(numSets/2.0)+0.5){
                    disableButtons();   // Match over
                    return;
                }
                const p1newset= document.createElement("td");
                p1newset.innerText= "0";

                const p2newset= document.createElement("td");
                p2newset.innerText= "0";

                p1scores.insertBefore(p1newset, p1pointsDisplay); 
                p2scores.insertBefore(p2newset, p2pointsDisplay);
            }else if(p2games==6){
                tieBreaker= 1;// Tie breaker
            }
        }
    }else if(p1points==0){
        p1pointsDisplay.innerText= "15";
        p1points= 15;
    }else if(p1points==15){
        p1pointsDisplay.innerText= "30";
        p1points= 30;
    }else if(p1points==30){
        p1pointsDisplay.innerText= "40";
        p1points= 40;
    }else if(p1points==40){
        if(p2points == 40){
            p1pointsDisplay.innerText= "AD";
            p2pointsDisplay.innerText= "";
        }else{
            p1points= 0;
            p2points= 0;
            p1pointsDisplay.innerText= "0";
            p2pointsDisplay.innerText= "0";
            p1games= parseInt(p1pointsDisplay.previousElementSibling.innerText);
            p1games++;
            p1pointsDisplay.previousElementSibling.innerText= p1games;
            if(p1games==6){
                p2games= parseInt(p2pointsDisplay.previousElementSibling.innerText);
                if(p2games<5){
                    // Set over. Add a new set if match is not over yet
                    p1wins++;
                    if(p1wins==(numSets/2.0)+0.5){
                        disableButtons();   // Match over
                        return;
                    }
                    const p1newset= document.createElement("td");
                    p1newset.innerText= "0";

                    const p2newset= document.createElement("td");
                    p2newset.innerText= "0";

                    p1scores.insertBefore(p1newset, p1pointsDisplay); 
                    p2scores.insertBefore(p2newset, p2pointsDisplay);
                }else if(p2games==6){
                    tieBreaker= 1;// Tie breaker
                }
            }
        }
    }
});
