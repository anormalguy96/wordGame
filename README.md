Here's a detailed README file for your project:

---

# Word Game

This is a fun and interactive web-based **Word Guessing Game** built with HTML, CSS, and JavaScript. The game challenges players to guess words based on clues, manage time, and earn points. It’s a great way to sharpen your vocabulary and have fun!

---

## Features

### 🎮 Gameplay:
- Guess the word by filling in the blanks using provided clues.
- Timer system with 3 minutes per word to keep the challenge alive.
- Interactive buttons for hints, stopping the timer, giving up, and navigating game rules.
- Arrow key navigation between letters for seamless user input.

### 💡 Hints:
- Players can use hints to reveal letters, but points are deducted.
- Automatic deduction of points per hint used.

### ⏳ Timer:
- A dynamic timer bar and countdown system to increase gameplay pressure.
- The ability to stop the timer and type in the answer.

### 📖 Rules:
- Built-in rules displayed in a modal or alert for easy understanding of the game.

### 🏆 Scoring:
- Players earn points for correct guesses.
- Bonus streaks for consecutive correct answers increase the score.

### 🎵 Bonus:
- Direct link to **YouGlish** to hear the pronunciation of the given word in English.

---

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/anormalguy96/wordGame.git
   ```
2. Open the project directory:
   ```bash
   cd word-game
   ```
3. Launch the game:
   - Open `word_game.html` in your browser.

---

## Folder Structure

```
📂 Word Game
 ├── word_game.html      # The main HTML file for the game
 ├── word_game.css       # The CSS file for styling
 ├── word_game.js        # JavaScript logic for gameplay
 ├── coin_logo.svg       # Icon for score representation
```

---

## Rules of the Game

- **Objective**: Guess the word correctly based on the given clue.
- **Hints**:
  - Hints reveal a letter but reduce your points.
  - Points per hint decrease based on your streak.
- **Timer**:
  - Each round starts with a 3-minute timer.
  - You can stop the timer for a limited time to type in your answer.
- **Scoring**:
  - Correct streaks increase points per letter.
  - Incorrect guesses reset points per letter to the default value (30).
- **Keyboard Navigation**:
  - Use arrow keys to move between letters.
  - Backspace allows editing previous letters.

---

## Credits

- Developed by [ANormalGuy](https://github.com/anormalguy96).
- **YouGlish** integration for word pronunciation and usage examples.

---

## Contributing

Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.
