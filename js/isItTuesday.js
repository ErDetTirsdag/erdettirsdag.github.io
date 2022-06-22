function isItTuesday() {
    if (window.location.search !== "" && window.location.search.includes("title")) {
        const urlParams = new URLSearchParams(window.location.search);
        changeTitle(urlParams.get("title"))
    } else
        changeAnswer(new Date().getDay() === 2)
}

function changeTitle(titleContent) {
    document.getElementById("title").innerText = titleContent
    document.getElementById("pageTitle").innerText = titleContent
    changeAnswer(Math.floor(Math.random() * 2))
}

function changeAnswer(isTrue) {
    const elem = document.getElementById("answer");
    if (isTrue) {
        elem.innerHTML = "Ja";
        elem.className = "yes";
    } else {
        elem.innerHTML = "Nei";
        elem.className = "no";
    }
}