const tennis=  document.getElementById("tennis");
const cricket=  document.getElementById("cricket");

let numSets= 0;
let currentServe= 0;

tennis.addEventListener("click", function () {
    clearGameElements();
    const questions = document.createElement("div");
    questions.className = "quickQuestions";
    questions.innerHTML = `
    <h2>Quick Questions!</h2>
    
    <label>Number of Sets: </label>
    <button id="sets3Btn">Best of 3</button>
    <button id="sets5Btn">Best of 5</button>
    <br>

    <label>Player 1 Name: <input type="text" id="p1Input" placeholder="Player 1"></label>
    <br><br>

    <label>Player 2 Name: <input type="text" id="p2Input" placeholder="Player 2"></label>
    <br><br><br>

    <label>Who Serves First: </label>
    <button id="p1ServiceBtn">Player 1 Serves</button>
    <button id="p2ServiceBtn">Player 2 Serves</button>
    <br>

    <button id= "qSubmit1">Submit</button>
    `;

    document.body.appendChild(questions);
    questions.scrollIntoView({ behavior: "smooth" });

    const btn3 = document.getElementById("sets3Btn");
    const btn5 = document.getElementById("sets5Btn");
    const btnP1 = document.getElementById("p1ServiceBtn");
    const btnP2 = document.getElementById("p2ServiceBtn");
    const qSubmit1= document.getElementById("qSubmit1");

    btn3.addEventListener("click", () => {
        numSets = 3;
        btn3.classList.add("clicked");
        btn5.disabled = true;
    });

    btn5.addEventListener("click", () => {
        numSets = 5;
        btn5.classList.add("clicked");
        btn3.disabled = true;
    });

    btnP1.addEventListener("click", () => {
        currentServe = 1;
        btnP1.classList.add("clicked");
        btnP2.disabled = true;
    });

    btnP2.addEventListener("click", () => {
        currentServe = 2;
        btnP2.classList.add("clicked");
        btnP1.disabled = true;
    });

    const scoreboardContainer = document.createElement("div");
    scoreboardContainer.innerHTML = `
    <div id="scoreboard">
        <table>
        <tr id="topRow">
            <td colspan="2" id="banner"></td>
        </tr>
        <tr id="p1scores">
            <td id="p1Service"></td>
            <th id="p1NameDisplay"></th>
            <td class="currset" id="p1set1">0</td>
            <td id="p1Points">0</td>
        </tr>
        <tr id="p2scores">
            <td id="p2Service"></td>
            <th id="p2NameDisplay"></th>
            <td class="currset" id="p2set1">0</td>
            <td id="p2Points">0</td>
        </tr>
        </table>
    </div>

    <div id="scoreButtons">
        <button id="p1ScoreBtn">Player 1 Scores</button>
        <button id="p2ScoreBtn">Player 2 Scores</button>
        <br><br><br>
    </div>
    `;

  qSubmit1.addEventListener("click", function() {
    if (!numSets || !currentServe) {
        alert("Please answer all questions before submitting.");
        return;
    }

    document.body.appendChild(scoreboardContainer);
    document.getElementById("scoreboard").scrollIntoView({ behavior: "smooth" });
    

    const p1scores= document.getElementById("p1scores");
    const p2scores= document.getElementById("p2scores");
    const p1pointsDisplay= document.getElementById("p1Points");
    const p2pointsDisplay= document.getElementById("p2Points");
    const banner= document.getElementById("banner");
    const p1ScoreBtn= document.getElementById("p1ScoreBtn");
    const p2ScoreBtn= document.getElementById("p2ScoreBtn");

    const p1NameDisplay = document.getElementById("p1NameDisplay");
    const p2NameDisplay = document.getElementById("p2NameDisplay");
    const service1 = document.getElementById("p1Service");
    const service2 = document.getElementById("p2Service");
    const p1Input = document.getElementById("p1Input");
    const p2Input = document.getElementById("p2Input");


    p1NameDisplay.innerText = p1Input.value || "Player 1";
    p2NameDisplay.innerText = p2Input.value || "Player 2";

    if (currentServe === 1) {
        service1.innerText = "🎾";
        service2.innerText = ""; 
    } else {
        service2.innerText = "🎾";
        service1.innerText = "";
    }

    addRatings();

    p1ScoreBtn.addEventListener("click", () => handlePlayerScore(1));
    p2ScoreBtn.addEventListener("click", () => handlePlayerScore(2));


    let tieBreaker= 0;
    let p1points= 0;
    let p2points= 0;
    let p1wins= 0;
    let p2wins= 0;

    function disableButtons(){
        p1ScoreBtn.disabled= true;
        p2ScoreBtn.disabled= true;
    }

    function gameUpdate(){
        // Reset the points after the game 
        p1points= 0;
        p2points= 0;
        p1pointsDisplay.innerText= "0";
        p2pointsDisplay.innerText= "0";

        // Update the service
        if(currentServe == 1){
            currentServe= 2;
            service1.innerText= "";
            service2.innerText= "🎾";
        }else{
            currentServe= 1;
            service1.innerText= "🎾";
            service2.innerText= "";
        }
    }

    function checkSetWin(winner) {
        const oldP1Set = p1scores.querySelector(".currset");
        const oldP2Set = p2scores.querySelector(".currset");
        // 1. Increment the correct win counter
        if (winner === 1) {
            p1wins++;
            oldP1Set.className="winner";
            oldP2Set.className="";
        }else{
            p2wins++;
            oldP1Set.className="";
            oldP2Set.className="winner";
        } 

        // 2. Check if match is over
        let currentWinnerWins = (winner === 1) ? p1wins : p2wins;
        if (currentWinnerWins === (numSets / 2.0) + 0.5) {
            disableButtons();
            p1pointsDisplay.remove();
            p2pointsDisplay.remove();
            let winnerName = (winner === 1) ? (p1Input.value || "Player 1") : (p2Input.value || "Player 2");
            banner.innerText = winnerName + " Wins the Match!";
            service1.remove();
            service2.remove();
            banner.colSpan= "1";
            // addRatings();
            
            return true; 
        }

        // 3. Match not over: Add new set columns to the table
        const p1newset = document.createElement("td");
        const p2newset = document.createElement("td");
        p1newset.className= "currset";
        p2newset.className= "currset";
        p1newset.innerText = "0";
        p2newset.innerText = "0";

        p1scores.insertBefore(p1newset, p1pointsDisplay);
        p2scores.insertBefore(p2newset, p2pointsDisplay);
        
        return false;
    } 

    function handlePlayerScore(player) {
        const isP1 = (player === 1);
        const currentDisplay = isP1 ? p1pointsDisplay : p2pointsDisplay;
        const opponentDisplay = isP1 ? p2pointsDisplay : p1pointsDisplay;
        const currentGamesElement = currentDisplay.previousElementSibling;
        const opponentGamesElement = opponentDisplay.previousElementSibling;
        
        // Tie Breaker logic
        if(tieBreaker){
            if(isP1 ? p1points < 6 : p2points < 6){
                if(isP1) {
                    p1points++;
                    currentDisplay.innerText = p1points;
                } else {
                    p2points++;
                    currentDisplay.innerText = p2points;
                }
            } else {
                tieBreaker = 0;
                banner.innerText = "";
                gameUpdate();
                currentGamesElement.innerText = +currentGamesElement.innerText + 1;
                if (checkSetWin(player)) return;
            }
            return;      
        }

        // Deuce - current player has no score (opponent has advantage)
        if(currentDisplay.innerText === ""){
            p1pointsDisplay.innerText = "40";
            p2pointsDisplay.innerText = "40";
            banner.innerText = "Deuce";
            return;
        }
        
        // Current player has advantage - wins the game
        if(currentDisplay.innerText === "AD"){
            gameUpdate();
            banner.innerText = "";
            let currentGames = parseInt(currentGamesElement.innerText);
            currentGames++;
            currentGamesElement.innerText = currentGames;
            
            if(currentGames === 6){
                let opponentGames = parseInt(opponentGamesElement.innerText);
                if(opponentGames < 5){
                    if (checkSetWin(player)) return;
                } else if(opponentGames === 6){
                    tieBreaker = 1;
                    banner.innerText = "Tie Breaker";
                }
            }
            return;
        }
        
        // Get current points
        const currentPoints = isP1 ? p1points : p2points;
        const opponentPoints = isP1 ? p2points : p1points;
        
        // Regular scoring: 0 -> 15 -> 30 -> 40
        if(currentPoints === 0){
            currentDisplay.innerText = "15";
            if(isP1) p1points = 15; else p2points = 15;
        } else if(currentPoints === 15){
            currentDisplay.innerText = "30";
            if(isP1) p1points = 30; else p2points = 30;
        } else if(currentPoints === 30){
            if(opponentPoints === 40){
                banner.innerText = "Deuce";
            }
            currentDisplay.innerText = "40";
            if(isP1) p1points = 40; else p2points = 40;
        } else if(currentPoints === 40){
            // Both at 40 - go to advantage
            if(opponentPoints === 40){
                banner.innerText = "";
                currentDisplay.innerText = "AD";
                opponentDisplay.innerText = "";
            } else {
                // Win the game
                gameUpdate();
                let currentGames = parseInt(currentGamesElement.innerText);
                currentGames++;
                currentGamesElement.innerText = currentGames;
                
                if(currentGames === 6){
                    let opponentGames = parseInt(opponentGamesElement.innerText);
                    if(opponentGames < 5){
                        if (checkSetWin(player)) return;
                    } else if(opponentGames === 6){
                        tieBreaker = 1;
                        banner.innerText = "Tie Breaker";
                    }
                }
                if(currentGames === 7){
                    if (checkSetWin(player)) return;
                }
            }
        }
    }

  });

});


