const mapSection = document.querySelector(".find-stores");

if (mapSection) {
  function init() {
    const searchBtn = document.getElementById("mapSearchBtn");
    const searchInp = document.getElementById("mapSearch");

    const objArr = [
      {
        coords: [55.750819, 37.642411],
        text: `Москва, SitDownPls на Солянке м. Китай-город, ул. Солянка, д.24`,
        info: `<div class="map__balloon balloon"><div class="balloon__top"><h2 class="balloon__title">SitDownPls на Солянке </h2><address class="balloon__text balloon__address">м. Китай-город, ул. Солянка, д.24</address><a href="tel:+74958854547" class="phone-link ballon__link"><span class="phone-link__icon"><svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M16.3425 12.0983C15.215 12.0983 14.1242 11.915 13.1067 11.585C12.7858 11.475 12.4283 11.5575 12.1808 11.805L10.7417 13.6108C8.1475 12.3733 5.71833 10.0358 4.42583 7.35L6.21333 5.82833C6.46083 5.57167 6.53417 5.21417 6.43333 4.89333C6.09417 3.87583 5.92 2.785 5.92 1.6575C5.92 1.1625 5.5075 0.75 5.0125 0.75H1.84083C1.34583 0.75 0.75 0.97 0.75 1.6575C0.75 10.1733 7.83583 17.25 16.3425 17.25C16.9933 17.25 17.25 16.6725 17.25 16.1683V13.0058C17.25 12.5108 16.8375 12.0983 16.3425 12.0983Z" /></svg></span><span class="phone-link__text">+7&nbsp;<no-typography>(495)</no-typography>&nbsp;885-45-47</span></a></div><div class="balloon__middle"><p class="balloon__text"><span class="balloon__light-text">Часы работы:</span> с 10:00 до21:00</p></div><div class="balloon__bottom"><p class="balloon__text balloon__descr"><span class="balloon__light-text">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</p></div></div>`,
      },
      {
        coords: [55.762865, 37.654071],
        text: `Москва, SitDownPls на Покровке м. Курская, ул. Покровка, д.14`,
        info: `<div class="map__balloon balloon"><div class="balloon__top"><h2 class="balloon__title">SitDownPls на Покровке </h2><address class="balloon__text balloon__address">м. Курская, ул. Покровка, д.14</address><a href="tel:+74958854547" class="phone-link ballon__link"><span class="phone-link__icon"><svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M16.3425 12.0983C15.215 12.0983 14.1242 11.915 13.1067 11.585C12.7858 11.475 12.4283 11.5575 12.1808 11.805L10.7417 13.6108C8.1475 12.3733 5.71833 10.0358 4.42583 7.35L6.21333 5.82833C6.46083 5.57167 6.53417 5.21417 6.43333 4.89333C6.09417 3.87583 5.92 2.785 5.92 1.6575C5.92 1.1625 5.5075 0.75 5.0125 0.75H1.84083C1.34583 0.75 0.75 0.97 0.75 1.6575C0.75 10.1733 7.83583 17.25 16.3425 17.25C16.9933 17.25 17.25 16.6725 17.25 16.1683V13.0058C17.25 12.5108 16.8375 12.0983 16.3425 12.0983Z" /></svg></span><span class="phone-link__text">+7&nbsp;<no-typography>(495)</no-typography>&nbsp;885-45-47</span></a></div><div class="balloon__middle"><p class="balloon__text"><span class="balloon__light-text">Часы работы:</span> с 10:00 до21:00</p></div><div class="balloon__bottom"><p class="balloon__text balloon__descr"><span class="balloon__light-text">Что здесь:</span> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</p></div></div>`,
      },
    ];

    const arr = objArr.map((obj) => obj.text);

    const find = function (arr, find) {
      return arr.filter(function (value) {
        return (value + "").toLowerCase().indexOf(find.toLowerCase()) != -1;
      });
    };

    const provider = {
      suggest: function (request, options) {
        const res = find(arr, request),
          arrayResult = [],
          results = Math.min(options.results, res.length);
          console.log(res);
        for (let i = 0; i < results; i++) {
          arrayResult.push({ displayName: res[i], value: res[i] });
        }
        return ymaps.vow.resolve(arrayResult);
      },
    };

    const suggestView = new ymaps.SuggestView("mapSearch", {
      provider: provider,
      results: 3,
    });

    const myMap = new ymaps.Map("map", {
        center: [55.755758, 37.624903],
        zoom: 14,
      }),
      // Создаем коллекцию.
      myCollection = new ymaps.GeoObjectCollection(),
      // Создаем массив с данными.
      myPoints = objArr;

    // Заполняем коллекцию данными.
    for (let i = 0, l = myPoints.length; i < l; i++) {
      const point = myPoints[i];
      myCollection.add(
        new ymaps.Placemark(
          point.coords,
          {
            balloonContentBody: point.info,
          },
          {
            iconLayout: "default#image",
            iconImageHref: "../img/iconMap.svg",
            iconImageSize: [32, 21.96],
            iconImageOffset: [-10, -20],
            hideIconOnBalloonOpen: false,
            balloonOffset: [-10, -30],
            openTimeout: 1500,
          }
        )
      );
    }

    // Добавляем коллекцию меток на карту.
    myMap.geoObjects.add(myCollection);
    myCollection.get(0).balloon.open();

    searchBtn.addEventListener("click", function () {
      let serchVal = searchInp.value;
      if (!serchVal) {
        return;
      }
      let resultIndex = objArr.findIndex((obj) => obj.text === serchVal);
      if (resultIndex < 0) {
        const suggestItems = document.querySelectorAll(
          "[class*='suggest-item-']"
        );
        const firstSuggest = suggestItems[0];
        serchVal = firstSuggest.innerText;
        resultIndex = objArr.findIndex((obj) => obj.text === serchVal);
      }
      const result = objArr.find((obj) => obj.text === serchVal);
      const coords = result.coords;
      myMap.setCenter(coords);
      myCollection.get(resultIndex).balloon.open();
    });

    myMap.controls.remove("geolocationControl"); // удаляем геолокацию
    myMap.controls.remove("searchControl"); // удаляем поиск
    myMap.controls.remove("trafficControl"); // удаляем контроль трафика
    myMap.controls.remove("typeSelector"); // удаляем тип
    myMap.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove("zoomControl"); // удаляем контрол зуммирования
    myMap.controls.remove("rulerControl"); // удаляем контрол правил
    myMap.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)
  }

  ymaps.ready(init);
}
