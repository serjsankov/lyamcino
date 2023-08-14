export let ui = {
    init: function () {
        this.headerMob();
        this.headerMenuMobClick();
    },

    headerMenuMobClick: function () {
        if (document.body.clientWidth < 1025) {
            $(".js-link-header-mob").each(function (elIndex, el) {
                $(this).on("click", function (event) {
                    event.preventDefault();
                    $(this).toggleClass("active");
                    if ($(this).hasClass("active")) {
                        $(this).parent(".header__menu-list-item").find(".hover-block").show(500);
                    } else {
                        $(this).parent(".header__menu-list-item").find(".hover-block").hide(400);
                    }
                })
            });
        }
    },

    headerMob: function () {
        let burger = document.querySelector(".burger"),
            header = document.querySelector(".header"),
            body = document.querySelector("body");

        burger.addEventListener("click", () => {
            header.classList.toggle("active");

            if (header.classList.contains("active")) {
                body.classList.add("js-body-scroll");
            } else {
                body.classList.remove("js-body-scroll");
            }
        });
    },
};