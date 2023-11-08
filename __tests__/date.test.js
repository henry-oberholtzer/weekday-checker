import DayOfWeek from './../src/js/date.js';

describe('DayOfWeek', () => {

    test('should return a UTC date string of a specific year', () => {
        const year = new DayOfWeek(1990, 0, 0);
        expect(year.dateString).toEqual("Sun Dec 31 1989");
    });

    test('should return a UTC month string of a specific year', () => {

        const month = new DayOfWeek(1990, 11, 1);
        expect(month.dateString).toEqual("Sat Dec 01 1990");
    });

    test('should return a UTC day string of a specific year', () => {

        const day = new DayOfWeek(1990, 11, 31);
        expect(day.dateString).toEqual("Mon Dec 31 1990");
    });

    test('should return a day of week from inputted date', () => {
        const date = new DayOfWeek(1990, 11, 31);
        expect(date.dayName).toEqual("Monday");
    })

});
