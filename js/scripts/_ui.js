export let ui = {
    init: function () {
        this.headerMob();
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