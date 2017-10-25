export const changeDateFormat = (date) => {
	date = new Date(date);
	return date.toISOString().slice(0, 10);
};
