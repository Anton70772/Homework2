const student = "Полищук Антон Александрович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...

const WeekOne = Array(16).fill([4, 1, 2, 5, 2, 2, 0]).flat();
const ExamOne = Array(1).fill([0, 2, 0, 2, 0, 0, 0]).flat();
const kanikyls = Array(2).fill([0, 0, 0, 0, 0, 0, 0]).flat();
const WeekTwo = Array(23).fill([1, 4, 4, 2, 5, 0, 0]).flat();
const ExamTwo = Array(1).fill([2, 0, 2, 0, 2, 0, 0]).flat();

const array = [WeekOne, ExamOne, kanikyls, WeekTwo, ExamTwo].flat();

let gameconsole = +prompt ('Стоимость приставки');
let travel = +prompt ('Стоимость проезда');
let sumtravel = +prompt ('сумма проезда'); //сколько дала мама на проезд
let sumlunch = +prompt ('сумма обеда');

const traveldifference = sumtravel - travel

let allmoney = 0;
let alldays = 0;

if (traveldifference < 0) {

alert('Сумма денег, которую дает мама на проезд не может быть меньше суммы проезда')

} else {    
        
for (let i = 0; i < array.length; i++) {

if (allmoney >= gameconsole) { break   
}

if ((array[i] <= 3) && (array[i] > 0)) {

allmoney = allmoney + sumlunch + traveldifference
    
} else if (array[i] > 3) {

allmoney = allmoney + traveldifference 
    
}

alldays = alldays + 1

}

if (allmoney >= gameconsole) {
alert('На приставку удалось накопить за ' + Number(alldays) + ' дней.')
} else {
alert('На приставку накопить не удалось, но за все время было накоплено ' + Number(allmoney) + ' рублей.')}}