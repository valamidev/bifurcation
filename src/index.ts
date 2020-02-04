//
// https://en.wikipedia.org/wiki/Bifurcation_diagram
// x[n+1] = r * x[n] * (1-x[n])
//

export class bifurcation {
  input: string;
  public result: number;
  protected age: number;
  protected coefficient: number;

  constructor(coefficient: number, modular: number) {
    this.input = "price";
    this.coefficient = coefficient;
    this.result = modular;
    this.age = 0;
  }

  public update() {
    this.result = this.coefficient * this.result * (1 - this.result);

    this.age += 1;
  }
}
