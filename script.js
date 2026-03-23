const toggleBtn = document.getElementById("theme-toggle");

// load saved theme
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light-mode");
    toggleBtn.innerText = "☀️";
}else{
    toggleBtn.innerText = "🌙";
}

// toggle
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        toggleBtn.innerText = "☀️";
        localStorage.setItem("theme","light");
    }else{
        toggleBtn.innerText = "🌙";
        localStorage.setItem("theme","dark");
    }
});