# ГИДСАМ — Styles Pack v1

## Как скачать ZIP
1) Открой вкладку **Actions**
2) Выбери workflow **Build styles ZIP**
3) Открой последний запуск
4) Справа внизу **Artifacts** → скачай `gidsam-styles-v1`

## Что внутри
- `styles/v1/*.css` — базовые токены, шрифты, попапы, витрины/карточки
- `icons/v1/*.svg` — иконки (телефон, закладка, поделиться, verified)

## Подключение в Tilda (в HEAD)
Рекомендуем подключать по прямым ссылкам на Object Storage (быстро и единообразно).
Пример:

<link rel="preload" href="https://storage.yandexcloud.net/gidsam-data/styles/v1/fonts.css" as="style">
<link rel="stylesheet" href="https://storage.yandexcloud.net/gidsam-data/styles/v1/fonts.css">
<link rel="stylesheet" href="https://storage.yandexcloud.net/gidsam-data/styles/v1/core.css">
<link rel="stylesheet" href="https://storage.yandexcloud.net/gidsam-data/styles/v1/popups.css">
<link rel="stylesheet" href="https://storage.yandexcloud.net/gidsam-data/styles/v1/vitrines.css">

## Версионирование
- v1 = стабильная базовая тема
- дальше делаем v2 без ломания v1
