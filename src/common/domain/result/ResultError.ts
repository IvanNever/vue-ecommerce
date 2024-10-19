export class ResultError {
  public code: string;
  public description?: string;

  public constructor(code: string, description?: string) {
    this.code = code;
    this.description = description;
  }

  public equals(other: ResultError): boolean {
    if (this === other) {
      return true;
    }
    return this.code === other.code;
  }
}
