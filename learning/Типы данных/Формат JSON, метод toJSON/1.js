// Преобразуйте объект в JSON, а затем обратно в обычный объект
// важность: 5

// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};

let json = JSON.parse(JSON.stringify(user));

console.log(json);
