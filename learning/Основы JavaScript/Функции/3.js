// Функция pow(x,n)
// важность: 4

// Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.

// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1

// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).

// Запустить демо

// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е. целые от 1 и выше.

let result = 0;

function pow(x, n){
    if(n >= 1){
        result = x**n;
        return result;
    }
    return false
}

alert(pow(+prompt(""),+prompt("")))
