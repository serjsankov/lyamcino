import Swiper from "swiper/swiper-bundle";

export let swiper = {
    init: function () {
        this.swiperNewsMob();
        this.swiperTimetableMob();
        this.gallerySwiper();
        this.galleryDetailSwiper();
    },

    galleryDetailSwiper: function () {
        if (document.body.clientWidth < 769) {
            var swiperGallery = new Swiper(".gallery-detail-swiper", {
                spaceBetween: 30,
                pagination: {
                    el: ".swiper-pagination",
                },
            });
        }
    },

    gallerySwiper: function () {
        if (document.body.clientWidth < 769) {
            var swiperGallery = new Swiper(".gallery-swiper", {
                spaceBetween: 30,
                pagination: {
                    el: ".swiper-pagination",
                },
            });
        }
    },

    swiperTimetableMob: function () {
        if (document.body.clientWidth < 1025) {
            var swiperTimetabl = new Swiper(".timetable-swiper", {
                autoHeight: true,
                pagination: {
                    el: ".swiper-pagination",
                },
            });
        }
    },

    swiperNewsMob: function () {
        if (document.body.clientWidth < 769) {
            var swiperNews = new Swiper(".news-swiper", {
                pagination: {
                    el: ".swiper-pagination",
                },
            });
        }
    },
};