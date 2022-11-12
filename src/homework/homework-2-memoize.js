// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum (a, b) { return a + b } // for test

// eslint-disable-next-line
function memoize(fn) {
	// fn ваш код тут...
	const cache = new Map();
	return (...arg) => {
		const key = JSON.stringify(arg);
		if (cache.has(key)) {
			return cache.get(key);
		}
		const result = fn(...arg);
		cache.set(key, result);
		return result;
	};
}

// приклад виконання вашого коду
const sumMemoized = memoize(sum)

console.log(sumMemoized(1, 3)) // результат 4
console.log(sumMemoized(3, 3)) // результат 6
console.log(sumMemoized(1, 3)) // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання
