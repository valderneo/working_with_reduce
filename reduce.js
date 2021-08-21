const people = [
  { id:"1", name: "Leigh", age: 35 },
  { id:"2", name: "Jenny", age: 30 },
  { id:"3", name: "Heather", age: 28 }
];
let count;
let sumages;
let mapping;
let lockup;
let maxage;
let miniage;
let findbyname;
let over18;
let anyover18;

// count - подсчет количества объектов в массиве 

count = people.reduce((acc, person) => acc + 1 ,0);


// sum ages - подсчет значения ключа age в массиве, сумма возраста 

sumages = people.reduce((acc, person) => acc + person.age, 0);


// array of names (Map) - применение редьюса для мапинка имен 

mapping = people.reduce((acc, person) => [...acc, person.name],[])


// convert to id => person lockup dist - переносим значения ключа id за границу объекта {}, то есть в начало

lockup = people.reduce((acc, person) =>  {
  return { ...acc, [person.id]: person };
}, {})


// max age - узнать максимальный возраст в объекте 

maxage = people.reduce((acc, person) => {
  if (person.age > acc) return person.age
  return acc;
},0)


// mini age - узнать минимальный возраст в объекте

miniage = people.reduce((acc, person) => {
  if (acc === null || person.age < acc) return person.age
  return acc;
},null)

// find by name  - найти объект в массиве по имени "Leigh"

findbyname = people.reduce((acc, person) => {
  if (acc !== null) return acc;
  if ( person.name = "Leigh") return person;
  return null;
}, null)


// all people over 18 - провеяем есть ли в объекте люди старше 18 лет // проверяем на t / f  
// !acc - false (негативное) значение аккумулятора

over18 = people.reduce((acc, person) => {
  if (!acc) return false;
  return person.age > 18;
}, true);


// any over 18 - провеяем есть ли в объекте кто либо старше 18 лет // проверяем на t / f 
// начали с первого значения false чтобы редьюс перекидывал значение true

anyover18 = people.reduce((acc, person) => {
  if (acc) return true;
  return person.age > 18;
}, false);

console.log(count,
sumages,
mapping,
lockup,
maxage,
miniage,
findbyname,
over18,
anyover18,)
