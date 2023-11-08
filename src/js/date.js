export default class DayOfWeek {
    constructor(year, month, day) {
        this.GMTobject = new Date(year, month, day);
        this.dateString = this.GMTobject.toDateString();
        this.daysOfTheWeek = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday"
        };
        this.dayName = this.daysOfTheWeek[this.GMTobject.getDay()];
    }
}