function isItTuesday() {
    const elem = document.getElementById("answer");
    if (new Date().getDay() === 2) {
        elem.innerHTML = "Ja";
        elem.className = "yes";
    } else {
        elem.innerHTML = "Nei";
        elem.className = "no";
    }
}