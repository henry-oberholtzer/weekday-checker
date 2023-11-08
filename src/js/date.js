export default class DayOfWeek {
    constructor(year, month, day) {
        this.dateString = new Date(year, month, day).toDateString();
    }
}