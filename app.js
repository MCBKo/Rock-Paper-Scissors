const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the Game
    const startGame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    // Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });
        // Computer options
        const computerOptions = ["Rock", "Paper", "Scissors"];
        
        options.forEach(option => {
            option.addEventListener("click", function() {
                // Reset images
                playerHand.src= `./images/rock.png`;
                computerHand.src = `./images/rock.png`;
                
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                
                setTimeout(() => {
                // We call compare hands here
                compareHands(this.textContent, computerChoice);
                // Update images
                playerHand.src = `./images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;
                // Update Score
                updateScore();
                }, 2000);
                //Animation
                playerHand.style.animation = "shakePlayer 1.8s ease";
                computerHand.style.animation = "shakeComputer 1.8s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector(".winner");
        // We are checking for a tie
        if (playerChoice === computerChoice){
            winner.textContent = "It's a tie!";
            return;
        }
        // Check for Rock
        if (playerChoice === "Rock" && computerChoice === "Scissors") {
                winner.textContent = "You win!";
                pScore++;
                return;

        }
        // Check for Paper
        if (playerChoice === "Paper" && computerChoice ==="Rock") {
                winner.textContent = "You win!";
                pScore++;
                return;
        }
        // Check for Scissors
        if (playerChoice === "Scissors" && computerChoice ==="Paper") {
                winner.textContent = "You win!";
                pScore++;
                return;
        }

        winner.textContent ="You lose!";
        cScore++;
        return;
    };
    
    // Call all the inner functions
    startGame();
    playMatch();
};

// Start the game function
game();