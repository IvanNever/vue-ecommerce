import { Entity } from "./Entity";

export abstract class AggregateRoot extends Entity {
  protected constructor(id?: number) {
    super(id);
  }
}
