const student = "Плотников Георгий Вячеславович"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;

// Отсюда и ниже идет ваш код решения домашнего задания
// ...
const error = 0.2;

function throwRandomError(number) {
const randomNumber = Math.random(1).toFixed(1);   
if (number < 0 || number > 1) {
throw new Error('Необходимо число от 0.0 до 1.0');
} else if (randomNumber <= number) {
throw new Error('Рандомная ошибка!');
};
 
};
try {
throwRandomError(error);
alert('Всё в порядке, приложение работает в штатном режиме');
} catch(e) {
alert(`Произошла ошибка, пожалуйста перезагрузите страницу`);
}