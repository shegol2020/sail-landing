//theme change

const themeButtonsContainer = document.querySelector(".theme-switcher");
const lightThemeButton = document.querySelector(".theme-button-light");
const darkThemeButton = document.querySelector(".theme-button-dark");

themeButtonsContainer.addEventListener("click", (e) => {
    if(e.target.className === "theme-button-dark"){
        document.body.classList.add("dark");
        lightThemeButton.classList.remove("active");
        darkThemeButton.classList.add("active");
    } else {
        document.body.classList.remove("dark");
        lightThemeButton.classList.add("active");
        darkThemeButton.classList.remove("active");
    }
})

