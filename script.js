

    document.getElementById("downloadButton").addEventListener("click", function() {
    this.setAttribute("download", "cv.pdf");
    this.setAttribute("href", "cv.pdf");
});


const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");

menuIcon.addEventListener("click", () => {
    container.classList.toggle("change");
});


document.getElementById("scroll1").addEventListener("click", function() {
    document.getElementById("scroll2").scrollIntoView({behavior: "smooth"});
});


