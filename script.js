//theme change

const themeButtonsContainer = document.querySelector(".theme-switcher");
themeButtonsContainer.addEventListener("click", (e) => {
    const buttons = themeButtonsContainer.querySelectorAll("button");
    buttons.forEach(button => {
        button.classList.add("active");
    });
    if(e.target.classList.contains("active")){
        e.target.classList.remove("active");
    }
    e.target.className === "theme-button-dark"
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
})