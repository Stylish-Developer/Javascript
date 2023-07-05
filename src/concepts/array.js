const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
// fliter
// map
// sort
// reduce

// -- forEach method

//   before forEach() - for loop
// for (let i = 0; i < companies.length; i++) {
//   console.log("for loop - forEach concept", companies[i]);
// }

// after forEach
// companies.forEach((x) => console.log("forEach output", x));

// -- filter method

// before filter method - for loop
// let canVote = [];

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 18) {
//     canVote.push(ages[i]);
//   }
// }

// console.log("fiter example output with for loop", canVote);

// after filter
const canVote = ages.filter((y) => y >= 18);

console.log("filter example output", canVote);

// filter example 2
// filter companies with retail business
const retailCompany = companies.filter(
  (company) => company.category === "Retail"
);

console.log("retail companies", retailCompany);

// filter example 3
// filter companies started from 80's and below 90's

const eightiesCompany = companies.filter(
  (company) => company.start > 1980 && company.end < 1990
);

console.log('80"s company', eightiesCompany);

// to filter latest 10 years company

const latestTenYears = companies.filter(
  (company) => company.end - company.start >= 10
);

console.log("latestTenYears companies", latestTenYears);

// -- map() method

const mapResult = companies.map((company) => {
  return `<li>${company.name} ${company.category} [${company.start} - ${company.end}]</li>`;
});

document.getElementById("mapresult").innerHTML = mapResult;
console.log("mapResult", mapResult);

// -- sort method
const sortAges = ages.sort((a, b) => b - a);

console.log("sortAges", sortAges);

// with this we can find minimum and maximum value in an array.
console.log("min", Math.min(...sortAges));
console.log("max", Math.max(...sortAges));

// -- reduce method

const reducedData = ages.reduce((total, value) => {
  return (total += value);
}, 0);

console.log("reducedData", reducedData);
