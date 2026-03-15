# ✊✋✌️ Rock Paper Scissors

A clean, interactive Rock Paper Scissors game built with vanilla HTML, CSS, and JavaScript. First to 5 wins.

## Demo

[Live demo](https://dee-diaz.github.io/rock-paper-scissors/)

## Features

- **Best of 5** — first player to reach 5 points wins the game
- **Live score tracking** — human vs. computer scores update after each round
- **Round results** — color-coded feedback (win / tie / loss) with emoji
- **Choice display** — both your pick and the computer's are shown each round
- **Game-over modal** — announces the winner and allows starting a new game
- **Disabled buttons** — inputs lock briefly between rounds to prevent double-clicks
- **Responsive layout** — centered container works across screen sizes

## How to Play

1. Open `index.html` in a browser
2. Click **Rock**, **Paper**, or **Scissors**
3. The computer picks randomly — the result is shown immediately
4. First to **5 points** wins; a modal announces the winner
5. Click **Play again** to reset and start over

## Rules

| Choice   | Beats     |
|----------|-----------|
| Rock     | Scissors  |
| Paper    | Rock      |
| Scissors | Paper     |

## Project Structure

```
rock-paper-scissors/
├── index.html   # Markup and game layout
├── style.css    # Styles, layout, animations, color tokens
└── script.js    # Game logic
```

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, gradients, transitions
- **JavaScript (ES6)** — vanilla JS, no dependencies

## Local Setup

No build tools or dependencies required.

```bash
git clone https://github.com/your-username/rock-paper-scissors.git
cd rock-paper-scissors
open index.html
```

Or just drag `index.html` into your browser.
