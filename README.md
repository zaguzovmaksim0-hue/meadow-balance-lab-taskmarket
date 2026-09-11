# Meadow Balance Lab
Static deterministic ecosystem lesson for approximately age 9.

Run: `python3 -m http.server 8080` and open `http://127.0.0.1:8080/`. Tests: `node tests/model.test.mjs`. No third-party runtime dependencies.

## Architecture
`model.mjs` is the explicit deterministic bounded model. `app.mjs` manages activity state, prediction, auto/pause/step/reset and explanations. HTML/CSS provide semantic controls and labelled non-colour indicators. No progress is stored.

Target: current Chrome/Chromium, Firefox and Safari-class browsers with ES modules. No accounts, analytics, uploads, remote grading, payments or network APIs are used.
