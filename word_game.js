// Words List
const words = [
    { word: "apple", clue: "A fruit that is red, green, or yellow." },
    { word: "book", clue: "A set of written or printed pages bound together." },
    { word: "car", clue: "A road vehicle with an engine and wheels." },
    { word: "cat", clue: "A small domesticated mammal." },
    { word: "dog", clue: "A common pet known for its loyalty." },
    { word: "door", clue: "A barrier used to open or close an entrance." },
    { word: "fish", clue: "An animal that lives in water and has gills." },
    { word: "flower", clue: "The colorful part of a plant." },
    { word: "house", clue: "A building where people live." },
    { word: "pen", clue: "A tool for writing with ink." },
    { word: "phone", clue: "A device used for talking to others over distances." },
    { word: "school", clue: "A place for learning and teaching." },
    { word: "table", clue: "A piece of furniture with a flat top." },
    { word: "tree", clue: "A tall plant with a trunk and branches." },
    { word: "window", clue: "An opening in a wall to let light and air in." },
    { word: "chair", clue: "A piece of furniture for sitting." },
    { word: "bread", clue: "A basic food made from flour and water." },
    { word: "clock", clue: "A device that shows the time." },
    { word: "cup", clue: "A small container used to drink liquids." },
    { word: "hat", clue: "An item of clothing worn on the head." },
    { word: "milk", clue: "A white liquid produced by mammals." },
    { word: "shoe", clue: "An item worn on the foot." },
    { word: "star", clue: "A bright object seen in the night sky." },
    { word: "sun", clue: "The star at the center of the solar system." },
    { word: "water", clue: "A liquid necessary for life." },
    { word: "bed", clue: "A piece of furniture for sleeping on." },
    { word: "ball", clue: "A round object used in sports or games." },
    { word: "bus", clue: "A large vehicle for transporting people." },
    { word: "cake", clue: "A sweet dessert made from flour, eggs, and sugar." },
  
    // A2 Words (50 examples)
    { word: "airport", clue: "A place where airplanes take off and land." },
    { word: "bicycle", clue: "A vehicle with two wheels that you pedal." },
    { word: "camera", clue: "A device used to take photos." },
    { word: "chicken", clue: "A farm animal raised for its eggs and meat." },
    { word: "clothes", clue: "Garments worn by people." },
    { word: "doctor", clue: "A person who helps sick people get better." },
    { word: "garden", clue: "A place with flowers, plants, or vegetables." },
    { word: "guitar", clue: "A musical instrument with strings." },
    { word: "horse", clue: "A large animal often ridden by people." },
    { word: "island", clue: "A piece of land surrounded by water." },
    { word: "market", clue: "A place where goods are bought and sold." },
    { word: "monkey", clue: "An animal that lives in trees and eats bananas." },
    { word: "mountain", clue: "A high area of land, often with a peak." },
    { word: "orange", clue: "A round citrus fruit." },
    { word: "piano", clue: "A large musical instrument with keys." },
    { word: "rain", clue: "Water that falls from the sky in drops." },
    { word: "river", clue: "A large natural stream of water." },
    { word: "schoolbag", clue: "A bag used by students to carry books." },
    { word: "soccer", clue: "A sport played by kicking a ball into a goal." },
    { word: "summer", clue: "The warmest season of the year." },
    { word: "teacher", clue: "A person who helps students learn." },
    { word: "train", clue: "A long vehicle that runs on tracks." },
    { word: "winter", clue: "The coldest season of the year." },
    { word: "zebra", clue: "An African animal with black-and-white stripes." },
    { word: "bridge", clue: "A structure that spans a river or road." },
    { word: "castle", clue: "A large historic building, often fortified." },
    { word: "circle", clue: "A round shape with no corners." },
    { word: "desert", clue: "A dry area with very little rain." },
    { word: "engine", clue: "A machine that powers vehicles or machines." },
    { word: "farmer", clue: "A person who grows crops or raises animals." },
    { word: "flag", clue: "A piece of cloth representing a country." },
    { word: "forest", clue: "An area filled with trees." },
    { word: "kitchen", clue: "A room where food is prepared and cooked." },
    { word: "ladder", clue: "A tool used for climbing." },
    { word: "library", clue: "A building with books for reading or borrowing." },
    { word: "mirror", clue: "An object that reflects images." },
    { word: "ocean", clue: "A large body of salt water." },
    { word: "pirate", clue: "A person who robs ships at sea." },
    { word: "planet", clue: "A celestial body orbiting a star." },
    { word: "police", clue: "People who enforce the law." },
    { word: "postcard", clue: "A card sent by mail with a picture on it." },
    { word: "rocket", clue: "A vehicle designed to travel into space." },
    { word: "stairs", clue: "Steps leading from one floor to another." },
    { word: "village", clue: "A small community in the countryside." },
    { word: "wallet", clue: "A small case for carrying money and cards." },
  
    // B1-B2 Words (80 examples)
    { word: "adventure", clue: "An exciting or unusual experience." },
    { word: "biology", clue: "The scientific study of life and organisms." },
    { word: "celebration", clue: "A joyful occasion for a special event." },
    { word: "currency", clue: "The system of money in a country." },
    { word: "dangerous", clue: "Likely to cause harm or injury." },
    { word: "ecosystem", clue: "A community of living organisms and their environment." },
    { word: "decision", clue: "A conclusion reached after consideration." },
    { word: "distance", clue: "The amount of space between two things." },
    { word: "electricity", clue: "Energy from charged particles." },
    { word: "entertainment", clue: "Activities meant to amuse or interest." },
    { word: "environment", clue: "The surroundings or conditions in which someone lives." },
    { word: "equipment", clue: "The necessary tools for a task." },
    { word: "experience", clue: "Knowledge gained through involvement." },
    { word: "festival", clue: "A celebration or event." },
    { word: "freedom", clue: "The power to act or speak without restrictions." },
    { word: "friendship", clue: "A close relationship between people." },
    { word: "government", clue: "The organization that governs a community." },
    { word: "happiness", clue: "The state of feeling or showing pleasure." },
    { word: "industry", clue: "Economic activity related to manufacturing." },
    { word: "invention", clue: "The creation of something new." },
    { word: "landscape", clue: "The visible features of an area of land." },
    { word: "literature", clue: "Written works considered of artistic value." },
    { word: "marriage", clue: "The legal union of two people." },
    { word: "movement", clue: "The act of changing position." },
    { word: "opportunity", clue: "A chance to do something." },
    { word: "population", clue: "The number of people in an area." },
    { word: "relationship", clue: "A connection between people or things." },
    { word: "technology", clue: "The application of scientific knowledge for practical purposes." },
    { word: "transportation", clue: "The movement of people or goods." },
    { word: "university", clue: "An institution of higher learning." },
    { word: "volunteer", clue: "A person who offers services without pay." },
  
    // C1-C2 Words (40 examples)
    { word: "anachronism", clue: "Something out of place in time." },
    { word: "benevolent", clue: "Well-meaning and kind." },
    { word: "catharsis", clue: "The release of strong emotions for relief." },
    { word: "conundrum", clue: "A confusing or difficult problem." },
    { word: "eloquent", clue: "Fluent or persuasive in speaking or writing." },
    { word: "ephemeral", clue: "Lasting for a very short time." },
    { word: "esoteric", clue: "Likely understood by only a small group." },
    { word: "equanimity", clue: "Calmness and composure." },
    { word: "gregarious", clue: "Sociable and fond of company." },
    { word: "idiosyncratic", clue: "Peculiar to an individual." },
    { word: "ineffable", clue: "Too great to be expressed in words." },
    { word: "juxtaposition", clue: "Placing two things close for contrast." },
    { word: "melancholy", clue: "A deep feeling of sadness." },
    { word: "meticulous", clue: "Very careful and precise." },
    { word: "nostalgia", clue: "A sentimental longing for the past." },
    { word: "omniscient", clue: "Knowing everything." },
    { word: "paradox", clue: "A statement that contradicts itself." },
    { word: "perseverance", clue: "Persistence in doing something despite difficulty." },
    { word: "pragmatic", clue: "Dealing with things practically." },
    { word: "quintessential", clue: "Representing the most perfect example." },
    { word: "resilience", clue: "The ability to recover quickly." },
    { word: "serendipity", clue: "The occurrence of happy events by chance." },
    { word: "superfluous", clue: "Unnecessary or excessive." },
    { word: "synergy", clue: "Cooperation for greater effect." },
    { word: "taciturn", clue: "Reserved or uncommunicative in speech." },
    { word: "ubiquitous", clue: "Found everywhere." },
    { word: "verisimilitude", clue: "The appearance of being true." },
    { word: "zealot", clue: "A fanatical supporter of a cause." },
    { word: "ameliorate", clue: "To make better or improve." },
    { word: "capricious", clue: "Given to sudden changes of mood." },
    { word: "ebullient", clue: "Cheerful and full of energy." },
    { word: "harbinger", clue: "A person or thing that signals the future." },
    { word: "inequity", clue: "Lack of fairness or justice." },
    { word: "loquacious", clue: "Very talkative." },
    { word: "pandemonium", clue: "Wild and noisy disorder." },
    { word: "plethora", clue: "An excess of something." },
    { word: "quagmire", clue: "A difficult or hazardous situation." },
    { word: "surreptitious", clue: "Kept secret due to disapproval." },
    { word: "xenophobia", clue: "Dislike or fear of foreigners." }
  ];  

