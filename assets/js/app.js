let menuIcon = document.querySelector(".menu-icon");
let menuList = document.querySelector(".menu-list");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show")
    let activeNav = menuList.hasAttribute("class", "show");
    if (activeNav) { menuIcon.classList.toggle("active") };
})


$(document).ready(function () {
    $('.my_file').slick({
        dots: true,
        infinite: true,
        // speed: 250,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1,
                },
            },

        ],

    });
});