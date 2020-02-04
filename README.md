# Bifurcation number generator

Bifurcation generator npm module

## Usage

```
const { bifurcation } = require("../build");

//
// x[n+1] = r * x[n] * (1-x[n])
//
const Bifurcation = new bifurcation(2.6, 0.4); // (r,x)

// Calculate value
Bifurcation.update(); // 0.624
Bifurcation.update(); // 0.6100224000000001
Bifurcation.update(); // 0.618527185895424
Bifurcation.update(); // 0.6134733961296502
Bifurcation.update(); // 0.6165218497640891

// Get value
console.log(Bifurcation.result); // 0.6165218497640891

```

Read more: https://en.wikipedia.org/wiki/Bifurcation_diagram
