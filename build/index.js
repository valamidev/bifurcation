"use strict";
//
// https://en.wikipedia.org/wiki/Bifurcation_diagram
// x[n+1] = r * x[n] * (1-x[n])
//
Object.defineProperty(exports, "__esModule", { value: true });
class bifurcation {
    constructor(coefficient, modular) {
        this.input = "price";
        this.coefficient = coefficient;
        this.result = modular;
        this.age = 0;
    }
    update() {
        this.result = this.coefficient * this.result * (1 - this.result);
        this.age += 1;
    }
}
exports.bifurcation = bifurcation;
//# sourceMappingURL=index.js.map