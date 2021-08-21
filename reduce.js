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

count = people.reduce((acc, item) => acc + 1 ,0);


// sum ages - подсчет значения ключа age в массиве, сумма возраста 

sumages = people.reduce((acc, item) => acc + item.age, 0);


// array of names (Map) - применение редьюса для мапинка имен 

mapping = people.reduce((acc, item) => [...acc, item.name],[])


// convert to id => item lockup dist - переносим значения ключа id за границу объекта {}, то есть в начало

lockup = people.reduce((acc, item) =>  {
  return { ...acc, [item.id]: item };
}, {})


// max age - узнать максимальный возраст в объекте 

maxage = people.reduce((acc, item) => {
  if (item.age > acc) return item.age
  return acc;
},0)


// mini age - узнать минимальный возраст в объекте

miniage = people.reduce((acc, item) => {
  if (acc === null || item.age < acc) return item.age
  return acc;
},null)

// find by name  - найти объект в массиве по имени "Leigh"

findbyname = people.reduce((acc, item) => {
  if (acc !== null) return acc;
  if ( item.name = "Leigh") return item;
  return null;
}, null)


// all people over 18 - провеяем есть ли в объекте люди старше 18 лет // проверяем на t / f  
// !acc - false (негативное) значение аккумулятора

over18 = people.reduce((acc, item) => {
  if (!acc) return false;
  return item.age > 18;
}, true);


// any over 18 - провеяем есть ли в объекте кто либо старше 18 лет // проверяем на t / f 
// начали с первого значения false чтобы редьюс перекидывал значение true

anyover18 = people.reduce((acc, item) => {
  if (acc) return true;
  return item.age > 18;
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
