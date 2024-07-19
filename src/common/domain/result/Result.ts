import { ResultError } from "@/common/domain/result/ResultError";
import { AccessErrorsResultError } from "@/common/domain/result/AccessErrorsResultError";
import { AccessesSuccessResultError } from "@/common/domain/result/AccessesSuccessResultError";

export class Result<T = void> {
  public readonly isSuccess: boolean;
  protected readonly _errors?: Array<ResultError>;
  protected readonly _value?: T;

  protected constructor(
    isSuccess: boolean,
    errors?: Array<ResultError>,
    value?: T
  ) {
    this.isSuccess = isSuccess;
    this._errors = errors;
    this._value = value!;
  }

  public get isFailure() {
    return !this.isSuccess;
  }

  public get errors(): Array<ResultError> {
    if (this.isSuccess) {
      throw new AccessErrorsResultError();
    }

    return this._errors!;
  }

  public includesError(error: ResultError): boolean {
    if (this.isSuccess) {
      throw new AccessErrorsResultError();
    }
    return !!this.errors!.find((e) => error.equals(e));
  }

  public get value(): T {
    if (!this.isSuccess) {
      throw new AccessesSuccessResultError();
    }

    return this._value!;
  }

  public static failure<T = void>(...errors: Array<ResultError>): Result<T> {
    return new Result<T>(false, errors, undefined);
  }

  public static success<T = void>(value?: T): Result<T> {
    return new Result<T>(true, undefined, value);
  }
}
