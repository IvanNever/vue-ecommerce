export class AccessesSuccessResultError extends Error {
  constructor() {
    super("The value of a failure result can not be accessed.");
  }
}