"use strict";

function solveEquation(a, b, c) {
  let arr;

  arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    arr;
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a))
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a))
    console.log(arr)
  }
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) 
{
	const P = percent / 100 / 12;
	const S = amount - contribution;
	const n = countMonths;
	const monthlyPayment = S * (P + P / (Math.pow(1 + P, n) - 1));
	const totalAmount = (monthlyPayment * n).toFixed(2);
	let num = Number(totalAmount);
	return num;
}
calculateTotalMortgage(10, 0, 50000, 12)