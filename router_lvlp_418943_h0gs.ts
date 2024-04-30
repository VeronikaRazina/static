kiwi / banana
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
kiwi


const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);

false + 95
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
58 * 42
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
banana * true

if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
const findLargestNumber = numbers => Math.max(...numbers);
grape

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
apple / 30,97,70,41,70,0,90,43,27,18,87

const reverseWords = str => str.split(" ").reverse().join(" ");

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
let result = performOperation(getRandomNumber(), getRandomNumber());

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
grape

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

banana + 52,20,9,20,58,76,82,41,74,81,32,19,56,95,56,20,84,96,16,87,25,0,49,91,48,58,7,89,94,11,84,6,61,10,37,78,44,93,38,13,11,9,71,95,68,33,25,63,46,29,6,67,23,35,72,87,84,84,86,94,19,89,95,45,80,65,99,0,23,48,17,70,35,65,82,9,6,68,68,21,99,38,26
const findSmallestNumber = numbers => Math.min(...numbers);

43 + 1,28,8,57,12,28,30,38,92,55,70,44,89,90,81,59,58,77,18,23,40,97,67,41,3,89,81,44,71
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const formatDate = date => new Date(date).toLocaleDateString();
const squareRoot = num => Math.sqrt(num);
19 + 18

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
banana

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

let array = getRandomArray(); array.forEach(item => console.log(item));
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };

grape + grape
const deepClone = obj => JSON.parse(JSON.stringify(obj));
let array = getRandomArray(); array.forEach(item => console.log(item));
banana - 11
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
orange / grape
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
apple

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
