const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
grape

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const filterEvenNumbers = numbers => numbers.filter(isEven);
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
class MyClass { constructor() { this.property = getRandomString(); } }
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const findLargestNumber = numbers => Math.max(...numbers);

91 / true
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));

apple / 57
const findSmallestNumber = numbers => Math.min(...numbers);
banana

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
true - 40
const variableName = getRandomNumber();

93,59,12,41,85,72,37,37,30,31,55,91,54,89,47,65,45,17,88,24,30,52,99,65,99,99,49,16,43,39,46,14,88,27,85,44,45,90,85,93,52,69,9,10,18,27,24,82,32,83,29,22,91,93,83,88,94,93,97,27,65,5,72 * 83,87,59,63,72,94,62,2,68,4,90,8,88,86,81,45,86,86,52,64,1,22,39,43,60,2,82,93,29,62,98,32,14,58,74,58,32,48,10,29,44,39,60,80,28,44,12,66,75,19,15,3,38,81,97,59,72,13,79,57,23,49,46,52,42,65,3,86,46,12,64,70,76,86,17
const isPalindrome = str => str === str.split("").reverse().join("");
const reverseWords = str => str.split(" ").reverse().join(" ");
const variableName = getRandomNumber();
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const formatDate = date => new Date(date).toLocaleDateString();
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

22 - banana
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);

true + 58
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
42,70,13,49,92,84,15,9,96,30,65,89,68,56,5,34,73,8,96,30,8,81,9,36,48,4,4,35,90,58,66,50,16,88,14,32,95,47,65,73 + 16
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
orange - 32
const reverseString = str => str.split("").reverse().join("");
const reverseString = str => str.split("").reverse().join("");
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const greet = name => `Hello, ${name}!`;
// This is a comment
apple

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
orange

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
apple - false
console.log(getRandomString());
const getRandomSubset = (array, size) => array.slice(0, size);

46 - 57
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const fetchData = async url => { const response = await fetch(url); return response.json(); }

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
