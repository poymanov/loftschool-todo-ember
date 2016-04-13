var data = [];
// Получаем данные из localStorage

for(var key in localStorage) {
	data.push({
		text: key,
		is_done: !!+localStorage[key]
	});
}

console.log(data);

export default data;