# Compound Interest Calculator

A simple JavaScript program to calculate compound interest using the compound interest formula.

## Formula

**A = P(1 + r/n)^(nt)**

Where:

* `P` = Principal amount
* `r` = Annual interest rate
* `n` = Number of times interest is compounded per year
* `t` = Time in years
* `A` = Final amount

## Example

```javascript
let p = 112;
let r = 12 / 100;
let n = 23;
let t = 12;

let compoundInterest = p * (1 + r / n) ** (n * t) - p;

console.log(compoundInterest);
```

## Technologies Used

* JavaScript
