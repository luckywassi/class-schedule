export const createSchedule = todayDate => {
	let scheduleObject = {};
	if (todayDate.getDay() === 0) {
		let mon = new Date(todayDate.getTime() + 1 * 24 * 60 * 60 * 1000);
		let wed = new Date(todayDate.getTime() + 3 * 24 * 60 * 60 * 1000);
		let fri = new Date(todayDate.getTime() + 5 * 24 * 60 * 60 * 1000);
		let sat = new Date(todayDate.getTime() + 6 * 24 * 60 * 60 * 1000);
		scheduleObject = {
			...scheduleObject,
			python: mon.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
	if (todayDate.getDay() === 1) {
		let mon = new Date(todayDate.getTime() + 0 * 24 * 60 * 60 * 1000);
		let wed = new Date(todayDate.getTime() + 2 * 24 * 60 * 60 * 1000);
		let fri = new Date(todayDate.getTime() + 4 * 24 * 60 * 60 * 1000);
		let sat = new Date(todayDate.getTime() + 5 * 24 * 60 * 60 * 1000);
		scheduleObject = {
			...scheduleObject,
			python: mon.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
	if (todayDate.getDay() === 2) {
		let mon = new Date(todayDate.getTime() + 6 * 24 * 60 * 60 * 1000);
		let wed = new Date(todayDate.getTime() + 1 * 24 * 60 * 60 * 1000);
		let fri = new Date(todayDate.getTime() + 3 * 24 * 60 * 60 * 1000);
		let sat = new Date(todayDate.getTime() + 4 * 24 * 60 * 60 * 1000);
		scheduleObject = {
			...scheduleObject,
			python: mon.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
	if (todayDate.getDay() === 3) {
		let mon = new Date(todayDate.getTime() + 5 * 24 * 60 * 60 * 1000);
		let wed = new Date(todayDate.getTime() + 0 * 24 * 60 * 60 * 1000);
		let fri = new Date(todayDate.getTime() + 2 * 24 * 60 * 60 * 1000);
		let sat = new Date(todayDate.getTime() + 3 * 24 * 60 * 60 * 1000);
		scheduleObject = {
			...scheduleObject,
			python: mon.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
	if (todayDate.getDay() === 4) {
		let mon = new Date(todayDate.getTime() + 4 * 24 * 60 * 60 * 1000);
		let wed = new Date(todayDate.getTime() + 6 * 24 * 60 * 60 * 1000);
		let fri = new Date(todayDate.getTime() + 1 * 24 * 60 * 60 * 1000);
		let sat = new Date(todayDate.getTime() + 2 * 24 * 60 * 60 * 1000);
		scheduleObject = {
			...scheduleObject,
			python: mon.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
	if (todayDate.getDay() === 5) {
		let mon = new Date(todayDate.getTime() + 3 * 24 * 60 * 60 * 1000);
		const wed = new Date(todayDate.getTime() + 5 * 24 * 60 * 60 * 1000);
		const fri = new Date(todayDate.getTime() + 0 * 24 * 60 * 60 * 1000);
		const sat = new Date(todayDate.getTime() + 1 * 24 * 60 * 60 * 1000);
		scheduleObject = {
			...scheduleObject,
			python: mon.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
	if (todayDate.getDay() === 6) {
		let mon = new Date(todayDate.getTime() + 2 * 24 * 60 * 60 * 1000);
		let wed = new Date(todayDate.getTime() + 4 * 24 * 60 * 60 * 1000);
		let fri = new Date(todayDate.getTime() + 6 * 24 * 60 * 60 * 1000);
		let sat = new Date(todayDate.getTime() + 0 * 24 * 60 * 60 * 1000);
		scheduleObject = {
			...scheduleObject,
			python: mon.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
};
// export const scheduleFor30Days = () => {
// 	let date1 = new Date();
// 	let week1 = createSchedule(date1);
// 	let date2 = new Date(date1.getTime() + 7 * 24 * 60 * 60 * 1000);
// 	let week2 = createSchedule(date2);
// 	let date3 = new Date(date2.getTime() + 7 * 24 * 60 * 60 * 1000);
// 	let week3 = createSchedule(date3);
// 	let date4 = new Date(date3.getTime() + 7 * 24 * 60 * 60 * 1000);
// 	let week4 = createSchedule(date4);
// 	return [week1, week2, week3, week4];
// };
export const scheduleForNWeeks = totalWeeks => {
	let date = new Date();
	let finalSchedule = [];
	for (let i = 1; i <= totalWeeks; i++) {
		let week = createSchedule(date);
		finalSchedule = [...finalSchedule, week];
		date = new Date(date.getTime() + 7 * 24 * 60 * 60 * 1000);
	}
	console.log(finalSchedule);
	return finalSchedule;
};
