import { Entity } from '@/common/domain/Entity';

export class User extends Entity {
  public constructor(
    private _email: string,
    private _roles: any[],
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    id?: number
  ) {
    super(id);
  }

  public get email(): string {
    return this._email;
  }

  public get roles(): any[] {
    return this._roles;
  }
}
