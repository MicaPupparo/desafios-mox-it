const $setdifficultySection = document.querySelector("#set-difficulty-section");
const $gameSection = document.querySelector("#game-section");
const $scoresSection = document.querySelector("#scores-section");
const $setDifficultyButtons = document.querySelectorAll(".set-difficulty-buttons");
const $messageColor = document.querySelector("#which-color-is-it");
const $currentScore = document.querySelector("#current-score");


$setDifficultyButtons.forEach((button) => {
    button.onclick = event => {
        const difficulty = event.target.value;
        event.preventDefault();
        startGame(difficulty);
    }
})

function startGame(difficulty) {
    hideSection($setdifficultySection);
    showSection($gameSection);

    handleRounds(difficulty)
}

function endGame() {
    hideSection($gameSection);
    showSection($scoresSection);

    showAllScores();
}

function handleRounds(difficulty) {
    let round = 1;
    let points = 0;
    let winning = true;

    createSquares(difficulty);
    const $colorSquares = document.querySelectorAll(".square");

    let color = newRound(difficulty, $colorSquares, points);

    $colorSquares.forEach((square) => {
        square.onclick = event => {
            event.preventDefault();
            winning = isSquareCorrect(event.target, color);
            if (winning) {
                points = handlePoints(difficulty, points);
                color = newRound(difficulty, $colorSquares, points);
                round++;
            } else {
                saveCurrentPoints(difficulty, points, round);
                endGame();
            }
        }
    })
}

function createSquares(difficulty) {
    const $squaresContainer = document.querySelector("#squares-container");
    $squaresContainer.innerHTML = "";

    if (difficulty == "easy") {
        for (i = 0; i < 3; i++) {
            $squaresContainer.innerHTML += `
                <div class="col d-flex justify-content-center">
                    <div class="square"></div>
                </div>
            `
        }
    }

    if (difficulty == "medium") {
        for (i = 0; i < 4; i++) {
            $squaresContainer.innerHTML += `
                      <div class="col-lg-2">
                        <div class="square"></div>
                    </div>
            `;
        }
    }

    if (difficulty == "difficult") {
        for (i = 0; i < 6; i++) {
            $squaresContainer.innerHTML += `
                <div class="col-lg-2 col-md-4 col-sm-6">
                    <div class="square"></div>
                </div>
            `;
        }
    }
}

function saveCurrentPoints(difficulty, points, round) {
    let allGamesPoints = JSON.parse(sessionStorage.getItem("allGamesPoints")) || [];

    let currentGame = {
        points,
        round,
        difficulty
    };

    allGamesPoints.push(currentGame);

    sessionStorage.setItem("allGamesPoints", JSON.stringify(allGamesPoints));
}

function handlePoints(difficulty, points) {
    if (difficulty == "easy") {
        points += 5;
    } else if (difficulty == "medium") {
        points += 7;
    } else if (difficulty == "difficult") {
        points += 10;
    }

    return points;
}

function isSquareCorrect(element, color) {
    const squareStyle = window.getComputedStyle(element).getPropertyValue("background-color");
    const squareColor = tinycolor(`${squareStyle}`).toHexString();
    let isCorrect = color == squareColor ? true : false;
    console.log(isCorrect)
    return isCorrect;
}

function newRound(difficulty, $colorSquares, points) {
    const randomPosition = randomPositionByDifficulty(difficulty);
    console.log(randomPosition)
    const color = tinycolor.random();
    $colorSquares[randomPosition].style.backgroundColor = `${color.toHexString()}`;

    setSquareColorByDifficulty(difficulty, randomPosition, color, $colorSquares);

    $messageColor.innerText = `${color.toHexString()}`;
    $currentScore.innerText = `${points}`;

    return color.toHexString();
}

function setSquareColorByDifficulty(difficulty, usedPosition, color, $colorSquares) {
    if (difficulty == "easy") {
        for (i = 0; i < 3; i++) {
            if (i != usedPosition) {
                let randomColor = tinycolor.random().toHexString();
                $colorSquares[i].style.backgroundColor = `${randomColor}`;
            }
        }
    }

    if (difficulty == "medium") {
        let monochromaticPalette = color.monochromatic();
        let monochromaticPosition = 1
        for (i = 0; i < 4; i++){
            if (i != usedPosition) {
                let monochromaticColor = monochromaticPalette[monochromaticPosition].toHexString();
                $colorSquares[i].style.backgroundColor = `${monochromaticColor}`;
                monochromaticPosition++;
            }
        }
        
    }

    if (difficulty == "difficult") {
        let analogousPalette = color.analogous();
        let analogousPosition = 1;
        for (i = 0; i < 6; i++){
            if (i != usedPosition) {
                let analogousColor = analogousPalette[analogousPosition].toHexString();
                $colorSquares[i].style.backgroundColor = `${analogousColor}`;
                analogousPosition++;
            }
        }
    }
}

function randomPositionByDifficulty(difficulty) {
    let randomPosition;
    difficulty == "easy" ? randomPosition = Math.floor(Math.random()*3) :
    difficulty == "medium" ? randomPosition = Math.floor(Math.random()*4) :
    difficulty == "difficult" ? randomPosition = Math.floor(Math.random()*6) : console.log("error");

    return randomPosition;
}

function hideSection($element) {
    $element.style.display = "none";
}

function showSection($element) {
    $element.style.display = "block";
}

function showAllScores() {
    let allGamesPoints = (JSON.parse(sessionStorage.getItem("allGamesPoints"))).reverse() || false;
    const $tableBodyScores = document.querySelector("#table-body-scores");

    if (allGamesPoints)
    {
        $tableBodyScores.innerHTML = "";
        let gameNumber = allGamesPoints.length;
        
        allGamesPoints.forEach((game, i) => {
            let $scoreGame = `                
                <tr>
                    <th scope="row">${gameNumber}</th>
                    <td>${game.points}</td>
                    <td>${game.difficulty}</td>
                    <td>${game.round}</td>
                </tr>
            `;

            $tableBodyScores.innerHTML += $scoreGame;
            gameNumber--;
        })

        
    } else {
        $tableBodyScores.innerHTML = "";
    }
}