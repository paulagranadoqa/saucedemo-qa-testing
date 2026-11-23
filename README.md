# 🛒 SauceDemo E-Commerce Testing Suite: Manual & Cypress E2E Automation

This project features a complete frontend quality assurance portfolio for the **SauceDemo** e-commerce platform, combining comprehensive manual test suite design and exploratory defect reporting with automated end-to-end (E2E) UI regression testing in **Cypress**.

---

## 📄 Master Documentation & Test Artifacts
For complete planning details, full test suites (Passed, Failed, and Blocked test cases), and coverage analysis, access the core project artifacts:
- 📊 [View Full Manual Test Suite & Master Execution Report (Google Docs)](https://docs.google.com/document/d/13lFbCHXZ2HnNwUqbBQ32u04euyv_ans7z60cDEeuM2g/edit?usp=sharing)
- 📊 [View Full Manual Test Suite & Matrix (Google Sheets)](https://docs.google.com/spreadsheets/d/1AgQO6r1T6gPugLwDRPYrqwX5gfzEVDS9tBzwdQA2wNI/edit?usp=sharing)

---

## 🎯 Key QA Highlights & Test Coverage
- **Authentication & Access Control:** Validation of valid login (`standard_user`), locked-out user handling (`locked_out_user`), and invalid credential error states.
- **Shopping Cart Management:** Dynamic item addition/removal, badge counter synchronization, and cart state verification.
- **End-to-End Checkout Flow:** Complete purchase journey from product selection through customer information input, order summary total calculation, and order confirmation.
- **Negative & Form Validation Testing:** Verification of mandatory checkout fields (`First Name is required`) and error banner visibility.
- **Exploratory & Non-Functional Analysis:** Manual coverage of catalog sorting, multi-tab cart synchronization, session expiration, accessibility (keyboard navigation), and responsiveness.

---

## 🚀 Test Scenarios & Traceability Matrix
Subset of critical smoke and regression journeys mapped from the master manual test plan (`TC`) to automated UI regression scripts (`SD`) executed in Cypress using resilient `data-test` selectors:

| Plan ID | Automation ID | Scenario / Description | Module | Execution Scope |
| :--- | :--- | :--- | :--- | :--- |
| **TC01** | `SD-01` | Successful login with valid credentials (`standard_user`) | Authentication | 🤖 Cypress & 📋 Manual |
| **TC02** | `SD-02` | Login blocked for `locked_out_user` account | Authentication | 🤖 Cypress & 📋 Manual |
| **TC03** | `SD-03` | Error message on invalid password input | Authentication | 🤖 Cypress & 📋 Manual |
| **TC04** | — | Login form empty field validation | Authentication | 📋 Manual (Bug #1) |
| **TC30** | `SD-04` | Add and remove item from shopping cart & badge update | Cart | 🤖 Cypress & 📋 Manual |
| **TC59** | — | Multi-tab cart synchronization | Cart | 📋 Manual (Bug #3) |
| **TC70** | `SD-05` | Complete end-to-end checkout flow & order confirmation | Checkout | 🤖 Cypress & 📋 Manual |
| **TC75** | `SD-06` | Checkout form validation with empty required fields | Checkout | 🤖 Cypress & 📋 Manual |
| **TC77** | — | Empty cart checkout prevention | Checkout | 📋 Manual (Bug #7) |

---

## 🐛 Bug Tracking & Defect Reports
All test cases marked as **Failed** during manual and exploratory execution were migrated to GitHub Issues for live tracking and resolution:

| Issue ID | Test Case | Feature / Module | Severity | Link |
| :--- | :--- | :--- | :--- | :--- |
| **#1** | TC04 | Login Form Validation | Critical | [View Issue #1](SEU_LINK_ISSUE_1) |
| **#2** | TC20 | Inactivity Session Expiration | Critical | [View Issue #2](SEU_LINK_ISSUE_2) |
| **#3** | TC59 | Multi-Tab Cart Synchronization | Major | [View Issue #3](SEU_LINK_ISSUE_3) |
| **#4** | TC64 | Cart Persistence After Logout | Major | [View Issue #4](SEU_LINK_ISSUE_4) |
| **#5** | TC67 | Offline Cart Modification | Critical | [View Issue #5](SEU_LINK_ISSUE_5) |
| **#6** | TC75 | Checkout Form Field Validation | Critical | [View Issue #6](SEU_LINK_ISSUE_6) |
| **#7** | TC77 | Empty Cart Checkout Prevention | Critical | [View Issue #7](SEU_LINK_ISSUE_7) |
| **#8** | TC80 | Checkout Button Dynamic State | Major | [View Issue #8](SEU_LINK_ISSUE_8) |
| **#9** | TC86 | Invalid URL Routing & 404 Fallback | Major | [View Issue #9](SEU_LINK_ISSUE_9) |

---

## 🛠️ Tech Stack & Tools
- **UI Automation Framework:** Cypress (E2E Testing)
- **Programming Language:** JavaScript (ES6+)
- **Test Management & Documentation:** Google Sheets, Google Docs, GitHub Markdown & Issues
- **Target Application:** [SauceDemo Web App](https://www.saucedemo.com) (Chrome / Edge / Firefox)

---

## 📁 Project Structure
- `cypress/e2e/login.cy.js` — Authentication automated test scenarios (`SD-01` to `SD-03`)
- `cypress/e2e/checkout.cy.js` — Cart & end-to-end checkout automated scenarios (`SD-04` to `SD-06`)
- `cypress.config.js` — Cypress configuration (`baseUrl` & test runner settings)
- `package.json` — Project dependencies and scripts
- `README.md` — Project documentation and traceability matrix

---

## 🔧 Setup & How to Run the Tests

1. **Clone the repository:**
   `git clone https://github.com/SEU-USUARIO/saucedemo-qa-testing.git && cd saucedemo-qa-testing`

2. **Install dependencies:**
   `npm install`

3. **Run all automated tests in headless mode (terminal):**
   `npx cypress run`

4. **Run a specific test spec:**
   `npx cypress run --spec "cypress/e2e/login.cy.js"`

5. **Open Cypress Test Runner (Interactive UI):**
   `npx cypress open`

---
## 📸 Execution Evidence

### 1. Interactive Test Runner Execution (Video)
- 🎥 **[Cypress Test Runner & Specs Execution (Jam.dev)](https://jam.dev/c/84cf5674-a092-4589-83b0-5d8ae56e299b)** — Demonstration of both spec files (`login.cy.js` and `checkout.cy.js`) running inside the Cypress UI.

### 2. Headless Execution (Cypress Terminal Execution Summary)

<img width="731" height="564" alt="cypress-spec-results" src="https://github.com/user-attachments/assets/b1dd1098-0b30-46c6-b314-c506c2be9422" />

<img width="739" height="683" alt="cypress-terminal-summary png" src="https://github.com/user-attachments/assets/4e5cdbe4-d798-4d28-88d2-e255bad0b261" />


### 3. Detailed Results by Module
- **Authentication Suite (`login.cy.js`):** Covers `SD-01` (Valid Login), `SD-02` (Locked-Out User), and `SD-03` (Invalid Password).
- **Cart & Checkout Suite (`checkout.cy.js`):** Covers `SD-04` (Cart Add/Remove), `SD-05` (End-to-End Purchase Flow), and `SD-06` (Checkout Empty Field Validation).
