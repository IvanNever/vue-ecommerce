import { Guid } from "guid-typescript";

export interface IEntityGuid {
  get id(): Guid;
  equals(obj: any): boolean;
}

export abstract class EntityGuid implements IEntityGuid {
  protected readonly _id: Guid;

  protected constructor(id?: Guid) {
    this._id = id || Guid.create();
  }

  public get id(): Guid {
    return this._id;
  }

  public equals(obj: any): boolean {
    if (!obj) {
      return false;
    }

    if (this === obj) {
      return true;
    }

    if (this.constructor.name !== obj.constructor.name) {
      return false;
    }

    return this.id.equals(obj.id);
  }
}
