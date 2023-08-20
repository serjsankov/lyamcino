export let ui = {
    init: function () {
        this.headerMob();
        this.headerMenuMobClick();
        this.changeSelectNote();
        this.yearClick();
        this.monthClick();

        $('select').niceSelect();
    },
    monthClick: function () {
        let monthBlock = document.querySelectorAll(".js-month-block"),
            nextMonth = document.querySelector(".js-next-month"),
            index = 0,
            lastIndex = monthBlock.length - 1;

        if (nextMonth) {
            monthBlock.forEach((year, yearIndex) => {
                year.addEventListener("click", (e) => {
                    monthBlock.forEach(el => {
                        el.classList.remove("active");
                    });
                    index = yearIndex;
                    year.classList.add("active");
                    if (index !== lastIndex) {
                        nextMonth.disabled = false;
                    };
                });

            });

            nextMonth.addEventListener("click", (e) => {
                checkIndexActive();
            });

            function checkIndexActive() {
                monthBlock.forEach((el, elIndex) => {
                    if (el.classList.contains("active") && elIndex !== lastIndex) {
                        index = elIndex + 1;
                        el.classList.remove("active");
                    }
                });
                if (index !== lastIndex) {
                    monthBlock.forEach((el, elIndex) => {
                        if (elIndex === index) {
                            el.classList.add("active");
                        }
                    })
                } else {
                    monthBlock.forEach((el, elIndex) => {
                        if (elIndex === index) {
                            el.classList.add("active");
                            nextMonth.disabled = true;
                        }
                    })
                }
            };
        }

    },

    yearClick: function () {
        let monthBlock = document.querySelectorAll(".js-year-block"),
            nextYear = document.querySelector(".js-next-year"),
            index = 0,
            lastIndex = monthBlock.length - 1;

        if (nextYear) {
            monthBlock.forEach((year, yearIndex) => {
                year.addEventListener("click", (e) => {
                    monthBlock.forEach(el => {
                        el.classList.remove("active");
                    });
                    index = yearIndex;
                    year.classList.add("active");
                    if (index !== lastIndex) {
                        nextYear.disabled = false;
                    };
                });
            });



            nextYear.addEventListener("click", (e) => {
                checkIndexActive();
            });

            function checkIndexActive() {
                monthBlock.forEach((el, elIndex) => {
                    if (el.classList.contains("active") && elIndex !== lastIndex) {
                        index = elIndex + 1;
                        el.classList.remove("active");
                    }
                });
                if (index !== lastIndex) {
                    monthBlock.forEach((el, elIndex) => {
                        if (elIndex === index) {
                            el.classList.add("active");
                        }
                    })
                } else {
                    monthBlock.forEach((el, elIndex) => {
                        if (elIndex === index) {
                            el.classList.add("active");
                            nextYear.disabled = true;
                        }
                    })
                }
            };
        }

    },

    changeSelectNote: function () {
        $(".js-select-note").on("change", function () {
            var value = $(this).val(),
                head = value.split('/')[0],
                text = value.split('/')[1],
                className = value.split('/')[2];

            $(".js_text_head").text(`${head}`);
            $(".js_text_info").text(`${text}`);
            $(".js-note ").attr("class", `form__block-note js-note ${className}`);
        })
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