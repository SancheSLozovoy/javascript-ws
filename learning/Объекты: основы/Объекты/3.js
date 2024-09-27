// Сумма свойств объекта
// важность: 5
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

const summ = (obj) => {
  const values = Object.values(obj);
  return values.reduce((acc, value) => acc += value, 0)
}
  

console.log(summ({
  John: 100,
  Ann: 160,
  Pete: 130
}))
  
  