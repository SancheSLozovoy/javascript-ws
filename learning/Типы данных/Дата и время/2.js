// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

let day = ["Пн","Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

function getWeekDay(date){
    return day[date.getDay()]
}

let date = new Date(2012, 0, 3);
console.log(getWeekDay(date))