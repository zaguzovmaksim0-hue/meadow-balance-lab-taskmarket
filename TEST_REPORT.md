# Test report

## Acceptance mapping
| Example | Evidence |
|---|---|
| Lower water changes plant growth | Domain test runs a four-step dry sequence and verifies grass never rises. Browser walkthrough records step explanations. |
| Consumer without food cannot thrive indefinitely | Domain test starts herbivores at 50 with producers at zero and verifies decline. |
| Restoring resources can recover | Domain test degrades a low-resource state, restores light/water to 80 and verifies the mean balance score rises over six steps. |
| Identical actions are identical | Domain test calls the same model step twice from identical state and deep-compares results. |
| Values never negative/infinite/NaN | 100-step domain test checks every bounded numeric state. |
| Reset restores controls/prediction/indicators | Browser walkthrough verifies reset of scenario and restore challenge. |
| Pause/step/reset and inspectability | UI exposes manual Step, Auto run, Pause and Reset; each step lists plant/herbivore/predator change with cause. |
| Mobile/tablet/desktop | Browser evidence at 360/768/1280 CSS px. |

Automated tests: `node tests/model.test.mjs`. Actual Chromium/Playwright results are in `evidence/browser-check.txt`: missing-food feedback, dry-spell prediction/step explanation, auto-run/pause, reset, restore diagnosis, deterministic recovery from score 27 to 35 after resources were restored, and finish were exercised. Screenshots were captured at 360/768/1280 CSS px with no horizontal overflow. No testing with children was conducted; reduced-motion CSS is present but OS-level emulation was not run.