let numOvers= 0;
let currentStrike= 0;

let teamTotal = 0;
let teamWickets = 0;
let totalOvers = 0;
let b1Runs = 0;
let b1Balls = 0;
let b2Runs = 0;
let b2Balls = 0;



cricket.addEventListener("click", function(){
    clearGameElements();
    const questions2 = document.createElement("div");
    questions2.className = "quickQuestions";
    questions2.innerHTML = `
    <h2>Quick Questions!</h2>
    
    <div class="field-group">
        <label>Choose Overs:</label>
        <button id="tenOs">10 Overs</button>
        <button id="twentyOs">20 Overs</button>
        <button id="fiftyOs">50 Overs</button>
    </div>

    <div class="field-group">
        <label for="teamName">Choose Your Team:</label>
        <select name="teamName" id="teamDropDown">
            <option value="INDIA">India</option>
            <option value="SOUTH AFRICA">South Africa</option>
            <option value="ENGLAND">England</option>
            <option value="NEW ZEALAND">New Zealand</option>
            <option value="AUSTRALIA">Australia</option>
            <option value="SRI LANKA">Sri Lanka</option>
        </select>
    </div>

    <div class="field-group">
        <label>Batter 1 Name: <input type="text" id="b1Input" placeholder="Batter 1"></label>
    </div>

    <div class="field-group">
        <label>Batter 2 Name: <input type="text" id="b2Input" placeholder="Batter 2"></label>
    </div>

    <div class="field-group">
        <label>First Strike:</label>
        <button id="b1StrikeBtn">Batter 1</button>
        <button id="b2StrikeBtn">Batter 2</button>
    </div>

    <div class="field-group">
        <label>Bowler Name: <input type="text" id="bowInput" placeholder="Bowler"></label>
    </div>
    
    <button id="qSubmit2">Submit</button>
    `;
    document.body.appendChild(questions2);
    questions2.scrollIntoView({behavior: "smooth" });

    const tenOs = document.getElementById("tenOs");
    const twentyOs = document.getElementById("twentyOs");
    const fiftyOs = document.getElementById("fiftyOs");
    const b1StrikeBtn = document.getElementById("b1StrikeBtn");
    const b2StrikeBtn = document.getElementById("b2StrikeBtn"); 
    const qSubmit2= document.getElementById("qSubmit2");

    const dropDown = document.getElementById("teamDropDown");
    const b1Input = document.getElementById("b1Input");
    const b2Input = document.getElementById("b2Input");
    const bowInput = document.getElementById("bowInput");


    tenOs.addEventListener("click", function(){
        numOvers = 10;
        tenOs.classList.add("clicked"); // Use classList
        twentyOs.disabled = true;
        fiftyOs.disabled = true;
    });

    twentyOs.addEventListener("click", function(){
        numOvers = 20;
        twentyOs.classList.add("clicked");
        tenOs.disabled = true;
        fiftyOs.disabled = true;
    });

    fiftyOs.addEventListener("click", function(){
        numOvers = 50;
        fiftyOs.classList.add("clicked");
        tenOs.disabled = true;
        twentyOs.disabled = true;
    });

    b1StrikeBtn.addEventListener("click", function(){
        currentStrike = 1;
        b1StrikeBtn.classList.add("clicked");
        b2StrikeBtn.disabled = true;
    });

    b2StrikeBtn.addEventListener("click", function(){
        currentStrike = 2; 
        b2StrikeBtn.classList.add("clicked");
        b1StrikeBtn.disabled = true;
    });


    const scorecard = document.createElement("table");
    scorecard.id = "scorecard";
    scorecard.innerHTML = `
    <tr id="row1">
        <!-- RowSpan 2 for Team Name & Score -->
        <th rowspan="2" id="teamName"></th> 
        <th id="teamScore">${teamTotal} - ${teamWickets}</th>
        
        <!-- Batter 1 Data -->
        <td id="b1StrikeMarker"></td>
        <th id="batter1Name"></th>
        <td id="b1Score">${b1Runs} <sub>${b1Balls}</sub></td>
        
        <!-- Bowler Data -->
        <th id="bowlerName"></th>
        <td id="bowlerFigures">0 <sub>0</sub></td>
    </tr>

    <tr id="row2">
        <!-- Overs Data -->
        <th id="oversDisplay">${totalOvers} OVERS</th>
        
        <!-- Batter 2 Data -->
        <td id="b2StrikeMarker"></td>
        <th id="batter2Name"></th>
        <td id="b2Score">${b2Runs} <sub>${b2Balls}</sub></td>
        
        <!-- Over progression (dots/Xs) -->
        <td colspan="2" id="overballs"></td>
    </tr>
    `;

    qSubmit2.addEventListener("click", function() {
        if (!numOvers || !currentStrike || !b1Input.value.trim() || !b2Input.value.trim() || !bowInput.value.trim()) {
            alert("Please answer all questions before submitting.");
            return;
        }

        document.body.appendChild(scorecard);
        scorecard.scrollIntoView({behavior: "smooth" });

        const teamName = document.getElementById("teamName");
        const batter1 = document.getElementById("batter1Name");
        const batter2 = document.getElementById("batter2Name");
        const bowler = document.getElementById("bowlerName");
        const strike1 = document.getElementById("b1StrikeMarker");
        const strike2 = document.getElementById("b2StrikeMarker");
        
        teamName.innerText = dropDown.value;
        batter1.innerText = b1Input.value.toUpperCase(); 
        batter2.innerText = b2Input.value.toUpperCase(); 
        bowler.innerText = bowInput.value.toUpperCase(); 

        if (currentStrike === 1) {
            strike1.innerText = "🏏";
            strike2.innerText = "";
        } else {
            strike2.innerText = "🏏";
            strike1.innerText = "";
        }

        addRatings();

    });
});

