export abstract class ValueObject {
  protected abstract getEqualityComponents(): Array<any>;

  public equals(obj: any) {
    if (!obj) {
      return false;
    }

    if (this === obj) {
      return true;
    }

    if (this.constructor.name !== obj.constructor.name) {
      return false;
    }

    return this.equalsComponents(
      this.getEqualityComponents(),
      obj.getEqualityComponents()
    );
  }

  private equalsComponents(
    components1: Array<any>,
    components2: Array<any>
  ): boolean {
    return components1.every((component: any, index: number): boolean => {
      return this.equalsComponent(component, components2[index]);
    });
  }

  private equalsComponent(component1: any, component2: any): boolean {
    if (component1 === component2) {
      return true;
    }

    if (!component1 || !component2) {
      return false;
    }

    if (Array.isArray(component1) && Array.isArray(component2)) {
      return this.equalsComponents(component1, component2);
    }

    if (component1.getEqualityComponents && component1.equals(component2)) {
      return true;
    }

    return false;
  }
}