// Game Variables
let currentWordIndex = Math.floor(Math.random() * words.length);
let currentWord = words[currentWordIndex].word.toLowerCase();
let currentClue = words[currentWordIndex].clue;
let score = 0;
let remainingPoints = currentWord.length * 30;
let streakBonus = 30;
let hintGiven = [];
let timer;
let isTimerStopped = false;
let countdown = 180; // 3 minutes timer
let terminateGame = false;
let pointsPerLetter = 30; // Initial score per letter

const rulesBtn = document.getElementById("rulesBtn");

rulesBtn.addEventListener("click", () => {
    alert(
        "🎮 Word Game Rules 🎮\n" +
        "1. Guess the word by filling in the blanks.\n" +
        "2. Use hints if needed, but points will be deducted.\n" +
        "3. Correct streaks increase your points per letter.\n" +
        "4. Incorrect guesses reset the points per letter to 30.\n" +
        "5. Use arrow keys to navigate between boxes.\n" +
        "6. Pre-filled letters cannot be edited.\n" +
        "7. Have fun!"
    );
});


// DOM Elements
const wordBox = document.getElementById("wordBox");
const clueElement = document.getElementById("clue");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const hintBtn = document.getElementById("hintBtn");
const submitBtn = document.getElementById("submitBtn");
const stopBtn = document.getElementById("stopBtn");
const giveUpBtn = document.getElementById("giveUpBtn");
const timerBar = document.getElementById("timerBar");

