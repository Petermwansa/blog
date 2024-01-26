// filter JS 
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").show("1000");
        } else {
            $(".post-box")
            .not("." + value)
            .hide("1000");
            $(".post-box")
            .filter("." + value)
            .show("1000");
        }
    });

    // add active to btn 
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    })
})


// header background change on scroll 
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})



// for the dark/light modes 

lightDarkThemes = () =>{
    let icon = document.getElementById("icon");

    icon.onclick = () => {
        document.body.classList.toggle("dark__theme")
        if (document.classList.contains("dark__theme")) {
            icon.src = "/img/dark theme icon/moon.png";
        } else {
            icon.src = "/img/dark theme icon/sun.png";
        }
    }
}

lightDarkThemes();
 
