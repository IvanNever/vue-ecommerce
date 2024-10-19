import { Guid } from "guid-typescript";
import { EntityGuid } from "./EntityGuid";

export abstract class AggregateRootGuid extends EntityGuid {
  protected constructor(id?: Guid) {
    super(id);
  }
}
