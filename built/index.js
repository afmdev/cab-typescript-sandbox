console.log("Hola Ale");
async function helloAle() {
    return "hello";
}
let age = 23;
let weekday;
weekday = "Monday";
const bestMentor = "Raúl";
const John = {
    firstName: "John",
    lastName: "Woitkowitz",
    age: 18,
    hasGlasses: true,
    job: "researcher",
};
const Marta = {
    firstName: "Marta",
    lastName: "Podmar",
    age: 18,
    hasGlasses: true,
    job: "dog trainer",
};
const Alejandro = {
    firstName: "Alejandro",
    lastName: "Marrero",
    age: 18,
    hasGlasses: true,
    job: "vividor",
};
//UN ARRAY DE STUDENTS
const cohort = [John, Marta];
const quokkas = [John, Marta];
cohort.push(Alejandro);
quokkas.push(Alejandro);
console.log(cohort);
console.log(quokkas);
const list1 = [1, "hi", true];
function multiply(x, y) {
    return x * y;
}
const res = multiply(1, 2);
console.log(`res`, res);
const showAlert = () => {
    alert("Hello Ale");
    //   return "Hi";
};
// showAlert();
const dataMentor = "Killian";
function identityNum(arg) {
    return arg;
}
const resultNum = identityNum(3);
function identityAny(arg) {
    return arg;
}
const resultAny = identityAny(3);
function identity(arg) {
    return arg;
}
const resultType = identity({ a: 3 });
// function logginIdentity<Type>(arg: Type): Type {
//   console.log(arg.length);
//   return arg;
// }
function logginIdentity(arg) {
    console.log(arg.length);
    return arg;
}
logginIdentity([3, 2, 1]);
//
const getUsers = async () => {
    const response = await fetch("users");
    const data = await response.json();
};
const getMuseums = async () => {
    const response = await fetch("museums");
    const data = await response.json();
};
const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
const genericFetchData = async (endpoint) => {
    const request = await fetch(process.env.BE_HOST + endpoint);
    const response = await request.json();
    return response;
};