function addRatings(){
    const ratingPanel = document.createElement("div");
    ratingPanel.id = "ratingPanel";
        
    ratingPanel.innerHTML = `
        <h3>Happy with our Website?</h3>
        <p>Consider rating us five stars!</p>
        <div class="star-rating">
            <input type="radio" id="star5" name="rating" value="5">
            <label for="star5">★</label>
            <input type="radio" id="star4" name="rating" value="4">
            <label for="star4">★</label>
            <input type="radio" id="star3" name="rating" value="3">
            <label for="star3">★</label>
            <input type="radio" id="star2" name="rating" value="2">
            <label for="star2">★</label>
            <input type="radio" id="star1" name="rating" value="1">
            <label for="star1">★</label>
        </div>
        <button id="submitRating">Submit Rating</button>
    `;
        
    document.body.appendChild(ratingPanel);
    ratingPanel.scrollIntoView({behavior: "smooth"});
        
    // Handle rating submission
    const submitBtn = document.getElementById("submitRating");
    submitBtn.addEventListener("click", function(){
        const selectedRating = document.querySelector('input[name="rating"]:checked');
        if(selectedRating){
            const thanks= document.createElement("h3");
            thanks.innerHTML= `Thanks for rating us ${selectedRating.value} stars!`;
            ratingPanel.style.display = "none";
            document.body.appendChild(thanks);
            setTimeout(() => {
                thanks.remove();
            }, 1000);
        } else {
            alert("Please select a rating!");
        }
    });
}

function clearGameElements() {
    // Remove all game-related elements
    const elementsToRemove = [
        document.querySelector(".quickQuestions"),
        document.getElementById("scoreboard")?.parentElement, // scoreboardContainer
        document.getElementById("scorecard"),
        document.getElementById("ratingPanel")
    ];
    
    elementsToRemove.forEach(element => {
        if (element) element.remove();
    });
    
    // Reset state variables
    numSets = 0;
    currentServe = 0;
    numOvers = 0;
    currentStrike = 0;
}