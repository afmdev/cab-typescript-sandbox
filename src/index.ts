console.log("Hola Ale");

async function helloAle() {
  return "hello";
}

let age = 23;

let weekday: string;

weekday = "Monday";

const bestMentor: WebDev.Mentor = "Raúl";

const John: WebDev.Student = {
  firstName: "John",
  lastName: "Woitkowitz",
  age: 18,
  hasGlasses: true,
  job: "researcher",
};

const Marta: WebDev.Student = {
  firstName: "Marta",
  lastName: "Podmar",
  age: 18,
  hasGlasses: true,
  job: "dog trainer",
};

const Alejandro: WebDev.Student = {
  firstName: "Alejandro",
  lastName: "Marrero",
  age: 18,
  hasGlasses: true,
  job: "vividor",
};

//UN ARRAY DE STUDENTS
const cohort: Array<WebDev.Student> = [John, Marta];
const quokkas: WebDev.Cohort = [John, Marta];

cohort.push(Alejandro);
quokkas.push(Alejandro);

console.log(cohort);
console.log(quokkas);

type MyList = [number, string, boolean];
const list1: MyList = [1, "hi", true];

function multiply(x: number, y: number): number {
  return x * y;
}
const res = multiply(1, 2);
console.log(`res`, res);

const showAlert = (): void => {
  alert("Hello Ale");
  //   return "Hi";
};

// showAlert();

const dataMentor: Data.Mentor = "Killian";

function identityNum(arg: number): number {
  return arg;
}
const resultNum = identityNum(3);

function identityAny(arg: any): any {
  return arg;
}
const resultAny = identityAny(3);

function identity<Type>(arg: Type): Type {
  return arg;
}
const resultType = identity({ a: 3 });

// function logginIdentity<Type>(arg: Type): Type {
//   console.log(arg.length);
//   return arg;
// }

function logginIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
logginIdentity([3, 2, 1]);

//

const getUsers = async () => {
  const response = await fetch("users");
  const data: ApiResponse<UserData> = await response.json();
};

const getMuseums = async () => {
  const response = await fetch("museums");
  const data: ApiResponse<MuseumData> = await response.json();
};

const getData = async (url: string): Promise<ApiResponse<MuseumData>> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const genericFetchData = async <R>(
  endpoint: string
): Promise<ApiResponse<R>> => {
  const request = await fetch(process.env.BE_HOST + endpoint);
  const response = await request.json();
  return response;
};
