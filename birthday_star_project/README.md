# Birthday Star — anime-inspired birthday puzzle

A mobile-first static website built with HTML, CSS and vanilla JavaScript.

## Run it on your PC
1. Extract the ZIP folder.
2. Open the `birthday_star_project` folder in Visual Studio Code.
3. Open `index.html` in your browser. (The VS Code Live Server extension is recommended for local development.)
4. Try each answer and test the final surprise.

## Test a phone-sized layout
In Chrome or Edge press `F12`, then click the device toolbar icon (or `Ctrl+Shift+M`). Choose a phone preset and test the page. Also test on a real phone after publishing.

## Personalize it
- Edit the questions, answers and clue text in `js/app.js` inside the `PUZZLES` array.
- Edit the final birthday message in `index.html` inside `#surprise`.
- Change colors, fonts and spacing in `css/style.css`.

## Publish it with GitHub Pages
1. Create a GitHub repository, e.g. `birthday-star`.
2. Upload the contents of this folder (keep `index.html`, `css/` and `js/` in the repository root).
3. Open the repository Settings → Pages.
4. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/(root)`, then Save.
5. Wait for the Pages deployment to finish. Open the published URL on your phone.

## Important
This starter version uses front-end-only puzzles. The answers are in the JavaScript source, so it is a fun birthday experience, not a secure password or private-data system. Do not put private information in the source code.
