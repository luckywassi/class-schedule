export const createSchedule = todayDate => {
	let scheduleObject = {};
	if (todayDate.getDay() === 0) {
		let wed = new Date();
		wed.setDate(todayDate.getDate() + 3);
		let fri = new Date();
		fri.setDate(todayDate.getDate() + 5);
		let sat = new Date();
		sat.setDate(todayDate.getDate() + 6);
		scheduleObject = {
			...scheduleObject,
			python: todayDate.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
	if (todayDate.getDay() === 1) {
		let wed = new Date();
		wed.setDate(todayDate.getDate() + 2);
		let fri = new Date();
		fri.setDate(todayDate.getDate() + 4);
		let sat = new Date();
		sat.setDate(todayDate.getDate() + 5);
		scheduleObject = {
			...scheduleObject,
			python: todayDate.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
	if (todayDate.getDay() === 2) {
		let wed = new Date();
		wed.setDate(todayDate.getDate() + 1);
		let fri = new Date();
		fri.setDate(todayDate.getDate() + 3);
		let sat = new Date();
		sat.setDate(todayDate.getDate() + 4);
		scheduleObject = {
			...scheduleObject,
			python: todayDate.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
	if (todayDate.getDay() === 3) {
		let wed = new Date();
		wed.setDate(todayDate.getDate() + 0);
		let fri = new Date();
		fri.setDate(todayDate.getDate() + 2);
		let sat = new Date();
		sat.setDate(todayDate.getDate() + 3);
		scheduleObject = {
			...scheduleObject,
			python: todayDate.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
	if (todayDate.getDay() === 4) {
		let wed = new Date();
		wed.setDate(todayDate.getDate() + 6);
		let fri = new Date();
		fri.setDate(todayDate.getDate() + 1);
		let sat = new Date();
		sat.setDate(todayDate.getDate() + 2);
		scheduleObject = {
			...scheduleObject,
			python: todayDate.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
	if (todayDate.getDay() === 5) {
		const wed = new Date();
		wed.setDate(todayDate.getDate() + 5);
		const fri = new Date();
		fri.setDate(todayDate.getDate() + 0);
		const sat = new Date();
		sat.setDate(todayDate.getDate() + 1);
		scheduleObject = {
			...scheduleObject,
			python: todayDate.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
	if (todayDate.getDay() === 6) {
		let wed = new Date();
		wed.setDate(todayDate.getDate() + 4);
		let fri = new Date();
		fri.setDate(todayDate.getDate() + 6);
		let sat = new Date();
		sat.setDate(todayDate.getDate() + 0);
		scheduleObject = {
			...scheduleObject,
			python: todayDate.toDateString(),
			java: wed.toDateString(),
			html1: fri.toDateString(),
			html2: sat.toDateString(),
		};
		return scheduleObject;
	}
};
export const scheduleFor30Days = () => {
	let date1 = new Date();
	let week1 = createSchedule(date1);
	let date2 = new Date();
	date2.setDate(date1.getDate() + 7);
	let week2 = createSchedule(date2);
	let date3 = new Date();
	date3.setDate(date2.getDate() + 7);
	let week3 = createSchedule(date3);
	let date4 = new Date();
	date4.setDate(date3.getDate() + 7);
	let week4 = createSchedule(date4);
	return [week1, week2, week3, week4];
};
