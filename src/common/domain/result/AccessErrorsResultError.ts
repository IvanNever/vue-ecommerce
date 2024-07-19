export class AccessErrorsResultError extends Error {
  constructor() {
    super("The errors of a success result can not be accessed.");
  }
}