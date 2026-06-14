/*
Počasí

Služba OpenWeatherMap poskytuje data s údaji o počasí. Později v kurzu ji použijeme pro vytvoření vlastní aplikace s předpovědí počasí.

Data, která ze služby přijdou, vypadají viz. kód dole.

Všimněte si, že jde o sérii vnořených objektů, jak už to u komplexních reálných dat často bývá.

Vypište do konzole z objektu následující informace:

- pro jaké město je tato předpověď
- jaké je tam aktuálně počasí (typ a popis)
- jaká je tam aktuální teplota a jaká bude přes den maximální teplota
- kolik milimetrů srážek naprší během následující hodiny

*/

const data = {
  coord: {
    lon: 10.99,
    lat: 44.34
  },
  weather: {
    id: 501,
    type: 'Rain',
    description: 'moderate rain',
    icon: '10d',
    main: {
      temp: 26.48,
      feels_like: 25.74,
      temp_min: 16.56,
      temp_max: 28.05,
      pressure: 1015,
      humidity: 64,
      sea_level: 1015,
      grnd_level: 933
    },
    wind: {
      speed: 0.62,
      deg: 349,
      gust: 1.18
    },
    rain: {
      hour: 3.16,
      day: 13.72
    },
    clouds: {
      all: 100
    },
    visibility: 10000,
  },
  timezone: 7200,
  id: 3163858,
  city: 'Zocca',
  cod: 200
}
