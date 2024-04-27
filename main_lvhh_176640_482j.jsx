const getRandomSubset = (array, size) => array.slice(0, size);
orange

const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
grape

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

true / 30,4,63,3,82,70,53,69,85,53,55,50,90,32,75,50,81,19,85,87,3,29,87,21,33,13,31,11,70,17,49,39,85,77,20,0,25,79,15,16,46,6,32,41,12
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const isPalindrome = str => str === str.split("").reverse().join("");

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
57,46,26,86,68,97,82,62,89,61,53,76,65,33,51,79,19,7,85,20,96,86,54,61,60,52,74,81,80,64,59,7,12,76,32,9,83,40,41,97,29,83,37,51,88,56,65,12,55,42,59,54,2,61,84,53,12,90,0,29,72,72,39,39,45,21,44,29 / banana

const reverseString = str => str.split("").reverse().join("");
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

console.log(getRandomString());
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
apple - 86,75,97,80,44,39,11,7,95,20,43,97,13,21,75,61,66,20,27
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

true / orange
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
apple

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
true * 76,89,83,99,4,87,25,53,15,68
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

banana / 15

const reverseString = str => str.split("").reverse().join("");
81 / 42,52,8,52,23,6,1,14,89,46,76,64,10,16,29,90,52,9,6,33,60,82,3,66,63
const removeDuplicates = array => Array.from(new Set(array));
console.log(getRandomString());
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const squareRoot = num => Math.sqrt(num);
