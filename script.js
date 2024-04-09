const switchButtons = (makeActive, removeActive) => {
    removeActive.classList.remove("active");
    makeActive.classList.add("active");
}

//theme change

const themeButtonsContainer = document.querySelector(".theme-switcher");
const lightThemeButton = themeButtonsContainer.querySelector(".theme-button-light");
const darkThemeButton = themeButtonsContainer.querySelector(".theme-button-dark");

themeButtonsContainer.addEventListener("click", (e) => {
    if(e.target.className === "theme-button-dark"){
        document.body.classList.add("dark");
        switchButtons(darkThemeButton, lightThemeButton);
    } else {
        document.body.classList.remove("dark");
        switchButtons(lightThemeButton, darkThemeButton);
    }
})

//font change
const fontsSwitcherContainer = document.querySelector(".fonts");
const serifButton = fontsSwitcherContainer.querySelector(".font-button-serif");
const sansSerifButton = fontsSwitcherContainer.querySelector(".font-button-sans-serif");

fontsSwitcherContainer.addEventListener("click", (e) => {
    if(e.target.className === "font-button-serif"){
        document.body.classList.add("serif");
        switchButtons(serifButton, sansSerifButton)
    } else {
        document.body.classList.remove("serif");
        switchButtons(sansSerifButton, serifButton);
    }
})

//article wrap
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("more")){
        let currentArticle = e.target.parentElement.parentElement;
        currentArticle.classList.remove("short");
    }
})

//cards list and columns layout

const cardsList = document.querySelector(".cards");
const cardsSwitchButtonsContainer = document.querySelector(".card-view-buttons");
const buttonGridView = cardsSwitchButtonsContainer.querySelector(".card-view-button-grid");
const buttonListView = cardsSwitchButtonsContainer.querySelector(".card-view-button-list");

cardsSwitchButtonsContainer.addEventListener("click", (e) => {
    if(e.target.className === "card-view-button-list"){
        cardsList.classList.add("list");
        switchButtons(buttonListView, buttonGridView)
    } else {
        cardsList.classList.remove("list");
        switchButtons(buttonGridView, buttonListView);
    }
})

//gallery clicks

const mainPhoto = document.querySelector(".active-photo");
const previewList = document.querySelector(".preview-list");

previewList.addEventListener("click", (e) => {
    e.preventDefault();
    const activePreview = previewList.querySelector(".active-item");
    activePreview.classList.remove("active-item");
    e.target.classList.add("active-item");
    mainPhoto.src = e.target.href;
})

//up button
const upBtn = document.querySelector(".up-button");
window.addEventListener("scroll", () => {
    if(window.scrollY>1000){
        upBtn.removeAttribute("hidden");
    }
})

upBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
    upBtn.setAttribute("hidden", "");
})

