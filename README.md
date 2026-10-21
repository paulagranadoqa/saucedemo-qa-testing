# QA Project: SauceDemo Testing Strategy

This repository showcases the testing process and documentation for the [SauceDemo](https://www.saucedemo.com/) e-commerce platform. The goal is to ensure high quality and a bug-free experience for users.

## Project Overview
I performed a comprehensive manual testing analysis, covering critical user flows to validate system stability, usability, and performance.

### Scopes Tested:
* **Login:** Authentication with valid/invalid credentials and field validation.
* **Products:** Catalog navigation, sorting logic, and product details.
* **Cart:** Add/remove items and real-time counter updates.
* **Checkout:** Full purchase flow, including personal information validation.
* **Core Functionality:** Accessibility (keyboard navigation) and responsiveness.

## 📄 Master Documentation

For complete planning details, full test suites (Passed, Failed, and Blocked test cases), access the core project artifacts:

- 📊 [View Full Manual Test Suite & Master Execution Report (Google Docs)](https://docs.google.com/spreadsheets/d/1AgQO6r1T6gPugLwDRPYrqwX5gfzEVDS9tBzwdQA2wNI/edit?usp=sharing)
- 📊 [View Full Manual Test Suite & Matrix (Google Sheets)](https://docs.google.com/spreadsheets/d/1AgQO6r1T6gPugLwDRPYrqwX5gfzEVDS9tBzwdQA2wNI/edit?usp=sharing)


## Tech Stack & Tools
* **Test Management:** Google Sheets / Excel
* **Documentation:** GitHub Markdown
* **Testing Environment:** Web (Chrome/Edge/Firefox)

---

## 🐛 Bug Tracking & Defect Reports

All test cases marked as **Failed** during execution were migrated to GitHub Issues for live tracking and resolution:

| Issue ID | Test Case | Feature / Module | Severity | Link |
| :---: | :---: | :--- | :---: | :---: |
| **#1** | TC04 | Login Form Validation | Critical | [View Issue #1](https://github.com/paulagranadoqa/saucedemo-qa-testing/issues/1) |
| **#2** | TC20 | Inactivity Session Expiration | Critical | [View Issue #2](https://github.com/paulagranadoqa/saucedemo-qa-testing/issues/2) |
| **#3** | TC59 | Multi-Tab Cart Synchronization | Major | [View Issue #3](https://github.com/paulagranadoqa/saucedemo-qa-testing/issues/3) |
| **#4** | TC64 | Cart Persistence After Logout | Major | [View Issue #4](https://github.com/paulagranadoqa/saucedemo-qa-testing/issues/4) |
| **#5** | TC67 | Offline Cart Modification | Critical | [View Issue #5](https://github.com/paulagranadoqa/saucedemo-qa-testing/issues/5) |
| **#6** | TC75 | Checkout Form Field Validation | Critical | [View Issue #6](https://github.com/Spaulagranadoqa/saucedemo-qa-testing/issues/6) |
| **#7** | TC77 | Empty Cart Checkout Prevention | Critical | [View Issue #7](https://github.com/paulagranadoqa/saucedemo-qa-testing/issues/7) |
| **#8** | TC80 | Checkout Button Dynamic State | Major | [View Issue #8](https://github.com/paulagranadoqa/saucedemo-qa-testing/issues/8) |
| **#9** | TC86 | Invalid URL Routing & 404 Fallback | Major | [View Issue #9](https://github.com/paulagranadoqa/saucedemo-qa-testing/issues/9) |
