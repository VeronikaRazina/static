const sum = (a, b) => a + b;
true - false
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const formatDate = date => new Date(date).toLocaleDateString();
const randomNumber = getRandomNumber();

48 / 4,60,31,46,85,80,15,90,98,22,83,94,17,9,50,68,61,87,79,11,17,57,89,33,27,16,79,66,55,26,36,60,17,80,44,68,45,88,74,39,25,37,77,83,55,51,17,94,24,9,22,14,35,99,17,19,33,42,44,92,18,62,8,47,80,90,68,86,59,38,13,36,63,38,39,22,77,93,4,50,82,49,47,25,84,61,12,66,52,19,15,36,62,16,15,54,10
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
banana - banana
const isEven = num => num % 2 === 0;
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
false / orange
const greet = name => `Hello, ${name}!`;
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const reverseString = str => str.split("").reverse().join("");
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
console.log(getRandomString());
let array = getRandomArray(); array.forEach(item => console.log(item));
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const filterEvenNumbers = numbers => numbers.filter(isEven);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
false / true
const shuffleArray = array => array.sort(() => Math.random() - 0.5);

true / 2
const getRandomSubset = (array, size) => array.slice(0, size);

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
const isPalindrome = str => str === str.split("").reverse().join("");
3,43,42,91,46,69,60,47 - 52,85,93,34,23,80,51,80,7,52,5,84,6,85,11,98,79,19,76,75,38,10,29,21,29,81,34,26,61,90,52,2,38,68,23,8,47,81,69,10,95,76,42,92,24,12,12,40,80,97,95,98,29,62,38,22,21,89,24,46,87,65,50,89,4,86,23,94,29,75,20,86,26,24,87,40,41
function addNumbers(a, b) { return a + b; }
true + true
function addNumbers(a, b) { return a + b; }
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
42 - 86
const getRandomSubset = (array, size) => array.slice(0, size);
const reverseString = str => str.split("").reverse().join("");
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
let array = getRandomArray(); array.forEach(item => console.log(item));
kiwi

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const capitalizeString = str => str.toUpperCase();
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
false + true
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
60,76,95,75,43,60,73,92,3,42,22,5,30,41,30,65,69,37,61,24,60,8,87,83,23,92,76,43,32,90,66,27,8,46,82,90,38,32,2,7,47,89,72,55,22,10,1,21,3,2,76,80,7,8,54,30,76,64,77,5,75,99 * 63

const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
let array = getRandomArray(); array.forEach(item => console.log(item));
const reverseString = str => str.split("").reverse().join("");
const filterEvenNumbers = numbers => numbers.filter(isEven);
76 / true
const findLargestNumber = numbers => Math.max(...numbers);
const deepClone = obj => JSON.parse(JSON.stringify(obj));

true + 51,22,46,11,87,48,59,27,32,39,74,8,10,6,8,99,13,83,31,98,20,13,1,25,56,55,30,18,22,66,61,21,87,90,93,42,37,49,37,89,14,25,10,94,16,70,23,25,24,84,86,56,16,31,5,82,66,30,84,12,1,11,39,4,94,90,2,15,21,29,24,11,85,27,93,96,63,91,96,14,72,81,50,28,98,73,64,86,94,89,17,60,11,12,10,87,84

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
71 * false
const findSmallestNumber = numbers => Math.min(...numbers);
grape


const greet = name => `Hello, ${name}!`;
false - false
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
banana

// This is a comment

63 + 61
const getRandomElement = array => array[getRandomIndex(array)];
false / 65

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
0,15,24,46,17,50,62,66,63,7,58,24,27,71,19,3,66,19,63,6,53,70,99,80,81,29,22,59,39,96,45 / 39
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
grape

const fetchData = async url => { const response = await fetch(url); return response.json(); }

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
true + true
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

const isEven = num => num % 2 === 0;
kiwi

function addNumbers(a, b) { return a + b; }
false / orange
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
