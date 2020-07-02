import "./style.scss";
import { getUsers } from "./util/usersAPI";

console.log("Hello webpack");

const fancyFunc = () => {
    return [1, 2];
};

const [a, b] = fancyFunc();

console.log(a);
console.log(b);

getUsers().then(json => console.log(json));