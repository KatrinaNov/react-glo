
const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений',
	' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
// const command = [];

// employers.forEach(item => {
// 	if (item.length > 0 && item.trim() !== '') {
// 		command.push(item);
// 	}
// });
// for (let i = 0; i < command.length; i++) {
// 	command[i] = command[i].toLowerCase().trim();
// 	command[i] = command[i][0].toUpperCase() + command[i].slice(1);
// }
const command = employers.filter(name => name.trim().length)
.map(name => name.trim().charAt(0).toUpperCase() + name.trim().substr(1).toLowerCase());

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};
// const { cash, react, add } = data;
const { cash, react, react: [first], add } = data;

// const calcCash = (...arg) => {
// 	let total = 0;
// 	arg.forEach(item => total += +item);
// 	return total;
// };
// const lesson = calcCash(...cash);

const calcCash = everyCash => everyCash.reduce((prev, curr) => prev + curr);

const lesson = calcCash(cash);

const makeBusiness = (director, allModule, gang, course, teacher = 'Максим') => {
	const sumTech = [...react, ...add, 'и другие'];
	console.log(
		`Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}
Первое что изучим будет ${react[0]}. Он очень похож на HTML!
Технологии которые мы изучим:
${sumTech.join(' ')}`);
};

makeBusiness('Артем', lesson, command, nameCourse);
