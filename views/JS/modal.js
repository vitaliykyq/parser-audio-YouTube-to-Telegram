const modalBody = document.getElementById("modalBody");
const generalBody = document.getElementById("generalBody");

const flagGB = document.getElementById("flag-GB");
const flagUK = document.getElementById("flag-UK")
const selectLanguage = document.getElementById("selectLanguage");
const buttonStart = document.getElementById("buttonStart");

let language = localStorage.getItem("language") || "GB";

// TEMP
//localStorage.removeItem("language");
// TEMP

if(!localStorage.getItem("language")) showModal();
else {
    editTempText();
    generalBody.style.display = "block";
}

function showModal(){
    modalBody.style.display = "block";

    if(!localStorage.getItem("language")) language = "GB";

    let flag = (language === "GB") ? flagGB : flagUK;

    setFlag(flag);

    editTextModal();
}

function changeLanguage(languageFunc){
    if(languageFunc === "GB"){
        setFlag(flagGB);
        flagUK.style.borderColor = "white";
        flagUK.setAttribute("onclick", "changeLanguage('UK')");

        language = "GB"
    }else{
        setFlag(flagUK);
        flagGB.style.borderColor = "white";
        flagGB.setAttribute("onclick", "changeLanguage('GB')");

        language = "UK";
    }

    editTextModal();
}


function setFlag(flag){
    flag.removeAttribute("onclick");
    flag.style.borderColor = "#8adde5";
}

function editTextModal(){
    const languageLS = language;
    selectLanguage.innerText = (languageLS === "GB") ? "Select Language" : "Виберіть мову";
    buttonStart.innerText = (languageLS === "GB") ? "Start" : "Розпочати";
}

buttonStart.addEventListener("click", function(){
    console.log(language);
    modalBody.style.display = "none";
    generalBody.style.display = "block";

    localStorage.setItem("language", language);
    editTempText();
});

function editTempText(){
    const lang = localStorage.getItem("language");
    document.getElementById("temp1").innerText = (lang === "GB") ? 'Language: "English"' : 'Мова: "Українська"'
    document.getElementById("temp2").innerText = (lang === "GB") ? 'Edit' : 'Змінити'
}