// Timer Logic
function startTimer() {
    timer = setInterval(() => {
        if (countdown <= 0) {
            clearInterval(timer);
            resultElement.textContent = "⏰ Time's up! You lost the round.";
            resultElement.style.color = "red";
            disableInputs();
        } else if (!isTimerStopped && !terminateGame) {
            countdown--;
            updateTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(countdown / 60).toString().padStart(2, "0");
    const seconds = (countdown % 60).toString().padStart(2, "0");
    document.getElementById("time").textContent = `${minutes}:${seconds}`;
    timerBar.style.width = `${(countdown / 180) * 100}%`;
}

// Stop Timer Logic
stopBtn.addEventListener("click", () => {
    isTimerStopped = true;
    submitBtn.disabled = false;
    stopBtn.disabled = true;
    enableInputs(); // Enable inputs when the timer is stopped
    countdown = 20; // Optional: Allow 20 seconds for typing the word
});

// Enable Inputs (Updated)
function enableInputs() {
    const inputs = document.querySelectorAll(".letter-box");
    inputs.forEach(input => {
        if (!hintGiven.includes([...input.parentNode.children].indexOf(input))) {
            input.disabled = false; // Enable only non-hint, non-pre-filled boxes
            input.style.borderColor = "#ccc"; // Optional: Reset border color
        }
    });
    const firstInput = findNextEditableBox(document.querySelector(".letter-box"), "next");
    if (firstInput) firstInput.focus(); // Automatically focus on the first editable input
}

// Modified Give Up Logic
giveUpBtn.addEventListener("click", () => {
    isTimerStopped = true; // Stop the timer
    clearInterval(timer); // Clear the timer
    terminateGame = true; // Prevent further actions in this round

    openWord(); // Reveal the word
    showGiveUpMessage(); // Display the give-up message
});

// Display the Give-Up Message with YouGlish Link
function showGiveUpMessage() {
    const resultMessage = document.createElement("p");
    resultMessage.id = "giveUpMessage";
    resultMessage.style.marginTop = "20px";
    resultMessage.style.color = "#444";

    const link = document.createElement("a");
    link.href = `https://youglish.com/pronounce/${currentWord}/english`;
    link.target = "_blank";
    link.style.color = "#007bff";
    link.style.textDecoration = "underline";
    link.textContent = "Click here";

    resultMessage.innerHTML = `Never heard of it? `;
    resultMessage.appendChild(link);
    resultMessage.innerHTML += ` to see usage examples.`;

    const nextBtn = document.createElement("button");
    nextBtn.id = "nextWordBtn"; // Assign the ID for styling
    nextBtn.textContent = "Next Word";
    nextBtn.style.marginTop = "10px";
    nextBtn.style.padding = "10px 20px";
    nextBtn.style.background = "#28a745";
    nextBtn.style.color = "#fff";
    nextBtn.style.border = "none";
    nextBtn.style.borderRadius = "5px";
    nextBtn.style.cursor = "pointer";

    nextBtn.addEventListener("click", () => {
        resultMessage.remove(); // Remove the message
        nextBtn.remove(); // Remove the Next button
        startNewWord(); // Proceed to the next word
    });

    resultElement.innerHTML = ""; // Clear previous results
    resultElement.appendChild(resultMessage);
    resultElement.appendChild(nextBtn);
}

// Give Up Logic (Updated to Protect Letters)
function openWord() {
    const inputs = document.querySelectorAll(".letter-box");
    inputs.forEach((input, index) => {
        setTimeout(() => {
            input.value = currentWord[index];
            input.disabled = true; // Ensure all letters are protected
            input.style.borderColor = "#28a745";
        }, index * 200); // Animate each letter
    });
}

function showYouglishEmbed() {
    const youglishContainer = document.createElement("div");
    youglishContainer.style.marginTop = "20px";
    youglishContainer.style.border = "1px solid #ccc";
    youglishContainer.style.borderRadius = "10px";
    youglishContainer.style.padding = "10px";
    youglishContainer.style.background = "#f8f9fa";

    const iframe = document.createElement("iframe");
    iframe.src = `https://youglish.com/pronounce/${currentWord}/english`;
    iframe.width = "100%";
    iframe.height = "200px";
    iframe.style.border = "none";

    youglishContainer.appendChild(iframe);
    document.body.appendChild(youglishContainer);
}

// Submit Logic
submitBtn.addEventListener("click", checkWord);

// Hint Logic
hintBtn.addEventListener("click", giveHint);

function giveHint() {
    const availableIndexes = [...currentWord].map((_, i) => i).filter(i => !hintGiven.includes(i));
    if (availableIndexes.length === 0) {
        resultElement.textContent = "No hints remaining. You've used all the hints!";
        resultElement.style.color = "orange";
        remainingPoints = 0; // Set score to zero if all hints are used
        return;
    }

    const randomIndex = availableIndexes[Math.floor(Math.random() * availableIndexes.length)];
    hintGiven.push(randomIndex);

    const inputs = document.querySelectorAll(".letter-box");
    inputs[randomIndex].value = currentWord[randomIndex];
    inputs[randomIndex].disabled = true; // Disable the hint box
    inputs[randomIndex].style.backgroundColor = "#f0f0f0"; // Optional styling

    // Deduct points for the hint
    remainingPoints -= pointsPerLetter; 
    updateScore();
}

function checkWord() {
    const inputs = document.querySelectorAll(".letter-box");
    const userGuess = Array.from(inputs).map(input => input.value.toLowerCase()).join("");

    if (userGuess === currentWord) {
        if (remainingPoints > 0) {
            resultElement.textContent = `🎉 Correct! You earned ${remainingPoints} coins.`;
            score += remainingPoints;
            pointsPerLetter++; // Increase points per letter on streak
        } else {
            resultElement.textContent = `🎉 Correct! But you used all the hints and earned no points.`;
        }
        resultElement.style.color = "green";
        updateScore();

        // Wait for 3 seconds, then start the next word
        setTimeout(() => {
            resultElement.textContent = ""; // Clear the result message
            startNewWord();
        }, 3000);
    } else {
        resultElement.textContent = "❌ Incorrect! Try again.";
        resultElement.style.color = "red";
        pointsPerLetter = 30; // Reset points per letter on wrong answer
    }
}

function startNewWord() {
    clearInterval(timer); // Clear the timer
    currentWordIndex = (currentWordIndex + 1) % words.length;
    currentWord = words[currentWordIndex].word.toLowerCase();
    currentClue = words[currentWordIndex].clue;

    remainingPoints = currentWord.length * pointsPerLetter; // Adjust based on streak
    hintGiven = []; // Reset hints
    resultElement.textContent = ""; // Clear result
    countdown = 180; // Reset timer
    initializeGame();
}

function handleNavigation(e) {
    const currentInput = e.target;
    if (e.key === "ArrowRight") {
        moveFocus(currentInput, "next");
    } else if (e.key === "ArrowLeft") {
        moveFocus(currentInput, "previous");
    }
}

function moveFocus(currentInput, direction) {
    let nextInput;
    if (direction === "next") {
        nextInput = currentInput.nextElementSibling;
        while (nextInput && nextInput.disabled) {
            nextInput = nextInput.nextElementSibling; // Skip disabled boxes
        }
    } else if (direction === "previous") {
        nextInput = currentInput.previousElementSibling;
        while (nextInput && nextInput.disabled) {
            nextInput = nextInput.previousElementSibling; // Skip disabled boxes
        }
    }

    if (nextInput && !nextInput.disabled) {
        nextInput.focus();
    }
}

// Update Score
function updateScore() {
    scoreElement.textContent = score;
}

// Initialize Game (Updated to Protect Letters)
function initializeGame() {
    clueElement.textContent = currentClue;
    scoreElement.textContent = score;
    submitBtn.disabled = true;
    stopBtn.disabled = false;
    isTimerStopped = false;
    terminateGame = false;

    wordBox.innerHTML = ""; // Clear previous boxes
    const totalBoxes = currentWord.length;

    for (let i = 0; i < totalBoxes; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1; // Allow only one character per box
        input.classList.add("letter-box");

        // Pre-fill and disable given letters
        if (hintGiven.includes(i)) {
            input.value = currentWord[i];
            input.disabled = true; // Disable the hint box
            input.style.backgroundColor = "#f0f0f0"; // Optional styling
        } else {
            input.disabled = true; // Initially disable inputs
        }

        input.addEventListener("keydown", handleNavigation); // Add navigation handler
        input.addEventListener("keydown", handleBackspace); // Handle backspace navigation
        input.addEventListener("input", moveToNextBox); // Move focus after typing
        wordBox.appendChild(input);
    }

    giveHint(); // Automatically give the first hint
    startTimer();
}

// Move to Next Box
function moveToNextBox(e) {
    const currentInput = e.target;
    const nextInput = findNextEditableBox(currentInput, "next");
    if (nextInput && currentInput.value.length === 1) {
        nextInput.focus();
    }
}

// Find Next Editable Box
function findNextEditableBox(currentInput, direction) {
    let nextInput = direction === "next" ? currentInput.nextElementSibling : currentInput.previousElementSibling;

    while (nextInput) {
        if (nextInput.tagName === "INPUT" && !nextInput.disabled) {
            return nextInput; // Return the next editable box
        }
        nextInput = direction === "next" ? nextInput.nextElementSibling : nextInput.previousElementSibling;
    }
    return null; // No editable box found
}

// Handle Backspace
function handleBackspace(e) {
    if (e.key === "Backspace" && !e.target.value) {
        const previousInput = e.target.previousElementSibling;
        if (previousInput && previousInput.tagName === INPUT) {
            previousInput.focus();
        }
    }
}

// Start the Game
initializeGame();