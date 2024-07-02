import "./style.scss";
import { getUsers } from "./util/usersAPI";

console.log("Hello webpack");

const fancyFunc = () => {
    return [1, 2];
};

const [a, b] = fancyFunc();

console.log(a);
console.log(b);

getUsers().then((json) => console.log(json));

/* eslint-disable no-unused-vars */
let heading = "Integrating ESLint--Challenge";

let double = (num) => {
    let result = num * 2;
    console.log(result);
    return result;
};

let days = double(365);
let headings = `Two years contain ${days} days`;
console.log(headings);
