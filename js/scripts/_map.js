export let map = {
    init() {
        // $(document).on('click', '.js_contacts-map-btn', function () {
        //   $('.js_map').html(`<script type="text/javascript" charset="utf-8" async src="${$(this).data('src')}"></script>`);
        // });
        if (document.querySelector('#ya-map-id')) {
            ymaps.ready(function () {
                var myMap = new ymaps.Map('ya-map-id', {
                    center: [55.382268, 37.882908],
                    zoom: 15,
                    controls: [] // Убираем все элементы управления
                }),

                    // Создаём макет содержимого.
                    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                    ),

                    myPlacemark = new ymaps.Placemark([55.577437, 37.698479], {
                        hintContent: 'Никольская церковь',
                        balloonContent: ''
                    }, {
                        // Опции.
                        // Необходимо указать данный тип макета.
                        iconLayout: 'default#image',
                        // Своё изображение иконки метки.
                        // iconImageHref: '/buddy/front/img/icons/resp-locator.svg',
                        // Размеры метки.
                        iconImageSize: [49, 68],
                        // Смещение левого верхнего угла иконки относительно
                        // её "ножки" (точки привязки).
                        iconImageOffset: [-24, -68]
                    });

                // Добавление маркера на карту.
                myMap.geoObjects.add(myPlacemark);


                function showMarker() {
                    myMap.geoObjects.removeAll();
                    myMap.geoObjects.add(myPlacemark);
                }

            });
        }
    },
};