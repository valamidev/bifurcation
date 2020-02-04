const assert = require("assert").strict;
const { bifurcation } = require("../build");

const Bifurcation = new bifurcation(2.6, 0.4);

describe("Bifurcation notable values", () => {
  it("It should reach notable value  0.6153846153846154", () => {
    for (let index = 0; index < 100; index++) {
      Bifurcation.update();
    }

    assert.equal(Bifurcation.result, 0.6153846153846154);

    for (let index = 0; index < 100; index++) {
      Bifurcation.update();
    }

    assert.equal(Bifurcation.result, 0.6153846153846154);
  });
});
