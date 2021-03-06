// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      eyes_setup(test_name: string, execution_type: string): Chainable<Element>;
      makeScreenshotWithHook(
        screenshotname: string,
        scriptHook: string
      ): Chainable<Element>;
      makeScreenshot(screenshotname: string): Chainable<Element>;
    }

    interface JQuery {
      fixtures(...any: any): any;
    }
  }
}

export {};
