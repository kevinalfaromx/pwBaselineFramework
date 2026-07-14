# Playwright Baseline Framework

## Install

1. Install dependencies:
```bash
npm install
```

2. (Optional) Install Playwright browsers if you need them:
```bash
npx playwright install
```

## Run tests

Run the Playwright test suite:
```bash
npx playwright test
```

Run tests in headed mode for debugging:
```bash
npx playwright test --headed
```

## Notes

- Keep `package-lock.json` committed for reproducible installs.
- Do not commit `node_modules/`; add it to `.gitignore`.
