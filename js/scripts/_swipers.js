import Swiper from "swiper/swiper-bundle";

export let swiper = {
    init: function () {
        this.swiperNewsMob();
    },

    swiperNewsMob: function () {
        if (document.body.clientWidth < 768) {
            var swiperNews = new Swiper(".news-swiper", {
                pagination: {
                    el: ".swiper-pagination",
                },
            });
        }
    },
};