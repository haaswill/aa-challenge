import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      testId(value: string): Chainable<Element>;
    }
  }
}
