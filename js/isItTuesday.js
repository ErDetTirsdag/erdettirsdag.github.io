const TUESDAY = 2

function isItTuesday() {
    if (window.location.search !== "" && window.location.search.includes("title")) {
        const urlParams = new URLSearchParams(window.location.search);
        changeTitle(urlParams.get("title"))
    } else
        changeAnswer(new Date().getDay() === TUESDAY)
}

function changeTitle(titleContent) {
    document.getElementById("title").innerText = titleContent
    document.getElementById("pageTitle").innerText = titleContent
    changeAnswer(Math.floor(Math.random() * 2))
}

function changeAnswer(isTrue) {
    const elem = document.getElementById("answer");
    const themeColor = document.getElementById("theme-color")
    if (isTrue) {
        elem.innerHTML = "Ja";
        elem.className = "yes";
        themeColor.content = "#8ae234"
    } else {
        elem.innerHTML = "Nei";
        elem.className = "no";
        themeColor.content = "#ef2929"
    }
}