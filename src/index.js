import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// eslint-disable-next-line no-unused-vars
import DayOfWeek from './js/date.js';

document.addEventListener("load", () => {
    const year = parseInt(document.querySelector("#year"));
    const month = parseInt(document.querySelector("#month"));
    const day = parseInt(document.querySelector("#day"));
    const dateNow = new Date();
    day.setAttribute("value", dateNow.getDay());
    month.setAttribute("value", dateNow.getMonth());
    year.setAttribute("value", dateNow.getFullYear());
});

document.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("form");
    document.getElementById("form#month");
    document.getElementById("form#year");
    document.getElementById("form#day");
    const year = parseInt(document.querySelector("#year").value);
    const month = parseInt(document.querySelector("#month").value);
    const day = parseInt(document.querySelector("#day").value);
    const newDay = new DayOfWeek(year, month, day);
    const date = newDay.dayName;
    const millisecondsSince = newDay.millisecondsSince();
    const resultField = document.getElementById("result");
    const h2 = document.createElement("h2");
    h2.append(`It was a ${date}, and happened ${millisecondsSince} milliseconds ago....${(millisecondsSince / 1000).toFixed(0)} seconds ago... 
    ${(millisecondsSince / 60000).toFixed(0)} hours ago... ${(millisecondsSince / (60000 * 24)).toFixed(0)} days ago`);
    resultField.append(h2);

});
